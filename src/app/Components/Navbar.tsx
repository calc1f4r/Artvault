"use client";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { Paintings } from "@/app/contents/contents";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useAccount } from "wagmi";

import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const menuItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Paintings",
    href: "/paintings",
  },
  {
    name: "Contact",
    href: "/contact-us",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const menuRef = React.useRef(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const account = useAccount();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  React.useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        menuRef.current &&
        event.target &&
        (menuRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-3">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex gap-2 items-center">
              <Image src={"/logo.png"} alt="Artvault" width={50} height={50} />
              <p className="text-xl block font-semibold italic">Artvault</p>
            </div>
          </Link>
        </div>
        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Paintings</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {Paintings.map((painting) => (
                      <ListItem
                        key={painting.title}
                        title={painting.title}
                        href={painting.href}>
                        {painting.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact-us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {/* Dark mode setting */}
        <div>
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            <SunIcon className="h-[0.8rem] w-[0.8rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
            <MoonIcon className="absolute h-[0.8rem] w-[0.8rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
          </Button>
        </div>
        <w3m-button />
        {account.address ? (
          <Link href={"/profile"}>
            <Avatar className="hover:scale-125 transition-all duration-200 ">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        ) : (
          ""
        )}
        <div className="lg:hidden">
          <Menu
            onClick={toggleMenu}
            className="h-6 w-6 cursor-pointer transition-all duration-200"
          />
        </div>
        <div ref={menuRef}>
          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden sm:px-12 bg-white h-screen dark:bg-zinc-950 ">
              <div className="divide-y-2 divide-gray-50 dark:divide-gray-700 rounded-lg   ring-1 ring-black ring-opacity-5 ">
                <div>
                  <div className="flex items-center justify-between">
                    <Link href="/">
                      <div className="inline-flex items-center space-x-2">
                        <Image
                          src={"/logo.png"}
                          alt="Artvault"
                          width={50}
                          height={50}
                        />
                        <p className="text-xl block font-semibold italic">
                          Artvault
                        </p>
                      </div>
                    </Link>
                    <div className="mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 ">
                    <nav className="grid items-center justify-center gap-y-3">
                      {menuItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center border-b-4 hover:scale-90 rounded-full px-20 py-3 text-sm font-semibold dark:text-white hover:bg-stone-950 hover:text-white transition-all duration-200 dark:hover:scale-110">
                          <span className="ml-3 text-base font-medium ">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
