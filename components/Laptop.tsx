import Image from "next/image";

import illustrationLaptopMobile from "@/public/illustration-laptop-mobile.svg";
import illustrationLaptopDesktop from "@/public/illustration-laptop-desktop.svg";

const Laptop = () => {
  return (
    <section className="pt-[79px] desktop:pt-[301px] pb-[100px] desktop:pb-[308px] desktop:max-w-[1110px] mx-auto flex flex-col desktop:items-end">
      <Image
        src={illustrationLaptopMobile}
        alt="laptop"
        className="w-[120%] tablet:w-[90%] max-w-none -translate-x-[10%] tablet:translate-x-0 tablet:mx-auto desktop:hidden"
      />
      <div className="mt-[46px] desktop:mt-0 desktop:w-[540px] relative">
        <h3 className="text-[#1f3e5a] text-center desktop:text-left font-Overpass text-[28px] font-semibold leading-8">
          Free, open, simple
        </h3>
        <p className="text-[#4c5862] text-center desktop:text-left font-Overpass text-[16px] font-normal leading-7 tracking-[0.5px] mt-4 px-7 desktop:px-0">
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
        <h3 className="text-[#1f3e5a] text-center desktop:text-left font-Overpass text-[28px] font-semibold leading-8 mt-10 desktop:mt-16">
          Powerful tooling
        </h3>
        <p className="text-[#4c5862] text-center desktop:text-left font-Overpass text-[16px] font-normal leading-7 tracking-[0.5px] mt-4 px-7 desktop:px-0">
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
        <Image
          src={illustrationLaptopDesktop}
          alt="laptop"
          className="hidden desktop:flex absolute top-[-185px] left-[-998px] w-[910px] max-w-none"
        />
      </div>
    </section>
  );
};

export default Laptop;
