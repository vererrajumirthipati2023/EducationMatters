"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, ChevronDown } from "lucide-react";

type SimpleNote = {
  subjectSlug: string;
  topicSlug: string;
  topicName: string;
  parentTopicSlug?: string | null;
};

export function DesktopNoteSidebar({ 
  notes, 
  subjectName
}: { 
  notes: SimpleNote[]; 
  subjectName: string;
}) {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const activeSlug = segments.length > 2 ? segments[2] : ""; 

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
    <div className="bg-white min-h-full py-6 px-3">
      <h2 className="text-xs font-bold text-slate-400 px-3 mb-4 uppercase tracking-wider">
        {subjectName} Tutorial
      </h2>
      
      <ul className="flex flex-col text-[14px] space-y-1">
        {groupedNotes.map((group) => {
          const hasChildren = group.children.length > 0;
          const isExpanded = expanded[group.topicSlug];
          const isChildActive = group.children.some((c: any) => c.topicSlug === activeSlug);

          if (!hasChildren) {
            const isGroupActive = activeSlug === group.topicSlug;
            return (
              <li key={group.topicSlug}>
                <Link 
                  href={`/notes/${group.subjectSlug}/${group.topicSlug}`}
                  className={`block py-2.5 px-3 rounded-lg transition-all ${
                    isGroupActive 
                      ? "bg-[#0f2b5c] text-white font-bold shadow-sm" 
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {group.topicName}
                </Link>
              </li>
            );
          }

          // Folder with Subtopics
          return (
            <li key={group.topicSlug} className="mb-1">
              <div 
                className={`flex items-center justify-between w-full rounded-lg transition-all ${
                  isChildActive
                    ? "bg-slate-100 text-[#0f2b5c] font-bold" 
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 font-medium"
                }`}
              >
                {/* Clicking the Text navigates to the first subtopic */}
                <Link 
                  href={`/notes/${group.subjectSlug}/${group.children[0].topicSlug}`}
                  className="flex-1 py-2.5 pl-3 pr-2 truncate"
                >
                  {group.topicName}
                </Link>

                {/* Clicking the Arrow toggles the dropdown */}
                <button 
                  onClick={() => toggleExpand(group.topicSlug)}
                  className="p-2.5 mr-1 hover:text-slate-900 focus:outline-none"
                  aria-label="Toggle subtopics"
                >
                  {isExpanded ? <ChevronDown className="h-4 w-4 shrink-0 text-slate-400" /> : <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" />}
                </button>
              </div>

              {isExpanded && (
                <ul className="flex flex-col mt-1 space-y-1">
                  {group.children.map((child: any) => {
                    const isChildCurrent = activeSlug === child.topicSlug;
                    return (
                      <li key={child.topicSlug}>
                        <Link 
                          href={`/notes/${child.subjectSlug}/${child.topicSlug}`}
                          className={`block py-2 pl-8 pr-3 text-[13px] rounded-lg transition-all ${
                            isChildCurrent
                              ? "bg-[#0f2b5c] text-white font-bold shadow-sm" 
                              : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
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
  );
}