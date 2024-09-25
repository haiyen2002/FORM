"use client";

import React, { useEffect, useRef } from "react";
import Logo from "../../assets/Logo";
import style from "./style.module.scss";
import cn from "@/utils/classnames";
import { numberWithThousands } from "@/utils/data";

const Template = ({
  data,
  hasFirst,
  hasLast,
  page,
  totalPage,
  info,
}: {
  data: any[];
  hasFirst?: boolean;
  hasLast?: boolean;
  page?: number;
  totalPage?: number;
  info: Record<string, any>;
}) => {
  const wrapperRef = useRef<any>(null);

  // useEffect(() => {
  //   if(wrapperRef.current){
  //     const lastRow = wrapperRef.current.querySelector('.last-row')

  //     const table = wrapperRef.current.querySelector('table')

  //     if(lastRow && table){
  //       lastRow.style.height = lastRow.clientHeight + (wrapperRef.current.clientHeight - table?.clientHeight) + 'px';
  //     }
  //   }
  // }, [])

  return (
    <section
      className={cn(
        "flex flex-col pt-6 pl-8 pr-[26px] pb-6 w-full max-w-[1124px] mx-auto h-[794px] bg-white",
        "border-t border-t-black print:border-t-transparent"
      )}
    >
      <header>
        {/* Header top */}
        <div className="flex justify-between">
          <div className="w-1/3">
            <p className="font-bold text-xs">
              NGÂN HÀNG TMCP KỸ THƯƠNG VIỆT NAM
            </p>
            <p className="text-xs leading-none">
              Chi nhánh/<i>Branch:</i> {info.branch}
            </p>
            <p>
              MST/<i>Tax code:</i>
              {info.tax_code}
            </p>
          </div>
          <div className="w-[34.2%] text-center">
            <p className="text-[17px] font-bold leading-[1.4] tracking-[-0.6px]">
              SỔ PHỤ KIÊM PHIẾU BÁO NỢ/CÓ
            </p>
            <p className="font-bold tracking-[1px]">
              BANK STATEMENT/ DEBIT - CREDIT TRANSACTION
            </p>
            <p className="leading-[1.26]">
              <i>
                (Từ ngày/From {info.from_date} Đến ngày/To {info.to_date})
              </i>
            </p>
          </div>
          <div className="w-[31.8%] flex justify-end h-fit">
            <Logo className="w-[170px]" />
          </div>
        </div>

        {/* Header mid */}
        <div className="flex justify-between mt-2">
          <div>
            <br />
            <p className="mt-[5px]">
              Tên khách hàng/<i>Customer name:</i>
              <b>{info.customer_name}</b>
            </p>
            <p className="mt-[2px">
              Số ID khách hàng/<i>Customer ID:</i>
              {info.customer_id} <span className="pl-9"></span> - MST/
              <i>Tax code:</i>
            </p>
            <p className="mt-[3px] tracking-[0.1px]">
              Địa chỉ/<i>Address:</i>
              {info.address}
            </p>
          </div>

          <div className="w-[37.6%]">
            <p>
              Loại tiền/<i>Currency:</i> VND
            </p>
            <p className="mt-[5px]">
              Số tài khoản/<i>Account No:</i> {info.account_no}
            </p>
            <p className="mt-[5px]">
              Loại tài khoản/<i>Type of Account:</i> {info.type_of_account}
            </p>
            <p className="mt-[5px]">
              Tên tài khoản/Account name: {info.account_name}
            </p>
          </div>
        </div>

        {/* Header bottom */}
        <div className="flex justify-between mt-[9px]">
          <p className="tracking-[-0.5px] ">
            Chúng tôi xin thông báo đã ghi nợ/ghi có vào tài khoản của Quý khách
            số tiền chi tiết sau/
            <i>
              We would like to inform you debited/ credited to your account the
              amount of the following details:
            </i>
          </p>
          <p className="tracking-[-0.55px] pr-1 ">
            Trang/<i>Page:</i> {page}/{totalPage}
          </p>
        </div>
      </header>

      {/* Table */}
      <div
        // ref={wrapperRef}
        className={`mt-1 ${hasLast ? "" : "h-[565px] overflow-x-hidden"}`}
      >
        <table className={`w-full ${style.table}`}>
          <thead className="bg-[#ffff01]">
            <tr>
              <th className="">
                Ngày giao dịch
                <br />
                <i>Transaction Date</i>
              </th>
              <th>
                Đối tác <br />
                <i>Remitter</i>
              </th>
              <th>
                NH Đối tác <br />
                <i>Remitter bank</i>
              </th>
              <th>
                Diễn giải <br />
                <i>Details</i>
              </th>
              <th>
                Số bút toán <br />
                <i>Transaction No</i>
              </th>
              <th>
                Nợ <br />
                <i>Debit</i>
              </th>
              <th>
                Có <br />
                <i>Credit</i>
              </th>
              <th>
                Phí/Lãi <br />
                <i>Fee/Interest</i>
              </th>
              <th>
                Thuế VAT <br />
                <i>Tax</i>
              </th>
              <th>
                Số dư <br />
                <i>Balance</i>
              </th>
            </tr>
          </thead>

          <div className="mt-[1px]"></div>
          {/*  */}
          <tbody>
            {/* First Row */}
            {hasFirst && (
              <tr className={style.row_first}>
                <td colSpan={4}>
                  <b>Số dư đầu kỳ/</b>
                  <b>Open balance</b>
                </td>
                <td></td>
                <td></td>
                <td>
                  <b>{numberWithThousands(info.open_balance, ",", ".00")}</b>
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
            {/* Data Rows */}
            {data.map((item, index) => {
              return (
                <tr
                  key={index}
                  className={
                    !hasLast && index === data.length - 1 ? "last-row" : ""
                  }
                >
                  {Object.keys(item).map((key) => (
                    <td key={key}>
                      <div className="flex">
                        <span className="inline-block min-h-[16.5px] whitespace-break-spaces" />

                        {[
                          "debit",
                          "credit",
                          "interest",
                          "tax",
                          "balance",
                        ].includes(key) &&
                        item[key] &&
                        typeof item[key] == "number" &&
                        item[key] !== 0
                          ? Number(item[key]).toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                            })
                          : item[key] || ""}
                      </div>
                    </td>
                  ))}
                </tr>
              );
            })}

            {/* Last Two Rows */}
            {hasLast && (
              <>
                <tr className={style.row_last}>
                  <td colSpan={4}>Cộng doanh số/Total Volume</td>
                  <td>{}</td>
                  <td>{numberWithThousands(info.total_debit, ",", ".00")}</td>
                  <td>{numberWithThousands(info.total_credit, ",", ".00")}</td>
                  <td>{numberWithThousands(info.interest, ",", ".00")}</td>
                  <td>{numberWithThousands(info.tax, ",", ".00")}</td>
                  <td></td>
                  {/* {info.total_volume.map((item, index) => (
                    <td key={index}>{item}</td>
                  ))} */}
                </tr>
                <tr className={style.row_last}>
                  <td colSpan={4}>
                    <b>Số dư cuối kỳ/</b>
                    <b>Ending balance</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <b>
                      {numberWithThousands(info.ending_balance, ",", ".00")}
                    </b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>

      <footer className="mt-auto pt-[4px] text-[11px] text-center leading-[1.15] tracking-[-0.3px]">
        <p className="mb-[2px]">
          Ngày giờ in/<i>Printed Time: </i>
          {info.printed_date} - Người in/
          <i>Printed user: </i>
          <span>{info.printed_user}</span>
        </p>
        <p>
          <b>
            Phiếu này được in tự động từ hệ thống Corebanking T24 của Ngân hàng
            và không cần ký tên, đóng dấu
          </b>
          /{" "}
          <i>
            This paper is printed automatically from the Bank&apos;s T24 Core
            Banking system and not to sign and seal{" "}
          </i>
        </p>
      </footer>
    </section>
  );
};

export default Template;
