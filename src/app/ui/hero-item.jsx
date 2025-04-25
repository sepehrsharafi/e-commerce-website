import Image from "next/image";

export default function HeroItem({ imgSrc, text }) {
  return (
    <div className="flex-shrink-0 relative w-52 h-48 p-6 rounded-3xl overflow-clip">
      <Image
        className="absolute -z-10 w-52 h-48 object-cover object-left"
        src={imgSrc}
        alt="image"
        fill
      />
      <h2 className="text-3xl">{text}</h2>
    </div>
  );
}
