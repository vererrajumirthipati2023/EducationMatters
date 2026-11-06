import { MetadataRoute } from "next";
import { getDatabase } from "@/lib/db/mongodb";

// This forces Next.js to regenerate the sitemap on every request, 
// ensuring new blogs and notes appear immediately.
export const dynamic = 'force-dynamic'; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://theeducationmatters.in";
  
  // 1. Your existing static pages
  const staticRoutes = [
    { url: `${baseUrl}`, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly" as const, priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${baseUrl}/terms`, changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${baseUrl}/disclaimer`, changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${baseUrl}/accenture`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/accenture/behavioral`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/accenture/technical/ms-office`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/accenture/technical/pseudocode`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/accenture/technical/networking`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/accenture/technical/computer-science`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/accenture/coding/sql`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/accenture/coding/backend`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/practice`, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/practice/path-finder`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/practice/bubble-math`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/practice/memory-maze`, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: "daily" as const, priority: 0.9 }, // Added blog feed
    { url: `${baseUrl}/notes`, changeFrequency: "daily" as const, priority: 0.9 }, // Added notes feed
  ];

  try {
    const db = await getDatabase();

    // 2. Fetch dynamic Blogs (Only Public)
    const blogs = await db.collection("blogs")
      .find({ status: "public" })
      .project({ slug: 1, publishedAt: 1 })
      .toArray();

    const blogRoutes = blogs.map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.publishedAt ? new Date(blog.publishedAt) : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

    // 3. Fetch dynamic Study Notes (Only Public)
    const notes = await db.collection("notes")
      .find({ status: "public" })
      .project({ subjectSlug: 1, topicSlug: 1, parentTopicSlug: 1, publishedAt: 1 })
      .toArray();

    const noteRoutes = notes.map((note) => {
      // Handle subtopics vs main topics
      const path = note.parentTopicSlug 
        ? `${baseUrl}/notes/${note.subjectSlug}/${note.parentTopicSlug}/${note.topicSlug}`
        : `${baseUrl}/notes/${note.subjectSlug}/${note.topicSlug}`;
        
      return {
        url: path,
        lastModified: note.publishedAt ? new Date(note.publishedAt) : new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      };
    });

    // 4. Combine all arrays
    return [...staticRoutes, ...blogRoutes, ...noteRoutes];

  } catch (error) {
    console.error("Sitemap generation error:", error);
    // If database fails, at least return the static pages
    return staticRoutes; 
  }
}