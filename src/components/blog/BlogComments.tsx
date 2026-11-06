"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/lib/auth/auth-context";
import { 
  Loader2, Send, User, MessageSquare, Heart, 
  CornerDownRight, X, Edit2, Trash2, Check, 
  ShieldAlert, ChevronDown, ChevronUp 
} from "lucide-react";
import Link from "next/link";

type Comment = {
  _id: string;
  userName: string;
  userEmail: string;
  content: string;
  createdAt: string;
  parentId: string | null;
  likes: string[];
};

function InlineEditBox({ initialContent, onSave, onCancel }: { initialContent: string; onSave: (content: string) => Promise<void>; onCancel: () => void; }) {
  const [content, setContent] = useState(initialContent);
  const [updating, setUpdating] = useState(false);

  const handleSave = async () => {
    if (!content.trim()) return;
    setUpdating(true);
    await onSave(content);
    setUpdating(false);
  };

  return (
    <div className="mt-2">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border border-slate-300 p-2 rounded-lg text-sm bg-white focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
        rows={2}
        autoFocus
      />
      <div className="flex justify-end gap-3 mt-2">
        <button onClick={onCancel} className="text-xs font-bold text-slate-500 hover:text-slate-700">Cancel</button>
        <button onClick={handleSave} disabled={updating} className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
          {updating ? <Loader2 className="h-3 w-3 animate-spin"/> : <Check className="h-3 w-3"/>} Save
        </button>
      </div>
    </div>
  );
}

