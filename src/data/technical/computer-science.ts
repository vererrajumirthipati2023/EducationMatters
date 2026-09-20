import { TechnicalQuestion } from "./types";

export const computerScienceQuestions: TechnicalQuestion[] = [
    {
  "id": "cs-1",
  "question": "Which of the following codes is appropriate for autoplay?",
  "options": [
    "<audio autoplay>\n  <source src=\"test.mp3\">\n  <source src=\"test.ogg\">\n</audio>",
    "<audio autoplay>\n  <source src=\"test.mp3\">\n  <source src=\"test.ogg\">\n</audio autoplay>",
    "<autoplay>\n  <source src=\"test.mp3\">\n  <source src=\"test.ogg\">\n</autoplay>",
    "<audio>\n  <controls>\n    <source src=\"test.mp3\">\n    <source src=\"test.ogg\">\n  </controls>\n</audio>"
  ],
  "correctAnswer": 0,
  "explanation": "The first option is correct because the HTML <audio> element supports the autoplay attribute, which tells the browser to start playing the audio automatically when the media is ready. The other options use invalid HTML syntax or place the controls element incorrectly."
},
  {
    id: "cs-2",
    question:
      "Which linear data structure adheres to the Last-In-First-Out (LIFO) principle and is standardly used for function call stacks, balanced parenthesis checking, and undo operations?",
    options: [
      "Queue",
      "Stack",
      "Binary Search Tree",
      "Hash Map",
    ],
    correctAnswer: 1,
    explanation:
      "A Stack operates strictly on LIFO (Last-In-First-Out) order, meaning the most recently pushed item is always the first one popped. This makes it ideal for recursive call stacks, undo histories, and syntax verification.",
  },
  {
    id: "cs-3",
    question:
      "In Object-Oriented Programming (OOP), what term describes the ability of different derived classes to provide distinct implementations of a method defined with the same signature in a base interface or parent class?",
    options: [
      "Encapsulation",
      "Polymorphism",
      "Inheritance",
      "Abstraction",
    ],
    correctAnswer: 1,
    explanation:
      "Polymorphism (meaning 'many forms') allows objects of different classes to be treated through a common interface, with each class implementing its own specific behavior (e.g. via method overriding at runtime).",
  },
  {
    id: "cs-4",
    question:
      "In database management systems (DBMS), which ACID property guarantees that all operations within a transaction execute completely or none of them are committed (all-or-nothing)?",
    options: [
      "Atomicity",
      "Consistency",
      "Isolation",
      "Durability",
    ],
    correctAnswer: 0,
    explanation:
      "Atomicity ensures that a database transaction is indivisible. If any query inside the transaction fails, the entire transaction is rolled back to its previous state, preventing partial data updates.",
  },
  {
    id: "cs-5",
    question:
      "What is a fundamental architectural distinction between a process and a thread in a multitasking operating system?",
    options: [
      "Threads have separate independent memory address spaces, while processes share heap memory.",
      "A process possesses its own dedicated virtual address space and resources, whereas threads within the same process share that address space, heap, and open file descriptors.",
      "Context switching between processes requires fewer CPU cycles than between threads.",
      "Threads cannot execute concurrently across multiple CPU cores.",
    ],
    correctAnswer: 1,
    explanation:
      "A process is an isolated execution environment with private memory. Threads are lightweight units of execution within a process that share the process's address space, code, and resources, enabling fast inter-thread communication with low switching overhead.",
  },
  {
    id: "cs-6",
    question:
      "Which SQL JOIN query returns all records from the left table (Employees), along with matching records from the right table (Departments), inserting NULL values for Department fields when no match exists?",
    options: [
      "SELECT * FROM Employees INNER JOIN Departments ON Employees.dept_id = Departments.id;",
      "SELECT * FROM Employees LEFT JOIN Departments ON Employees.dept_id = Departments.id;",
      "SELECT * FROM Employees CROSS JOIN Departments;",
      "SELECT * FROM Employees RIGHT JOIN Departments ON Employees.dept_id = Departments.id;",
    ],
    correctAnswer: 1,
    explanation:
      "A LEFT JOIN (or LEFT OUTER JOIN) returns every row from the left table regardless of matches. If there is no matching record in the right table, the right-side columns contain NULL.",
  },
  {
    id: "cs-7",
    question:
      "Which of the following is NOT one of the four essential Coffman conditions required for a system deadlock to occur?",
    options: [
      "Mutual Exclusion",
      "Hold and Wait",
      "Preemptive Resource Allocation",
      "Circular Wait",
    ],
    correctAnswer: 2,
    explanation:
      "The four necessary conditions for deadlock are: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. 'Preemptive Resource Allocation' is a mechanism used to prevent deadlocks, not cause them.",
  },
  {
    id: "cs-8",
    question:
      "What are the average-case and worst-case time complexities of the standard QuickSort algorithm?",
    options: [
      "Average: O(n log n); Worst: O(n^2)",
      "Average: O(n); Worst: O(n log n)",
      "Average: O(n log n); Worst: O(n log n)",
      "Average: O(n^2); Worst: O(n^2)",
    ],
    correctAnswer: 0,
    explanation:
      "QuickSort executes in O(n log n) average time when pivots divide the array reasonably evenly. However, with poor pivot choices (such as picking the smallest/largest element on an already sorted list), it degrades to O(n^2) worst-case time.",
  },
  {
    id: "cs-9",
    question:
      "Which of the following criteria for choosing a patch management system from a vendor is incorrect?",
      options: [
      "The vendor should have high response rates to vulnerabilities by providing patches and updates.",
      "A complete product should be chosen over a simple and mature product because the latter does not have sufficient functionalities for detection of vulnerabilities.",
      "The deployment and maintenance cost of the patch management system should be low.",
      "The system administrators should be in a position to keep track of the system and the status of the patches.",
    ],
    correctAnswer: 1,
    explanation:
  "A patch management system should be evaluated based on factors such as the vendor's responsiveness to vulnerabilities, the availability of patches and updates, reasonable deployment and maintenance costs, and the ability of system administrators to monitor systems and patch status. A simple and mature product can still provide sufficient functionality for detecting and managing vulnerabilities."
  },
  {
    id: "cs-10",
    question:
      "In relational database design, what is a key difference between a PRIMARY KEY and a UNIQUE constraint?",
    options: [
      "A table can define multiple PRIMARY KEY columns, but only one UNIQUE constraint.",
      "A PRIMARY KEY uniquely identifies rows and strictly disallows NULL values, whereas a UNIQUE constraint enforces uniqueness among non-null values and may allow a NULL value depending on the RDBMS.",
      "UNIQUE constraints cannot be indexed, while PRIMARY KEY creates an unindexed table scan.",
      "PRIMARY KEY can only be placed on text fields, while UNIQUE applies only to integers.",
    ],
    correctAnswer: 1,
    explanation:
      "Each table can have at most one PRIMARY KEY, which uniquely identifies records and forbids NULLs. A table can have multiple UNIQUE constraints, which prevent duplicate non-null entries.",
  },
  {
    id: "cs-11",
    question:
      "Which tree traversal method on a valid Binary Search Tree (BST) processes node values in sorted ascending order?",
    options: [
      "Pre-order Traversal (Root, Left, Right)",
      "In-order Traversal (Left, Root, Right)",
      "Post-order Traversal (Left, Right, Root)",
      "Level-order Traversal (Breadth-First)",
    ],
    correctAnswer: 1,
    explanation:
      "An In-order traversal visits the left subtree (which contains values smaller than root), then the root node, and then the right subtree (values larger than root), outputting the elements in strictly sorted ascending order.",
  },
  {
    id: "cs-12",
    question:
      "What happens when a 'Page Fault' is triggered in an operating system with virtual memory enabled?",
    options: [
      "The computer hardware encounters an unrecoverable system crash.",
      "The CPU attempts to access a virtual memory page not currently resident in physical RAM, prompting the OS to retrieve that page from secondary storage (swap space).",
      "An unauthorized user attempts to modify kernel code segments.",
      "The CPU runs out of internal registers to store local variables.",
    ],
    correctAnswer: 1,
    explanation:
      "A page fault is an architectural interrupt that signals to the operating system that a requested virtual memory page must be loaded from disk (swap/pagefile) into an available frame in physical RAM.",
  },
  {
  id: "cs-13",

  question:
    "What will be the output of the given code when the user clicks the button?",

  code: `<body>
  <button onclick="myFunction();">My Text</button>
  <div id="container"></div>

  <script type="text/JavaScript">
    function myFunction() {
      var newElem = document.createElement("div");

      newElem.innerHTML = "sample text";
      newElem.style.color = "red";

      var container = document.getElementById("container");
      container.appendChild(newElem);
    }
  </script>
</body>`,

  options: [
    "Sample text",
    "Nothing will happen",
    "Displays sample text in red",
    "Error",
  ],

  correctAnswer: 2,

  explanation:
    "When the button is clicked, the myFunction() function creates a new div element, sets its content to 'sample text', and changes its text colour to red. The new element is then appended to the container div, so 'sample text' is displayed in red.",
},
  {
  id: "cs-14",

  question:
    "Identify the CSS3 code snippet that can be used to create the given pattern.",

  image: "/question_Image.png",

  options: [
    `div {
  height: 100px;
  background-color: yellow;
  background-image:
    radial-gradient(
      red,
      yellow
    );
}`,

    `div {
  height: 100px;
  background-color: red;
  background-image:
    radial-gradient(
      yellow,
      red
    );
}`,

    `div {
  height: 100px;
  background-color: red;
  background-image:
    linear-gradient(
      yellow,
      red
    );
}`,

    `div {
  height: 100px;
  background-color: yellow;
  background-image:
    linear-gradient(
      red,
      yellow
    );
}`,
  ],

  correctAnswer: 1,

  explanation:
    "The radial-gradient() function creates a gradient that spreads outward from a central point. Using yellow as the first colour and red as the second colour produces the yellow centre with red towards the outer area, matching the given pattern.",
},
];
