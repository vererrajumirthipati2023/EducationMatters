import { ObjectId } from "mongodb";

export interface BlogPost {
  _id?: ObjectId;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  metaTitle?: string;
  metaDescription?: string;
  publishedAt: Date;
  status: "public" | "private"; // <-- NEW
}