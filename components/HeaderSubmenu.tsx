"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { HeaderSubmenuProps } from "@/common.types";

import arrow from "@/public/icon-arrow-light.svg";

const HeaderSubmenu = ({ subtitle, links }: HeaderSubmenuProps) => {
  const [isSubmenuHovered, setIsSubmenuHovered] = useState<boolean>(false);

  return (
    <div className="relative" onMouseLeave={() => setIsSubmenuHovered(false)}>
      <div
        className="flex items-baseline gap-2 cursor-pointer"
        onMouseOver={() => setIsSubmenuHovered(true)}
      >
        <span
          className={`text-white font-Ubuntu text-[16px] font-bold ${
            isSubmenuHovered
              ? "opacity-100 underline decoration-2 underline-offset-[3px]"
              : "opacity-75"
          }`}
        >
          {subtitle}
        </span>{" "}
        <Image
          src={arrow}
          alt="arrow"
          className={`w-[10px] ${
            isSubmenuHovered ? "opacity-100 rotate-180" : "opacity-75"
          }`}
        />
      </div>
      <div className={`pt-7 ${isSubmenuHovered ? "flex" : "hidden"}`}>
        <div className={`submenuLinksBg p-6 flex flex-col absolute`}>
          {links.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="text-[#2d2e40] font-Ubuntu text-[15px] font-normal hover:font-bold leading-[33px] w-[120px]"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderSubmenu;
