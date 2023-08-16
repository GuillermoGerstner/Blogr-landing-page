import Link from "next/link";

import { HeaderSubmenuProps } from "@/common.types";

const FooterSubmenu = ({ subtitle, links }: HeaderSubmenuProps) => {
  return (
    <div className="flex flex-col items-center desktop:items-start desktop:w-[255px]">
      <span className="text-white text-center desktop:text-left font-Ubuntu text-[18px] desktop:text-[15px] font-medium leading-[33px]">
        {subtitle}
      </span>

      <div className="mt-[21px] flex flex-col">
        {links.map((link) => (
          <Link
            key={link.text}
            href={link.href}
            className="text-white text-center desktop:text-left font-Ubuntu text-[18px] desktop:text-[15px] font-normal leading-[33px] opacity-75 hover:underline"
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterSubmenu;
