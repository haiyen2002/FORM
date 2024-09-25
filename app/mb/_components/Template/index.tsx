import React from "react";
import styles from "./styles.module.scss";
import cn from "@/utils/classnames";

const Template = ({ data, info }: { data: any; info: any }) => {
  console.log(data);
  return (
    <div className={cn(styles.template)}>
      <table className="w-full table-fixed">
        <thead>
          <tr>
            <th>
              <span>Ngày giao dịch</span>
              <br />
              <span className="italic">Value date</span>
            </th>
            <th>
              <span>Mã giao dịch</span>
              <br />
              <span className="italic">Trans code</span>
            </th>
            <th>
              <span>Phát sinh nợ</span>
              <br />
              <span className="italic">DebitAmount</span>
            </th>
            <th>
              <span>Phát sinh có</span>
              <br />
              <span className="italic">CreditAmount</span>
            </th>
            <th>
              <span>Nội dung</span>
              <br />
              <span className="italic">Details</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: number) => (
            <tr key={index}>
              {Object.keys(item).map((key: string, inx: number) => {
                return (
                  <td key={inx}>
                    {item[key] && item[key] !== "NULL"
                      ? (inx === 2 || inx === 3) &&
                        !item[key]?.toString().includes(".00")
                        ? item[key] + ".00"
                        : item[key]
                      : ""}
                  </td>
                );
              })}
            </tr>
          ))}
          <tr>
            <td colSpan={2} className="text-center">
              <span className="font-bold">Tổng cộng/Total</span>
            </td>
            <td className="font-bold">{info.debit_total}</td>
            <td className="font-bold">{info.credit_total}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Template;
