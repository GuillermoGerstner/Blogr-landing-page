import { ButtonProps } from "@/common.types";

const Button = ({ text, styles, skin }: ButtonProps) => {
  return (
    <button
      className={`w-[137px] h-12 rounded-[28px] ${
        skin === "1"
          ? "bg-white hover:bg-[#FF7B86] text-[#FF505C] hover:text-white text-center font-Ubuntu text-[16px] font-bold"
          : skin === "2"
          ? "border border-white hover:border-none hover:bg-white text-white hover:text-[#FF7B86] text-center font-Ubuntu text-[16px] font-bold"
          : ""
      } ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
