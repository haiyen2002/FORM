"use client";

import React, { useEffect, useState } from "react";
import SampleBg from "./_assets/sample.jpg";
import styles from "./styles.module.scss";
import cn from "@/utils/classnames";
import PageConfiguration from "@/components/Configuration";
import { numberWithThousands } from "@/utils/data";
import Logo from "./_assets/logo.jpg";
import Image from "next/image";
import "./style.css";

const AGRPage = () => {
  const [data, setData] = useState<any>({
    data: [
      {
        date: "03/09/2023",
        remark: "Phi dich vu E-Mobile Banking Thang 09/2023",
        debit: 11000,
        credit: "",
        balance: 51246446,
        ref_no: "",
      },
    ],
    info: [
      {
        branch: "Chi nhánh Tỉnh Đắk Nông",
        branch_address:
          "Số 35 - đường 23/3 - P.Nghĩa Trung - TP.Gia Nghĩa - Đắk Nông",
        phone_fax: "",
        name: "Võ Tá Huân",
        address: "Thôn Tân Bình, xã Đăk Săk , huyện Đăk Mil, tỉnh Đắk Nông",
        print_out_date: "19/08/2024",
        dp_kind: "TG KKH Cá nhân (Số đẹp)",
        ac_no: "5300777708777",
        prior_statement_date: "31/08/2023",
        prior_statement: 51257446,
        ending_balance_date: "30/03/2024",
        ending_balance: 1993735,
        less_debit: 47,
        less_debit_amount: 681074503,
        plus_credit: 8,
        plus_credit_amount: 676923800,
        currency: "VND",
        joint_ac: "No",
        ac_status: "Active",
        monthly_less_debit: 517456434,
        monthly_plus_credit: 517456434,
        annual_less_debit: 517456434,
        annual_plus_credit: 517456434,
        printed_user: "DNOLTUYEN",
        printed_time: "19/08/2024",
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
    document.title = "Agribank - " + (info?.name || "template");
  }, [info]);

  return (
    <main className={cn(styles.page, "bg-neutral-600")}>
      <PageConfiguration
        data={data}
        setData={setData}
        templateName="Agribank Template"
        templateURL="agribank-template.xlsx"
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
                "relative w-[794px] h-[1123px] mx-auto pb-[42px] pr-[34px] pl-[34px] bg-white overflow-y-auto border-t border-t-black print:border-t-transparent",
                "pt-[32px]"
              )}
              style={{
                // backgroundImage: `url(${SampleBg.src})`,
                backgroundSize: "97%",
                backgroundPosition: "-8px",
              }}
            >
              <div className="absolute border-t border-t-red-400 left-0 right-0 bottom-[68px] no-print"></div>
              <div className="h-full flex flex-col">
                <header className="pb-[3px] flex justify-between border-b-solid border-b border-black">
                  <div className="pt-[4px]">
                    <p className="font-bold">
                      <span className="min-w-[92px]">Chi nhánh:</span>
                      <span>{info.branch}</span>
                    </p>
                    <p className="mt-[4px]">
                      <span className="min-w-[92px]">Địa chỉ:</span>
                      <span>{info.branch_address}</span>
                    </p>
                    <p className="mt-[4px]">
                      <span className="min-w-[92px]">Điện thoại/Fax:</span>
                      <span>{info.phone_fax}</span>
                    </p>
                  </div>
                  <div className="relative w-[170px] h-[50px] overflow-hidden">
                    <div className="absolute z-[1] w-max top-[-23px] left-[-51px]">
                      <Image src={Logo} alt="logo" width={275} height={40} />
                    </div>
                  </div>
                </header>

                {_page.hasFirst && (
                  <div>
                    <h1 className="mt-[6px] text-center text-lg font-bold tracking-[0.6px]">
                      SỔ PHỤ / STATEMENT
                    </h1>

                    <div className="pt-[12px]">
                      <p>
                        <b className="tracking-[0.4px]">Tên khách hàng/ </b>
                        <span className="text-[11px] tracking-[-0.5px]">
                          Customer name :
                        </span>{" "}
                        <span className="ml-[8px]">{info.name}</span>
                      </p>
                      <p className="mt-[12px]">
                        <b className="tracking-[0.4px]">Địa chỉ / </b>
                        <span className="text-[11px] tracking-[-0.4px]">
                          Address :
                        </span>{" "}
                        <span className="ml-[4px]">{info.address}</span>
                      </p>

                      <div className="flex gap-[6px]">
                        <div className="flex-none">
                          <p className="mt-[10px]">
                            <span className="w-[118px]">
                              <b className="tracking-[0.4px]">
                                Ngày in <span className="pl-[8px]">/</span>{" "}
                              </b>
                              <span className="text-[11px] tracking-[-0.5px]">
                                Print out date
                              </span>{" "}
                            </span>
                            :
                            <span className="ml-[6px]">
                              {info.print_out_date}
                            </span>
                          </p>

                          <p className="mt-[10px]">
                            <span className="w-[118px]">
                              <b className="tracking-[0.4px]">
                                Loại tiền gửi{" "}
                                <span className="pl-[2px]">/</span>{" "}
                              </b>
                              <span className="text-[11px] tracking-[-0.5px]">
                                DP kind
                              </span>{" "}
                            </span>
                            :<span className="ml-[4px]">{info.dp_kind}</span>
                          </p>

                          <p className="mt-[10px]">
                            <span className="w-[118px]">
                              <b className="tracking-[0.4px]">
                                Số tài khoản <span className="pl-[1px]">/</span>{" "}
                              </b>
                              <span className="text-[11px] tracking-[-0.5px]">
                                A/C No
                              </span>{" "}
                            </span>
                            :<span className="ml-[4px]">{info.ac_no}</span>
                          </p>
                          <p className="mt-[10px]">
                            <span className="w-[197px]">
                              <b className="tracking-[0.4px]">
                                Ngày phát sinh trước{" "}
                                <span className="pl-[1px]">/</span>{" "}
                              </b>
                              <span className="text-[11px] tracking-[-0.5px]">
                                Prior Statement
                              </span>{" "}
                            </span>
                            :
                            <span className="ml-[4px]">
                              {info.prior_statement_date}
                            </span>
                            <span className="w-[128px] text-right">
                              {numberWithThousands(info.prior_statement, ",")}
                            </span>
                          </p>
                          <p className="mt-[10px]">
                            <span className="w-[197px]">
                              <b className="tracking-[0.4px]">
                                Số dư cuối ngày{" "}
                                <span className="pl-[7px]">/</span>{" "}
                              </b>
                              <span className="text-[11px] tracking-[-0.5px]">
                                Ending balance
                              </span>{" "}
                            </span>
                            :
                            <span className="ml-[4px]">
                              {info.ending_balance_date}
                            </span>
                            <span className="w-[128px] text-right">
                              {numberWithThousands(info.ending_balance, ",")}
                            </span>
                          </p>
                          <p className="mt-[10px]">
                            <span className="w-[197px]">
                              <b className="tracking-[0.4px]">
                                Số bút toán/Doanh số nợ
                                <span className="pl-[0px]">/</span>{" "}
                              </b>
                              <span className="text-[11px] tracking-[-0.5px]">
                                Less debit
                              </span>{" "}
                            </span>
                            :
                            <span className="text-center w-[90px]">
                              {info.less_debit}
                            </span>
                            <span className="w-[100px] text-right">
                              {numberWithThousands(info.less_debit_amount, ",")}
                            </span>
                          </p>
                          <p className="mt-[10px]">
                            <span className="w-[197px]">
                              <b className="tracking-[0.4px]">
                                Số bút toán/Doanh số có
                                <span className="pl-[2px]">/</span>{" "}
                              </b>
                              <span className="text-[11px] tracking-[-0.5px]">
                                Plus crebit
                              </span>{" "}
                            </span>
                            :
                            <span className="text-center w-[90px]">
                              {info.plus_credit}
                            </span>
                            <span className="w-[100px] text-right">
                              {numberWithThousands(
                                info.plus_credit_amount,
                                ","
                              )}
                            </span>
                          </p>
                        </div>

                        <div>
                          <p className="mt-[10px]">
                            <span className="">
                              <b className="tracking-[0.4px]">
                                Loại tiền<span className="">/</span>{" "}
                              </b>
                              <span className="text-[11px] tracking-[-0.5px] pr-[6px]">
                                Ccy
                              </span>{" "}
                            </span>
                            :<span className="ml-[8px]">{info.currency}</span>
                          </p>

                          <p className="mt-[10px]">
                            <span className="">
                              <b className="tracking-[0.4px]">
                                Tài khoản đồng sở hữu
                                <span className="pl-[0px]">/</span>{" "}
                              </b>
                              <span className="text-[11px] tracking-[-0.5px] pr-[4px]">
                                Joint A/C
                              </span>{" "}
                            </span>
                            :<span className="ml-[10px]">{info.joint_ac}</span>
                          </p>

                          <p className="mt-[10px]">
                            <span className="w-[175px]">
                              <b className="tracking-[0.4px]">
                                Tình trạng tài khoản
                                <span className="pl-[1px]">/</span>
                              </b>
                              <span className="text-[11px] tracking-[-0.5px]">
                                A/C status
                              </span>{" "}
                            </span>
                            :<span className="ml-[10px]">{info.ac_status}</span>
                          </p>
                          <p className="mt-[10px]">
                            <span className="w-[197px]">
                              <b className="tracking-[0.4px]">
                                Doanh số nợ tháng{" "}
                                <span className="pl-[1px]">/</span>{" "}
                              </b>
                              <span className="text-[11px] tracking-[-0.5px]">
                                Monthly less debit
                              </span>{" "}
                            </span>
                            :
                            <span className="w-[125px] text-right">
                              {numberWithThousands(
                                info.monthly_less_debit,
                                ","
                              )}
                            </span>
                          </p>
                          <p className="mt-[10px]">
                            <span className="w-[197px]">
                              <b className="tracking-[0.4px]">
                                Doanh số có tháng{" "}
                                <span className="pl-[1px]">/</span>{" "}
                              </b>
                              <span className="text-[11px] tracking-[-0.5px]">
                                Monthly plus credit
                              </span>{" "}
                            </span>
                            :
                            <span className="w-[125px] text-right">
                              {numberWithThousands(
                                info.monthly_plus_credit,
                                ","
                              )}
                            </span>
                          </p>
                          <p className="mt-[10px]">
                            <span className="w-[197px]">
                              <b className="tracking-[0.4px]">
                                Doanh số nợ năm{" "}
                                <span className="pl-[1px]">/</span>{" "}
                              </b>
                              <span className="text-[11px] tracking-[-0.5px]">
                                Annual less debit
                              </span>{" "}
                            </span>
                            :
                            <span className="w-[125px] text-right">
                              {numberWithThousands(info.annual_less_debit, ",")}
                            </span>
                          </p>
                          <p className="mt-[10px]">
                            <span className="w-[197px]">
                              <b className="tracking-[0.4px]">
                                Doanh số có năm{" "}
                                <span className="pl-[1px]">/</span>{" "}
                              </b>
                              <span className="text-[11px] tracking-[-0.5px]">
                                Annual plus crebit
                              </span>{" "}
                            </span>
                            :
                            <span className="w-[125px] text-right">
                              {numberWithThousands(
                                info.annual_plus_credit,
                                ","
                              )}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-[10px] mb-[10px]">
                  <table
                    className={cn(styles.table_data, "w-full table-fixed")}
                  >
                    <thead>
                      <tr>
                        <th>
                          <span>Ngày</span>
                          <span>Date</span>
                        </th>

                        <th>
                          <span>Ghi chú</span>
                          <span>Remark</span>
                        </th>

                        <th>
                          <span>Nợ</span>
                          <span>Dr</span>
                        </th>

                        <th>
                          <span>Có</span>
                          <span>Cr</span>
                        </th>

                        <th>
                          <span>Số dư</span>
                          <span>Balance</span>
                        </th>

                        <th>
                          <span>Số tham chiếu</span>
                          <span>Ref. no</span>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {_data.map((item: any, index: number) => (
                        <tr key={index}>
                          <td>{item.date}</td>
                          <td>{item.remark}</td>
                          <td>{numberWithThousands(item.debit || "", ",")}</td>
                          <td>{numberWithThousands(item.credit || "", ",")}</td>
                          <td>
                            {numberWithThousands(item.balance || "", ",")}
                          </td>
                          <td>{item.ref_no}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {_page.hasLast && (
                  <p className="text-right font-bold pr-[93px] mt-[8px] uppercase">
                    Giao dịch viên
                  </p>
                )}

                <footer className="mt-auto flex justify-between text-[11.5px] border-t border-t-solid border-t-black pt-[4px]">
                  <span>Website: www.agribank.com.vn</span>
                  <span className="ml-[210px]">
                    {_page.page}/{dataPages.length}
                  </span>
                  <span className="ml-auto">
                    Người in : {info.printed_user} Thời gian in:{" "}
                    {info.printed_time}
                  </span>
                </footer>
              </div>
            </section>
          );
        }}
      />
    </main>
  );
};

export default AGRPage;
