import { Menu } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./header.mobile.menu";
import { Link } from "react-router";
import { menu } from "@/const/const";
import { motion } from "framer-motion";
export default function Header() {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // Adjust for fixed header height
      const yPosition =
        element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });
    } else {
      console.error(`Element with ID "${id}" not found.`);
    }
  };
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-screen mx-auto py-4"
    >
      <div className="flex justify-between items-center mx-auto py-2 px-8">
        {/* Logo */}
        <Link to="/">
          <img src="/logov2.svg" alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 ">
          {menu.map((item) => (
            <motion.p
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl font-bold leading-6 tracking-[-2%] hover:cursor-pointer hover:underline hover:underline-offset-8"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </motion.p>
          ))}
        </nav>

        <button className="hidden lg:flex w-[153px] h-[56px] bg-black text-white items-center justify-center gap-2 font-semibold text-xl leading-6 tracking-[2%] rounded-lg">
          Resume
          <img src="/icons/download-icon.svg" alt="Download Icon" />
        </button>

        <Menu
          className="text-black block lg:hidden cursor-pointer "
          onClick={handleNav}
        />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={nav} handleClose={handleNav} />
    </motion.header>
  );
}
