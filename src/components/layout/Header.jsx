"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Beverages", href: "/beverages" },
    { name: "Snacks", href: "/snacks" },
  ];

  return (
    <header className="border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Brand Name - Links to Homepage */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png" // Update with your actual logo path
              alt="Flavours of Agartala Logo"
              width={50} // Adjust size as needed
              height={50}
              className="rounded-md"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/account" className="text-gray-700 hover:text-gray-900">
              <User className="h-5 w-5" />
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/account"
                    className="flex items-center space-x-2 text-lg font-medium text-gray-700 hover:text-gray-900"
                  >
                    <User className="h-5 w-5" />
                    <span>Account</span>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
