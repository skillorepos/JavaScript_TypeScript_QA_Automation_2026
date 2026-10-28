// Run from the repository root: npx tsx lectures/09-introduction-to-typescript/examples/03-typed-functions.ts

// Parameter types and a return type make a function's contract explicit:
// what it accepts, and what it gives back.
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));

function isSuccessfulStatus(statusCode: number): boolean {
  return statusCode >= 200 && statusCode < 300;
}

console.log(isSuccessfulStatus(200));

// A `: void` return type documents that the function does not return a
// meaningful value (it only produces a side effect, like logging).
function logTestResult(name: string, status: TestStatus): void {
  console.log(`${name}: ${status}`);
}

type TestStatus = "PASS" | "FAIL" | "SKIP";

logTestResult("Login", "PASS");
logTestResult("Checkout", "FAIL");

// Uncommenting the next line would fail to compile: a number is not
// assignable to the `name: string` parameter.
// logTestResult(123, "PASS");

export {};
