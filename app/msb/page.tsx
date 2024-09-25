"use client";

import React, { useEffect, useState } from "react";
import SampleBg from "./_assets/sample_last.jpg";
import styles from "./styles.module.scss";
import cn from "@/utils/classnames";
import PageConfiguration from "@/components/Configuration";
import { numberWithThousands } from "@/utils/data";
import Logo from "./_assets/logo.png";
import Image from "next/image";
import "./style.css";

const MSBpage = () => {
  const [data, setData] = useState<any>({});
  const [dataPages, setDataPages] = useState([
    {
      start: 0,
      end: 10,
      hasFirst: true,
      hasLast: false,
      page: 1,
    },
  ]);

  const info = (data?.info && data.info[0]) || {};
  const dataTable = data?.data || [];

  useEffect(() => {
    document.title = "MSB - " + (info?.name || "template");
  }, []);

  return (
    <main className={cn(styles.page, "bg-neutral-600")}>
      <PageConfiguration
        data={data}
        setData={setData}
        templateName="MSB Template"
        templateURL="msb-template.xlsx"
        dataPages={dataPages}
        setDataPages={setDataPages}
        template={(props) => {
          const _data = dataTable.slice(
            props.dataPage.start,
            props.dataPage.end
          );
          const _page = props.dataPage;

          return (
            <section
              id="msb"
              className="relative w-[794px] h-[1123px] mx-auto pt-[51px] pb-[166px] pr-[31px] pl-[53px] bg-white overflow-y-auto border-t border-t-black print:border-t-transparent"
              style={{
                // backgroundImage: `url(${SampleBg.src})`,
                backgroundSize: "100%",
                // backgroundPosition: "6px -250px",
              }}
            >
              <div className="absolute border-t border-t-red-400 left-0 right-0 bottom-[166px] no-print"></div>
              <div
                className={cn(
                  "border border-solid border-black",
                  !_page.hasLast && "border-b-0"
                )}
              >
                <div className="flex pb-[20px] border-b-black border-b">
                  <div>
                    <div className="pt-[3px] pl-[0px]">
                      <Image
                        src={Logo}
                        alt="logo"
                        className="h-[50px]"
                        width={148}
                        height={120}
                      />
                    </div>

                    <p>
                      Đơn vị/ <i> Branch : </i>
                      <span className="uppercase">{info.branch}</span>
                    </p>
                  </div>

                  <div className="text-center pt-[21px] pl-[14px]">
                    <h1 className="text-[21px] pl-[8px] tracking-[-0.7px]">
                      BẢNG SAO KÊ TÀI KHOẢN
                    </h1>
                    <h2 className="text-[16px] mt-[2px] pl-[10px] italic">
                      ACCOUNT STATEMENTS
                    </h2>
                    <p className="mt-[2px] pl-[6px] tracking-[0px]">
                      Từ ngày/from: {info.from} đến ngày/to: {info.to}
                    </p>
                  </div>

                  <div className="ml-auto pt-[5px]">
                    <p className="text-right text-[14.3px] font-bold">
                      Liên 2: Giao khách hàng
                    </p>
                    <p className="text-right italic mt-[10px] tracking-[-0.5px]">
                      For Custormer
                    </p>
                  </div>
                </div>

                <div className="pt-[9px] pl-[9px]">
                  <div className="flex">
                    <div className="pt-[1px]">
                      <p className="uppercase tracking-[0.3px]">
                        <b>SỐ TÀI KHOẢN</b>/<i>ACCOUNT NO :</i>
                      </p>
                      <p className="uppercase mt-[8px] tracking-[0.3px]">
                        <b>TÊN TÀI KHOẢN</b>/<i>ACCOUNT NAME :</i>
                      </p>
                    </div>
                    <div className="pt-[1px]">
                      <p className="pl-[55px] font-bold">{info.account_no}</p>
                      <p className="uppercase pl-[52px] text-[13px] mt-[7px] tracking-[-0.3px] font-bold">
                        {info.account_name}
                      </p>
                    </div>
                    <div className="ml-auto pt-[1px] border border-solid border-black h-[31px] text-center w-[174px] border-r-0">
                      <p className="uppercase">KÝ HIỆU CHỨNG TỪ</p>
                    </div>
                  </div>

                  <div className="flex pb-[4px]">
                    <div className="border border-black py-[6px] px-[6px] w-[384px]">
                      <p>
                        <b>Kính gửi</b>/<i>To:</i>{" "}
                        <span className="uppercase pl-[63px]">
                          {info.account_name}
                        </span>
                      </p>
                      <p className="mt-[1px]">
                        <b>Mã số thuế</b>/<i>Tax Code:</i>
                        <span className="uppercase pl-[22px]">
                          {info.tax_code || "_"}
                        </span>
                      </p>
                    </div>
                    <div className="pl-[8px] pt-[1px] tracking-[0px]">
                      <p>Ngân hàng TMCP Hàng Hải xin trân trọng thông báo:</p>
                      <p className="mt-[1px]">
                        Lịch sử giao dịch tài khoản của Quý khách hàng như sau:
                      </p>
                      <p className="mt-[4px]">
                        Historical transactions of your account are as follows:
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <table
                    className={cn(styles.table_data, "table-fixed w-full")}
                  >
                    <thead>
                      <tr>
                        <th>Ngày/Date</th>
                        <th>
                          Mô tả/<i>Description</i>
                        </th>
                        <th>
                          Ghi nợ/<i>Debit</i>
                        </th>
                        <th>
                          Ghi có/<i>Crebit</i>
                        </th>
                        <th>
                          Số dư/<i>Balance</i>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {_data.map((item: any, index: number) => (
                        <tr key={index}>
                          <td>{item.date}</td>
                          <td
                            className="whitespace-break-spaces break-all"
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></td>
                          <td>{numberWithThousands(item.debit, ",") || 0}</td>
                          <td>{numberWithThousands(item.credit, ",") || 0}</td>
                          <td>{numberWithThousands(item.balance, ",") || 0}</td>
                        </tr>
                      ))}
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      {_page.hasLast && (
                        <>
                          <tr className={cn(styles.last)}>
                            <td
                              colSpan={2}
                              className="!text-right text-[12.5px] !pr-[8px]"
                            >
                              <b>Số dư đầu kỳ/</b>
                              <i>Previous Statement Balance: </i>
                              {info.open_date}
                            </td>
                            <td colSpan={2} className="!text-right !pr-0">
                              <b>
                                {numberWithThousands(info.open_balance, ",")}
                              </b>
                            </td>
                            <td></td>
                          </tr>
                          <tr className={cn(styles.last)}>
                            <td
                              colSpan={2}
                              className="!text-right text-[12.5px] !pr-[8px]"
                            >
                              <b>Tổng phát sinh trong kỳ/</b>
                              <i>Summary Transaction :</i>
                            </td>
                            <td className="!text-right !pr-0">
                              <b>{numberWithThousands(info.debit_sum, ",")}</b>
                            </td>
                            <td className="!text-right !pr-0">
                              <b>{numberWithThousands(info.credit_sum, ",")}</b>
                            </td>
                            <td></td>
                          </tr>
                          <tr className={cn(styles.last)}>
                            <td
                              colSpan={2}
                              className="!text-right text-[12.5px] !pr-[8px]"
                            >
                              <b>Số dư cuối kỳ/</b>
                              <i>Final Balance: </i>
                              {info.final_date}
                            </td>
                            <td colSpan={2} className="!text-right !pr-0">
                              <b>
                                {numberWithThousands(info.final_balance, ",")}
                              </b>
                            </td>
                            <td></td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
                {_page.hasLast && (
                  <div className="pt-[6px] tracking-[0px]">
                    <p className="text-[12.5px]">
                      (*)Đề nghị đối chiếu và thông báo cho Ngân hàng nếu có sai
                      sót/ Please check the entries and notify Bank of any error
                      on this statement
                    </p>

                    <div className="flex gap-[50px] mt-[60px]">
                      <div className="w-[305px] border-t border-t-solid border-t-black py-[1px]">
                        <p className="text-center">
                          <b>Người lập</b>/<i>Prepared by</i>
                        </p>
                      </div>
                      <div className="w-[302px] border-t border-t-solid border-t-black py-[1px]">
                        <p className="text-center">
                          <b>Kiểm soát</b>/<i>Verified by</i>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div
                className={cn(
                  styles.footer,
                  "flex justify-between absolute bottom-[126px] left-[51px] right-[34px]"
                )}
              >
                <span>{info.date}</span>
                <span>Page {_page.page}</span>
                <span>{info.time}</span>
              </div>
            </section>
          );
        }}
      />
    </main>
  );
};

export default MSBpage;
