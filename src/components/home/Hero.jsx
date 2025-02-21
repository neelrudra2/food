"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpeg"
          alt="Café background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Welcome to Flavours of Agartala
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Savor delicious meals, quick bites, and refreshing drinks — all
            freshly made to satisfy your cravings!
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/menu">View Menu</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white"
            >
              <Link href="/snacks">Explore Snacks</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
