"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MoreVertical, X, BookOpen, ChevronDown, ChevronRight } from "lucide-react";

type SimpleNote = {
  subjectSlug: string;
  topicSlug: string;
  topicName: string;
  parentTopicSlug?: string | null;
};

export function MobileNoteSidebar({ 
  notes, 
  subjectName
}: { 
  notes: SimpleNote[]; 
  subjectName: string;
}) {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const activeSlug = segments.length > 2 ? segments[2] : "";

  const [isOpen, setIsOpen] = useState(false);
  
  const groupedNotes: any[] = [];
  const mainTopics = notes.filter(n => !n.parentTopicSlug);
  
  mainTopics.forEach(main => {
    const children = notes.filter(n => n.parentTopicSlug === main.topicSlug);
    groupedNotes.push({ ...main, children });
  });

  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {};
    groupedNotes.forEach(group => {
      if (group.children.some((c: any) => c.topicSlug === activeSlug)) {
        initialState[group.topicSlug] = true;
      }
    });
    return initialState;
  });

  useEffect(() => {
    groupedNotes.forEach(group => {
      if (group.children.some((c: any) => c.topicSlug === activeSlug)) {
        setExpanded((prev) => ({ ...prev, [group.topicSlug]: true }));
      }
    });
  }, [activeSlug]);

  const toggleExpand = (slug: string) => {
    setExpanded((prev) => ({ ...prev, [slug]: !prev[slug] }));
  };

  return (
    <>
      <div className="md:hidden sticky top-16 z-40 bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <span className="font-bold text-[#0f2b5c] flex items-center gap-2 capitalize">
          <BookOpen className="h-4 w-4 text-[#d97706]" /> {subjectName}
        </span>
        <button onClick={() => setIsOpen(true)} className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" onClick={() => setIsOpen(false)} />
          <div className="relative flex flex-col w-[85%] max-w-[320px] h-full bg-white shadow-xl animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between p-4 border-b border-slate-200 bg-slate-50">
              <span className="font-bold text-slate-800 uppercase tracking-wider text-sm">Topics</span>
              <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-md hover:bg-slate-200 text-slate-500">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-2 px-3">
              <ul className="space-y-1">
                {groupedNotes.map((group) => {
                  const hasChildren = group.children.length > 0;
                  const isExpanded = expanded[group.topicSlug] ?? false;
                  const isChildActive = group.children.some((c: any) => c.topicSlug === activeSlug);

                  if (!hasChildren) {
                    const isGroupActive = activeSlug === group.topicSlug;
                    return (
                      <li key={group.topicSlug}>
                        <Link 
                          href={`/notes/${group.subjectSlug}/${group.topicSlug}`}
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2.5 text-[15px] rounded-lg capitalize ${
                            isGroupActive ? "bg-[#0f2b5c] text-white font-bold shadow-sm" : "text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {group.topicName}
                        </Link>
                      </li>
                    );
                  }

                  return (
                    <li key={group.topicSlug} className="mb-1">
                      <div className={`flex items-center justify-between w-full rounded-lg ${
                        isChildActive ? "bg-slate-100 text-[#0f2b5c] font-bold" : "text-slate-700 hover:bg-slate-100"
                      }`}>
                        {/* Link to first child */}
                        <Link 
                          href={`/notes/${group.subjectSlug}/${group.children[0].topicSlug}`}
                          onClick={() => setIsOpen(false)}
                          className="flex-1 py-2.5 pl-3 truncate text-[15px] capitalize"
                        >
                          {group.topicName}
                        </Link>
                        
                        {/* Toggle Dropdown */}
                        <button 
                          onClick={() => toggleExpand(group.topicSlug)}
                          className="p-2.5 mr-1 focus:outline-none"
                        >
                          {isExpanded ? <ChevronDown className="h-4 w-4 shrink-0 text-slate-400" /> : <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />}
                        </button>
                      </div>
                      
                      {isExpanded && (
                        <ul className="mt-1 ml-2 space-y-1">
                          {group.children.map((child: any) => {
                            const isChildCurrent = activeSlug === child.topicSlug;
                            return (
                              <li key={child.topicSlug}>
                                <Link 
                                  href={`/notes/${child.subjectSlug}/${child.topicSlug}`}
                                  onClick={() => setIsOpen(false)}
                                  className={`block px-3 py-2 text-[13px] rounded-lg capitalize ${
                                    isChildCurrent ? "bg-[#0f2b5c] text-white font-bold shadow-sm" : "text-slate-600 hover:bg-slate-100"
                                  }`}
                                >
                                  {child.topicName}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            
            <div className="p-4 border-t border-slate-200 bg-slate-50">
              <Link href="/notes" onClick={() => setIsOpen(false)} className="block w-full text-center text-sm font-bold text-slate-600 hover:text-[#0f2b5c]">
                View All Subjects
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}