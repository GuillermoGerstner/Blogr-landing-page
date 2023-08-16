import Image from "next/image";

import Button from "./Button";

import patternMobile from "@/public/bg-pattern-intro-mobile.svg";
import patternDesktop from "@/public/bg-pattern-intro-desktop.svg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradientBg rounded-bl-[100px] pt-[196px] tablet:pt-[226px] pb-[156px] px-7">
      <div className="">
        <h1 className="text-white text-center font-Overpass text-[36px] tablet:text-[64px] font-semibold tracking-[-1.08px] tablet:tracking-[-1.92px] relative z-10">
          A modern publishing platform
        </h1>
        <p className="text-white text-center font-Overpass text-[18px] tablet:text-[20px] font-normal relative z-10">
          Grow your audience and build your online brand
        </p>
        <div className="mt-[38px] tablet:mt-[43px] flex gap-4 justify-center relative z-10">
          <Button text="Start for Free" styles="" skin="1" />
          <Button text="Learn More" styles="" skin="2" />
        </div>
      </div>

      <Image
        src={patternMobile}
        alt="pattern-mobile"
        className="absolute tablet:hidden top-[-278px] left-[-364px] w-[1400px] max-w-none"
      />
      <Image
        src={patternDesktop}
        alt="pattern-desktop"
        className="absolute hidden tablet:flex top-[-1360px] left-[-448px] w-[3200px] max-w-none"
      />
    </section>
  );
};

export default Hero;
