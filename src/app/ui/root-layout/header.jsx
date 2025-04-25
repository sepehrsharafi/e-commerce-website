export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center p-6 z-[999]">
      <h1 className="font-extrabold text-2xl">ECOMMERCE</h1>
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6H20M4 12H20M4 18H20"
          stroke="black"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </header>
  );
}
