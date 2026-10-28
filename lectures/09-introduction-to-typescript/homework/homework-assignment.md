# Homework 09: Build a Typed QA Utility

Complete the assignment in `homework-solved.ts`. The file is intentionally empty so you can build the solution yourself.

## Tasks

1. Define a union type `TestStatus` with the values `"PASS"`, `"FAIL"`, and `"SKIP"`.
2. Define an interface `TestResult` with properties `name: string`, `status: TestStatus`, and `duration: number`.
3. Write a function `printTestResult(result: TestResult): void` that logs the name, status, and duration.
4. Create at least two valid `TestResult` objects and call `printTestResult` with each.
5. Write a function `isSuccessfulStatus(statusCode: number): boolean` that returns `true` for 2xx status codes.
6. Define an interface `ApiResponse` with `status: number` and `body: { username: string; isActive: boolean }`, then write a function `printApiResponse(response: ApiResponse): void` that logs each field.
7. Add an optional property `retryCount?: number` to `TestResult` (or a new interface) and create one object that omits it and one that includes it.
8. Run the file with `npm run test:lecture-09` (or `npx tsx lectures/09-introduction-to-typescript/homework/homework-solved.ts` if the script is not yet available). Also run `npm run typecheck` to catch type errors that `tsx` does not report on its own. Fix any errors and format the `.ts` file with Prettier.
9. Use GitHub Copilot for one small improvement. Explain what it suggested and describe how you verified that you understand it.

Use the existing project and its npm scripts; do not create a second project or replace shared configuration.

## Optional challenge

Add a `readonly` property `id: number` to `TestResult`, create a test result, and try reassigning `id` afterward. Run `npm run typecheck` to see the compiler error, then comment out the reassignment line and briefly note in a comment what the error said.
