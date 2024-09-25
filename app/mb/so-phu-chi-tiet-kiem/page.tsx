"use client";

import {
  Button,
  Checkbox,
  Drawer,
  Form,
  InputNumber,
  Upload,
  notification,
} from "antd";
import React, { useState } from "react";
import bg from "../_assets/bg_2.png";
import Image from "next/image";
import temp_bg from "../_assets/mb2_bg.png";
import Logo from "../_assets/logo.png";
import styles from "./styles.module.scss";
import cn from "@/utils/classnames";
import DataTable from "./_components/DataTable";
import Footer from "./_components/Footer";
import { SettingOutlined, UploadOutlined } from "@ant-design/icons";

const MB2Page = () => {
  const [open, setOpen] = useState(true);
  const [data, setData] = useState<{ data: any[]; info: any[] }>({
    data: [],
    info: [],
  });

  const [dataPages, setDataPages] = useState([
    { start: 0, end: 10, hasFirst: true, hasLast: false, page: 1 },
  ]);

  const handleUploadFile = (file: File) => {
    const formData = new FormData();

    formData.append("file", file);

    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch(() => {
        notification.error({
          message: "Lỗi",
        });
      });
  };

  return (
    <main className={cn("bg-neutral-500", styles.page)}>
      <div className="no-print">
        <Button
          onClick={() => window.print()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Print
        </Button>

        <Button icon={<SettingOutlined />} onClick={() => setOpen(true)} />

        <Drawer
          title="Cấu hình data"
          placement="right"
          closable={false}
          onClose={() => setOpen(false)}
          open={open}
        >
          <Button
            href="/mb2-template.xlsx"
            download={"mb2-template"}
            target="_blank"
            className="mb-4"
          >
            Tải file mẫu
          </Button>
          <br />
          <Upload accept=".xls,.xlsx" beforeUpload={handleUploadFile}>
            <Button icon={<UploadOutlined />}>Upload file</Button>
          </Upload>
        </Drawer>
      </div>

      {dataPages.map((item: any, index: number) => (
        <section
          key={index}
          className="max-w-[1123px] mx-auto h-[794px] relative bg-white pl-6 pr-6 pt-[52px] pb-[52px]"
          style={{
            // backgroundImage: `url(${temp_bg.src})`,
            backgroundSize: "100%",
            backgroundPosition: "top left",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="relative z-[1] 
        
        "
          >
            {item.hasFirst && (
              <>
                <header className="flex justify-between pr-[64px]">
                  <div>
                    <Image src={Logo} width={121} height={52} alt="logo" />
                  </div>

                  <div className=" text-center pl-3">
                    <h1 className="uppercase font-bold text-base">
                      Sổ phụ chi tiết kiệm báo nợ/báo có
                    </h1>
                    <h2 className="font-bold italic text-sm text-center">
                      Account Statement/Debit/Credit transaction
                    </h2>
                    <p className="text-sm">
                      <span className="font-bold">Từ ngày</span>/From:{" "}
                      <span className="font-bold">{data.info[0]?.value}</span>{" "}
                      <span className="font-bold">Đến ngày</span>/To:{" "}
                      <span className="font-bold">{data.info[1]?.value}</span>
                    </p>
                  </div>

                  <div className="font-bold text-right ">
                    <p className="uppercase text-base">
                      Ngân hàng tmcp Quân đội
                    </p>
                    <p className="text-sm italic">
                      Military Commercial Joint Stock Bank
                    </p>
                    <p className="text-[13px]">
                      Chi nhánh/Branch:{data.info[2]?.value}
                    </p>
                  </div>
                </header>

                {/* Information */}
                <div
                  className={cn(
                    "text-[12px]",
                    "grid grid-cols-3 mt-6 ml-2 mr-2",
                    "border-t border-t-solid border-t-black border-b border-b-solid border-b-black"
                  )}
                >
                  <div className="col-span-2">
                    <div>
                      <span className="font-bold">Tên khách hàng</span>
                      <i>/Customer name:</i>{" "}
                      <span className="font-bold uppercase">
                        {data.info[3]?.value}
                      </span>
                    </div>

                    <div>
                      <span className="font-bold">Mã khách hàng</span>/
                      <i>Customer code :</i>{" "}
                      <span className="font-bold uppercase">
                        {data.info[4]?.value}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold">Địa chỉ</span>/<i>Address</i>:{" "}
                      <span className="font-bold uppercase">
                        {data.info[5]?.value}
                      </span>
                    </div>
                  </div>
                  <div className="pl-[44px]">
                    <div>
                      <span className="font-bold">Tài khoản</span>
                      <i>/Account no :</i>{" "}
                      <span className="font-bold uppercase italic">
                        {data.info[6]?.value}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold">Mã số thuế</span>
                      <i>/Tax code:</i>{" "}
                      <span className="font-bold uppercase">
                        {data.info[7]?.value}
                      </span>
                    </div>
                    <div>
                      <span className="font-bold">Loại tiền</span>/
                      <i>Currency :</i>{" "}
                      <span className="font-bold uppercase">{"VND"}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-[13px] font-bold">
                    Chúng tôi xin thông báo chi tiết phát sinh nợ/có trên tài
                    khoản quý khách trong thời gian trên như sau:
                  </p>
                  <p className="italic">
                    We would like to inform you about your account debit/credit
                    transactions as the following details:
                  </p>
                  <p>
                    <span className="font-bold">Số dư đầu kỳ/</span>{" "}
                    <span className="italic">Opening Balance:</span>{" "}
                    <span className="font-bold">
                      {data.info[8]?.value.toLocaleString() + ".00"}
                    </span>{" "}
                    VND
                  </p>
                </div>
              </>
            )}

            <DataTable
              data={data.data.slice(item.start, item.end)}
              hasLast={item.hasLast}
              debitTotal={data.info[12]?.value}
              creditTotal={data.info[13]?.value}
            />

            {item.hasLast && (
              <>
                <div className="p-5 pb-2">
                  <p>
                    <span className="font-bold">Số dư cuối kỳ/ </span>
                    <i>Closing Balance</i>:{" "}
                    <span className="font-bold">
                      {data.info[9]?.value.toLocaleString() + ".00"}
                    </span>{" "}
                    VND (<span className="font-bold">Bằng chữ/ </span>
                    <i>In Words</i>:{" "}
                    <span className="font-bold italic">
                      {data.info[10]?.value}
                    </span>{" "}
                    <i>./{data.info[11]?.value}</i>)
                  </p>
                </div>

                <div className="grid grid-cols-2 items-center text-sm">
                  <div className="text-center">
                    <span className="uppercase font-bold leading-none">
                      Lập biểu/
                    </span>
                    <span className="italic"> Issued by</span>
                  </div>

                  <div className="text-center">
                    <p className="italic leading-none">
                      {data.info[14]?.value}
                    </p>
                    <span className="uppercase font-bold leading-none">
                      Kiểm soát/
                    </span>
                    <span className="italic"> Supervisor</span>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="absolute bottom-[52px] left-6">
            <Image
              src={bg}
              width={1010}
              height={700}
              alt="bg"
              className="h-[574px] w-[746px] opacity-[85]"
            />
          </div>
          <Footer />

          <div className="no-print absolute top-[-1px] left-[-1px] right-[-1px] bottom-[-1px] border border-solid border-black"></div>
          {index === dataPages.length - 1 && (
            <Form
              onFinish={(values) => {
                setDataPages(
                  dataPages.map((item) =>
                    item.page === values.page ? { ...item, ...values } : item
                  )
                );
              }}
              initialValues={item}
              layout="vertical"
              className="no-print flex gap-2 !mt-5 relative z-50"
            >
              <Form.Item label="Start" name={"start"}>
                <InputNumber />
              </Form.Item>
              <Form.Item label="End" name={"end"}>
                <InputNumber />
              </Form.Item>
              <Form.Item
                label="Trang đầu"
                name={"hasFirst"}
                valuePropName="checked"
              >
                <Checkbox />
              </Form.Item>
              <Form.Item
                label="Trang cuối"
                name={"hasLast"}
                valuePropName="checked"
              >
                <Checkbox />
              </Form.Item>
              <Form.Item label="Trang" name={"page"}>
                <InputNumber disabled />
              </Form.Item>
              <Form.Item label="" name={"hasLast"}>
                <Button htmlType="submit">Submit</Button>
              </Form.Item>
            </Form>
          )}
          <div className="flex justify-center gap-4 no-print">
            {index === dataPages.length - 1 && (
              <Button
                className="no-print"
                onClick={() => {
                  setDataPages([
                    ...dataPages,
                    {
                      start: dataPages[dataPages.length - 1].end,
                      end: dataPages[dataPages.length - 1].end + 10,
                      hasFirst: false,
                      hasLast: false,
                      page: dataPages.length + 1,
                    },
                  ]);
                }}
              >
                Thêm trang
              </Button>
            )}

            {dataPages.length > 1 && index === dataPages.length - 1 && (
              <Button
                className="no-print"
                onClick={() => {
                  setDataPages(dataPages.slice(0, -1));
                }}
              >
                Xóa trang
              </Button>
            )}
          </div>
        </section>
      ))}
    </main>
  );
};

export default MB2Page;
