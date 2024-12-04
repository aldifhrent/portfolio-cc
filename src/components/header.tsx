import { Menu } from "lucide-react";
import NavMenu from "./nav-menu";

export default function Header() {
  return (
    <header className="py-6 max-w-screen xl:max-w-[1440px] mx-auto">
      <div className="flex justify-between items-center mx-auto py-2 px-8">
        <div className="flex gap-2 items-center p-1">
          <img src="/logo.svg" />
          <p className="font-bold text-xl">Persona Website</p>
        </div>

        <NavMenu />
        <button className="hidden lg:flex w-[153px] h-[56px] bg-black text-white  items-center justify-center gap-2 font-semibold text-xl leading-6 tracking-[2%] rounded-lg">
          Resume
          <img src="./download-icon.svg" />
        </button>
        <Menu className="text-black block lg:hidden" />
      </div>
    </header>
  );
}
