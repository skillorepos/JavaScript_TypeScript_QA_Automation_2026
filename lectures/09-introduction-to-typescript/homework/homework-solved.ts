// Compile from the repository root: npx tsc
// Then run: npm run test:lecture-09
type TestStatus = "PASS" | "FAIL" | "SKIP";

interface TestResult {
  name: string;
  status: TestStatus;
  duration: number;
  retryCount?: number;
  readonly id: number;
}

function printTestResult(result: TestResult): void {
  console.log(`${result.name}: ${result.status} (${result.duration}ms)`);
}

const loginResult: TestResult = {
  id: 1,
  name: "Login",
  status: "PASS",
  duration: 450,
};

const checkoutResult: TestResult = {
  id: 2,
  name: "Checkout",
  status: "FAIL",
  duration: 900,
  retryCount: 2,
};

printTestResult(loginResult);
printTestResult(checkoutResult);

function isSuccessfulStatus(statusCode: number): boolean {
  return statusCode >= 200 && statusCode < 300;
}

console.log(isSuccessfulStatus(200));
console.log(isSuccessfulStatus(404));

interface ApiResponse {
  status: number;
  body: {
    username: string;
    isActive: boolean;
  };
}

function printApiResponse(response: ApiResponse): void {
  console.log(`Status: ${response.status}`);
  console.log(`Username: ${response.body.username}`);
  console.log(`Active: ${response.body.isActive}`);
}

printApiResponse({
  status: 200,
  body: { username: "alice", isActive: true },
});

// Optional challenge
// Uncommenting the next line fails to compile with:
// "Cannot assign to 'id' because it is a read-only property."
// loginResult.id = 99;

export {};
