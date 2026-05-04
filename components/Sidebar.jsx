"use client";

const categories = ["All", "Electronics", "Clothing", "Home"];
const brands = ["All", "Nike", "Sony", "Apple", "Samsung", "Adidas", "Rayban", "Canon", "HM", "Ikea", "Philips"];

export default function Sidebar({
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice,
  selectedBrand,
  setSelectedBrand,
}) {
  return (
    <aside className="bg-blue-700 text-white rounded-lg p-5 w-64 shrink-0 h-fit">

      <h2 className="font-bold text-lg mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="font-semibold text-sm mb-3">Category</h3>
        <div className="flex flex-col gap-2">
          {categories.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-2 text-sm cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                value={cat}
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(cat)}
                className="accent-white"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-sm mb-3">Price</h3>
        <input
          type="range"
          min={0}
          max={1000}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-white"
        />
        <div className="flex justify-between text-xs mt-1">
          <span>0</span>
          <span>${maxPrice}</span>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-sm mb-3">Brand</h3>
        <div className="flex flex-col gap-2">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-2 text-sm cursor-pointer"
            >
              <input
                type="radio"
                name="brand"
                value={brand}
                checked={selectedBrand === brand}
                onChange={() => setSelectedBrand(brand)}
                className="accent-white"
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

    </aside>
  );
}