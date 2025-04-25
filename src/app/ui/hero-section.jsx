import Image from "next/image";
import HeroItem from "./hero-item";

export default function HeroSection() {
  return (
    <section className="">
      <div className="flex flex-col gap-4 mb-6">
        <div className="bg-[#79716d] mx-4 flex flex-col justify-start gap-8 h-[calc(100vh-80px)] text-white rounded-3xl overflow-clip p-6 relative">
          <h1 className="text-6xl leading-[70px]">
            Color of <br /> Summer <br /> Outfit
          </h1>
          <h2 className="text-base">
            100+ Collections for your outfit inspirations in this summer
          </h2>
          <button className="py-4 z-10 bg-black rounded-full text-center w-full text-sm leading-normal tracking-wide">
            VIEW COLLECTIONS
          </button>
          <Image
            className="absolute top-0 left-0 w-full h-full object-contain object-bottom-right"
            src={"/images/5e143183ca0df25c3d226a223269e70541e09760.png"}
            alt="image"
            width={1100}
            height={1100}
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
      </div>
      <div className="flex flex-col gap-8 mx-4">
        <h3 className="text-6xl leading-[65px]">Casual Inspirations</h3>
        <p className="text-lg">
          Our favorite combinations for casual outfit that can inspire you to
          apply on your daily activity.
        </p>
        <button className="py-4 w-full rounded-full border-[1px] text-md font-medium leading-normal tracking-wide">
          BROWSE INPIRATIONS
        </button>
      </div>
    </section>
  );
}
