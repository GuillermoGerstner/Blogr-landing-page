import Image from "next/image";

import FooterSubmenu from "./FooterSubmenu";

import { navbar } from "@/constants";

import logo from "@/public/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#24242C] rounded-tr-[100px] py-[75px] desktop:py-[70px] px-6 relative">
      <div className="desktop:max-w-[1110px] mx-auto flex flex-col desktop:flex-row items-center desktop:items-start desktop:gap-[184px]">
        <Image src={logo} alt="logo" className="w-[101px]" />
        <nav className="mt-[72px] desktop:mt-0 flex flex-col 575:flex-row flex-wrap gap-10 tablet:gap-36 desktop:gap-[30px]">
          {navbar.map((menu) => (
            <FooterSubmenu {...menu} />
          ))}
        </nav>
      </div>
      <p className="absolute bottom-0 left-0 text-center w-full text-white">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.linkedin.com/in/guillermogerstner">
          Guillermo Gerstner
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
