"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { HeaderSubmenuProps } from "@/common.types";

import arrow from "@/public/icon-arrow-dark.svg";

const ModalSubmenu = ({ subtitle, links }: HeaderSubmenuProps) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-6">
      <div
        className="w-fit mx-auto flex items-center gap-2 cursor-pointer"
        onClick={() => setIsSubmenuOpen((prev) => !prev)}
      >
        <span
          className={`text-[#1f3e5a] font-Overpass text-[18px] font-semibold leading-7 ${
            isSubmenuOpen ? "opacity-75" : ""
          }`}
        >
          {subtitle}
        </span>
        <Image
          src={arrow}
          alt="arrow"
          className={`w-[10px] ${isSubmenuOpen ? "rotate-180" : ""}`}
        />
      </div>

      <div
        className={`rounded-[5px] bg-[#efeff0] pt-[17px] pb-[25px] flex flex-col gap-3 items-center ${
          isSubmenuOpen ? "flex" : "hidden"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.text}
            href={link.href}
            className="text-[#1f3e5a] hover:text-black font-Overpass text-[16px] font-semibold leading-7 opacity-75"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ModalSubmenu;
