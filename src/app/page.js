import Image from "next/image";
import HeroSection from "./ui/hero-section";
import BrowseByColor from "./ui/browse-by-color";

export default function Home() {
  return (
    <main className="max-w-[1320px] mx-auto">
      <HeroSection />
      <BrowseByColor />
    </main>
  );
}
