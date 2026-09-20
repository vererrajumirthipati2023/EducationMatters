export interface BackendExample {
  input1: number;
  input2: number[] | string;
  output: number[] | string;
  explanation: string;
}

export interface BackendQuestion {
  id: string;
  number: number;
  title: string;
  problemStatement: string;
  note?: string;
  inputSpecification: {
    input1: string;
    input2: string;
  };
  outputSpecification: string;
  examples: BackendExample[];
  starterCode?: {
    csharp?: string;
    java?: string;
    python?: string;
    cpp?: string;
  };
}

export const backendQuestions: BackendQuestion[] = [
  {
    id: "backend-q1",
    number: 1,
    title: "Array Rotation",
    problemStatement:
      "In the kingdom of Aryaland, a magical array is used to unlock the gates of the royal palace. The array has a special property:\n\n1. If the length of the array is even, you must perform a left rotation of only the even-indexed elements.\n2. If the length of the array is odd, you must perform a right rotation of only the odd-indexed elements.\n\nYour task is to perform the required rotation and return the transformed array.",
    note: "The array follows 1-based indexing.",
    inputSpecification: {
      input1:
        "An integer value N representing the number of elements in the array.",
      input2: "An integer array A.",
    },
    outputSpecification:
      "Return a transformed array based on the above logic.",
    examples: [
      {
        input1: 6,
        input2: [1, 2, 3, 4, 5, 6],
        output: [1, 4, 3, 6, 5, 2],
        explanation:
          "Here, the array is {1,2,3,4,5,6}. The length of the array is even (6), so we have to perform a left rotation of the even-indexed elements, i.e., indices 2, 4 and 6, which are:\n\n[2, 4, 6]\n\nAfter a left rotation, they become:\n\n[4, 6, 2]\n\nThe transformed array will be:\n\n(1, 4, 3, 6, 5, 2)\n\nHence, (1,4,3,6,5,2) is returned as the output.",
      },
      {
        input1: 5,
        input2: [10, 20, 30, 40, 50],
        output: [50, 20, 10, 40, 30],
        explanation:
          "Here, the array is {10,20,30,40,50}. The length of the array is odd (5), so we have to perform a right rotation of the odd-indexed elements, i.e., indices 1, 3 and 5, which are:\n\n[10, 30, 50]\n\nAfter a right rotation, they become:\n\n[50, 10, 30]\n\nThe transformed array will be:\n\n(50, 20, 10, 40, 30)\n\nHence, (50,20,10,40,30) will be returned as the output.",
      },
    ],
    starterCode: {
      csharp: `using System;

public class Solution
{
    public static int[] ArrayRotation(int input1, int[] input2)
    {
        // Write your code here
        return new int[0];
    }
}`,
    },
  },
];

export const backendPracticeQuestions = backendQuestions;
