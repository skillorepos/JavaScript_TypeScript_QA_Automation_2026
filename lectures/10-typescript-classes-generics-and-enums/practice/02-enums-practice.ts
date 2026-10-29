// Run from the repository root: npx tsx lectures/10-typescript-classes-generics-and-enums/practice/02-enums-practice.ts
enum Browser {
  Chrome = "CHROME",
  Firefox = "FIREFOX",
  Safari = "SAFARI",
}

function runOnBrowser(browser: Browser): void {
  console.log(`Running tests on ${browser}`);
}

runOnBrowser(Browser.Chrome);
runOnBrowser(Browser.Firefox);

console.log(
  "Practice: add Edge to the Browser enum and call runOnBrowser(Browser.Edge).",
);

export {};
