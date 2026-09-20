export interface BehavioralQuestion {
  id: number;
  question: string;
}

export interface BehavioralOption {
  value: number;
  label: string;
}

export const behavioralQuestions: BehavioralQuestion[] = [
  {
    id: 1,
    question: "I like it when others follow my direction.",
  },
  {
    id: 2,
    question: "I am an optimistic person",
  },
  {
    id: 3,
    question: "I am better at conceptual tasks than practical ones",
  },
  {
    id: 4,
    question: "I am comfortable making decisions.",
  },
  {
    id: 5,
    question: "I create enthusiasm among those i work with",
  },
  {
    id: 6,
    question: "I like doing tasks that i have not done before",
  },
  {
    id: 7,
    question: "I like to be successful in everything i do",
  },
  {
    id: 8,
    question: "I identify even small mistakes",
  },
  {
    id: 9,
    question: "I like to influence other people's actions",
  },
  {
    id: 10,
    question: "I am a confident leader",
  },
];

export const behavioralOptions: BehavioralOption[] = [
  {
    value: 1,
    label: "Strongly Disagree",
  },
  {
    value: 2,
    label: "Disagree",
  },
  {
    value: 3,
    label: "Slightly Disagree",
  },
  {
    value: 4,
    label: "Neither Agree nor Disagree",
  },
  {
    value: 5,
    label: "Slightly Agree",
  },
  {
    value: 6,
    label: "Agree",
  },
  {
    value: 7,
    label: "Strongly Agree",
  },
];
