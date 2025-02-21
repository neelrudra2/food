import Hero from "@/components/home/Hero";
import FeaturedItems from "@/components/home/FeaturedItems";
import Categories from "@/components/home/Categories";

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <FeaturedItems />
      <Categories />
    </div>
  );
}
