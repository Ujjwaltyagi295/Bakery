export default function Navbar() {
  const menu = [
    { name: "HOME" },
    { name: "ABOUT US" },
    { name: "PRODUCTS" },
    { name: "RECIPES" },
    { name: "CONTACT" },
  ];

  return (
    <div className="w-full bg-[#2c1101] ">
      <div className="mx-auto  flex w-full max-w-7xl items-center justify-between py-6 px-5">
      
        <div className="text-white  cursor-pointer italic text-3xl">
          Bakery
        </div>

        <nav className="hidden md:flex  items-center gap-x-14">
          {menu.map((m) => (
            <div key={m.name} className="text-white/90 cursor-pointer tracking-wide">
              {m.name}
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button className="rounded-full cursor-pointer bg-[#f0b21a] px-5 py-3 text-[#2e1e15] font-medium">
            Book a table
          </button>
        </div>
      </div>
    </div>
  );
}
