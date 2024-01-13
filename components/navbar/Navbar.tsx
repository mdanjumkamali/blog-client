"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Cross1Icon,
  HamburgerMenuIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const { setTheme } = useTheme();
  const [menu, setMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggle = () => {
    setMenu(!menu);
  };
  return (
    <div className="flex gap-6 items-center">
      <div className="text-2xl flex-1 md:flex-none md:text-4xl font-semibold ">
        Blog
      </div>
      <div className="hidden md:flex items-center gap-8 flex-1 ml-9 text-lg">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Tech</Link>
        <Link href={"/"}>AI</Link>
      </div>

      {/* dark mode */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

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
        <div className="absolute h-screen top-0 right-0 bg-black  w-[70%] transition ease-in-out">
          <div className="absolute right-4 top-4">
            <Cross1Icon className="w-6 h-6" onClick={handleToggle} />
          </div>
          <div className="flex flex-col items-center justify-center mt-40">
            <div className="flex flex-col gap-2 text-2xl text-white">
              <Link href={"/"}>Home</Link>
              <Link href={"/"}>Tech</Link>
              <Link href={"/"}>AI</Link>
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
