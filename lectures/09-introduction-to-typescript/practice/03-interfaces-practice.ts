// Run from the repository root: npx tsx lectures/09-introduction-to-typescript/practice/03-interfaces-practice.ts
interface Product {
  name: string;
  price: number;
  inStock?: boolean;
}

const product: Product = {
  name: "Wireless Mouse",
  price: 25,
};

console.log(product);

function printProduct(item: Product): void {
  console.log(`${item.name} - $${item.price}`);
}

printProduct(product);

console.log(
  "Practice: add a readonly sku: string property to Product and try reassigning it after creation.",
);
