"use client";
import { useAppDispatch, useAppSelector } from "@/redux/redux.hooks";
import { Avatar } from "@radix-ui/react-avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import MobileMenu from "./MobileMenu";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { logoutThunk } from "@/redux/thunks/auth.thunk";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const avatar = useAppSelector((state) => state.user.avatar);
  const path = usePathname();
  const avatarUrl = avatar || "https://github.com/shadcn.png";

  return (
    <div className="border px-10 lg:px-48 py-3 bg-white bg-opacity-20 shadow-lg shadow-black/10 backdrop-blur-sm sticky top-0">
      <div className="flex items-center justify-between my-y">
        <div>
          <Link href="/" className="text-2xl font-semibold cursor-pointer">
            Blogs.
          </Link>
        </div>
        <div className="hidden lg:flex gap-8">
          <Link
            href="/"
            className={
              path === "/"
                ? "underline underline-offset-4 font-semibold"
                : ` hover:underline hover:underline-offset-4 hover:font-semibold`
            }
          >
            My Feed
          </Link>
          <Link
            href="#"
            className={
              path === "/new-articles"
                ? "underline underline-offset-4 font-semibold"
                : ` hover:underline hover:underline-offset-4 hover:font-semibold`
            }
          >
            New Articles
          </Link>
          <Link
            href="#"
            className={
              path === "/about-us"
                ? "underline underline-offset-4 font-semibold"
                : ` hover:underline hover:underline-offset-4 hover:font-semibold`
            }
          >
            About Us
          </Link>
        </div>

        <div className="hidden lg:block">
          {isAuthenticated ? (
            <div className="flex gap-6 items-center">
              <Button asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Popover>
                <PopoverTrigger>
                  <Avatar>
                    <AvatarImage
                      src={avatarUrl}
                      alt="avatar"
                      className="w-10 h-10 rounded-full cursor-pointer"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="flex justify-center w-fit">
                  <Button onClick={() => dispatch(logoutThunk())}>
                    Logout
                  </Button>
                </PopoverContent>
              </Popover>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Signup</Link>
              </Button>
            </div>
          )}
        </div>

        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
