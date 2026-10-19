// Compile from the repository root: npx tsc
// Then run: node lectures/09-introduction-to-typescript/practice/03-interfaces-practice.js
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
