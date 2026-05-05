const createPlaceholder = (text, color) =>
  `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <rect width="300" height="300" fill="${color}"/>
      <text x="150" y="150" font-family="Arial" font-size="20" 
        fill="white" text-anchor="middle" dominant-baseline="middle"
        font-weight="bold">${text}</text>
    </svg>
  `)}`;

const products = [
  {
    id: 1,
    name: "Running Shoes",
    price: 99,
    category: "Clothing",
    brand: "Nike",
    rating: 4,
    image: createPlaceholder("Running Shoes", "#3b82f6"),
    description: "Lightweight and comfortable running shoes perfect for daily use and marathon training.",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 129,
    category: "Electronics",
    brand: "Sony",
    rating: 5,
    image: createPlaceholder("Headphones", "#8b5cf6"),
    description: "Premium wireless headphones with noise cancellation and 30 hour battery life.",
  },
  {
    id: 3,
    name: "Backpack",
    price: 49,
    category: "Clothing",
    brand: "Adidas",
    rating: 4,
    image: createPlaceholder("Backpack", "#10b981"),
    description: "Spacious and durable backpack with multiple compartments for everyday use.",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 249,
    category: "Electronics",
    brand: "Apple",
    rating: 5,
    image: createPlaceholder("Smartwatch", "#f59e0b"),
    description: "Feature packed smartwatch with health tracking GPS and always on display.",
  },
  {
    id: 5,
    name: "Sunglasses",
    price: 149,
    category: "Clothing",
    brand: "Rayban",
    rating: 4,
    image: createPlaceholder("Sunglasses", "#ec4899"),
    description: "Stylish UV protected sunglasses suitable for all face shapes and outdoor activities.",
  },
  {
    id: 6,
    name: "Digital Camera",
    price: 499,
    category: "Electronics",
    brand: "Canon",
    rating: 4,
    image: createPlaceholder("Digital Camera", "#ef4444"),
    description: "High resolution digital camera with 4K video recording and optical image stabilization.",
  },
  {
    id: 7,
    name: "T-Shirt",
    price: 29,
    category: "Clothing",
    brand: "HM",
    rating: 3,
    image: createPlaceholder("T-Shirt", "#06b6d4"),
    description: "Soft and breathable cotton t-shirt available in multiple colors and sizes.",
  },
  {
    id: 8,
    name: "Smartphone",
    price: 699,
    category: "Electronics",
    brand: "Samsung",
    rating: 4,
    image: createPlaceholder("Smartphone", "#6366f1"),
    description: "Latest smartphone with triple camera setup 5G connectivity and all day battery life.",
  },
  {
    id: 9,
    name: "Coffee Table",
    price: 199,
    category: "Home",
    brand: "Ikea",
    rating: 4,
    image: createPlaceholder("Coffee Table", "#84cc16"),
    description: "Modern minimalist coffee table made from solid wood with a matte finish.",
  },
  {
    id: 10,
    name: "Desk Lamp",
    price: 39,
    category: "Home",
    brand: "Philips",
    rating: 4,
    image: createPlaceholder("Desk Lamp", "#f97316"),
    description: "LED desk lamp with adjustable brightness and color temperature for comfortable reading.",
  },
];

export default products;