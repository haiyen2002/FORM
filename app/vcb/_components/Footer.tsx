import React from "react";
import style from "./styles.module.scss";
import cn from "@/utils/classnames";

const Footer = ({ page, totalPage }: any) => {
  return (
    <footer id="footer" className={cn("mt-auto text-[10px]", style.footer)}>
      <div className="grid grid-cols-7">
        <div className="col-span-4 tracking-[-0.75px]">
          <p className="mb-[2px]">Postal address:</p>
          <p className="mb-[2px]">198 TRAN QUANG KHAI AVENUE</p>
          <p>HA NOI - S.R. VIETNAM</p>
        </div>

        <div className="col-span-3 text-[10px] tracking-[0.3px] ml-[98px] pb-[4px]">
          <p className="mb-[3px]">
            Telex
            <span className="inline-block ml-[13px]">
              : (0805) 411504 VCB - VT
            </span>
          </p>
          <p className="mb-[2px]">
            Swift <span className="inline-block ml-[13px]">: BFTV VNVX</span>
          </p>
          <p className="mb-[2px]">Website: www.vietcombank.com.vn</p>
          <p>Contact center: 1900.54.54.13</p>
        </div>
      </div>
      <p className="text-right mt-1 pr-3 leading-[1]">
        Page {page} of {totalPage}
      </p>
    </footer>
  );
};

export default Footer;
