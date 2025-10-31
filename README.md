# 🥋 Coding Dojo

Welcome to the Coding Dojo! This repository contains 20 programming challenges organized by difficulty level to help you practice your TypeScript skills.

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)
- A code editor (VS Code recommended)

## 🚀 Getting Started

### 1. Initialize the Project

Install all dependencies:

```powershell
npm install
```

### 2. Project Structure

```
coding-dojo/
├── src/                           # Source files organized by difficulty
│   ├── 1_easy/                    # 🟢 Easy tasks (1-6)
│   │   ├── task01_evenOrOdd.ts
│   │   ├── task02_sumArray.ts
│   │   └── ...
│   ├── 2_medium/                  # 🟠 Medium tasks (7-17)
│   │   ├── task07_fibonacci.ts
│   │   ├── task08_isPrime.ts
│   │   └── ...
│   └── 3_hard/                    # 🔴 Hard tasks (18-20)
│       ├── task18_anagrams.ts
│       ├── task19_romanToArabic.ts
│       └── ...
├── tests/                         # Test files
│   ├── task01_evenOrOdd.test.ts
│   ├── task02_sumArray.test.ts
│   └── ... (all 20 test files)
├── package.json
├── tsconfig.json
├── jest.config.js
└── .gitignore
```

## 🧪 Running Tests

### Run All Tests

```powershell
npm test
```

### Run Individual Task Tests

```powershell
npm run test:01   # Task 1: Even or Odd
npm run test:02   # Task 2: Sum Array
npm run test:03   # Task 3: Reverse String
npm run test:04   # Task 4: Count Character
npm run test:05   # Task 5: Max Number
npm run test:06   # Task 6: Sort Array
npm run test:07   # Task 7: Fibonacci
npm run test:08   # Task 8: Is Prime
npm run test:09   # Task 9: Factorial
npm run test:10   # Task 10: FizzBuzz
npm run test:11   # Task 11: Palindrome
npm run test:12   # Task 12: Remove Duplicates
npm run test:13   # Task 13: Validate Brackets
npm run test:14   # Task 14: Merge Arrays
npm run test:15   # Task 15: Second Largest
npm run test:16   # Task 16: Word Count
npm run test:17   # Task 17: Reverse Array
npm run test:18   # Task 18: Group Anagrams
npm run test:19   # Task 19: Roman to Arabic
npm run test:20   # Task 20: API Schema Validation
```

### Run Tests in Watch Mode

Automatically re-run tests when files change:

```powershell
npm run test:watch
```

### Run Tests by Pattern

```powershell
npm run test:task taskName   # e.g., npm run test:task palindrome
```

## 🎯 Task Difficulty Levels

- 🟢 **Easy** (Tasks 1-6): 5-15 minutes each
- 🟠 **Medium** (Tasks 7-17): 10-20 minutes each
- 🔴 **Hard** (Tasks 18-20): 20-30 minutes each

## 🛠️ Build the Project

Compile TypeScript to JavaScript:

```powershell
npm run build
```
