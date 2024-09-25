import React from "react";
import styles from "./styles.module.scss";
import cn from "@/utils/classnames";

const headers = [
  {
    title: "Ngày",
    key: "Date",
  },
  {
    title: "Số bút toán",
    key: "Transaction No",
  },
  {
    title: "Phát sinh nợ",
    key: "Debit",
  },
  {
    title: "Phát sinh có",
    key: "Credit",
  },
  {
    title: "Nội dung",
    key: "Details",
  },
  {
    title: "Đơn vị thụ hưởng/ Đơn vị chuyển",
    key: "Beneficiary/Applicant",
  },
  {
    title: "Tài khoản",
    key: "Account",
  },
  {
    title: "Ngân hàng đối tác",
    key: "Remitter Bank",
  },
];

const DataTable = ({ data, debitTotal, creditTotal, hasLast }: any) => {
  return (
    <div className={cn(styles.data_table)}>
      <table className="w-full table-fixed">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header.key}>
                <span className="font-bold">{header.title}</span>
                <br />
                <span className="font-normal">{header.key}</span>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item: any, index: number) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.transaction_no}</td>
              <td>{item.debit ? item.debit.toLocaleString() + ".00" : ""}</td>
              <td>{item.credit ? item.credit.toLocaleString() + ".00" : ""}</td>
              <td>{item.details}</td>
              <td>{item.benificiary}</td>
              <td>{item.account}</td>
              <td>{item.remitter_bank}</td>
            </tr>
          ))}
          {hasLast && (
            <tr className="total bg-[--primary-color]">
              <td colSpan={2} className="font-bold leading-none !h-[18px]">
                Tổng phát sinh trong kỳ /Total
              </td>
              <td className="font-bold text-right leading-none !h-[18px]">
                {debitTotal.toLocaleString() + ".00"}
              </td>
              <td className="font-bold leading-none !h-[18px]">
                {creditTotal.toLocaleString() + ".00"}
              </td>
              <td className="!h-[18px]"></td>
              <td className="!h-[18px]"></td>
              <td className="!h-[18px]"></td>
              <td className="!h-[18px]"></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
