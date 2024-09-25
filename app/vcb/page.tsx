"use client";

import React, { useState } from "react";
import style from "./style.module.scss";
import "./global.css";
import BGTemplate from "./_assets/template_last.png";
import PageConfiguration from "@/components/Configuration";
import PageTemplate from "./_components/Template";

const VCBPage = () => {
  const [data, setData] = useState({
    info: [{}],
    data: [],
  });
  const [dataPages, setDataPages] = useState([
    { start: 0, end: 10, hasFirst: true, hasLast: false, page: 1 },
  ]);

  return (
    <main className={`${style.global} bg-neutral-600`}>
      <PageConfiguration
        data={data}
        setData={setData}
        templateName="VCB Template"
        templateURL="vcb-template.xlsx"
        dataPages={dataPages}
        setDataPages={setDataPages}
        template={(props) => (
          <PageTemplate
            {...props}
            data={{
              data: data.data,
              info: data.info[0],
            }}
            totalPage={dataPages.length}
          />
        )}
      ></PageConfiguration>
    </main>
  );
};

export default VCBPage;
