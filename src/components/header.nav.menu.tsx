import { menu } from "@/const/const";

export default function NavMenu() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="hidden lg:flex items-center gap-8 ">
      {menu.map((item) => (
        <p
          key={item.name}
          className="text-xl font-bold leading-6 tracking-[-2%] hover:cursor-pointer hover:underline hover:underline-offset-8"
          onClick={() => scrollToSection(item.id)}
        >
          {item.name}
        </p>
      ))}
    </nav>
  );
}
