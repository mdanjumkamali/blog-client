"use client";
import { Button } from "@/components/ui/button";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import DarkMode from "../darkmode/DarkMode";

interface link {
  id: number;
  label: string;
  link: string;
}

const links: link[] = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "AI",
    link: "/",
  },
  {
    id: 3,
    label: "WEB3",
    link: "/",
  },
  {
    id: 4,
    label: "REACTJS",
    link: "/",
  },
  {
    id: 5,
    label: "CLOUD",
    link: "/",
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  const handleToggle = () => {
    setMenu(!menu);
  };

  return (
    <div className="flex gap-6 items-center">
      <div className="text-2xl flex-1 md:flex-none md:text-4xl font-semibold ">
        Blog
      </div>

      {/* navlink */}
      <div className="hidden md:flex items-center gap-8 flex-1 ml-9 text-lg">
        {links.map((link) => (
          <Link
            href={link.link}
            key={link.label}
            className={
              active === link.id
                ? "border-b-2 border-black dark:border-white"
                : "hover:border-b-2 dark:hover:border-white hover:border-black"
            }
            onClick={() => setActive(link.id)}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* dark mode */}
      <DarkMode />

      {/* login button */}
      <div className="hidden md:block ">
        <Button asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>

      {/* mobile */}
      <div className=" md:hidden cursor-pointer">
        <HamburgerMenuIcon onClick={handleToggle} />
      </div>

      {menu && (
        <div className="absolute h-screen top-0 right-0 bg-white dark:bg-black text-black dark:text-white  w-[70%] transition ease-in-out">
          <div className="absolute right-4 top-4  cursor-pointer">
            <Cross1Icon className="w-6 h-6" onClick={handleToggle} />
          </div>
          <div className="flex flex-col items-center justify-center mt-40">
            <div className="flex flex-col gap-2 text-2xl ">
              {links.map((link) => (
                <Link
                  href={link.link}
                  key={link.label}
                  className={
                    active === link.id
                      ? "border-b-2 border-white"
                      : "hover:border-b-2 dark:hover:border-white hover:border-black "
                  }
                  onClick={() => setActive(link.id)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
