import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  // If no products match the filter
  if (products.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 w-full">
        <p className="text-gray-500 text-lg">
          No products found. Try a different filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}