// Run from the repository root: npx tsx lectures/10-typescript-classes-generics-and-enums/examples/01-classes-and-access-modifiers.ts

// A class defines the structure and behavior of objects created with `new`.
class User {
  username: string;
  private role: string;

  constructor(username: string, role: string) {
    this.username = username;
    this.role = role;
  }

  getDescription(): string {
    return `${this.username} is a ${this.role}`;
  }

  getRole(): string {
    return this.role;
  }

  setRole(role: string): void {
    // add more validations with regex for text that is 10 characters long and includes number too
    if (!role) {
      throw new Error("Role cannot be empty");
    }
    const isValidRole = /^(?=.*\d)[a-zA-Z\d]{10}$/.test(role);
    if (!isValidRole) {
      throw new Error("Role must be 10 characters long and include at least one number");
    }
    this.role = role;
  }
}

const user1 = new User("alice", "admin");

console.log(user1.getDescription());
console.log(user1.getRole());
user1.setRole("fdfdfDDf2f");
console.log(user1.getDescription());
console.log(user1.getRole());

// Access modifiers control which code can read or change a property.
// public (the default) is accessible from anywhere; private only inside
// the declaring class; protected inside the class and its subclasses.
class TestUserNew {
  public username: string;
  private password: string;
  protected role: string;

  constructor(username: string, password: string, role: string) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  public getUsername(): string {
    return this.username;
  }

  public validatePassword(input: string): boolean {
    return this.password === input;
  }
}

const testUser = new TestUserNew("alice", "secret123", "admin");

console.log(testUser.username);
console.log(testUser.getUsername());
console.log(testUser.validatePassword("secret123"));

// Uncommenting the next line would fail to compile: password is private.
// console.log(testUser.password);

const testObject = {
  testUser: "test123",
  role: "admin",
  password: "secret123"
}

console.log(testObject);
console.log(testObject.role);
console.log(testObject.password);

export {};
