// Run from the repository root: npx tsx lectures/10-typescript-classes-generics-and-enums/practice/01-classes-practice.ts
class TestCase {
  public name: string;
  private description: string;

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
  }

  public getSummary(): string {
    return `${this.name}: ${this.description}`;
  }
}

const loginTest = new TestCase(
  "Login",
  "Validates user login with valid credentials",
);

console.log(loginTest.getSummary());

console.log(
  "Practice: add a protected owner property, then create a subclass that exposes it through a new method.",
);

export {};
