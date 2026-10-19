// Compile from the repository root: npx tsc
// Then run: node lectures/09-introduction-to-typescript/examples/04-interfaces.js

// An interface describes the expected shape of an object: which
// properties must exist and what type each one has.
interface User {
  username: string;
  email: string;
  role: string;
  isActive: boolean;
}

const user: User = {
  username: "alice",
  email: "alice@example.com",
  role: "admin",
  isActive: true,
};

console.log(user);

// Interfaces are a convenient way to describe the shape of an API
// response, even though they do not validate the real response at runtime.
interface UserResponse {
  id: number;
  username: string;
  email: string;
  isActive: boolean;
}

function printUser(userResponse: UserResponse): void {
  console.log(`User: ${userResponse.username}`);
  console.log(`Email: ${userResponse.email}`);
  console.log(`Active: ${userResponse.isActive}`);
}

printUser({
  id: 101,
  username: "alice",
  email: "alice@example.com",
  isActive: true,
});

// A `?` marks a property as optional: it does not have to be provided.
interface TestUser {
  username: string;
  email?: string;
}

const userWithoutEmail: TestUser = { username: "alice" };
const userWithEmail: TestUser = {
  username: "bob",
  email: "bob@example.com",
};

console.log(userWithoutEmail);
console.log(userWithEmail);

// `readonly` prevents a property from being reassigned after the object
// is created, which helps protect configuration values from accidental changes.
interface TestConfig {
  readonly baseUrl: string;
  timeout: number;
}

const config: TestConfig = {
  baseUrl: "https://demo-app.com",
  timeout: 5000,
};

config.timeout = 10000;
console.log(config);

// Uncommenting the next line would fail to compile: baseUrl is readonly.
// config.baseUrl = "https://other-app.com";
