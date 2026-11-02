// Run from the repository root: npx tsx lectures/10-typescript-classes-generics-and-enums/examples/04-generics-2.ts

// Generate a generic function example from real-world usage scenarios. Make it simple and easy to understand.
// Generate docs
/**
 * Wraps a value in an array.
 * @template T - The type of the value to wrap.
 * @param value - The value to wrap in an array.
 * @returns An array containing the value.
 */
function wrapInArray<T>(value: T): T[] {
  return [value];
}

// Example usage:
const numberArray = wrapInArray(42);
const stringArray = wrapInArray("hello");

console.log("Number array:", numberArray);
console.log("String array:", stringArray);

// The wrapInArray function is generic, so it works with any type.
const booleanArray = wrapInArray(true);
console.log("Boolean array:", booleanArray);

// The wrapInArray function can also be used with objects.
const objectArray = wrapInArray({ name: "Alice", age: 30 });
console.log("Object array:", objectArray);

// The wrapInArray function can also be used with arrays.
const arrayArray = wrapInArray([1, 2, 3]);
console.log("Nested array:", arrayArray);

// The wrapInArray function can also be used with functions.
const functionArray = wrapInArray(() => console.log("Hello, world!"));
console.log("Function array:", functionArray);

// The wrapInArray function can also be used with tuples.
const tupleArray = wrapInArray([1, "hello"] as [number, string]);
console.log("Tuple array:", tupleArray);

// The wrapInArray function can also be used with null and undefined.
const nullArray = wrapInArray(null);
const undefinedArray = wrapInArray(undefined);
console.log("Null array:", nullArray);
console.log("Undefined array:", undefinedArray);

export {};