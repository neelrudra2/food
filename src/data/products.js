export const products = [
  // Beverages - Coffee
  {
    id: "coffee-1",
    name: "Cappuccino",
    category: "beverages",
    subCategory: "coffee",
    price: 30,
    image: "/cap.jpeg",
    description: "Classic Italian coffee with steamed milk foam",
    inStock: true,
  },
  {
    id: "coffee-2",
    name: "Mocha",
    category: "beverages",
    subCategory: "coffee",
    price: 50,
    image: "/mocha.jpg",
    description: "Chocolate-infused coffee delight",
    inStock: true,
  },
  {
    id: "coffee-3",
    name: "Latte",
    category: "beverages",
    subCategory: "coffee",
    price: 40,
    image: "/latte.jpg",
    description: "Smooth coffee with steamed milk",
    inStock: true,
  },
  {
    id: "coffee-4",
    name: "Espresso",
    category: "beverages",
    subCategory: "coffee",
    price: 30,
    image: "/espresso.jpg",
    description: "Strong and aromatic single shot espresso",
    inStock: true,
  },

  // Beverages - Tea
  {
    id: "tea-1",
    name: "Masala Chai",
    category: "beverages",
    subCategory: "tea",
    price: 20,
    image: "/masalatea.jpg",
    description: "Traditional Indian spiced tea",
    inStock: true,
  },
  {
    id: "tea-2",
    name: "Black Tea",
    category: "beverages",
    subCategory: "tea",
    price: 30,
    image: "/blacktea.png",
    description: "Strong black tea with a bold flavor",
    inStock: true,
  },
  {
    id: "tea-3",
    name: "Milk Tea",
    category: "beverages",
    subCategory: "tea",
    price: 20,
    image: "/milktea.jpeg",
    description: "Smooth tea with milk",
    inStock: true,
  },
  {
    id: "tea-4",
    name: "Green Tea",
    category: "beverages",
    subCategory: "tea",
    price: 30,
    image: "/greentea.jpg",
    description: "Refreshing and healthy green tea",
    inStock: true,
  },

  // Beverages - Soft Drinks
  {
    id: "softdrink-1",
    name: "Sprite",
    category: "beverages",
    subCategory: "soft-drinks",
    price: 20,
    image: "/sprite.jpg",
    description: "Refreshing lemon-lime soda",
    inStock: true,
  },
  {
    id: "softdrink-2",
    name: "Coca-Cola",
    category: "beverages",
    subCategory: "soft-drinks",
    price: 20,
    image: "/cocacola.jpg",
    description: "Classic cola beverage",
    inStock: true,
  },
  {
    id: "softdrink-3",
    name: "Pepsi",
    category: "beverages",
    subCategory: "soft-drinks",
    price: 20,
    image: "/pepsi.jpg",
    description: "Smooth and refreshing Pepsi",
    inStock: true,
  },
  {
    id: "softdrink-4",
    name: "Dew",
    category: "beverages",
    subCategory: "soft-drinks",
    price: 20,
    image: "/dew.jpg",
    description: "Sweet and tangy mango juice",
    inStock: true,
  },

  // Snacks
  {
    id: "snack-1",
    name: "Samosa",
    category: "snacks",
    subCategory: "fried-snacks",
    price: 10,
    image: "/samosa.jpg",
    description: "Crispy Indian potato-filled pastry",
    inStock: true,
  },
  {
    id: "snack-2",
    name: "Cheese Sandwich",
    category: "snacks",
    subCategory: "sandwiches",
    price: 30,
    image: "/cheesesw.jpg",
    description: "Grilled cheese sandwich with a crispy crust",
    inStock: true,
  },
  {
    id: "snack-3",
    name: "French Fries",
    category: "snacks",
    subCategory: "fried-snacks",
    price: 30,
    image: "/fries.jpg",
    description: "Crispy golden potato fries",
    inStock: true,
  },
  {
    id: "snack-4",
    name: "Pav Bhaji",
    category: "snacks",
    subCategory: "street-food",
    price: 45,
    image: "/pavbhaji.jpg",
    description: "Spicy mashed vegetable curry with buttered buns",
    inStock: true,
  },
  {
    id: "snack-5",
    name: "Burger",
    category: "snacks",
    subCategory: "rolls",
    price: 30,
    image: "/burger.jpg",
    description: "Juicy veggie burger with fresh toppings in a soft bun.",
    inStock: true,
  },
  {
    id: "snack-6",
    name: "Pizza",
    category: "snacks",
    subCategory: "packaged-snacks",
    price: 80,
    image: "/pizza.jpg",
    description: "Cheesy pizza with fresh veggies and herbs.",
    inStock: true,
  },
  {
    id: "snack-7",
    name: "Momos",
    category: "snacks",
    subCategory: "dumplings",
    price: 50,
    image: "/momo.jpg",
    description: "Steamed dumplings with spicy sauce",
    inStock: true,
  },
  {
    id: "snack-8",
    name: "Masala Dosa",
    category: "snacks",
    subCategory: "south-indian",
    price: 60,
    image: "/dosa.jpg",
    description: "Crispy dosa stuffed with spiced potato filling",
    inStock: true,
  },
];

export const categories = [
  {
    id: "beverages",
    name: "Beverages",
    description:
      "Refreshing hot and cold drinks, including tea, coffee, and soft drinks.",
    image: "/beverages.jpeg",
    subcategories: ["tea", "coffee", "soft-drinks"],
  },
  {
    id: "snacks",
    name: "Snacks",
    description:
      "Tasty bites including sandwiches, fried snacks, and Indian street food.",
    image: "/snacks.jpeg",
    subcategories: [
      "fried-snacks",
      "sandwiches",
      "street-food",
      "rolls",
      "packaged-snacks",
      "dumplings",
    ],
  },
];

export const featuredProducts = products.slice(0, 6);
