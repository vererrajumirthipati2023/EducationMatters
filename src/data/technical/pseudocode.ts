import { TechnicalQuestion } from "./types";

export const pseudocodeQuestions: TechnicalQuestion[] = [
  {
    id: "pseudo-1",
    question: `What will be the output of the following pseudocode?

Integer a, b, c
Set a = 12, b = 5
Set c = a MOD b + a / b
Print c

(Assume integer division for /)`,
    options: [
      "2",
      "4",
      "7",
      "5",
    ],
    correctAnswer: 1,
    explanation:
      "a MOD b evaluates to 12 MOD 5 = 2. With integer division, a / b evaluates to 12 / 5 = 2. Therefore, c = 2 + 2 = 4.",
  },
  {
    id: "pseudo-2",
    question: `What will be the output of the following pseudocode?

Integer p, q, r
Set p = 4, q = 7, r = 2
If (p + q > 10 AND q - r < 6)
    p = p * 2
Else
    q = q + 3
End If
Print p + q`,
    options: [
      "11",
      "15",
      "18",
      "14",
    ],
    correctAnswer: 1,
    explanation:
      "Check the condition: p + q = 4 + 7 = 11 > 10 (TRUE) and q - r = 7 - 2 = 5 < 6 (TRUE). Since both are TRUE, the If branch executes: p = 4 * 2 = 8. Variable q remains 7. The output is p + q = 8 + 7 = 15.",
  },
  {
    id: "pseudo-3",
    question: `What will be the output of the following pseudocode?

Integer i, sum
Set sum = 0
For i = 1 to 5 step 1
    If (i MOD 2 != 0)
        sum = sum + i * 2
    End If
End For
Print sum`,
    options: [
      "18",
      "12",
      "30",
      "16",
    ],
    correctAnswer: 0,
    explanation:
      "The loop iterates through i = 1, 2, 3, 4, 5. The condition checks for odd values (i MOD 2 != 0): For i = 1: sum = 0 + 1 * 2 = 2. For i = 3: sum = 2 + 3 * 2 = 8. For i = 5: sum = 8 + 5 * 2 = 18. Result is 18.",
  },
  {
    id: "pseudo-4",
    question: `What will be the output of the following pseudocode?

Integer count, x, y
Set count = 0
For x = 1 to 3
    For y = x to 3
        count = count + 1
    End For
End For
Print count`,
    options: [
      "9",
      "6",
      "5",
      "3",
    ],
    correctAnswer: 1,
    explanation:
      "When x = 1, y runs 1..3 (3 iterations). When x = 2, y runs 2..3 (2 iterations). When x = 3, y runs 3..3 (1 iteration). Total iterations count = 3 + 2 + 1 = 6.",
  },
  {
    id: "pseudo-5",
    question: `What will be the output of the following pseudocode?

Integer a, b, c
Set a = 6, b = 3
Set c = (a ^ b) + (a & b)
Print c

(Where ^ represents Bitwise XOR and & represents Bitwise AND)`,
    options: [
      "9",
      "7",
      "11",
      "5",
    ],
    correctAnswer: 1,
    explanation:
      "In binary: a = 6 (110_2) and b = 3 (011_2). a ^ b = 110 ^ 011 = 101_2 = 5. a & b = 110 & 011 = 010_2 = 2. Therefore, c = 5 + 2 = 7.",
  },
  {
    id: "pseudo-6",
    question: `What will be the output of the following pseudocode?

Integer arr[5] = {3, 7, 2, 9, 4}
Integer i, val
Set val = arr[0]
For i = 1 to 4
    If (arr[i] > val)
        val = arr[i]
    End If
End For
Print val`,
    options: [
      "3",
      "4",
      "7",
      "9",
    ],
    correctAnswer: 3,
    explanation:
      "This is a standard maximum-finding algorithm. It iterates through the array and updates 'val' whenever an element is greater than the current 'val'. The largest number in {3, 7, 2, 9, 4} is 9.",
  },
  {
    id: "pseudo-7",
    question: `What will be the output of the following pseudocode?

Function modify(Integer x)
    x = x * 3
    Return x + 2
End Function

Integer a, res
Set a = 5
Set res = modify(a)
Print a + res`,
    options: [
      "22",
      "17",
      "34",
      "20",
    ],
    correctAnswer: 0,
    explanation:
      "When modify(5) is invoked with a = 5, inside the function x becomes 5 * 3 = 15, and the function returns 15 + 2 = 17. Because parameters are passed by value, variable 'a' in the caller remains 5. Thus, a + res = 5 + 17 = 22.",
  },
  {
    id: "pseudo-8",
    question: `What will be the output of the following recursive function when called with func(4)?

Function func(Integer n)
    If (n <= 1)
        Return 1
    Else
        Return n + func(n - 1)
    End If
End Function`,
    options: [
      "10",
      "24",
      "8",
      "15",
    ],
    correctAnswer: 0,
    explanation:
      "Unwinding the recursive calls: func(4) = 4 + func(3) = 4 + (3 + func(2)) = 4 + 3 + (2 + func(1)) = 4 + 3 + 2 + 1 = 10.",
  },
  {
    id: "pseudo-9",
    question: `What will be the output of the following pseudocode?

Integer num, rev
Set num = 245, rev = 0
While (num > 0)
    rev = (rev * 10) + (num MOD 10)
    num = num / 10
End While
Print rev

(Assume integer division for /)`,
    options: [
      "542",
      "245",
      "11",
      "20",
    ],
    correctAnswer: 0,
    explanation:
      "This standard integer-reversal loop extracts the least significant digit with MOD 10 and appends it to 'rev': Iteration 1: rev = 5, num = 24. Iteration 2: rev = 54, num = 2. Iteration 3: rev = 542, num = 0. Output is 542.",
  },
  {
    id: "pseudo-10",
    question: `What will be the output of the following pseudocode?

String str = "ASSESSMENT"
Integer i, count
Set count = 0
For i = 0 to length(str) - 1
    If (str[i] == 'S' OR str[i] == 'E')
        count = count + 1
    End If
End For
Print count`,
    options: [
      "4",
      "6",
      "5",
      "7",
    ],
    correctAnswer: 1,
    explanation:
      "In the word 'ASSESSMENT', the letter 'S' appears 4 times (positions 1, 2, 4, 5) and 'E' appears 2 times (positions 3, 6). Total matching characters count = 4 + 2 = 6.",
  },
];
