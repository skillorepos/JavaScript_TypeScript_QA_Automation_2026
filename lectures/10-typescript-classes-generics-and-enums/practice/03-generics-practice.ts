// Run from the repository root: npx tsx lectures/10-typescript-classes-generics-and-enums/practice/03-generics-practice.ts
function getLast<T>(items: T[]): T | undefined {
  return items[items.length - 1];
}

const environments = ["dev", "qa", "staging"];
const retryCounts = [1, 2, 3];

console.log(getLast(environments));
console.log(getLast(retryCounts));

console.log(
  "Practice: write a generic function countItems<T>(items: T[]): number that returns items.length.",
);

export {};
