# Practice: Mini Test User Report

Build a small TypeScript program that checks a list of test users. 

## Tasks

1. Define an interface `TestUser` with `id: number`, `username: string`, and `email: string`.
2. Create an array containing five users. Make three users valid and two invalid. An invalid user can have a username shorter than three characters or an email without `@`.
3. Write `isValidUser(user: TestUser): boolean`. A user is valid when the username has at least three characters and the email contains `@`.
4. Use `filter()` to create arrays of valid and invalid users.
5. Print the total, valid, and invalid counts, followed by the usernames of invalid users.

Keep everything in one file. You do not need to generate users or split the program into modules.

## Run and check

From the repository root, run:

```bash
npx tsx lectures/10-typescript-classes-generics-and-enums/practice/04-mini-test-user-report/solution.ts
npm run typecheck
```

The solution file is provided separately for checking your work after attempting the exercise.