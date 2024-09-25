import React from "react";
import style from "./style.module.scss";
import cn from "@/utils/classnames";

const DataTable = ({
  data,
  breakPoint,
}: {
  data: any[];
  breakPoint: number[];
}) => {
  const fakeData = (data || []).map((item: any, index: number) => ({
    id: index + 1,
    ...item,
  }));

  // const fakeData = Array.from({ length: 100 }).map((_, index) => ({
  //   id: index,
  //   account: "account",
  //   stmtId: "stmtId",
  //   date: "date",
  //   ref: "ref",
  //   fcy: "fcy",
  //   lcy: "lcy",
  //   narr: "narr",
  //   accDoing: "accDoing",
  //   accEnt: "accEnt",
  //   inputter: "inputter",
  //   authoriser: "author",
  // }));

  return (
    <div className={cn(style.container, "mt-1")}>
      <table className="w-full table-fixed">
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>id</th>
            <th>ACCOUNT</th>
            <th>STMT.ID</th>
            <th>DATE</th>
            <th>REF</th>
            <th>FCY</th>
            <th>LCY</th>
            <th>NARR</th>
            <th>
              AC-
              <br />
              C.DOIUNG
            </th>
            <th>ACC.ENT</th>
            <th>INPUTTER</th>
            <th>
              AU-
              <br />
              THORISER
            </th>
          </tr>
          {fakeData.map((row: any) => (
            <tr
              key={row.id}
              datatype={breakPoint.includes(row.id + 2) ? "footer" : ""}
              className={cn(
                breakPoint.includes(row.id + 2) && style.footer,
                breakPoint.includes(row.id + 1) && style.break,
                breakPoint.includes(row.id) && style.break_row
              )}
            >
              <td>{row.id + 1}</td>
              <td>
                {row.account}
                {/* {row.id + 1} */}
              </td>
              <td>{row.stmtId}</td>
              <td>{row.date}</td>
              <td>{row.ref}</td>
              {/* <td>{Number(row.fcy).toLocaleString("en-US") + ".00"}</td> */}
              <td>{row.fcy}</td>
              {/* <td>{Number(row.lcy).toLocaleString("en-US") + ".00"}</td> */}
              <td>{row.lcy}</td>
              <td>{row.narr}</td>
              <td>{row.accDoing}</td>
              <td>{row.accEnt}</td>
              <td>{row.inputter}</td>
              <td>{row.authoriser}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
