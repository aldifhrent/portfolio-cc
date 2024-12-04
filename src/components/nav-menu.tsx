const menu = [
  {
    name: "About Me",
    href: "/about",
  },
  {
    name: "Skills",
    href: "/skills",
  },
  {
    name: "Project",
    href: "/project",
  },
  {
    name: "Contact Me",
    href: "/contact",
  },
];
export default function NavMenu() {
  return (
    <nav className="hidden lg:flex items-center gap-8 ">
      {menu.map((item) => (
        <p className="text-xl font-bold leading-6 tracking-[-2%] hover:cursor-pointer hover:underline hover:underline-offset-8">
          {item.name}
        </p>
      ))}
    </nav>
  );
}
