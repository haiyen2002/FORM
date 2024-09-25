import React from "react";

const Footer = () => {
  return (
    <div className="absolute text-[13px] bottom-[56px] left-0 right-0 text-center z-10">
      <span className="font-bold italic">
        Chứng từ này được xuất tự động từ hệ thống của Ngân hàng TMCP Quân đội./{" "}
      </span>
      <span className="italic">
        This document is automatically exported from MBBank{"'"}s System
      </span>
    </div>
  );
};

export default Footer;
