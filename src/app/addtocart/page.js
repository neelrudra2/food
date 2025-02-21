"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/common/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const router = useRouter();

  // Calculate total price
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% tax (optional)
  const total = subtotal + tax;

  // Handle Pay Now Click
  const handlePayNow = () => {
    clearCart(); // Empty the cart
    router.push("/payment"); // Redirect to Homepage
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {/* Cart Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 shadow-md bg-white"
              >
                <div className="relative w-full aspect-square mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    className="object-cover rounded-md"
                  />
                </div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">{item.description}</p>
                <p className="font-bold text-lg mt-2">
                  ₹{item.price.toFixed(0)}
                </p>

                {/* Quantity Selector */}
                <div className="flex items-center mt-4">
                  <Button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                    }
                    variant="secondary"
                  >
                    -
                  </Button>
                  <span className="mx-3 text-lg">{item.quantity}</span>
                  <Button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    variant="secondary"
                  >
                    +
                  </Button>
                </div>

                {/* Remove Button */}
                <Button
                  onClick={() => removeFromCart(item.id)}
                  variant="destructive"
                  className="mt-4 w-full"
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>

          {/* Billing Summary Section */}
          <div className="mt-10 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg border">
            <h2 className="text-2xl font-semibold border-b pb-3 mb-4">
              Billing Summary
            </h2>

            <div className="flex justify-between text-lg font-medium mb-2">
              <span>Subtotal:</span>
              <span>₹{subtotal.toFixed(0)}</span>
            </div>

            <div className="flex justify-between text-lg font-medium mb-2">
              <span>Taxes (10%):</span>
              <span>₹{tax.toFixed(0)}</span>
            </div>

            <div className="flex justify-between text-xl font-bold mt-3 border-t pt-3">
              <span>Total:</span>
              <span>₹{total.toFixed(0)}</span>
            </div>

            {/* Pay Now Button (Redirects to Homepage) */}
            <Button
              onClick={handlePayNow}
              className="w-full mt-6 text-lg bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
            >
              Pay Now
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
