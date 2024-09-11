import { resolve } from "path";

async function getProducts() {
  return new Promise((resolve) => setTimeout(resolve, 10000));
}
export default async function ProductPage() {
  const product = await getProducts();
  return (
    <div>
      <h1 className="text-4xl text-white">Project Page</h1>
    </div>
  );
}
