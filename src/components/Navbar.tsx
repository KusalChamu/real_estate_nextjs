import { NAVBAR_HEIGHT } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 shadow-xl"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      <div className="flex justify-between items-center w-full py-3 px-8 bg-[var(--color-primary-500)] text-white">
        {/* Logo and Brand */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/" scroll={false} className="cursor-pointer">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Rentiful Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="text-xl font-bold">
                RENT
                <span className="text-[var(--color-secondary-500)] font-light hover:text-[var(--color-primary-100)]">
                  IFUL
                </span>
              </div>
            </div>
          </Link>
        </div>
        <p className="text-primary-100 hidden md:block">
            Discover Your Perfect Rental Apartment With Our Advanced Search
        </p>
        <div className="flex items-center gap-5">
            <Link href="/signin">
                <Button variant="outline"
                className="text-white border-white bg-transparent hover:bg-white hover:text-primary-500 rounded-lg">Sign In</Button>
            </Link>
            <Link href="/signup">
                <Button variant="outline"
                className="text-white border-white bg-transparent hover:bg-secondary-500 hover:text-primary-500 rounded-lg">Sign Up</Button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
