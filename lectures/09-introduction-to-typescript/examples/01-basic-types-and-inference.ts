// Run from the repository root: npx tsx lectures/09-introduction-to-typescript/examples/01-basic-types-and-inference.ts

// TypeScript supports the basic JavaScript data types, with explicit annotations.
let username: any = "alice";
username = 42; // allowed because username is of type number | string
let statusCode = 200;
let isLoggedIn: boolean = true;

console.log(username, statusCode, isLoggedIn);

// TypeScript can infer a type from the initial value, so an annotation
// is not always required.
let browser = "Chrome"; // inferred as string
let timeout = 5000; // inferred as number
let isHeadless = false; // inferred as boolean

console.log(browser, timeout, isHeadless);

// Once a variable's type is known (explicitly or inferred), assigning an
// incompatible value is a compile-time type error, not a runtime surprise.
// Uncommenting the next line would fail to compile:
// statusCode = "OK";

function isSuccessfulStatus(statusCode: number): boolean {
  return statusCode >= 200 && statusCode < 300;
}

console.log(isSuccessfulStatus(200));
console.log(isSuccessfulStatus(404));

export {};
