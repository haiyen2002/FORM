"use client";

import React, { useState } from "react";
import SampleBg from "./_assets/sample.jpg";
import styles from "./styles.module.scss";
import cn from "@/utils/classnames";
import PageConfiguration from "@/components/Configuration";
import { numberWithThousands } from "@/utils/data";

const ACBpage = () => {
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

  return (
    <main className={cn(styles.page, "bg-neutral-600")}>
      <PageConfiguration
        data={data}
        setData={setData}
        templateName="ACB Template"
        templateURL="acb-template.xlsx"
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
              className="relative w-[794px] h-[1123px] mx-auto py-[74px] pr-[68px] pl-[56px] bg-white overflow-y-auto border-t border-t-black print:border-t-transparent"
              style={{
                // backgroundImage: `url(${SampleBg.src})`,
                backgroundSize: "100%",
              }}
            >
              <div className="absolute border-t border-t-red-400 left-0 right-0 bottom-[74px] no-print"></div>
              <div className="pr-[3px]">
                <div className="flex">
                  <p className="text-right flex-1">Page :</p>
                  <p className="ml-auto min-w-[108px]">
                    <span className="inline-block min-w-[30px] text-center">
                      {_page.page}
                    </span>{" "}
                    Of{" "}
                    <span className="inline-block min-w-[22px] text-center">
                      {dataPages.length}
                    </span>
                  </p>
                </div>

                <div className="flex mt-1">
                  <p className="text-right flex-1">Account Number :</p>
                  <p className="ml-auto min-w-[108px] flex">
                    <span className="inline-block pl-[5px]">
                      {info.account_number}
                    </span>{" "}
                    {/* <span className="inline-block ml-auto pr-[56px]">{9}</span> */}
                  </p>
                </div>

                <div className="flex mt-1">
                  <p className="text-right flex-1">Statement :</p>
                  <p className="ml-auto min-w-[108px] flex">
                    <span className="inline-block pl-[5px]">
                      {info.statement}
                    </span>{" "}
                  </p>
                </div>

                <div className="flex mt-1">
                  <p className="text-right flex-1">Number of Check :</p>
                  <p className="ml-auto min-w-[108px] flex">
                    <span className="inline-block pl-[5px]">
                      {info.number_check}
                    </span>{" "}
                  </p>
                </div>
              </div>

              <div className="pt-[9px]">
                <div>
                  <span>
                    {"----"} <span className="inline-block w-[2px]"> </span>
                    PersNbr : <span>{info.per_num}</span>
                  </span>
                </div>

                <div className="mt-[3px]">
                  <span className="tracking-[0.2px] uppercase">
                    <span className="inline-block w-[23px]"> </span>
                    {info.account_name}
                  </span>
                </div>

                <div className="mt-[4px]">
                  <span>
                    <span className="inline-block w-[23px]"> </span>Ma so thue :
                  </span>
                  <span className="pl-1">{info.tax_code}</span>
                </div>

                <div className="mt-[4px]">
                  <span>
                    {"----"} <span className="inline-block w-[2px]"> </span>So :
                  </span>
                  <span className="pl-1">{info.number}</span>
                </div>

                <div className="mt-[4px]">
                  <span>
                    {"----"} <span className="inline-block w-[2px]"> </span>
                    Duong -
                  </span>
                </div>
                <div className="mt-[3px]">
                  <span className="tracking-[0.2px]">
                    <span className="inline-block w-[23px]"> </span>
                    {info.street}
                  </span>
                </div>
              </div>

              <div className="pt-[14px] pl-[44px]">
                <h1 className="font-bold">
                  BANG KE GD{" "}
                  <span className="inline-block text-center w-[24px] mr-[4px]">
                    -
                  </span>{" "}
                  TGTT KHTN (CA NHAN) VND Checking
                  <span className="pl-[122px] font-bold">
                    {info.account_number}
                  </span>
                </h1>
                <div className="flex pl-[58px] pt-[4px]">
                  <div className="w-[256px]">
                    <span className="font-bold">Tu ngay :</span>{" "}
                    <span className="inline-block ml-[14px]">
                      {info.from_date}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold">Den ngay :</span>{" "}
                    <span className="inline-block ml-[4px]">
                      {info.to_date}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-[14px]">
                <table className="w-full table-fixed">
                  <thead>
                    <tr>
                      <th className="w-[120px]">So du dau</th>
                      <th className="w-[100px]">+ Gui vao</th>
                      <th className="w-[128px]">(Lai nhap von)</th>
                      <th className="w-[120px]">- Rut ra</th>
                      <th className="w-[84px]">- Phi =</th>
                      <th className="pl-[20px]">So du cuoi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-right pr-[20px]">
                        {numberWithThousands(info.opening_balance, ",", ".00")}
                      </td>
                      <td className="text-right pr-[10px]">
                        {numberWithThousands(info.credit, ",", ".00")}
                      </td>
                      <td className="text-right pr-[28px]">
                        {numberWithThousands(info.interest, ",", ".00")}
                      </td>
                      <td className="text-right pr-[26px]">
                        {numberWithThousands(info.debit, ",", ".00")}
                      </td>
                      <td className="text-right pr-[10px]s">
                        {numberWithThousands(info.fee, ",", ".00")}
                      </td>
                      <td className="text-right">
                        {numberWithThousands(info.closing_balance, ",", ".00")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="pt-[8px]">
                <table className={cn(styles.table_data, "table-fixed w-full")}>
                  <thead>
                    <tr>
                      <th className="text-right w-[38px]">Ngay</th>
                      <th className="text-left pl-[16px] w-[300px]">
                        Dien giai
                      </th>
                      <th className="text-right pr-[17px] w-[111px]">Ghi no</th>
                      <th className="w-[111px] text-right pr-[27px]">Ghi co</th>
                      <th className="text-right pr-[19px]">So du</th>
                    </tr>
                  </thead>
                  <tbody>
                    {_data.map((item: any, index: number) => (
                      <tr key={index}>
                        <td className="text-right">{item.date}</td>
                        <td
                          className="pl-[16px] whitespace-break-spaces"
                          dangerouslySetInnerHTML={{
                            __html: item.description,
                          }}
                        ></td>
                        <td className="text-right">
                          {item.debit &&
                          item.debit?.toString().trim() &&
                          item.debit !== "0"
                            ? `-${numberWithThousands(item.debit, ",", ".00")}`
                            : ""}
                        </td>
                        <td className="text-right">
                          {item.credit &&
                          item.credit?.toString().trim() &&
                          item.credit !== "0"
                            ? `${numberWithThousands(item.credit, ",", ".00")}`
                            : ""}
                        </td>
                        <td className="text-right">
                          {item.balance &&
                          item.balance?.toString().trim() &&
                          item.balance !== "0"
                            ? `${numberWithThousands(item.balance, ",", ".00")}`
                            : ""}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {_page.hasLast && (
                <div className="mt-[24px] text-right text-[18px] tracking-[-1.2px] pr-[49px]">
                  <p>GIAO DICH VIEN</p>
                </div>
              )}
            </section>
          );
        }}
      />
    </main>
  );
};

export default ACBpage;
