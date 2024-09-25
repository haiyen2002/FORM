"use client";

import PageConfiguration from "@/components/Configuration";
import React, { useState } from "react";
import Header from "../Header";
import page1 from "../../_assets/page_1.png";
import Image from "next/image";
import Logo from "../../_assets/logo.png";
import styles from "./styles.module.scss";
import cn from "@/utils/classnames";
import { numberWithThousands } from "@/utils/data";
import { useParams, useSearchParams } from "next/navigation";

const PageContent = () => {
  const params = useSearchParams();

  const isVertical = params.get("type") === "vertical";

  const [data, setData] = useState({
    info: [{}],
    data: [],
  });
  const [dataPages, setDataPages] = useState([
    {
      start: 0,
      end: 10,
      hasFirst: true,
      hasLast: false,
      page: 1,
      isSigned: false,
    },
  ]);

  const info: any = data.info[0] || {};

  return (
    <PageConfiguration
      data={data}
      setData={setData}
      templateName="Vietin Template"
      templateURL="viettin-template.xlsx"
      dataPages={dataPages}
      setDataPages={setDataPages}
      template={(props) => (
        <section
          className={cn(
            "bg-white bg-cover bg-center relative bg-no-repeat mx-auto",
            "border-t border-t-black print:border-t-transparent relative",
            isVertical ? "w-[794px] h-[1123px]" : "w-[1123px] h-[794px]"
          )}
          style={{
            // backgroundImage: `url(${page1.src})`,
            padding: isVertical ? "44px 8px 90px" : "44px 54px 90px 132px",
          }}
        >
          <div className="absolute bottom-[90px] w-full h-[1px] bg-red-500 left-0 no-print"></div>
          <div className="w-full h-full">
            <Header page={props.dataPage.page} totalPage={dataPages.length} />

            {props.dataPage.hasFirst && (
              <div className="pl-2">
                <div className="flex justify-between pt-7">
                  <div className="pt-[10px]">
                    <p className="font-bold">
                      Ngân Hàng TMCP Công Thương Việt Nam
                    </p>
                    <p className="font-bold">
                      Chi nhánh <span className="text-[8px]">Branch</span>:{" "}
                      {info.branch}
                    </p>
                  </div>
                  <div>
                    <div className="pr-[89px] pt-[8px]">
                      <Image src={Logo} width={85} height={27} alt="logo" />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3 pr-8">
                  <h1 className="text-[18px] font-bold">
                    SAO KÊ CHI TIẾT GIAO DỊCH
                  </h1>
                  <h2 className="text-[18px] font-bold">
                    TRANSACTIONS STATEMENT
                  </h2>

                  <p className="mt-[4px]">
                    Từ ngày {info.from} Đến ngày {info.to}
                  </p>
                  <p className="text-[8px]">
                    From date {info.from} to date {info.to}
                  </p>
                </div>
                <div className="mt-[21px] leading-[1.4] text-[12px]">
                  <p>
                    <span className="font-bold">Kính gửi quý khách hàng</span>{" "}
                    <i>Dear Customer:</i>{" "}
                    <span className="uppercase">{info.customer}</span>
                  </p>
                  <p>
                    Số ID khách hàng <i>ID.No</i>: {info.customer_id}
                  </p>
                  <p>
                    Địa chỉ <i>Address</i>:{" "}
                    <span className="uppercase">{info.address}</span>
                  </p>
                  <p>
                    Vietinbank xin trân trọng thông báo Sao kê giao dịch Tài
                    khoản số: {info.account_number} của quý khách hàng như sau:
                  </p>
                  <p
                    className="italic text-[12.9px] tracking-[-0.1px]"
                    style={{
                      wordSpacing: "0px",
                    }}
                  >
                    We would like to inform your transaction statement as
                    follow:
                  </p>
                  <p className="mt-[10px]">
                    Loại tiền tệ <i>Currency</i>{" "}
                    <span className="font-bold">VND</span>
                  </p>
                </div>
              </div>
            )}

            {data.data.slice(props.dataPage.start, props.dataPage.end).length >
              0 && (
              <div className="mt-3">
                <table
                  className={cn(
                    styles.table,
                    "w-full",
                    !isVertical && "table-fixed"
                  )}
                >
                  <thead>
                    <tr>
                      <th>
                        <p>STT</p>
                        <p>No</p>
                      </th>
                      <th>
                        <p>Ngày GD</p>
                        <p>Date Time</p>
                      </th>
                      <th>
                        <p>Mô tả giao dịch</p>
                        <p>Transaction Comment</p>
                      </th>
                      <th>
                        <p>Nợ</p>
                        <p>Debit</p>
                      </th>
                      <th>
                        <p>Có</p>
                        <p>Credit</p>
                      </th>
                      <th>
                        <p>Số dư cuối</p>
                        <p>Balance</p>
                      </th>
                      <th>
                        <p>Tên đối ứng</p>
                        <p>Offset Name</p>
                      </th>
                      {!isVertical && (
                        <th>
                          <p>Ngân hàng đối ứng</p>
                          <p>Offset Bank</p>
                        </th>
                      )}
                      <th>
                        <p>Số giao dịch</p>
                        <p>Reference No</p>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {props.dataPage.hasFirst && (
                      <tr>
                        <td colSpan={5}>
                          <p>
                            <b>Số dư đầu kỳ</b>
                            <i className="text-[9px]">Beginning Balance</i>
                          </p>
                        </td>
                        <td
                          className={cn(
                            "text-right font-bold pr-[12px]",
                            styles.tahoma
                          )}
                        >
                          {numberWithThousands(info.beginning_balance, ",")}
                        </td>
                      </tr>
                    )}

                    {data.data
                      .slice(props.dataPage.start, props.dataPage.end)
                      .map((item: any, index: number) => (
                        <tr key={index} className={styles.row}>
                          <td className="text-right">{item.index}</td>
                          <td>{item.date_time}</td>
                          <td>{item.comment}</td>
                          <td className="text-right">
                            {item.debit
                              ? numberWithThousands(item.debit || 0, ",")
                              : ""}
                          </td>
                          <td className="text-right">
                            {item.credit
                              ? numberWithThousands(item.credit || 0, ",")
                              : ""}
                          </td>
                          <td className="text-right !pr-[12px]">
                            {numberWithThousands(item.balance, ",")}
                          </td>
                          <td className="!pr-[10px]">{item.offset_name}</td>
                          {!isVertical && (
                            <td className="break-all">{item.offset_bank}</td>
                          )}
                          <td>{item.ref_no}</td>
                        </tr>
                      ))}

                    {props.dataPage.hasLast && (
                      <>
                        <tr>
                          <td colSpan={5}>
                            <p>
                              <b>Số dư cuối kỳ</b>
                              <i className="text-[9px]">Ending Balance</i>
                            </p>
                          </td>
                          <td
                            className={cn(
                              "font-bold text-right pr-[12px]",
                              styles.tahoma
                            )}
                          >
                            {numberWithThousands(info.ending_balance, ",")}
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={3}>
                            <p>
                              <b>Doanh số phát sinh kỳ báo cáo</b>
                              <i className="text-[9px]">
                                Total of reported period
                              </i>
                            </p>
                          </td>
                          <td
                            className={cn(
                              "font-bold text-right pr-[3px]",
                              styles.tahoma
                            )}
                          >
                            {numberWithThousands(info.reported_debit, ",")}
                          </td>
                          <td
                            className={cn(
                              "font-bold text-right pr-[8px]",
                              styles.tahoma
                            )}
                          >
                            {numberWithThousands(info.reported_credit, ",")}
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={3}>
                            <p>
                              <b>Doanh số phát sinh năm</b>
                              <i className="text-[9px]">Year to date</i>
                            </p>
                          </td>
                          <td
                            className={cn(
                              "font-bold text-right pr-[3px]",
                              styles.tahoma
                            )}
                          >
                            {numberWithThousands(info.year_debit, ",")}
                          </td>
                          <td
                            className={cn(
                              "font-bold text-right pr-[8px]",
                              styles.tahoma
                            )}
                          >
                            {numberWithThousands(info.year_credit, ",")}
                          </td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {props.dataPage.hasLast && (
              <div className=" mt-5 mb-[115px] flex justify-between">
                <span className="block flex-1 text-center">
                  Người lập bảng <span className="text-[9px]">Maker</span>
                </span>
                <span className="block flex-1 text-center">
                  Kiểm soát <span className="text-[9px]">Checker</span>
                </span>
              </div>
            )}

            {props.dataPage.isSigned && (
              <>
                <p className={cn("flex justify-between font-bold")}>
                  <span className="block flex-1 text-center">{info.maker}</span>
                  <span className="block flex-1 text-center">
                    {info.checker}
                  </span>
                </p>

                <p className="mt-3">
                  Quý khách hàng (KH) vui lòng kiểm tra, đối chiếu số dư tài
                  khoản trên sao kê chi tiết giao dịch của KH với Vietinbank.
                  Nếu có sai lệch KH liên hệ với Vietinbank trong vòng 24 giờ kể
                  từ khi nhận sao kê tài khoản để xác minh, đối chiếu. Nếu quá
                  thời gian trên mà không nhận được phản hồi của Quý KH thì số
                  dư trên được coi là chính xác.
                </p>
              </>
            )}
          </div>
        </section>
      )}
    />
  );
};

export default PageContent;
