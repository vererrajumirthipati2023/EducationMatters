import { getDatabase } from "@/lib/db/mongodb";
import { MobileNoteSidebar } from "@/components/notes/MobileNoteSidebar";
import { DesktopNoteSidebar } from "@/components/notes/DesktopNoteSidebar";
import { notFound } from "next/navigation";

export default async function SubjectLayout({ 
  children,
  params
}: { 
  children: React.ReactNode;
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;
  const db = await getDatabase();
  
  const subjectDoc = await db.collection("subjects").findOne({ slug: subject, status: 'public' });
  if (!subjectDoc) notFound();

  const dbNotes = await db.collection("notes")
    .find({ subjectSlug: subject, status: 'public' })
    .sort({ position: 1 })
    .toArray();

  const simpleNotes = dbNotes.map(note => ({
    subjectSlug: note.subjectSlug,
    topicSlug: note.topicSlug,
    topicName: note.topicName,
    parentTopicSlug: note.parentTopicSlug || null,
  }));

  const subjectName = subjectDoc.name;

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] w-full bg-white">
      <MobileNoteSidebar notes={simpleNotes} subjectName={subjectName} />
      
      {/* ✅ REMOVED items-start so the aside stretches to the full height of the content */}
      <div className="flex flex-1 w-full max-w-[1600px] mx-auto">
        
        {/* LEFT SIDEBAR */}
        <aside className="w-[260px] bg-white border-r border-slate-200 hidden md:block shrink-0">
          {/* ✅ STICKY IS ON THE INNER DIV */}
          <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
            <DesktopNoteSidebar notes={simpleNotes} subjectName={subjectName} />
          </div>
        </aside>

        {/* MIDDLE CONTENT */}
        <div className="flex-1 bg-white min-w-0 w-full">
          <main className="w-full max-w-[900px] px-4 sm:px-6 md:px-10 py-6 md:py-10 mx-auto">
            {children}
          </main>
        </div>

        {/* RIGHT SIDEBAR (AdSense Space) */}
        <aside className="hidden xl:block w-[300px] bg-white border-l border-slate-200 shrink-0">
          {/* ✅ STICKY IS ON THE INNER DIV */}
          <div className="sticky top-16 h-[calc(100vh-4rem)] p-6">
            <div className="w-full h-[600px]">
              {/* AdSense code will go here in the future */}
            </div>
          </div>
        </aside>
        
      </div>
    </div>
  );
}