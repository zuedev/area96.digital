const links = [
  {
    text: "Services",
    href: "https://github.com/zuedev/area96.digital/blob/main/documentation/services.md",
    target: "_blank",
  },
  {
    text: "Contact",
    href: "mailto:contact@area96.digital",
  },
];

export default function Navigation() {
  return (
    <>
      <ul className="flex space-x-4 text-yellow-500 text-lg font-semibold">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target={link.target || "_self"}
              className="hover:text-orange-500 hover:underline"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
