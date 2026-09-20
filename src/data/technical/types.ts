export interface TechnicalQuestion {
  id: string;
  question: string;
  code?: string;
  image?: string;
  options: string[];
  correctAnswer: number; // 0-indexed: 0 for A, 1 for B, 2 for C, 3 for D
  explanation: string;
}

export interface TechnicalSection {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  questionCount: number;
  questions: TechnicalQuestion[];
}
