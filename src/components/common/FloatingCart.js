"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/components/common/CartContext";

const FloatingCart = () => {
  const { cart } = useCart();

  return (
    <Link href="/addtocart">
      <div className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 cursor-pointer hover:bg-blue-700 transition">
        <ShoppingCart className="h-6 w-6" />
        <span className="font-bold">{cart.length}</span>
      </div>
    </Link>
  );
};

export default FloatingCart;
