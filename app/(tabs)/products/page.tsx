import ListProduct from "@/components/list-product";
import db from "@/libs/db";

async function getProducts() {
  const products = await db.product.findMany({
    select: {
      id: true,
      title: true,
      photo: true,
      price: true,
      created_at: true,
    },
  });
  return products;
}

export default async function ProductPage() {
  const products = await getProducts();
  return (
    <div className="flex flex-col gap-5 p-5">
      {products.map((product) => (
        <ListProduct key={product.id} {...product} />
      ))}
    </div>
  );
}
