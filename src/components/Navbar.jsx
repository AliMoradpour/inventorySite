const Navbar = () => {
  return (
    <div className="h-12 flex items-center gap-x-4 bg-slate-700 mb-6 justify-center">
      <h1 className="md:text-xl text-sm font-bold text-slate-300 ">
        Inventory App Using Tailwind & React.js
      </h1>
      <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 text-slate-300">
        7
      </span>
    </div>
  );
};

export default Navbar;
