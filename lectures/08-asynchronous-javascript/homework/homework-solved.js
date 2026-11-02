// Run from the repository root: npm run test:lecture-08

function createTestResult(name, status, delayMs) {
  const startedAt = Date.now();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name,
        status,
        duration: Date.now() - startedAt,
      });
    }, delayMs);
  });
}

function getTestResult() {
  return createTestResult("Login test", "PASS", 1000);
}

async function runSingleTest() {
  console.log("Starting the login test...");

  try {
    const result = await getTestResult();
    console.log(`${result.name}: ${result.status} (${result.duration} ms)`);

    if (result.status === "PASS") {
      console.log("The login test passed.");
    } else {
      console.log("The login test failed.");
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.log("Could not run the login test:", message);
  } finally {
    console.log("Login test run finished.");
  }
}

function getFailingTestResult() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Could not reach test environment"));
    }, 250);
  });
}

async function runFailingTest() {
  console.log("Starting a test that cannot reach its environment...");

  try {
    const result = await getFailingTestResult();
    console.log(`${result.name}: ${result.status}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.log("Test failed:", message);
  } finally {
    console.log("Failing test run finished.");
  }
}

function getSearchTestResult() {
  return createTestResult("Search test", "PASS", 700);
}

function getCheckoutTestResult() {
  return createTestResult("Checkout test", "FAIL", 900);
}

async function runTestsInParallel() {
  console.log("Starting independent tests in parallel...");

  const results = await Promise.all([
    getSearchTestResult(),
    getCheckoutTestResult(),
  ]);

  results.forEach((result) => {
    console.log(`${result.name}: ${result.status} (${result.duration} ms)`);
  });
}

async function validateTestResult(testResultPromise) {
  const result = await testResultPromise;

  if (result.status !== "PASS") {
    throw new Error(`${result.name} did not pass`);
  }

  return result;
}

async function runValidationExamples() {
  const passingResult = Promise.resolve({
    name: "Profile test",
    status: "PASS",
    duration: 12,
  });

  try {
    const result = await validateTestResult(passingResult);
    console.log(`Validation passed: ${result.name}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.log("Validation failed:", message);
  }

  const failingResult = Promise.resolve({
    name: "Settings test",
    status: "FAIL",
    duration: 15,
  });

  try {
    const result = await validateTestResult(failingResult);
    console.log(`Validation passed: ${result.name}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.log("Validation failed:", message);
  }
}

async function main() {
  console.log("Starting the asynchronous test runner.");

  await runSingleTest();
  await runFailingTest();
  await runTestsInParallel();
  await runValidationExamples();
}

main().catch((error) => {
  console.error("Unexpected test runner error:", error);
  process.exitCode = 1;
});
