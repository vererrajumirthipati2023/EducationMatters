import { getDatabase } from "@/lib/db/mongodb";
import { redirect, notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function SubjectIndexPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;
  const db = await getDatabase();
  
  // 1. Verify subject exists and is public
  const subjectDoc = await db.collection("subjects").findOne({ slug: subject, status: 'public' });
  if (!subjectDoc) notFound();

  // 2. Try to find a NATIVE topic first
  let redirectTarget = await db.collection("notes").findOne({
    subjectSlug: subject,
    status: 'public'
  }, { sort: { position: 1, parentTopicSlug: 1 } });

  // 3. If no native topics exist, fall back to a SHARED topic
  if (!redirectTarget) {
    redirectTarget = await db.collection("notes").findOne({
      showInSubjects: subject,
      status: 'public'
    }, { sort: { position: 1, parentTopicSlug: 1 } });
  }
  
  if (!redirectTarget) notFound();
  
  // 4. CRITICAL FIX: Keep the URL in the CURRENT subject (e.g. advanced-data)
  redirect(`/notes/${subject}/${redirectTarget.topicSlug}`);
}