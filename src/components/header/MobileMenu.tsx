import { useAppSelector } from "@/redux/redux.hooks";
import { Avatar } from "@radix-ui/react-avatar";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

function MobileMenu() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const avatar = useAppSelector((state) => state.user.avatar);
  const avatarUrl = avatar || "https://github.com/shadcn.png";
  return (
    <Sheet>
      <SheetTrigger>
        <AlignJustify />
      </SheetTrigger>
      <SheetContent>
        <div className="pt-16 flex flex-col gap-4">
          {isAuthenticated && (
            <Avatar>
              <AvatarImage
                src={avatarUrl}
                alt="avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </Avatar>
          )}
          <Link href="/">My Feed</Link>
          <Link href="/new-articles">New Articles</Link>
          <Link href="/about-us">About Us</Link>
          {isAuthenticated ? (
            <>
              <Button asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Signup</Link>
              </Button>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
