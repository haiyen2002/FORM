import cn from "@/utils/classnames";
import React from "react";

const Header = ({ page, totalPage }: any) => {
  return (
    <div
      className={cn(
        "text-right font-medium leading-[0.9] text-[11px]",
        page == 1 ? "pr-[190px]" : "pr-[337px]"
      )}
    >
      Page{" "}
      <span className="font-medium">
        <b>{page}</b>
      </span>{" "}
      of{" "}
      <span className="font-medium">
        <b>{totalPage}</b>
      </span>
    </div>
  );
};

export default Header;
