"use client";

import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import DataTable from "./_components/DataTable";
import Information from "./_components/Information";
import cn from "@/utils/classnames";
import style from "./styles.module.scss";
import { GridPDFExport } from "@progress/kendo-react-pdf";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { Button, Drawer, Form, Input, InputNumber, Upload } from "antd";
import BG from "./_assets/bg.jpg";
import Link from "next/link";

const defaultValue = {
  date: "30 May 2024",
  time: "16:31:37",
  code: "802764194",
  name: "DINH VIET HUNG",
  start: "1,066,754.00",
  end: "1,066,754.00",
  data: [],
  break: [],
};

const Page = () => {
  const [basicInfo, setBasicInfo] = React.useState(defaultValue);
  const [openEdit, setOpenEdit] = React.useState(false);

  const PageTemplate = () => {
    return (
      <div>
        <Header />

        <Footer />
      </div>
    );
  };

  const pdfExportComponent = React.useRef<PDFExport>(null);
  const exportPDFWithComponent = () => {
    console.log(pdfExportComponent.current);
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  // const gridPDFExportRef = React.useRef<any>(null);

  // const exportPDF = () => {
  //   if (gridPDFExportRef.current) {
  //     gridPDFExportRef.current.save();
  //   }
  // };

  let gridPDFExport: any;
  const exportPDF = () => {
    if (gridPDFExport) {
      gridPDFExport.save();
    }
  };

  const handleOpenPrint = () => {
    if (window) {
      window.print();
    }
  };

  const handleFinish = (values: any) => {
    setBasicInfo({
      ...values,
      data: typeof values.data === "string" ? JSON.parse(values.data) : [],
      break:
        values.break && typeof values.break === "string"
          ? values.break.split(",").map((item: string) => Number(item.trim()))
          : [],
    });
  };

  const handleDownloadTemplate = () => {
    const a = document.createElement("a");
    a.href = "/template-temenos.xlsx";
    a.download = "template.xlsx";
    a.click();
  };

  return (
    <>
      <Drawer
        className="no-print"
        open={openEdit}
        onClose={() => setOpenEdit(false)}
      >
        <Form initialValues={defaultValue} onFinish={handleFinish}>
          <Form.Item name="date" label="Ngày">
            <Input />
          </Form.Item>
          <Form.Item name="time" label="Giờ">
            <Input />
          </Form.Item>
          <Form.Item name="code" label="Mã code">
            <Input />
          </Form.Item>
          <Form.Item name="name" label="Tên">
            <Input />
          </Form.Item>
          <Form.Item name="start" label="So dư đầu">
            <Input />
          </Form.Item>
          <Form.Item name="end" label="Số dư cuối">
            <Input />
          </Form.Item>

          <Form.Item name="data" label="Data">
            <Input.TextArea />
          </Form.Item>

          <Form.Item name="break" label="Break rows">
            <Input.TextArea />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Cap nhat
          </Button>
        </Form>

        <div>
          <Button
            type="link"
            href={"https://tableconvert.com/excel-to-json"}
            target="_blank"
          >
            Convert Excel to JSON
          </Button>

          <Button onClick={handleDownloadTemplate}>
            Download Template File
          </Button>
        </div>
      </Drawer>
      <div className="no-print fixed top-0 left-0 bg-white z-50">
        <Button onClick={() => setOpenEdit(true)}>Edit</Button>
        <br />
        <Button
          onClick={handleOpenPrint}
          className="no-print fixed top-0 left-0 mb-8"
        >
          Print PDF
        </Button>

        {/* <div className="my-6">
          <label htmlFor="upload">Import data</label> */}
        {/* <input
            type="file"
            id="upload"
            accept=".csv, .xlsx, .xls"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (file) {
                const formData = new FormData();
                formData.append("file", file);

                const res = await fetch("/temenos/upload", {
                  method: "POST",
                  body: formData,
                });

                const data = await res.json();

                console.log(data);
              }
            }}
          /> */}
        {/* </div> */}
      </div>
      <main
        className={cn(
          "max-w-[1124px] mx-auto min-h-screen relative bg-white",
          style.main
        )}
        style={{
          // backgroundImage: `url(${BG.src})`,
          backgroundSize: "100% auto",
        }}
      >
        <Header date={basicInfo.date} time={basicInfo.time} />
        <Footer />

        <section className="mt-[170px]">
          <Information {...basicInfo} />
          <DataTable {...basicInfo} breakPoint={basicInfo.break} />
        </section>
      </main>
    </>
  );
};

export default Page;
