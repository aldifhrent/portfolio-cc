import { menu } from "@/const/const";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  handleClose: () => void;
}

export default function MobileMenu({ isOpen, handleClose }: MobileMenuProps) {
  return (
    <nav
      className={`fixed top-0 left-0 w-full h-full p-6 bg-slate-100 shadow-md transform transition-transform duration-300 items-center justify-center lg:hidden ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center p-1">
          <img src="/logo.svg" alt="Logo" />
          <p className="font-bold text-xl">Persona Website</p>
        </div>
        <div className="flex justify-end p-4">
          <button
            className="text-black font-bold text-xl"
            onClick={handleClose}
          >
            <X />
          </button>
        </div>
      </div>

      <ul className="flex flex-col items-start p-4 gap-4">
        {menu.map((item, index) => (
          <li
            key={index}
            className="text-xl font-bold leading-6 tracking-[-2%] hover:cursor-pointer hover:underline hover:underline-offset-8"
          >
            {item.name}
          </li>
        ))}
        <button className="flex w-[153px] h-[56px] bg-black text-white items-center justify-center gap-2 font-semibold text-xl leading-6 tracking-[2%] rounded-lg">
          Resume
          <img src="./download-icon.svg" alt="Download Icon" />
        </button>
      </ul>
    </nav>
  );
}
