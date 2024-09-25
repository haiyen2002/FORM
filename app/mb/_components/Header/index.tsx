import React from "react";
import styles from "./styles.module.scss";
import cn from "@/utils/classnames";
import Image from "next/image";
import Logo from "../../_assets/logo.png";

const Header = ({ data }: { data: any }) => {
  return (
    <>
      <header className={styles.header}>
        <div className="flex">
          <div>
            <Image src={Logo} width={103} height={42} alt="MB Logo" />
          </div>
          <div className="flex-1 text-center ml-12">
            <h1 className="font-bold text-base leading-[1.1]">
              SỔ HẠCH TOÁN CHI TIẾT CỦA TÀI KHOẢN
            </h1>
            <h2 className="text-xl italic font-bold !leading-[1]">
              ACCOUNT STATEMENT
            </h2>
            <p className="italic mt-[6px] text-sm">
              <span className="font-semibold">Từ ngày</span>/From date:
              {data.from} <span className="font-bold">đến ngày</span>/To date:
              {data.to}
            </p>
          </div>
        </div>
        <div className={cn(styles.frame, "grid grid-cols-3")}>
          <div className="col-span-2">
            <div className="flex">
              <p className="min-w-[200px]">
                <span className="font-bold">Chi nhánh</span>
                <span className=" italic">/Branch:</span>
              </p>
              <p className="font-bold">{data.branch}</p>
            </div>

            <div className="flex">
              <p className="min-w-[200px]">
                <span className="font-bold">Tên khách hàng</span>
                <span className=" italic">/Customer name:</span>
              </p>
              <p className="font-bold">{data.customer_name}</p>
            </div>

            <div className="flex">
              <p className="min-w-[200px]">
                <span className="font-bold">Mã khách hàng</span>
                <span className=" italic">/Code:</span>
              </p>
              <p className="font-bold">{data.code}</p>
            </div>

            <div className="flex">
              <p className="min-w-[200px]">
                <span className="font-bold">Tài khoản</span>
                <span className=" italic">/Account No :</span>
              </p>
              <p className="font-bold">{data.account}</p>
            </div>
          </div>
          <div>
            <div className="flex italic">
              <p className="min-w-[65px]">
                <span className="font-bold italic">Giờ tạo</span>
                <span className=" italic">/time</span>
              </p>
              <span>:</span>
              <p className="italic pl-1">{data.time_created}</p>
            </div>

            <div className="flex italic items-center">
              <p className="min-w-[65px]">
                <span className="font-bold italic">Ngày tạo</span>
                <span className=" italic">/date</span>
              </p>
              <span className="inline-block ml-1">:</span>
              <p className="italic pl-1">{data.date_created}</p>
            </div>

            <div className="flex italic items-center">
              <p className="min-w-[65px]">
                <span className="font-bold italic">Người tạo</span>
                <span className=" italic">/user</span>
              </p>
              <span className="inline-block">:</span>
              <p className="italic pl-1">{data.user_created}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center w-1/3 text-[13px]">
            <p className="min-w-[65px]">
              <span className="font-bold">Loại tiền</span>
              <span className=" italic">/Currency</span>
            </p>
            <span className="inline-block ml-1">:</span>
            <p className="italic pl-1">VND</p>
          </div>
        </div>
      </header>

      <div className="pl-[238px] py-7">
        <b className="text-base">Số dư đầu: {data.start}</b>
      </div>
    </>
  );
};

export default Header;
