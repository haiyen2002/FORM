"use client";

import Template from "./components/Template";
import { useState } from "react";
import PageConfiguration from "@/components/Configuration";

const Tcb = () => {
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
    },
  ]);

  const info: any = data.info[0] || {};

  return (
    <main className="bg-neutral-500">
      <PageConfiguration
        data={data}
        setData={setData}
        templateName="Tcb Template"
        templateURL="tcb-template.xlsx"
        dataPages={dataPages}
        setDataPages={setDataPages}
        template={(props) => (
          <Template
            data={data.data
              .slice(props.dataPage.start, props.dataPage.end)
              .map((item: any) => ({
                transaction_date: item.transaction_date,
                remitter: item.remitter,
                remitter_bank: item.remitter_bank,
                details: item.details,
                transaction_no: item.transaction_no,
                debit: item.debit,
                credit: item.credit,
                interest: item.interest,
                tax: item.tax,
                balance: item.balance,
              }))}
            hasFirst={props.dataPage.hasFirst}
            hasLast={props.dataPage.hasLast}
            page={props.dataPage.page}
            info={info}
            totalPage={dataPages.length}
          />
        )}
      />
    </main>
  );
};
//

export default Tcb;
