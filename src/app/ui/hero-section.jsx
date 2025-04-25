import Image from "next/image";
import HeroItem from "./hero-item";

export default function HeroSection() {
  return (
    <section className="flex flex-col gap-4 mb-6">
      <div className=" mx-4 flex flex-col justify-start gap-8 h-[calc(100vh-80px)] text-white rounded-3xl overflow-clip p-6 relative">
        <h1 className="text-6xl leading-[70px]">
          Color of <br /> Summer <br /> Outfit
        </h1>
        <h2 className="text-base">
          100+ Collections for your outfit inspirations in this summer
        </h2>
        <button className="py-4 bg-black rounded-full text-center w-full text-sm leading-normal tracking-wide">
          VIEW COLLECTIONS
        </button>
        <Image
          className="absolute -z-10 w-full h-full object-cover object-left"
          src={"/images/3071b1fc729091cd0452fb9d0b89106ceec16368.png"}
          alt="image"
          fill
        />
      </div>
      <div className="flex flex-row gap-4 overflow-auto px-4">
        <HeroItem
          imgSrc={"/images/17aa3a2f29a85f64d93c41afa6b64d31b3a88038.png"}
          text={`Outdoor
            Active`}
        />
        <HeroItem
          imgSrc={"/images/837e11f00233936f837e7b69d6a545511b1ba132.png"}
          text={`Casual
            Comfort`}
        />
      </div>
    </section>
  );
}
