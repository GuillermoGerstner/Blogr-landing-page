import Image from "next/image";

import illustrationEditorMobile from "@/public/illustration-editor-mobile.svg";
import illustrationEditorDesktop from "@/public/illustration-editor-desktop.svg";

const Editor = () => {
  return (
    <section className="pt-[100px] tablet:pt-[150px] pb-[273px] tablet:pb-[262px] tablet:px-24 desktop:px-[165px] max-w-[1440px] mx-auto">
      <h2 className="text-[#1F3E5A] text-center font-Overpass text-[28px] tablet:text-[40px] font-semibold tracking-[-0.84px] tablet:tracking-[-1.2px]">
        Designed for the future
      </h2>
      <Image
        src={illustrationEditorMobile}
        alt="pattern"
        className="mt-[38px] mx-auto w-full tablet:w-10/12 desktop:hidden"
      />

      <div className="relative mt-[46px] tablet:mt-[93px]">
        <h3 className="text-[#1F3E5A] text-center desktop:text-left font-Overpass text-[28px] font-semibold leading-8 tablet:leading-7 px-14 desktop:px-0">
          Introducing an extensible editor
        </h3>
        <p className="text-[#4C5862] text-center desktop:text-left font-Overpass text-[16px] font-normal leading-7 tracking-[0.5px] px-7 tablet:px-0 mt-4 desktop:w-[540px]">
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
        <h3 className="text-[#1F3E5A] text-center desktop:text-left font-Overpass text-[28px] font-semibold leading-8 tablet:leading-7 px-14 desktop:px-0 mt-10 tablet:mt-16">
          Robust content management{" "}
        </h3>
        <p className="text-[#4C5862] text-center desktop:text-left font-Overpass text-[16px] font-normal leading-7 tracking-[0.5px] px-7 tablet:px-0 mt-4 desktop:w-[540px]">
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </p>

        <Image
          src={illustrationEditorDesktop}
          alt="pattern"
          className="hidden desktop:flex w-auto h-[832px] absolute top-[-233px] right-[-400px] bg-[#cc11dd77]asd"
        />
      </div>
    </section>
  );
};

export default Editor;
