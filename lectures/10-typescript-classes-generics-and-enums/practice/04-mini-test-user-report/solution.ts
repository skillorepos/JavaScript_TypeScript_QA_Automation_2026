interface TestUser {
  id: number;
  username: string;
  email: string;
}

const users: TestUser[] = [
  { id: 1, username: "alex", email: "alex@example.com" },
  { id: 2, username: "morgan", email: "morgan@example.com" },
  { id: 3, username: "sam", email: "sam@example.com" },
  { id: 4, username: "jo", email: "jo@example.com" },
  { id: 5, username: "taylor", email: "taylor.example.com" },
];

function isValidUser(user: TestUser): boolean {
  return user.username.length >= 3 && user.email.includes("@");
}

const validUsers = users.filter(isValidUser);
const invalidUsers = users.filter((user) => !isValidUser(user));

console.log("=== MINI TEST USER REPORT ===");
console.log(`Total users: ${users.length}`);
console.log(`Valid users: ${validUsers.length}`);
console.log(`Invalid users: ${invalidUsers.length}`);
console.log(`Invalid usernames: ${invalidUsers.map((user) => user.username).join(", ")}`);

export {};