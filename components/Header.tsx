import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";
import React from "react";

// Components
import { ThemeToggler } from "./ThemeToggler";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="logo"
          width={120}
          height={100}
          className="cursor-pointer invert-0 dark:invert"
        />

        <div className="flex space-x-2">
          {/* Genredropdown */}
          {/* SearchInput */}
          {/* ThemeToggler */}
          <ThemeToggler />
        </div>
      </Link>
    </header>
  );
};

export default Header;
