// Run from the repository root: npx tsx lectures/10-typescript-classes-generics-and-enums/examples/03-enums.ts

// A numeric enum represents a fixed set of named values, backed by numbers.
enum TestStatus {
  Pending,
  Passed,
  Failed,
}

const currentStatus: TestStatus = TestStatus.Passed;

console.log(currentStatus);

// A string enum associates each name with a readable string value instead,
// which makes logs and reports easier to understand.
enum ReadableTestStatus {
  Passed = "PASS",
  Failed = "FAIL",
  Skipped = "SKIP",
}

function printResult(status: ReadableTestStatus): void {
  console.log(`Test result: ${status}`);
}

printResult(ReadableTestStatus.Passed);
printResult(ReadableTestStatus.Failed);

// Enums restrict a parameter to a known, fixed set of values, which helps
// avoid typos in configuration like environment names.
enum Environment {
  QA = "QA",
  Staging = "STAGING",
  Production = "PRODUCTION",
}

function printEnvironment(environment: Environment): void {
  console.log(`Running tests in: ${environment}`);
}

printEnvironment(Environment.QA);
printEnvironment(Environment.Staging);

// Uncommenting the next line would fail to compile: "DEVELOPMENT" is not
// a member of the Environment enum.
// printEnvironment("DEVELOPMENT");

export {};
