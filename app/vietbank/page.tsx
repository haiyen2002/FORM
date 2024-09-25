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

const VietbankPage = () => {
  const [data, setData] = useState<any>({
    data: [
      {
        date: "08/03/2024",
        accounting_date: "08/03/2024",
        description: "IBFT-IN: PHAM MINH CHI Chuyen tien;105006434819",
        debit: 0,
        credit: 6200000,
        balance: 6200000,
      },
    ],
    info: [
      {
        printed_at: "13/08/2024",
        id: "TRANGDMD1701",
        branch: "1701 - VIET BANK - PGD BINH TAN",
        from: "01/03/2024",
        to: "12/08/2024",
        old_acc_number: "old_numer",
        currency: "VND",
        acc_number: "000003839688-CN_TGTT_VND_TRONG NUOC_CU TRU_VB 4.0",
        name: "TRAN THI MY CHAU",
        address:
          "734A/1 LONG KHANH A XAC LONG HAU HUYEN LAI VUNG-TINH DONG THAP VIET NAM",
        tax_code: "087175001389",
        open_balance: 0,
        credit: 10528043494,
        debit: 10528022687,
        close_balance: 20807,
      },
    ],
  });
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
    document.title = "Vietbank - " + (info?.name || "template");
  }, [info]);

  return (
    <main className={cn(styles.page, "bg-neutral-600")}>
      <PageConfiguration
        data={data}
        setData={setData}
        templateName="VietBank Template"
        templateURL="viet-bank-template.xlsx"
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
              className={cn(
                "relative w-[794px] h-[1123px] mx-auto pb-[66px] pr-[36px] pl-[36px] bg-white overflow-y-auto border-t border-t-black print:border-t-transparent",
                _page.hasFirst ? "pt-[56px]" : "pt-[68px]"
              )}
              style={{
                // backgroundImage: `url(${SampleBg.src})`,
                backgroundSize: "100%",
                // backgroundPosition: "6px -250px",
              }}
            >
              <div className="absolute border-t border-t-red-400 left-0 right-0 bottom-[66px] no-print"></div>
              <div className={cn("")}>
                {_page.hasFirst && (
                  <>
                    <div className="">
                      <div className="flex justify-between items-center">
                        <div className="pl-1">
                          <Image
                            src={Logo}
                            alt="logo"
                            width={175}
                            height={39}
                          />
                        </div>

                        <div>
                          <p>
                            <span className="min-w-[80px]">Printed at :</span>
                            <span>{info?.printed_at}</span>
                          </p>
                          <p>
                            <span className="min-w-[80px]">ID:</span>
                            <span>{info?.id}</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex relative w-full">
                        <p className="uppercase">{info?.branch}</p>
                        <h1 className="uppercase text-[14.5px] font-bold absolute top-[50%] left-[305px] translate-y-[-50%] z-1 tracking-normal">
                          SỔ PHỤ TÀI KHOẢN
                        </h1>
                      </div>

                      <div className="pl-[195px] mx-auto mt-[12px]">
                        <div className="flex justify-between">
                          <div>
                            <span className="min-w-[80px]">Từ ngày :</span>{" "}
                            {info?.from}
                          </div>
                          <div className="min-w-[124px] mr-[168px]">
                            <span className="min-w-[67px]">Đến ngày :</span>{" "}
                            {info?.to}
                          </div>
                        </div>
                        <div className="flex justify-between mt-[6px]">
                          <div>
                            <span className="min-w-[80px]">
                              Số tài khoản cũ :
                            </span>{" "}
                            {info?.old_acc_number}
                          </div>
                          <div className="min-w-[124px] mr-[168px]">
                            <span className="min-w-[67px]">Loại tiền :</span>{" "}
                            {info?.currency}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pl-[22px] flex flex-col gap-[6px] mt-[6px]">
                      <div>
                        <span className="min-w-[143px]">Số tài khoản :</span>{" "}
                        <span>{info?.acc_number}</span>
                      </div>
                      <div>
                        <span className="min-w-[143px]">Tên khách hàng :</span>{" "}
                        <span>{info?.name}</span>
                      </div>
                      <div>
                        <span className="min-w-[143px]">Địa chỉ :</span>{" "}
                        <span>{info?.address}</span>
                      </div>
                      <div>
                        <span className="min-w-[143px]">Mã số thuế :</span>{" "}
                        <span>{info?.tax_code}</span>
                      </div>
                    </div>

                    <div className="flex mt-[16px]">
                      <div className="w-[148px] text-center">
                        <p className="pl-[30px]">Số dư tài khoản đầu kỳ:</p>
                        <p className="py-1 text-right pr-[30px]">
                          {numberWithThousands(
                            info.open_balance || 0,
                            ",",
                            ".00"
                          )}
                        </p>
                      </div>
                      <div className="w-[180px] text-center">
                        <p className="">Gửi vào :</p>
                        <p className="py-1">
                          {numberWithThousands(info.credit || 0, ",", ".00")}
                        </p>
                      </div>
                      <div className="w-[200px] text-center">
                        <p>Rút ra :</p>
                        <p className="py-1">
                          {numberWithThousands(info.debit || 0, ",", ".00")}
                        </p>
                      </div>
                      <div className={cn("text-center min-w-[154px] ml-auto")}>
                        <p
                          className={
                            cn()
                            // "pr-[40px] text-right",
                            // "ml-[42px]"
                          }
                        >
                          Số dư cuối kỳ :
                        </p>
                        <p className="py-1">
                          {numberWithThousands(
                            info.close_balance || 0,
                            ",",
                            ".00"
                          )}
                        </p>
                      </div>
                    </div>
                  </>
                )}
                <div>
                  <table
                    className={cn(
                      styles.table_data,
                      "table-fixed w-full",
                      _page.hasLast && "border-b border-b-solid border-b-black"
                    )}
                  >
                    <thead>
                      <tr>
                        <th>Ngày giao dịch</th>
                        <th>Ngày hạch toán</th>
                        <th>Diễn giải</th>
                        <th>Phát sinh nợ</th>
                        <th>Phát sinh có</th>
                        <th>Dư cuối</th>
                      </tr>
                    </thead>
                    <tbody>
                      {_data.map((item: any, index: number) => (
                        <tr key={index}>
                          <td>{item.date}</td>
                          <td>{item.accounting_date}</td>
                          <td
                            className="whitespace-break-spaces"
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></td>
                          <td>
                            {numberWithThousands(item.debit, ",", ".00") || 0}
                          </td>
                          <td>
                            {numberWithThousands(item.credit, ",", ".00") || 0}
                          </td>
                          <td>
                            {numberWithThousands(item.balance, ",", ".00") || 0}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {_page.hasLast && (
                  <div className="flex justify-between text-[12px] pl-[112px] pr-[150px] mt-[20px]">
                    <span>Lập phiếu</span>
                    <span>Kiểm soát</span>
                  </div>
                )}
              </div>
              <div
                className={cn(
                  styles.footer,
                  "flex justify-between absolute bottom-[56px] right-[42px]"
                )}
              >
                Page {_page.page} of {dataPages.length}
              </div>
            </section>
          );
        }}
      />
    </main>
  );
};

export default VietbankPage;
