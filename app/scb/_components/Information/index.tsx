import Image from "next/image";
import React from "react";
import Logo from "../../_assets/sacombank-logo.svg";
import cn from "@/utils/classnames";
import { NotoSans } from "../../_utils/fonts";

const Information = ({ data }: { data: any }) => {
  return (
    <div>
      <div className="border-b border-b-solid border-b-black flex justify-between py-3">
        <div className="flex items-center">
          <Image
            src={Logo}
            width={186}
            height={40}
            objectFit="contain"
            className="h-[43px] scale-y-[1.3]"
            alt="logo"
          />
        </div>
        <div className="text-center">
          <h1
            className={cn(
              "text-base font-extrabold leading-none"
              // NotoSans.className
            )}
          >
            SỔ PHỤ TK TIỀN GỬI KHÔNG KỲ HẠN
          </h1>
          <h2
            className={cn(
              "text-base leading-none font-extrabold !italic uppercase mt-[2px]"
              // NotoSans.className
            )}
          >
            Account Statement
          </h2>
          <p className="mt-1 font-bold">
            Từ ngày: {data[1]?.value} <span className="inline-block"></span> Đến
            ngày: {data[2]?.value}
          </p>
          <p className="font-bold italic">
            From: {data[1]?.value} <span className="inline-block"></span> To:{" "}
            {data[2]?.value}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold">SMA service</p>
          <p>
            Ngày/<i>Date</i>: {data[3]?.value}
          </p>
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-1">
        <div className="flex items-center">
          <div className="min-w-[170px]">
            <p className="font-bold">Số tài khoản/</p>
            <p className="italic">Account no:</p>
          </div>
          <div>
            <p className="font-bold">{data[4]?.value}</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="min-w-[170px]">
            <p className="font-bold">Tên khách hàng/</p>
            <p className="italic">Account holder:</p>
          </div>
          <div>
            <p className="font-bold">{data[5]?.value}</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="min-w-[170px]">
            <p className="font-bold">Số dư (*) đầu kỳ/</p>
            <p className="italic">Opening balance:</p>
          </div>
          <div>
            <p className="font-bold">{data[6]?.value?.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="min-w-[170px]">
            <p className="font-bold">Mã tiền tệ/</p>
            <p className="italic">Currency:</p>
          </div>
          <div>
            <p className="font-bold">VND</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
