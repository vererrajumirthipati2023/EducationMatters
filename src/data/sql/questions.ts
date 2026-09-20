import { SqlPracticeQuestion } from "./types";
import { trainSchema, airlineSchema } from "./schemas";

export const sqlPracticeQuestions: SqlPracticeQuestion[] = [
  {
    id: "sql-q1",
    number: 1,
    title: "Question 1: Train Speed Filter",
    prompt:
      "Write an SQL query to display the train name and their type which have speed less than 50.",
    expectedColumns: ["TRAIN_NAME", "TRAIN_TYPE"],
    schema: trainSchema,
    answer: `select TRAIN_NAME, TRAIN_TYPE
from train_details_tbl
where train_speed < 50;`,
    explanation:
      "Explanation:\n• train_details_tbl contains train operational records including train_name, train_type, and train_speed.\n• The WHERE clause filters for trains with train_speed < 50.\n• The SELECT clause outputs the 2 required columns: TRAIN_NAME and TRAIN_TYPE.",
  },
  {
    id: "sql-q2",
    number: 2,
    title: "Question 2: Airbus Airplanes Filter",
    prompt:
      "Write an SQL query to display the airplane ID and model number for airplanes manufactured by Airbus.",
    expectedColumns: ["AIRPLANE_ID", "MODELNUMBER"],
    schema: airlineSchema,
    answer: `select AIRPLANE_ID, MODELNUMBER
from airplane
where MANUFACTURER = 'Airbus';`,
    explanation:
      "Explanation:\n• airplane contains the fleet records including AIRPLANE_ID, MODELNUMBER, and MANUFACTURER.\n• The WHERE clause filters for records where MANUFACTURER = 'Airbus'.\n• The SELECT clause returns the required columns: AIRPLANE_ID and MODELNUMBER.",
  },
];
