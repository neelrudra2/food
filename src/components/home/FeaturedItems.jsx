"use client";

import ProductCard from "@/components/common/ProductCard";
import { products } from "@/data/products";

const FeaturedItems = () => {
  const filteredProducts = products.filter((product) =>
    ["coffee-2", "coffee-3", "tea-1", "snack-1", "snack-5", "snack-6"].includes(
      product.id
    )
  );

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
