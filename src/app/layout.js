import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import { CartProvider } from "@/components/common/CartContext";
import FloatingCart from "@/components/common/FloatingCart";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flavours of Agartala",
  description: "Your one-stop shop for beverages, and snacks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {" "}
          {/* Wrap everything inside CartProvider */}
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <FloatingCart /> {/* Floating cart button */}
        </CartProvider>
      </body>
    </html>
  );
}
