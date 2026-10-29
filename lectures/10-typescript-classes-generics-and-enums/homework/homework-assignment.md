# Homework 10: Typed Test Result Utility

Complete the assignment in `homework-solved.ts`. The file is intentionally empty so you can build the solution yourself.

## Tasks

1. Define a string enum `TestStatus` with members `Passed = "PASS"`, `Failed = "FAIL"`, and `Skipped = "SKIP"`.
2. Create a `TestResult` class with:
   - A `public` property `name: string`.
   - A `private` property `description: string`.
   - A `protected` property `status: TestStatus`.
   - A constructor that accepts and assigns all three.
   - A `public` method `printSummary(): void` that logs the name, status, and description.
3. Create a subclass `DetailedTestResult extends TestResult` that adds a `public` property `duration: number` (set via its own constructor, which also calls `super(...)`), and a method `printDetailedSummary(): void` that logs everything `printSummary()` logs plus the duration. The subclass method should access `status` directly (since it is `protected`, not `private`).
4. Create at least two `DetailedTestResult` instances (one `Passed`, one `Failed`) and call `printDetailedSummary()` on each.
5. Write a generic function `getFirstResult<T>(results: T[]): T | undefined` that returns the first element of an array, and call it with an array of `DetailedTestResult` instances.
6. Define a generic interface `ApiResponse<T>` with `status: number` and `data: T`. Create one `ApiResponse<DetailedTestResult>` object using one of your test results as `data`, and log `response.data.name`.
7. Run the file with `npm run test:lecture-10` (or `npx tsx lectures/10-typescript-classes-generics-and-enums/homework/homework-solved.ts` if the script is not yet available). Also run `npm run typecheck` to confirm there are no type errors. Format the `.ts` file with Prettier.
8. Use GitHub Copilot for one small improvement. Explain what it suggested and describe how you verified that you understand it.

Use the existing project and its npm scripts; do not create a second project or replace shared configuration.

## Optional challenge

Add a `readonly` property `id: number` to `TestResult`, assigned through the constructor. Create a test result, then try reassigning `id` afterward. Run `npm run typecheck` to see the compiler error, then comment out the reassignment line and briefly note in a comment what the error said.
