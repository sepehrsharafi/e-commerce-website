import Image from "next/image";
import HeroSection from "./ui/hero-section";
import BrowseByColor from "./ui/browse-by-color";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BrowseByColor />
    </main>
  );
}
