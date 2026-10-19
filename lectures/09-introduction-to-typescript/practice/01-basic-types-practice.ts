// Compile from the repository root: npx tsc
// Then run: node lectures/09-introduction-to-typescript/practice/01-basic-types-practice.js
const environment: string = "QA";
const retryLimit: number = 3;
const isSmokeTest: boolean = true;

console.log(environment, retryLimit, isSmokeTest);

function isWithinRetryLimit(attempt: number, limit: number): boolean {
  return attempt <= limit;
}

console.log(isWithinRetryLimit(2, retryLimit));

console.log(
  "Practice: add a function getEnvironmentLabel(env: string): string that returns `Testing on ${env}`.",
);
