"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { LogIn, Menu, X } from "lucide-react";
// import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const pathname = usePathname();
  return (
    <div className="flex justify-between items-center max-w-[1400px] mx-auto px-3 md:px-6 py-4 border-b shadow-sm">
      <Link href="/">
        <label className="font-bold cursor-pointer text-[30px] md:text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-[#0A2C66] via-[#0A2C66] to-[#00E6A9]">
          BlockGuard
        </label>
      </Link>

      <div className="hidden md:flex space-x-6 text-[#454545]">
        <Link href="/overview">Overview</Link>
        <Link href="/events">Events</Link>
        <Link href="/how-it-works">How It Works</Link>
      </div>

      <div className="hidden md:flex space-x-3">
        <Link href="/setup">
          <Button className="bg-[#0A2C66]">
            <LogIn className="w-4 h-4 mr-2" /> Sign Up
          </Button>
        </Link>
        <Link href="/signin">
          <Button variant="outline" className="text-[#005544]">
            <LogIn className="w-4 h-4 mr-2" /> Sign In
          </Button>
        </Link>
      </div>

      <section className="flex md:hidden items-center">
        <div
          className="space-y-2 pr-2"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <Menu className="h-7 w-7" />
        </div>

        <div
          className={
            isNavOpen
              ? "absolute top-0 left-0 w-full h-screen z-10 flex justify-around flex-col items-center bg-white"
              : "hidden"
          }
        >
          <div
            className="absolute top-0 right-0 px-6 pt-8"
            onClick={() => setIsNavOpen(false)}
          >
            <X className="h-7 w-7" />
          </div>
          <div className="flex flex-col items-center justify-between min-h-[250px] w-full px-3 uppercase text-[#454545]">
            <Link href="/overview" className="font-semibold">
              Overview
            </Link>
            <Link href="/events" className="font-semibold">
              Events
            </Link>
            <Link href="/how-it-works" className="font-semibold">
              How It Works
            </Link>

            <div className="space-x-3">
              <Link href="/setup">
                <Button className="bg-[#0A2C66]">
                  <LogIn className="w-4 h-4 mr-2" /> Sign Up
                </Button>
              </Link>
              <Link href="/signin">
                <Button variant="outline" className="text-[#005544]">
                  <LogIn className="w-4 h-4 mr-2" /> Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
