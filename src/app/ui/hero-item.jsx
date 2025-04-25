import Image from "next/image";

export default function HeroItem({ imgSrc, text }) {
  return (
    <article className="flex-shrink-0 relative w-52 h-48 2xl:w-96 2xl:h-[calc(45vh-48px)] p-6 rounded-3xl overflow-clip">
      <Image
        className="absolute -z-10 w-52 h-48 object-cover "
        src={imgSrc}
        alt="image"
        fill
      />
      <h2 className="text-3xl 2xl:text-4xl">{text}</h2>
    </article>
  );
}
