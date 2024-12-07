import { Menu } from "lucide-react";
import { useState } from "react";
import NavMenu from "./header.nav.menu";
import MobileMenu from "./header.mobile.menu";

export default function Header() {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header
      className={`py-6 max-w-screen  mx-auto shadow-xl  sticky top-0  bg-white`}
    >
      <div className="flex justify-between items-center mx-auto py-2 px-8">
        {/* Logo */}

        <img src="/logo.svg" alt="Logo" />

        {/* Desktop Navigation */}
        <NavMenu />
        <button className="hidden lg:flex w-[153px] h-[56px] bg-black text-white items-center justify-center gap-2 font-semibold text-xl leading-6 tracking-[2%] rounded-lg">
          Resume
          <img src="./download-icon.svg" alt="Download Icon" />
        </button>

        <Menu
          className="text-black block lg:hidden cursor-pointer "
          onClick={handleNav}
        />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={nav} handleClose={handleNav} />
    </header>
  );
}
