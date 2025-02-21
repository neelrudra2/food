"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "./CartContext";

const ProductCard = ({ product }) => {
  const { name, price, description, image, id } = product;
  const { cart, addToCart } = useCart();

  const isInCart = cart.some((item) => item.id === id);

  return (
    <Card className="h-full flex flex-col hover:cursor-pointer hover:scale-105 transition-transform duration-200 shadow-md hover:shadow-lg">
      <CardContent className="p-4">
        <div className="aspect-square relative mb-3">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-gray-500 mt-2">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="mt-auto p-4 pt-0">
        <div className="flex items-center justify-between w-full">
          <p className="font-semibold text-lg">₹{price.toFixed(0)}</p>
          <Button onClick={() => addToCart(product)} disabled={isInCart}>
            {isInCart ? "Added" : "Add to Cart"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
