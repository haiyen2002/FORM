import React from "react";
import Logo from "../_assets/logo.png";
import Image from "next/image";
import cn from "@/utils/classnames";
import styles from "./styles.module.scss";
import { generateRandomNumber, numberWithThousands } from "@/utils/data";
import Sample from "../_assets/sample.jpg";

const Template = ({
  data,
  page,
  total,
  info,
  pageInfo,
}: {
  data: any;
  page: number;
  total: number;
  info: any;
  pageInfo: any;
}) => {
  return (
    <section
      className={cn(
        styles.main,
        "relative h-[1123px] w-[794px] pt-[24px] px-[11px] pb-[120px] overflow-y-auto border-t border-t-black print:border-t-transparent"
      )}
      style={{
        // backgroundImage: `url(${Sample.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute border-t border-t-red-400 left-0 right-0 bottom-[120px] no-print"></div>
      <header className={cn("flex justify-between")}>
        <div className={cn("flex flex-col gap-4 max-w-[264px] break-all")}>
          <div>
            <Image width={220} height={118} src={Logo} alt="VIB Logo" />
          </div>
          <div>
            <h3 className="font-semibold">Sổ chi tiết tài khoản</h3>
            <h4 className="pl-4 text-[11px]">Statement of Account For</h4>
          </div>
          <div>
            <p>{info.name}</p>
            <p>.,{info.address}</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 pr-[65px]">
          <div className="flex gap-x-3">
            <div className="text-right min-w-[152px]">
              <p className="font-bold">In ngày:</p>
              <p className="text-[11px]">Statement Date</p>
            </div>
            <div>
              <p>{info.date}</p>
            </div>
          </div>

          <div className="flex gap-x-3">
            <div className="text-right min-w-[152px]">
              <p className="font-bold">Từ ngày... Đến ngày:</p>
              <p className="text-[11px]">Statement Period</p>
            </div>
            <div>
              <p>{info.period}</p>
            </div>
          </div>

          <div className="flex gap-x-3">
            <div className="text-right min-w-[152px]">
              <p className="font-bold">Số TK/Loại TK/Loại tiền:</p>
              <p className="text-[11px]">A/C No. Type/Ccy</p>
            </div>
            <div>
              <p>
                {info.acc_no} {info.type_ccy}
              </p>
            </div>
          </div>

          <div className="flex gap-x-3">
            <div className="text-right min-w-[152px]">
              <p className="font-bold">Trang số:</p>
              <p className="text-[11px]">Page</p>
            </div>
            <div className="">
              <p>
                {page}/{total}
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="mt-12">
        <div className="flex justify-between">
          <div>
            <div>
              <span className="font-bold">Số dư đầu ngày:</span>
              <span className="inline-block ml-16"> {info.open_date}</span>
            </div>
            <p className="text-[11px] pl-2">Opening Balance as of</p>
          </div>
          <div className="pr-[32px]">
            {numberWithThousands(info.open_balance, ",")}
          </div>
        </div>
        <div className="w-full">
          <table className={cn("w-full table-fixed", styles.table)}>
            <thead>
              <tr>
                <th>
                  <span className="font-bold">Số CT</span>
                  <br />
                  <span className="text-[11px] font-normal">Seq. No.</span>
                </th>

                <th>
                  <span className="font-bold">Ngày GD</span>
                  <br />
                  <span className="text-[11px] font-normal">Tran Date</span>
                </th>

                <th>
                  <span className="font-bold">Ngày hiệu lực</span>
                  <br />
                  <span className="text-[11px] font-normal">Effect Date</span>
                </th>

                <th>
                  <span className="font-bold">Loại GD</span>
                  <br />
                  <span className="text-[11px] font-normal">Tran</span>
                </th>

                <th>
                  <span className="font-bold">Số sec/Số ref</span>
                  <br />
                  <span className="text-[11px] font-normal">
                    Cheque No./ Reference
                  </span>
                </th>

                <th>
                  <span className="font-bold">Phát sinh nợ</span>
                  <br />
                  <span className="text-[11px] font-normal">Withdrawal</span>
                </th>

                <th>
                  <span className="font-bold">Phát sinh có</span>
                  <br />
                  <span className="text-[11px] font-normal">Deposit</span>
                </th>

                <th>
                  <span className="font-bold">Số dư</span>
                  <br />
                  <span className="text-[11px] font-normal">Balance</span>
                </th>

                <th>
                  <span className="font-bold">Nội dung</span>
                  <br />
                  <span className="text-[11px] font-normal">Remarks</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item: any, index: any) => {
                if (!item["TK Đối ứng"] || item["TK Đối ứng"] === "NULL") {
                  return (
                    <tr key={index}>
                      {/* <td>{item["Seq. No."]}</td> */}
                      <td>{"5192" + generateRandomNumber(111111, 999999)}</td>
                      <td>{item["Tran Date"]}</td>
                      <td>{item["Effect Date"]}</td>
                      <td>{item["Tran Type"]}</td>
                      <td>
                        {item["Cheque No./ Reference"] != "NULL"
                          ? item["Cheque No./ Reference"]
                          : ""}
                      </td>
                      <td>
                        {numberWithThousands(item[" Withdrawal "] || "", ",") ||
                          0}
                      </td>
                      <td>
                        {numberWithThousands(item[" Deposit "] || "", ",") || 0}
                      </td>
                      <td className="!pr-1">
                        {numberWithThousands(item[" Balance "] || "", ",") || 0}
                      </td>
                      <td>{item["Nội Dung"]}</td>
                    </tr>
                  );
                }

                return (
                  <React.Fragment key={index}>
                    <tr>
                      {/* <td>{item["Seq. No."]}</td> */}
                      <td>{"5192" + generateRandomNumber(111111, 999999)}</td>
                      <td>{item["Tran Date"]}</td>
                      <td>{item["Effect Date"]}</td>
                      <td>{item["Tran Type"]}</td>
                      <td>
                        {item["Cheque No./ Reference"] !== "NULL"
                          ? item["Cheque No./ Reference"]
                          : ""}
                      </td>
                      <td>
                        {numberWithThousands(item[" Withdrawal "] || "", ",") ||
                          0}
                      </td>
                      <td>
                        {numberWithThousands(item[" Deposit "] || "", ",") || 0}
                      </td>
                      <td className="!pr-1">
                        {numberWithThousands(item[" Balance "] || "", ",") || 0}
                      </td>
                      <td rowSpan={2}>{item["Nội Dung"]}</td>
                    </tr>
                    <tr>
                      <td colSpan={8} className="!pl-10">
                        <p className="">
                          <span className="font-bold">TK Đối Ứng :</span>
                          <sub className="mt-1 inline-block pl-[2px] text-xs">
                            {item["TK Đối ứng"]}
                          </sub>
                        </p>
                        <span className="text-[11px]">Ctpy A/C No.</span>
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {pageInfo.hasLast && (
        <div className="mt-8">
          {/* <div className="text-right pr-[130px]">
            <p>Ngày ...... tháng ...... năm ......</p>
            <p className="mt-2 pr-[36px]">
              <i>(DD/MM/YYYY)</i>
            </p>
          </div> */}
          <div className="flex justify-between mt-4 pl-[145px] pr-[174px]">
            <div>
              <p>LẬP BIỂU</p>
              <p className="mt-2">
                <i>Creator</i>
              </p>
            </div>
            <div>
              <p>KIỂM SOÁT</p>
              <p className="mt-2">
                <i>Supervisor</i>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Template;
