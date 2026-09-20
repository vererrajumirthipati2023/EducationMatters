import { TechnicalQuestion } from "./types";

export const msOfficeQuestions: TechnicalQuestion[] = [
  {
    id: "mso-1",
    question:
      "In Microsoft Excel, what function would you use to find the average of a range of cells?",
    options: [
      "AVERAGE()",
      "SUM()",
      "AVERAGE_ALL()",
      "AVERAGE_SUM()",
    ],
    correctAnswer: 0,
    explanation:
      "AVERAGE() is the Microsoft Excel function used to calculate the arithmetic mean of a range of cells.",
  },
  {
    id: "mso-2",
    question:
      "Which keyboard shortcut is used in Microsoft Word to insert a manual page break at the current cursor position?",
    options: [
      "Ctrl + Enter",
      "Shift + Enter",
      "Alt + Enter",
      "Ctrl + Shift + Enter",
    ],
    correctAnswer: 0,
    explanation:
      "Pressing Ctrl + Enter in Microsoft Word inserts a hard page break immediately at the cursor position, moving all following content to the start of the next page. In contrast, Shift + Enter inserts a soft line break.",
  },
  {
    id: "mso-3",
    question:
      "What is the use of the 'Master Slide' in PowerPoint?",
    options: [
      "To transition between slides",
      "To apply changes to every slide in the presentation.",
      "To add animations to individual objects on a slide",
      "To check spelling and grammar in the presentation",
    ],
    correctAnswer: 1,
    explanation:
      "The Slide Master controls the overall design and formatting of slides. Changes made to the Slide Master, such as fonts, colours, backgrounds, or placeholders, can be applied to multiple slides throughout the presentation. The other options are handled by different PowerPoint features.",
  },
  {
    id: "mso-4",
    question:
      "In Microsft Outlook, What features allows you to schedule meetings or appointments?",
    options: [
      "Tasks",
      "Contacts",
      "Calendar",
      "Notes",
    ],
    correctAnswer: 2,
    explanation:
      "The Calendar feature in Microsoft Outlook allows you to schedule meetings or appointments.",
  },
  {
    id: "mso-5",
    question:
      "Which universal keyboard shortcut in Microsoft Office applications directly opens the 'Find and Replace' dialogue box?",
    options: [
      "Ctrl + F",
      "Ctrl + H",
      "Ctrl + R",
      "Ctrl + G",
    ],
    correctAnswer: 1,
    explanation:
      "While Ctrl + F opens the Find/Navigation pane, Ctrl + H opens the Replace tab within the Find and Replace dialogue box directly across Word, Excel, and PowerPoint.",
  },
  {
    id: "mso-6",
    question:
      "Consider that two process P1 and P2, communicate through a shared memory segment. P1 writes data continuously, and P2 reads it. However, sometimes P2 reads incomplete data. What mechanism should the OS or programmer use to ensure data consistency? Select the correct option form the given choices.",
    options: [
      "Process Scheduling",
      "Semaphore or Mutex locks",
      "Demand Paging",
      "Virtual Memory",
    ],
    correctAnswer: 1,
    explanation:
      "Semaphore or Mutex locks can be used to synchronise access to shared memory. They ensure that when P1 is writing data, P2 does not read the shared memory until the writing operation is complete. This prevents race conditions and helps maintain data consistency."
  },
  {
    id: "mso-7",
    question:
      "Assume that you are a computer architect designing a new computer system. You have to decide how the data will be transfered between registers in the CPU.\n Which among the following options is correct way of performing register transfer as per the above scenario?",
      options: [
      "Register Transfer is the process of transferring data between registers in a computer system.",
      "Register Transfer is a technique used to transfer data between different computer systems.",
      "Register Transfer is a type of bus used in computer systems.",
      "Register Transfer is a type of instruction used in assembly language programming.",
    ],
    correctAnswer: 0,
    explanation:
    "Register transfer refers to the movement of binary data from one register to another within a computer system. It is an important operation in the CPU's register-transfer level (RTL) and describes how data moves between registers during the execution of operations.",
},
];