export function BlogComments({ blogSlug }: { blogSlug: string }) {
  const { user, isAuthenticated } = useAuth();
  const pathname = usePathname();
  
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<Comment | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [expandedComments, setExpandedComments] = useState<string[]>([]);

  const isAdmin = user?.isAdmin === true;
  const currentUserName = isAdmin ? "Education Matters" : user?.email?.split("@")[0];

  useEffect(() => {
    fetch(`/api/blogs/${blogSlug}/comments`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setComments(data);
      })
      .finally(() => setLoading(false));
  }, [blogSlug]);

  const toggleExpand = (commentId: string) => {
    setExpandedComments(prev => 
      prev.includes(commentId) ? prev.filter(id => id !== commentId) : [...prev, commentId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !isAuthenticated) return;
    setSubmitting(true);

    // FLATTEN THREADS: If replying to a reply, attach to the root comment and add @mention
    const targetParentId = replyingTo 
      ? (replyingTo.parentId ? replyingTo.parentId : replyingTo._id)
      : null;
      
    const finalContent = replyingTo && replyingTo.parentId 
      ? `@${replyingTo.userName} ${newComment}` 
      : newComment;

    try {
      const res = await fetch(`/api/blogs/${blogSlug}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: finalContent,
          userEmail: user?.email,
          parentId: targetParentId,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setComments([...comments, data.comment]);
        setNewComment("");
        setReplyingTo(null);
      }
    } catch (error) {
      console.error("Failed to post comment");
    } finally {
      setSubmitting(false);
    }
  };

  const handleLike = async (commentId: string) => {
    if (!isAuthenticated) return alert("Please sign in to like comments.");
    setComments((prev) =>
      prev.map((c) => {
        if (c._id === commentId) {
          const hasLiked = c.likes.includes(user!.email);
          return {
            ...c,
            likes: hasLiked ? c.likes.filter((e) => e !== user!.email) : [...c.likes, user!.email],
          };
        }
        return c;
      })
    );
    await fetch(`/api/blogs/${blogSlug}/comments/${commentId}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userEmail: user?.email }),
    });
  };

  const handleDelete = async (commentId: string) => {
    if (!confirm("Are you sure you want to delete this comment?")) return;
    setComments((prev) => prev.filter((c) => c._id !== commentId && c.parentId !== commentId));
    await fetch(`/api/blogs/${blogSlug}/comments/${commentId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userEmail: user?.email }),
    });
  };

  const handleEditSave = async (commentId: string, newContent: string) => {
    const res = await fetch(`/api/blogs/${blogSlug}/comments/${commentId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: newContent, userEmail: user?.email }),
    });
    if (res.ok) {
      setComments((prev) =>
        prev.map((c) => (c._id === commentId ? { ...c, content: newContent } : c))
      );
      setEditingId(null);
    } else {
      alert("Failed to update comment");
    }
  };

  const rootComments = comments.filter((c) => !c.parentId);
  
  // RECURSIVE FETCH: Catches all levels of replies and flattens them into one array
  const getReplies = (rootId: string): Comment[] => {
    const directReplies = comments.filter((c) => String(c.parentId) === String(rootId));
    let allReplies = [...directReplies];
    
    directReplies.forEach((reply) => {
      const nested = getReplies(reply._id);
      allReplies = [...allReplies, ...nested];
    });
    
    return allReplies;
  };

  const CommentItem = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => {
    const hasLiked = user ? comment.likes.includes(user.email) : false;
    const isOwner = user?.email === comment.userEmail;
    const isCommentAdmin = comment.userName === "Education Matters";
    const isEditing = editingId === comment._id;

    return (
      <div className={`flex gap-3 ${isReply ? "ml-10 mt-4" : "mt-6"}`}>
        <div className={`h-9 w-9 shrink-0 rounded-full flex items-center justify-center font-bold uppercase text-sm overflow-hidden border ${isCommentAdmin ? "border-amber-300 bg-white" : "border-transparent bg-indigo-100 text-indigo-700"}`}>
          {isCommentAdmin ? (
            <Image src="/education-matters-logo.jpg" alt="Admin" width={36} height={36} className="object-cover w-full h-full" />
          ) : (
            comment.userName.charAt(0)
          )}
        </div>
        
        <div className="flex-1">
          <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none border border-slate-100">
            <div className="flex items-baseline justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-800 text-sm">{comment.userName}</span>
                {isCommentAdmin && (
                  <span className="bg-[#0f2b5c] text-white text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider flex items-center gap-1">
                    <ShieldAlert className="h-3 w-3" /> Admin
                  </span>
                )}
              </div>
              <span className="text-xs text-slate-400">
                {new Date(comment.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>
            </div>
            
            {isEditing ? (
              <InlineEditBox 
                initialContent={comment.content}
                onSave={(newContent) => handleEditSave(comment._id, newContent)}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <p className="text-slate-700 text-sm whitespace-pre-wrap">{comment.content}</p>
            )}
          </div>
          
          {!isEditing && (
            <div className="flex items-center gap-4 mt-2 ml-1 text-xs font-bold text-slate-500">
              <button 
                onClick={() => handleLike(comment._id)}
                className={`flex items-center gap-1 hover:text-red-500 transition-colors ${hasLiked ? "text-red-500" : ""}`}
              >
                <Heart className={`h-3.5 w-3.5 ${hasLiked ? "fill-red-500" : ""}`} /> 
                {comment.likes.length > 0 ? comment.likes.length : "Like"}
              </button>
              
              <button 
                onClick={() => { setReplyingTo(comment); document.getElementById("comment-input")?.focus(); }}
                className="flex items-center gap-1 hover:text-indigo-600 transition-colors"
              >
                <CornerDownRight className="h-3.5 w-3.5" /> Reply
              </button>

              {isOwner && (
                <button 
                  onClick={() => setEditingId(comment._id)}
                  className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  <Edit2 className="h-3.5 w-3.5" /> Edit
                </button>
              )}

              {(isOwner || isAdmin) && (
                <button 
                  onClick={() => handleDelete(comment._id)}
                  className={`flex items-center gap-1 hover:text-red-600 transition-colors ${isAdmin && !isOwner ? "text-red-500 bg-red-50 px-2 py-0.5 rounded" : ""}`}
                >
                  <Trash2 className="h-3.5 w-3.5" /> Delete
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="mt-16 pt-10 border-t border-slate-200">
      <h3 className="text-2xl font-bold text-[#0f2b5c] mb-6 flex items-center gap-2">
        <MessageSquare className="h-6 w-6" /> Discussion ({comments.length})
      </h3>

      {isAuthenticated ? (
        <form onSubmit={handleSubmit} className="mb-10 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-3 text-sm font-bold text-slate-700">
            <div className="flex items-center gap-2">
              <div className={`h-6 w-6 rounded-full flex items-center justify-center overflow-hidden border ${isAdmin ? "border-amber-300 bg-white" : "border-transparent bg-indigo-100 text-indigo-700"}`}>
                {isAdmin ? (
                  <Image src="/education-matters-logo.jpg" alt="Admin" width={24} height={24} className="object-cover w-full h-full" />
                ) : (
                  <User className="h-3.5 w-3.5" />
                )}
              </div>
              Commenting as {currentUserName}
            </div>
            {replyingTo && (
              <button type="button" onClick={() => setReplyingTo(null)} className="flex items-center gap-1 text-xs text-red-500 hover:text-red-700">
                Cancel Reply <X className="h-3 w-3" />
              </button>
            )}
          </div>

          {replyingTo && (
            <div className="text-xs text-slate-500 mb-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
              Replying to <strong className="text-slate-700">@{replyingTo.userName}</strong>
            </div>
          )}

          <textarea
            id="comment-input"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder={replyingTo ? `Reply to ${replyingTo.userName}...` : "Share your thoughts or ask a question..."}
            className="w-full border border-slate-300 p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none resize-none bg-slate-50 text-sm"
            rows={3}
            maxLength={1000}
            required
          />
          <div className="flex justify-end mt-3">
            <button
              type="submit"
              disabled={submitting || !newComment.trim()}
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-xl font-bold hover:bg-indigo-700 disabled:opacity-50 transition-colors text-sm"
            >
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              {replyingTo ? "Post Reply" : "Post Comment"}
            </button>
          </div>
        </form>
      ) : (
        <div className="mb-10 bg-blue-50 p-6 rounded-2xl border border-blue-200 text-center">
          <p className="text-blue-900 font-medium mb-4">You must be logged in to join the discussion.</p>
          <Link href={`/signin?next=${encodeURIComponent(pathname)}`} className="inline-block bg-[#0f2b5c] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#163b78] transition-colors text-sm">
            Sign In to Comment
          </Link>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-8">
          <Loader2 className="h-6 w-6 animate-spin text-slate-400" />
        </div>
      ) : rootComments.length === 0 ? (
        <p className="text-slate-500 text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-300 text-sm">
          No comments yet. Be the first to share your thoughts!
        </p>
      ) : (
        <div className="space-y-4">
          {rootComments.map((comment) => {
            const replies = getReplies(comment._id);
            const isExpanded = expandedComments.includes(comment._id);
            
            const visibleReplies = isExpanded ? replies : replies.slice(0, 2);

            return (
              <div key={comment._id} className="mb-6">
                <CommentItem comment={comment} />
                
                {visibleReplies.map((reply) => (
                  <CommentItem key={reply._id} comment={reply} isReply={true} />
                ))}

                {replies.length > 2 && (
                  <button
                    onClick={() => toggleExpand(comment._id)}
                    className="ml-12 mt-3 text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors"
                  >
                    {isExpanded ? (
                      <> <ChevronUp className="h-4 w-4" /> Show less </>
                    ) : (
                      <> <ChevronDown className="h-4 w-4" /> View {replies.length - 2} more {replies.length - 2 === 1 ? "reply" : "replies"} </>
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}