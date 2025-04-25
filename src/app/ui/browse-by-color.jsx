import ColorItem from "./color-item";

export default function BrowseByColor() {
  return (
    <section className="flex flex-col gap-6 mx-4 my-10">
      <h2 className="text-4xl">Explore by Colors</h2>
      <div className="flex flex-wrap gap-2">
        <ColorItem color={`#E25F5F`} text={`RED PASTEL`} />
        <ColorItem color={`#B8E25F`} text={`LIME GREEN`} />
        <ColorItem color={`#233C6B`} text={`NAVY BLUE`} />
        <ColorItem color={`#DEDEDE`} text={`CLEAN WHITE`} />
        <ColorItem color={`#5FABE2`} text={`BLUE SKY`} />
        <ColorItem color={`#B54EF4`} text={`PURPLE`} />
        <ColorItem color={`#F44E8A`} text={`PINK`} />
        <ColorItem color={`#F4CF4E`} text={`YELLOW`} />
        <ColorItem color={`#44936D`} text={`DARK GREEN`} />
      </div>
    </section>
  );
}
