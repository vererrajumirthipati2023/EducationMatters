import { ObjectId } from "mongodb";

export interface QuizQuestion {
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export interface StudyNote {
  _id?: ObjectId;
  subjectSlug: string;
  topicSlug: string;
  topicName: string;
  parentTopicSlug?: string | null;
  metaTitle?: string;
  metaDescription?: string;
  content: string;
  quiz?: QuizQuestion[];
  position: number;
  status: "public" | "private";
  publishedAt: Date;
}