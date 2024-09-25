import React from "react";

const Header = ({ page, totalPage }: any) => {
  return (
    <div className="text-right font-medium pr-[22px] leading-[0.9] text-[11px]">
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
