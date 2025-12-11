"use client";

import { useEffect, useState } from "react";
import Logo from "@/src/components/Logo";
import Button from "@/src/components/Button";
import Link from "next/link";

export default function NavigationBar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const pages = [
    { name: "HOME", path: "/" },
    { name: "EVENTS", path: "/events" },
    { name: "GALLERY", path: "/gallery" },
    { name: "PROJECTS", path: "/projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        // scrolling DOWN → hide navbar
        setVisible(false);
      } else {
        // scrolling UP → show navbar
        setVisible(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        flex justify-between items-center
        py-5 px-10 text-white
        bg-black/40 backdrop-blur-md
        transition-transform duration-500
        ${visible ? "translate-y-0" : "-translate-y-full"}
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:w-full after:h-0.5
        after:bg-gradient-to-r after:from-transparent after:via-blue-500/40 after:to-transparent
      `}
    >
      <div className="w-[45px] cursor-pointer hover:scale-110 transition-transform duration-300">
        <Logo />
      </div>

      <ul className="flex gap-10 items-center text-lg font-medium">
        {pages.map((item) => (
          <li
            key={item.name}
            className="cursor-pointer relative group transition-colors duration-300"
          >
            <Link href={`${item.path}`} >
            {item.name}
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>
      <Link href={"/contact-us"}>
        <Button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md">
          CONTACT
        </Button>
      </Link>
    </nav>
  );
}
