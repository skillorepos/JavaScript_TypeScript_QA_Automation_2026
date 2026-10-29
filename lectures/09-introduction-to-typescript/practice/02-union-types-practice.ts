// Run from the repository root: npx tsx lectures/09-introduction-to-typescript/practice/02-union-types-practice.ts
type Priority = "LOW" | "MEDIUM" | "HIGH";

const testCasePriorities: Priority[] = ["LOW", "HIGH", "MEDIUM"];

console.log(testCasePriorities);

function describePriority(priority: Priority): string {
  return `Priority level: ${priority}`;
}

console.log(describePriority("HIGH"));

console.log(
  'Practice: try assigning testCasePriorities[0] = "URGENT" and read the compiler error.',
);

export {};
