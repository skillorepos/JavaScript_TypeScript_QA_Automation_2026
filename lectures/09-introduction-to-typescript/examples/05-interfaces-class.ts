// Run from the repository root: npx tsx lectures/09-introduction-to-typescript/examples/05-interfaces-class.ts

// An interface describes a capability. Any class that `implements` it
// must provide every member, or the code will not compile.
interface Swimmer {
  swimSpeedKmh: number;
  swim(distanceKm: number): string;
}

type MyType = "Pesho" | "Gosho";

// A class describes a blueprint for objects: their data (properties)
// and behavior (methods). This class also promises to follow `Swimmer`.
class Penguin implements Swimmer {
  readonly species: string;
  name: string;
  myType: MyType;
  swimSpeedKmh: number;
  private fishEaten = 0;

  constructor(name: string, species: string, swimSpeedKmh: number, myType: MyType) {
    this.name = name;
    this.species = species;
    this.swimSpeedKmh = swimSpeedKmh;
    this.myType = myType;
  }

  swim(distanceKm: number): string {
    const minutes = Math.round((distanceKm / this.swimSpeedKmh) * 60);
    return `${this.name} swam ${distanceKm} km in ${minutes} minutes`;
  }

  eat(fish: number): void {
    this.fishEaten += fish;
  }

  describe(): string {
    return `${this.name} (${this.species}) has eaten ${this.fishEaten} fish`;
  }
}

const pingu = new Penguin("Pingu", "Emperor", 6, "Pesho");
pingu.eat(3);
console.log(pingu.swim(2));
console.log(pingu.describe());

// A variable can be typed with the interface: only `Swimmer` members
// are available through it, even though the object is a Penguin.
const swimmer: Swimmer = pingu;
console.log(swimmer.swim(1));

// Uncommenting the next lines would fail to compile:
// pingu.species = "Adelie";  // species is readonly
// pingu.fishEaten = 10;      // fishEaten is private
// swimmer.eat(1);            // `eat` is not part of the Swimmer interface
