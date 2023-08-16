import Image from "next/image";

import patternCircles from "@/public/bg-pattern-circles.svg";
import illustrationPhones from "@/public/illustration-phones.svg";

const Phones = () => {
  return (
    <section className="relative">
      <div className="relative phonesSectionBg pt-[221px] desktop:pt-[111px] pb-[93px] desktop:pb-[111px] px-6 overflow-hidden">
        <Image
          src={patternCircles}
          alt="pattern"
          className="absolute top-[-237px] desktop:top-auto desktop:bottom-[-109px] left-1/2 desktop:left-[-213px] -translate-x-1/2 desktop:translate-x-0 w-[160.534%] desktop:w-[70.42%] max-w-[602px] desktop:max-w-none"
        />
        <div className="mx-auto tablet:max-w-[880px] desktop:max-w-[1080px] flex flex-col desktop:items-end relative z-50">
          <h2 className="text-white text-center desktop:text-left font-Overpass text-[40px] font-semibold tracking-[-1.2px] desktop:pr-7">
            State of the Art Infrastructure
          </h2>
          <p className="text-white text-center desktop:text-left font-Overpass text-[16px] font-normal leading-7 tracking-[0.5px] mt-[10px] desktop:mt-[5px] desktop:w-[540px]">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
      <Image
        src={illustrationPhones}
        alt="phones"
        className="absolute top-[-186px] tablet:top-[-206px] desktop:top-[-64px] w-full max-w-[375px] tablet:max-w-[425px] desktop:max-w-[540px] left-1/2 -translate-x-1/2 desktop:translate-x-[-586px]"
      />
    </section>
  );
};

export default Phones;
