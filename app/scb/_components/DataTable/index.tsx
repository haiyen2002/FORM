import React from "react";

import styles from "./styles.module.scss";
import cn from "@/utils/classnames";

const renderData = (value: any, colIndex: number) => {
  switch (colIndex) {
    case 5:
      return value === 0 ? "" : value.toLocaleString();
    case 6:
      return value === 0 ? "" : value.toLocaleString();
    case 7:
      return value.toLocaleString();
    default:
      return value;
  }
};

const DataTable = ({
  data,
  info,
  hasFirst,
  hasLast,
}: {
  data: any;
  info: any;
  hasFirst: boolean;
  hasLast: boolean;
}) => {
  return (
    <div className={cn(hasFirst && "mt-3", styles.data_table)}>
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
            </tr>
          </thead>
          <tbody>
            {hasFirst && (
              <tr
                className={cn(
                  hasFirst && "page-first",
                  !hasFirst && !hasLast && styles.page_mid,
                  hasLast && styles.page_last
                )}
              >
                <td>
                  <span className="font-bold">STT</span>
                  <br />
                  <i>No</i>
                </td>
                <td>
                  <span className="font-bold">Ngày GD</span>
                  <br />
                  <i>Booking date </i>(*)
                </td>
                <td>
                  <span className="font-bold">Ngày HL</span>
                  <br />
                  <i>Value date </i>(*)
                </td>
                <td>
                  <span className="font-bold">Số GD</span>
                  <br />
                  <i>Txn ID</i>
                </td>
                <td>
                  <span className="font-bold">Diễn giải</span>
                  <br />
                  <i>Description</i>
                </td>
                <td>
                  <span className="font-bold">Số tiền rút</span>
                  <br />
                  <i>Debit</i>
                </td>
                <td>
                  <span className="font-bold">Số tiền gửi</span>
                  <br />
                  <i>Credit</i>
                </td>
                <td>
                  <span className="font-bold">Số dư</span>
                  <br />
                  <i>Balance </i>(*)
                </td>
              </tr>
            )}
            {hasFirst && (
              <tr
                className={cn(
                  hasFirst && "page-first",
                  !hasFirst && !hasLast && styles.page_mid,
                  hasLast && styles.page_last
                )}
              >
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
            {data.map((item: any, index: number) => (
              <tr
                key={index}
                className={cn(
                  hasFirst && "page-first",
                  !hasFirst && !hasLast && styles.page_mid,
                  hasLast && styles.page_last
                )}
              >
                {Object.keys(item).map(
                  (key, idx) =>
                    idx !== 8 && (
                      <td key={idx}>
                        <span
                          className={cn(
                            item["in dam"] && idx === 7 && "font-bold"
                          )}
                        >
                          {renderData(item[key], idx)}
                        </span>
                      </td>
                    )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {hasLast && (
        <div className="border-t border-t-solid border-t-black pl-[155px] py-[6px] mt-[3px]">
          <div className="font-bold flex">
            <span>
              Cộng phát sinh trong kỳ/<i>Total recored amount:</i>
            </span>
            <span className="inline-block pr-1 border-r border-r-solid border-r-black min-w-[140px] text-right">
              {info[7]?.value.toLocaleString()}
            </span>
            <span className="flex-1 text-right pr-[113px]">
              {info[8]?.value.toLocaleString()}
            </span>
          </div>
          <div className="font-bold mt-1 flex">
            <span>
              Số dư cuối kỳ/<i>Ending balance:</i>
            </span>
            <span className="inline-block pr-1"></span>
            <span className="flex-1 text-right pr-[113px]">
              {info[9]?.value.toLocaleString()}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;
