import { MagicTabSelect } from "react-magic-motion";
import { useState } from "react";

const navigation = [
  { name: "about", href: "#about", current: false },
  { name: "skills", href: "#skills", current: false },
  { name: "projects", href: "#projects", current: false },
  { name: "experience", href: "#experiences", current: false },
  { name: "contact", href: "#contact", current: false },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [animationComplete] = useState(false);

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4 sm:px-6 md:px-10">
      <nav className="pointer-events-auto backdrop-blur-md rounded-2xl shadow-lg mt-4">
        <div className="relative flex h-12 sm:h-14 md:h-16 items-center justify-center px-2 sm:px-4">
          <div className="flex flex-1 items-center justify-center">
            <nav className="w-full">
              <div className="flex w-full justify-between items-center gap-1 sm:gap-2">
                {navigation.map((item, i) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onMouseEnter={() => setHoveredIndex(i)}
                    className={`relative rounded-full no-underline font-medium text-xs sm:text-sm md:text-lg px-2 sm:px-3 md:px-4 py-1 sm:py-2 transition-colors duration-300 ${
                      hoveredIndex === i && animationComplete ? "text-black" : "text-yellow-100"
                    }`}
                  >
                    {hoveredIndex === i && (
                      <MagicTabSelect
                        id="navTabs"
                        transition={{ type: "spring", bounce: 0.35 }}
                      >
                        <span className="absolute inset-0 bg-orange-400 rounded-full" />
                      </MagicTabSelect>
                    )}
                    <span className="relative z-20">{item.name}</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
}
