"use client";

import { useEffect, useState } from "react";
import Template from "./_components/Template";
import jsonData from "./_utils/data.json";
import cn from "@/utils/classnames";
import PageConfiguration from "@/components/Configuration";

const VIBPage = () => {
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

  useEffect(() => {
    document.title = "VIB - " + (info?.name || "template");
  }, [info]);

  return (
    <>
      <main className={cn("bg-neutral-600")}>
        <PageConfiguration
          data={data}
          setData={setData}
          templateName="VIB Template"
          templateURL="vib-template.xlsx"
          dataPages={dataPages}
          setDataPages={setDataPages}
          template={(props) => {
            const _data = dataTable.slice(
              props.dataPage.start,
              props.dataPage.end
            );
            const _page = props.dataPage;

            return (
              <Template
                info={info}
                data={_data}
                page={_page.page}
                pageInfo={_page}
                total={dataPages.length}
              />
            );
          }}
        />
      </main>
    </>
  );
};

export default VIBPage;
