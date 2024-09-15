import React from "react";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: ["400"],
  display: "swap",
  style: "normal",
  subsets: ["latin-ext"],
});

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <aside className="flex items-end">
        <p
          className={`${pacifico.className} font-bold text-xl lg:text-2xl xl:text-3xl tracking-wide`}
        >
          Timi <span className="text-4xl text-green-300">.</span>
        </p>
      </aside>
      <aside>something</aside>
    </nav>
  );
};

export default Navbar;
