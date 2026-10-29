// Run from the repository root: npx tsx lectures/10-typescript-classes-generics-and-enums/examples/04-generics.ts

// A generic type parameter <T> lets a function work with many types while
// keeping the input and output types linked to each other.
function identity<T>(value: T): T {
  return value;
}

const username = identity<string>("alice");
const statusCode = identity<number>(200);

console.log(username);
console.log(statusCode);

// TypeScript can usually infer T from the argument, so the explicit
// <string>/<number> above is often unnecessary.
const inferredUsername = identity("alice");
const inferredStatusCode = identity(200);

console.log(inferredUsername);
console.log(inferredStatusCode);

// A generic works with arrays too: T[] means "an array of T".
// The return type T | undefined reflects that the array might be empty.
function getFirst<T>(items: T[]): T | undefined {
  return items[0];
}

const browsers = ["Chrome", "Firefox", "Edge"];
const statusCodes = [200, 201, 404];

console.log(getFirst(browsers));
console.log(getFirst(statusCodes));

// A generic interface reuses one structure for many data shapes: the
// same ApiResponse<T> can describe a response containing a User, a
// Product, or anything else, without losing the specific type of `data`.
interface ApiResponse<T> {
  status: number;
  data: T;
}

interface User {
  id: number;
  username: string;
}

const response: ApiResponse<User> = {
  status: 200,
  data: {
    id: 101,
    username: "alice",
  },
};

console.log(response.data.username);

export {};
