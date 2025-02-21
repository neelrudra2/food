import { products } from "@/data/products";
import ProductCard from "@/components/common/ProductCard";

export default function BeveragesPage() {
  const beverages = products.filter(
    (product) => product.category === "beverages"
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Beverages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {beverages.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
