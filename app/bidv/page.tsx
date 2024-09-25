"use client";

import React, { useEffect, useState } from "react";
import Logo from "./_assets/bidv-logo.png";
import Image from "next/image";
import styles from "./styles.module.scss";
import cn from "@/utils/classnames";
import PageConfiguration from "@/components/Configuration";
import { numberWithThousands } from "@/utils/data";
import { Button, Checkbox, Form, InputNumber } from "antd";
import Template from "./_assets/template.png";

const BIDVPage = () => {
  const paperRef = React.useRef<HTMLDivElement>(null);
  const [data, setData] = useState<any>({});
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

  const info = (data?.info && data.info[0]) || {};
  const dataTable = data?.data || [];

  return (
    <main className={cn("bg-neutral-600", styles.page)}>
      <PageConfiguration
        data={data}
        setData={setData}
        templateName="BIDV Template"
        templateURL="bidv-template.xlsx"
        dataPages={dataPages}
        setDataPages={setDataPages}
        template={(props) => (
          <section
            ref={paperRef}
            className={cn(
              "relative w-[794px] bg-white mx-auto pl-[18px] pr-[18px] h-[1123px] pb-20 bg-no-repeat",
              "border-t border-t-solid border-t-black print:border-transparent",
              "flex flex-col",
              !props.dataPage.hasFirst ? "pt-20" : "pt-12"
            )}
            style={{
              // backgroundImage: `url(${Template.src})`,
              backgroundSize: "97%",
              backgroundPosition: "20px 12px",
            }}
          >
            {props.dataPage.hasFirst && (
              <>
                <div className="flex justify-between">
                  <div className="relative w-[68px] h-[35px]">
                    <Image
                      src={Logo}
                      alt="BIDV Logo"
                      fill
                      objectFit="cover"
                      quality={100}
                      objectPosition="center -13px"
                    />
                  </div>
                  <div className="mr-auto ml-5 pt-3">
                    <h1 className="font-[900] scale-y-[1.04]">
                      NGÂN HÀNG TMCP ĐẦU TƯ VÀ PHÁT TRIỂN VIỆT NAM
                    </h1>
                    <h2 className="font-[900] mb-4 scale-y-[1.04]">
                      Bank for Investment and Development of VietNam JSC
                    </h2>
                    <p
                      className={cn(
                        "font-[900] relative mb-8 scale-y-[1.04]",
                        styles.branch_decor
                      )}
                    >
                      Chi nhánh/Branch:{" "}
                      <span className="pl-[18px]">{info.branch}</span>
                    </p>
                    <p className="pl-[120px] mb-3">
                      Số: <span className="pl-[14px]">{info.number}</span>
                    </p>
                  </div>
                  <div className="pt-3 w-[36%]">
                    <p>
                      Mẫu số/Sample No:{" "}
                      <span className="pl-[23px]">{info.sample_no}</span>
                    </p>
                    <p className="mt-2">
                      Ngày in/Prt Date:{" "}
                      <span className="pl-[32px]">{info.prt_date}</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-[900] text-center text-[11.2px] mb-3 scale-y-[1.07]">
                    SAO KÊ TÀI KHOẢN TIỀN GỬI KHÁCH HÀNG/ACCOUNT STATEMENT
                  </h3>
                  <div className="text-center text-[9px] pl-[6px] pr-[12px] mb-3">
                    <span>
                      <b>Từ ngày</b>/<i>From Date:</i>
                    </span>
                    <span className="pl-[12px]">{info.from}</span>
                    <span className="pl-[20px]">
                      <b>Đến ngày</b>/<i>To date:</i>
                    </span>
                    <span className="pl-[12px]">{info.to}</span>
                  </div>
                </div>

                <div>
                  <div className="flex">
                    <div className="flex flex-col gap-y-3">
                      <p>
                        <b className="inline-block min-w-[77px]">
                          Khách hàng /
                        </b>{" "}
                        <span className="italic">Customer:</span>{" "}
                        <span className="pl-[68px] font-[800]">
                          {info.customer}
                        </span>
                      </p>
                      <p>
                        <b className="inline-block min-w-[77px]">Mã KH /</b>{" "}
                        <span className="italic">Cif No</span>{" "}
                        <span className="pl-[82px] font-[800]">
                          {info.cif_no}
                        </span>
                      </p>
                      <p>
                        <b className="inline-block min-w-[77px]">
                          Tên tài khoản /
                        </b>{" "}
                        <span className="italic">Account Name:</span>{" "}
                        <span className="pl-[35px]">{info.account_name}</span>
                      </p>
                      <p>
                        <b className="inline-block min-w-[77px]">
                          Số tài khoản /
                        </b>{" "}
                        <span className="italic">Account No:</span>{" "}
                        <span className="font-[800] pl-[55px]">
                          {info.account_no}
                        </span>
                      </p>
                    </div>

                    <div className="ml-auto w-[37%]">
                      <div className="flex items-center">
                        <div className="min-w-[68px]">
                          <b>Địa chỉ/</b>
                          <br />
                          <i className="pt-[4px] inline-block">Address:</i>
                        </div>
                        <div>{info.address}</div>
                      </div>

                      <div className="flex items-center mt-4">
                        <div className="min-w-[68px]">
                          <b>Loại tiền tệ/</b>
                          <br />
                          <i className="pt-[4px] inline-block">Currency:</i>
                        </div>
                        <div>{"VND"}</div>
                      </div>
                    </div>
                  </div>
                  <p className="italic mt-3 mb-[6px]">
                    (Số tài khoản cũ / Old Account No:{" "}
                    <span className={cn(info.old_account_no && "pl-[39px]")}>
                      {info.old_account_no}
                    </span>
                    )
                  </p>
                </div>
              </>
            )}

            <div>
              <table className="table-fixed w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {props.dataPage.hasFirst && (
                    <tr className={styles.row_head}>
                      <td>
                        <div className="pt-[4px]">
                          <b>STT</b>
                          <i>(No)</i>
                        </div>
                      </td>

                      <td>
                        <div>
                          <b>Ngày giao dịch</b>
                          <i>(Trans.Date)</i>
                        </div>
                      </td>

                      <td>
                        <div>
                          <b>Ngày hiệu lực</b>
                          <i>(EFD.Date)</i>
                        </div>
                      </td>

                      <td>
                        <div>
                          <b>Mã giao dịch</b>
                          <i>(Trans.Code)</i>
                        </div>
                      </td>

                      <td>
                        <div>
                          <b>Phát sinh nợ</b>
                          <i>(Debit amount)</i>
                        </div>
                      </td>

                      <td>
                        <div>
                          <b>Phát sinh có</b>
                          <i>(Credit amount)</i>
                        </div>
                      </td>

                      <td>
                        <div>
                          <b>Số dư</b>
                          <i>(Balance)</i>
                        </div>
                      </td>

                      <td>
                        <div className="pt-[4px]">
                          <b>Số chứng từ</b>
                          <i>SEQ No.</i>
                        </div>
                      </td>

                      <td>
                        <div>
                          <b className="pt-[4px]">Mã GDV</b>
                          <i>Teller ID</i>
                        </div>
                      </td>

                      <td>
                        <div className="pt-[4px]">
                          <b>Mã CN</b>
                          <i>Branch</i>
                        </div>
                      </td>

                      <td>
                        <div>
                          <b>Diễn giải</b>
                          <i>(Txn. Description)</i>
                        </div>
                      </td>
                    </tr>
                  )}

                  {props.dataPage.hasFirst && (
                    <tr>
                      <td colSpan={6} className="">
                        <div className="text-left h-[40px] flex flex-col justify-between py-1 pl-[2px]">
                          <b>Số dư đầu kỳ</b>
                          <br />
                          <i>(Opening balance)</i>
                        </div>
                      </td>
                      <td className="text-right font-[900]">
                        <b>
                          {numberWithThousands(info.open_balance, ",", ".00") ||
                            "0.00"}
                        </b>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  )}

                  {dataTable
                    .slice(props.dataPage.start, props.dataPage.end)
                    .map((item: any, index: number) => (
                      <tr key={index}>
                        <td>{item.no}</td>
                        <td>{item.trans_date}</td>
                        <td>{item.efd_date}</td>
                        <td>{item.trans_code}</td>
                        <td>
                          {numberWithThousands(item.debit, ",", ".00") ||
                            "0.00"}
                        </td>
                        <td>
                          {numberWithThousands(item.credit, ",", ".00") ||
                            "0.00"}
                        </td>
                        <td>
                          {numberWithThousands(item.balance, ",", ".00") ||
                            "0.00"}
                        </td>
                        <td>{item.seq}</td>
                        <td className="break-all">{item.teller_id}</td>
                        <td>{item.branch}</td>
                        <td
                          className="break-words whitespace-break-spaces"
                          dangerouslySetInnerHTML={{
                            __html: item.description
                              .replace(/\s+/g, " ")
                              .replace(/\s+-\s+CTLNHI/, "\n-\nCTLNHI")
                              .replace("Chuyen tien ", "Chuyen tien \n")
                              .replace("chuyen tien ", "Chuyen tien \n"),
                          }}
                        >
                          {/* {item.description} */}
                        </td>
                      </tr>
                    ))}

                  {props.dataPage.hasLast && (
                    <tr>
                      <td colSpan={4} className="">
                        <div className="text-left h-[40px] flex flex-col justify-between py-1 pl-[2px]">
                          <b>Cộng phát sinh</b>
                          <br />
                          <i>(Total Amount)</i>
                        </div>
                      </td>
                      <td className="text-right font-[900]">
                        <b>
                          {numberWithThousands(info.total_debit, ",", ".00") ||
                            "0.00"}
                        </b>
                      </td>
                      <td className="text-right font-[900]">
                        <b>
                          {numberWithThousands(info.total_credit, ",", ".00") ||
                            "0.00"}
                        </b>
                      </td>
                      <td colSpan={5}></td>
                    </tr>
                  )}

                  {props.dataPage.hasLast && (
                    <tr>
                      <td colSpan={6} className="">
                        <div className="text-left h-[40px] flex flex-col justify-between py-1 pl-[2px]">
                          <b>Số dư cuối kỳ</b>
                          <br />
                          <i>(Closing balance)</i>
                        </div>
                      </td>
                      <td className="text-right font-[900]">
                        <b>
                          {numberWithThousands(info.end_balance, ",", ".00") ||
                            "0.00"}
                        </b>
                      </td>
                      <td colSpan={4}></td>
                    </tr>
                  )}
                </tbody>
              </table>

              {props.dataPage.hasLast && (
                <div className="mt-[6px]">
                  <p className="pl-[404px]">
                    <b>Người tạo:</b>
                    <span className="pl-[22px]">{info.created_user}</span>
                  </p>
                </div>
              )}
            </div>

            {props.dataPage.isSigned && (
              <div
                className={cn(
                  "flex mb-0 ml-[345px] mt-auto",
                  styles.signature
                  // dataTable.slice(props.dataPage.start, props.dataPage.end)
                  //   .length > 0
                  //   ? "mt-auto"
                  //   : ""
                )}
              >
                <div className="ml-auto">
                  <p>Ký bởi: Ngân hàng Thương mại Cổ phần</p>
                  <p>
                    Đầu tư và Phát triển Việt Nam - Chi nhánh{" "}
                    {info.signed_branch}
                  </p>
                  <p>Thời gian ký: {info.signed_time}</p>
                </div>
              </div>
            )}

            <div
              className={cn(
                "flex justify-between text-[9.25px]",
                ((!props.dataPage.hasLast && !props.dataPage.isSigned) ||
                  dataTable.slice(props.dataPage.start, props.dataPage.end)
                    .length > 0) &&
                  !props.dataPage.isSigned &&
                  "mt-auto"
              )}
            >
              <p className="italic">
                Chứng từ này được in/chuyển đổi trực tiếp từ hệ thống In sao kê
                tài khoản khách hàng của BIDV.
              </p>
              <p className="pr-[113px]">
                Trang /<i>Page</i> No {props.dataPage.page} of{" "}
                {dataPages.length}
              </p>
            </div>
          </section>
        )}
      />
    </main>
  );
};

export default BIDVPage;
