import React from "react";
import Logo from "../../_assets/logo.jpg";
import Image from "next/image";
import style from "./style.module.scss";
import cn from "@/utils/classnames";

const Header = ({ date, time }: any) => {
  return (
    <header
      className={cn(
        "fixed top-0 max-w-[988px] w-full mx-auto bg-white pb-2",
        style.header
      )}
    >
      <div className="w-[20%]">
        <Image src={Logo} alt="logo" />
      </div>
      <div className="text-right">
        <p>{date}</p>
        <p>{time}</p>
      </div>
    </header>
  );
};

export default Header;
