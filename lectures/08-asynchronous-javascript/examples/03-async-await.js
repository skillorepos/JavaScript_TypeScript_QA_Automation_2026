// Run from the repository root: node lectures/08-asynchronous-javascript/examples/03-async-await.js

function loadUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 101, username: "alice" });
    }, 500);
  });
}

// async makes a function always return a Promise, even if the body
// returns a plain value.
async function getTestStatus() {
  return "PASS";
}

getTestStatus().then((promiseResult) => {
  console.log(promiseResult);
});

// await pauses this async function (not the whole program) until the
// Promise it is given settles, then unwraps the resolved value.
async function runTest() {
  console.log("Loading user...");

  const user = await loadUser();

  console.log("User loaded:", user.username);
}

runTest();

// try...catch around await handles a rejected Promise just like a
// regular thrown error; finally still runs for cleanup either way.
async function runTestWithErrorHandling() {
  try {
    const user = await loadUser();

    console.log("User:", user.username);
  } catch (error) {
    console.log("Test failed:", error.message);
  } finally {
    console.log("Test execution completed");
  }
}

runTestWithErrorHandling();
