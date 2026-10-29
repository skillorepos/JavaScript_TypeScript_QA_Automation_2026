// Run from the repository root: npx tsx lectures/10-typescript-classes-generics-and-enums/examples/02-inheritance-and-readonly.ts

// Declaring a constructor parameter as public/protected/private is a
// shorthand: TypeScript creates and assigns the matching property for you.
class TestUser {
  constructor(
    public username: string,
    protected role: string,
  ) {}
}

// A subclass can access protected members inherited from its parent,
// but outside code still cannot reach them directly.
class AdminUser extends TestUser {
  getAdminDescription(): string {
    return `${this.username} has role ${this.role}`;
  }
}

const admin = new AdminUser("alice", "admin");

console.log(admin.getAdminDescription());

// Uncommenting the next line would fail to compile: role is protected.
// console.log(admin.role);

// readonly prevents reassignment after the constructor has run, which is
// useful for configuration values that should not change later.
class TestConfig {
  constructor(
    public readonly baseUrl: string,
    public timeout: number,
  ) {}
}

const config = new TestConfig("https://demo-app.com", 5000);

config.timeout = 10000;
console.log(config);

// Uncommenting the next line would fail to compile: baseUrl is readonly.
// config.baseUrl = "https://other-app.com";

export {};
