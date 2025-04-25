export default function ColorItem({ color, text }) {
  return (
    <article className="flex flex-row gap-3 px-3 py-2 items-center w-fit border-[1px] rounded-full">
      <div
        style={{ backgroundColor: color }}
        className={`w-8 h-8 rounded-full`}
      />
      <span className="text-sm font-semibold leading-normal tracking-wide">
        {text}
      </span>
    </article>
  );
}
