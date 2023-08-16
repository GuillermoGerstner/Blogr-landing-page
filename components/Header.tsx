"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "./Button";
import HeaderSubmenu from "./HeaderSubmenu";
import ModalSubmenu from "./ModalSubmenu";

import { navbar } from "@/constants";

import logo from "@/public/logo.svg";
import menu from "@/public/icon-hamburger.svg";
import close from "@/public/icon-close.svg";

const Header = () => {
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        setModal(false);
      }
    });
  }, []);

  return (
    <header className="absolute z-50 flex items-center justify-between top-14 tablet:top-[59px] left-6 right-6 tablet:pl-[6px] tablet:max-w-[1118px] tablet:mx-auto">
      <div className="flex items-center">
        <Image src={logo} alt="logo" className="w-[82px] tablet:w-[101px]" />
        <nav className="ml-16 h-6 hidden tablet:flex gap-8">
          {navbar.map((menu) => (
            <div key={menu.subtitle}>
              <HeaderSubmenu {...menu} />
            </div>
          ))}
        </nav>
      </div>

      <div className="hidden tablet:flex items-center gap-8">
        <Link href="/" className="text-white font-Ubuntu text-[16px] font-bold">
          Login
        </Link>

        <Button text="Sign Up" styles="" skin="1" />
      </div>

      <Image
        src={modal ? close : menu}
        alt="menu"
        className="w-[32px] tablet:hidden cursor-pointer"
        onClick={() => setModal((prev) => !prev)}
      />

      <div
        className={`absolute top-[69px] modalBg w-full px-6 pt-6 pb-8 flex flex-col gap-6 ${
          modal ? "flex" : "hidden"
        }`}
      >
        {navbar.map((menu) => (
          <div key={menu.subtitle}>
            <ModalSubmenu {...menu} />
          </div>
        ))}
        <hr className="bg-[#E8E4E4] h-[1px] w-full" />
        <Link
          href="/"
          className="text-[#1f3e5a] text-center font-Overpass text-[18px] font-semibold leading-7 w-fit mx-auto"
        >
          Login
        </Link>
        <Button
          text="Sign Up"
          styles="bg-red-400 mx-auto gradientBg hover:text-white"
          skin="2"
        />
      </div>
    </header>
  );
};

export default Header;
