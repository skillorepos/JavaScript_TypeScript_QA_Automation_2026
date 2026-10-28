// Run from the repository root: node lectures/08-asynchronous-javascript/examples/02-promises-then-catch-finally.js

// A Promise is like ordering food:
// 1. You place an order (it starts "pending" while they cook).
// 2. Eventually, it is either "fulfilled" (food arrives!) or "rejected" (cancelled).


// // -----------------------------------------------------------------
// // SCENARIO 1: Successful Order with a Visual Loading Log
// // -----------------------------------------------------------------
// function orderPizzaSuccessfully() {
//   console.log("\n--- SCENARIO 1: Successful Order ---");
//   console.log("1. [You] Placing order for a pizza online...");

//   return new Promise((resolve, reject) => {
//     console.log("2. [Restaurant] Order received! The kitchen is baking the pizza...");
    
//     // Show quick loading steps while we wait
//     console.log("   ⏳ [Kitchen] Baking... (0.3s)");
//     setTimeout(() => {
//       console.log("   ⏳ [Kitchen] Baking... (0.6s)");
//     }, 300);

//     setTimeout(() => {
//       console.log("   ⏳ [Kitchen] Baking... (0.9s)");
//     }, 600);

//     // Final result after 1 second total
//     setTimeout(() => {
//       console.log("3. [Restaurant] Ding! Pizza is cooked and packed.");
//       resolve("🍕 Cheesy Pepperoni Pizza");
//     }, 4000);
//   });
// }

// // Run Scenario 1
// orderPizzaSuccessfully()
//   .then((myFood) => {
//     console.log("4. [You] .then() triggered! Success! Time to eat:", myFood);
//   });


// console.log("--- THE NON-BLOCKING DEMO ---\n");

// console.log("1. [You] Placing the pizza order...");
// const pizzaPromise = orderPizzaSuccessfully(); // Starts the 1-second cooking timer

// // JavaScript doesn't wait! It immediately jumps to the next lines:
// console.log("2. [You] While the pizza is in the oven, I can do other things.");
// console.log("3. [You] Setting the dinner table...");
// console.log("4. [You] Pouring some drinks...");
// console.log("5. [You] Table is fully ready! (This happens BEFORE the pizza is done)\n");

// // Later, whenever the pizza promise finally resolves, .then() runs:
// pizzaPromise.then((promiseResult) => {
//   console.log("6. [You] Ding! The pizza finally arrived:", promiseResult);
// });





// // -----------------------------------------------------------------
// // SCENARIO 2: Failed Order (.catch)
// // -----------------------------------------------------------------
// function orderIceCreamThatFails() {
//   console.log("\n--- SCENARIO 2: Failed Order ---");
//   console.log("1. [You] Placing order for ice cream...");

//   return new Promise((resolve, reject) => {
//     console.log("2. [Shop] Checking freezer inventory...");
    
//     // Simulate a 1-second delay before discovering an issue
//     setTimeout(() => {
//       console.log("3. [Shop] Oh no, the freezer broke and all ice cream melted!");
//       reject(new Error("Out of stock / Freezer broken!")); // Promise rejected with an error!
//     }, 3000);
//   });
// }

// // Run Scenario 2 (delayed by 2.5 seconds so logs don't mix with Scenario 1)
// setTimeout(() => {
//   orderIceCreamThatFails()
//     .then((myFood) => {
//       console.log("4. [You] This won't run because the order failed.");
//     })
//     .catch((error) => {
//       console.log("4. [You] .catch() triggered! Error caught:", error.message);
//     });
// }, 4500);


// -----------------------------------------------------------------
// SCENARIO 3: Always Clean Up (.finally)
// -----------------------------------------------------------------
function orderBurgerWithCleanup() {
  console.log("\n--- SCENARIO 3: Order with Cleanup (.finally) ---");
  console.log("1. [You] Ordering a burger...");

  return new Promise((resolve, reject) => {
    console.log("2. [Kitchen] Grilling the burger patty...");
    setTimeout(() => {
      console.log("3. [Kitchen] Burger is ready!");
      resolve("🍔 Juicy Cheeseburger");
    }, 1000);
  });
}

// Run Scenario 3 (delayed by 5 seconds)
setTimeout(() => {
  orderBurgerWithCleanup()
    .then((result) => {
      console.log("4. [You] .then() triggered! Got:", result);
    })
    .catch((error) => {
      console.log("4. [You] .catch() triggered:", error.message);
    })
    .finally(() => {
      console.log("5. [Kitchen] .finally() triggered! Always runs: Turning off the grill and cleaning the kitchen counter, whether the order succeeded or failed!");
    });
}, 5000);


// -----------------------------------------------------------------
// SCENARIO 4: Build a Meal Step by Step (nested .then() calls)
// -----------------------------------------------------------------
function orderBurgerMeal() {
  console.log("\n--- SCENARIO 4: Nesting Several .then() Calls ---");
  console.log("1. [You] Ordering a burger meal...");

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("2. [Kitchen] Burger is ready!");
      resolve("🍔 Juicy Cheeseburger");
    }, 1000);
  });
}

// Run Scenario 4 after Scenario 3 finishes so their logs don't mix.
setTimeout(() => {
  orderBurgerMeal()
    .then((burger) => {
      console.log("3. [Kitchen] First .then(): Adding fries to:", burger);
      // Return each nested promise so the outer catch/finally waits for every step.
      return Promise.resolve(`${burger} + 🍟 Crispy Fries`).then((meal) => {
        console.log("4. [Kitchen] Second .then(): Packing:", meal);

        return new Promise((resolve) => {
          setTimeout(() => {
            console.log("5. [Kitchen] Packing is complete!");
            resolve(`Packed meal: ${meal}`);
          }, 500);
        }).then((packedMeal) => {
          console.log("6. [You] Third .then(): Received:", packedMeal);

          return Promise.resolve(`Enjoying ${packedMeal}`).then((message) => {
            console.log("7. [You] Fourth .then():", message);
          });
        });
      });
    })
    .catch((error) => {
      console.log("[You] .catch(): A step in the chain failed:", error.message);
    })
    .finally(() => {
      console.log("8. [Kitchen] .finally(): Cleaning up after the meal order!");
    });
}, 7000);
