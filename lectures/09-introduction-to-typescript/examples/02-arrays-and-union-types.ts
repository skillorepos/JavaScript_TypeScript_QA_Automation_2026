// Run from the repository root: npx tsx lectures/09-introduction-to-typescript/examples/02-arrays-and-union-types.ts

// An array type annotation restricts every element to the same type.
const browsers: string[] = ["Chrome", "Firefox", "Edge"];
const statusCodes: number[] = [200, 201, 404];

browsers.push("Safari");
statusCodes.push(500);

console.log(browsers);
console.log(statusCodes);

// Uncommenting the next line would fail to compile: a string is not a number.
// statusCodes.push("OK");

// A union type allows a variable to hold one of several specified types.
let userId: number | string;

userId = 101;
console.log(userId);

userId = "USER-101";
console.log(userId);

function printStatus(status: number | string): void {
  console.log(status);
}

printStatus(200);
printStatus("PASS");

// A union of specific string literals restricts a value to a fixed set
// of options, which is useful for things like test outcomes.
type TestStatus = "PASS" | "FAIL" | "SKIP";

let result: TestStatus = "PASS";
// result = "ERep";
console.log(result);

// Uncommenting the next line would fail to compile: "ERROR" is not one of
// the allowed TestStatus values.
// result = "ERROR";

export {};
