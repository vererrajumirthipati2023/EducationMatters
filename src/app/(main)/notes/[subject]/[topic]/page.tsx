import { getDatabase } from "@/lib/db/mongodb";
import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";
import { GenericQuiz } from "@/components/notes/GenericQuiz";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: { params: Promise<{ subject: string, topic: string }> }): Promise<Metadata> {
  const { subject, topic } = await params;
  const db = await getDatabase();
  
  const note = await db.collection("notes").findOne({ subjectSlug: subject, topicSlug: topic, status: 'public' });
  if (!note) return { title: "Note Not Found" };
  
  const subjectName = note.subjectName || note.subjectSlug;
  
  return {
    title: note.metaTitle || `${note.topicName} - ${subjectName} | Education Matters`,
    description: note.metaDescription || `Complete study notes, examples, and practice questions for ${note.topicName} in ${subjectName}.`,
    alternates: { canonical: `/notes/${subject}/${topic}` },
    openGraph: { url: `/notes/${subject}/${topic}` }
  };
}

export default async function NotePage({ params }: { params: Promise<{ subject: string; topic: string }> }) {
  const { subject, topic } = await params;
  const db = await getDatabase();
  
  // Native lookup only
  const note = await db.collection("notes").findOne({ subjectSlug: subject, topicSlug: topic, status: 'public' });
  if (!note) notFound();

  const allNotes = await db.collection("notes").find({ subjectSlug: subject, status: 'public' }).sort({ position: 1 }).toArray();

  // Redirect folder to first child
  const childrenOfCurrentTopic = allNotes.filter(n => n.parentTopicSlug === topic);
  if (childrenOfCurrentTopic.length > 0) {
    const firstChild = childrenOfCurrentTopic[0];
    redirect(`/notes/${subject}/${firstChild.topicSlug}`);
  }

  const leafNotes = allNotes.filter(n => {
    const hasChildren = allNotes.some(child => child.parentTopicSlug === n.topicSlug);
    return !hasChildren;
  });

  const currentIndex = leafNotes.findIndex(n => n.topicSlug === topic);
  const prevNote = currentIndex > 0 ? leafNotes[currentIndex - 1] : null;
  const nextNote = currentIndex !== -1 && currentIndex < leafNotes.length - 1 ? leafNotes[currentIndex + 1] : null;
  
  const contentParts = note.content.split(/\[QUIZ\]/g);

  return (
    <article className="animate-in fade-in duration-300">
      <div className="mb-8 flex items-center justify-between">
        {prevNote ? (
          <Link href={`/notes/${subject}/${prevNote.topicSlug}`} className="inline-flex items-center gap-1 border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm">
            <ChevronLeft className="h-4 w-4" /> Previous
          </Link>
        ) : <div className="w-24"></div>} 

        {nextNote ? (
          <Link href={`/notes/${subject}/${nextNote.topicSlug}`} className="inline-flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors shadow-sm">
            Next <ChevronRight className="h-4 w-4" />
          </Link>
        ) : <div className="w-24"></div>}
      </div>
      
      <div className="note-content max-w-none">
        {contentParts.map((part, index) => (
          <div key={index}>
            <div dangerouslySetInnerHTML={{ __html: part }} />
            {index < contentParts.length - 1 && note.quiz && <GenericQuiz questions={note.quiz} />}
          </div>
        ))}
        {contentParts.length === 1 && note.quiz && note.quiz.length > 0 && <GenericQuiz questions={note.quiz} />}
      </div>

      <div className="mt-12 pt-6 border-t border-slate-200 flex sm:hidden items-center justify-between">
        {prevNote ? (
          <Link href={`/notes/${subject}/${prevNote.topicSlug}`} className="inline-flex items-center gap-1 border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors">
            <ChevronLeft className="h-4 w-4" /> Prev
          </Link>
        ) : <div></div>}

        {nextNote ? (
          <Link href={`/notes/${subject}/${nextNote.topicSlug}`} className="inline-flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors">
            Next <ChevronRight className="h-4 w-4" />
          </Link>
        ) : <div></div>}
      </div>
    </article>
  );
}