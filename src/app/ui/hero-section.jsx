import Image from "next/image";
import HeroItem from "./hero-item";

export default function HeroSection() {
  return (
    <section className="2xl:mx-4  ">
      <div className="flex flex-col 2xl:flex-row gap-4 mb-6">
        <div className="2xl:w-full bg-[#79716d] mx-4 2xl:mx-0 flex flex-col justify-start gap-8 h-[calc(90vh-80px)] text-white rounded-3xl overflow-clip p-6 2xl:p-[60px] relative">
          <h1 className="z-10 text-6xl 2xl:text-8xl leading-[70px] font-normal 2xl:leading-[90px]">
            Color of <br /> Summer <br /> Outfit
          </h1>
          <h2 className="z-10 text-base 2xl:text-lg">
            100+ Collections for your outfit inspirations in this summer
          </h2>
          <button className="py-4 z-10 bg-black rounded-full text-center w-full 2xl:w-96 text-sm leading-normal 2xl:font-medium tracking-wide">
            VIEW COLLECTIONS
          </button>
          <Image
            className="absolute top-0 left-0 object-contain object-bottom-right 2xl:object-cover"
            src={"/images/5e143183ca0df25c3d226a223269e70541e09760.png"}
            alt="image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 70vw"
            style={{ objectPosition: "right bottom" }}
          />
        </div>
        <div className="w-fit flex flex-row 2xl:flex-col gap-4 overflow-auto 2xl:overflow-visible px-4 2xl:px-0">
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
        <button className="hover:bg-green-200 transition-all duration-200 py-4 w-full rounded-full border-[1px] text-md font-medium leading-normal tracking-wide">
          BROWSE INPIRATIONS
        </button>
      </div>
    </section>
  );
}
