"use client";

import PageLayout from "@/components/PageLayout";
import React, { useState } from "react";
import Header from "./_components/Header";
import Information from "./_components/Information";
import Footer from "./_components/Footer";

import styles from "./styles.module.scss";
import cn from "@/utils/classnames";
import { NotoSans } from "./_utils/fonts";
import Conclusion from "./_components/Conclusion";
import DataTable from "./_components/DataTable";
import { Button, Checkbox, Drawer, Form, InputNumber, Upload } from "antd";
import { SettingOutlined, UploadOutlined } from "@ant-design/icons";
import { start } from "repl";

const SCBPage = () => {
  const [open, setOpen] = useState(true);
  const [data, setData] = useState({
    data: [],
    info: [],
  });
  const [config, setConfig] = useState({
    showHeader: true,
    showFooter: true,
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
        setData({
          data: data.data.map((item: any, index: number) => {
            return {
              stt: item["stt"] || index + 1,
              "ngay gd": item["ngay gd"] || "",
              "ngay hl": item["ngay hl"] || "",
              "so gd": item["so gd"] || "",
              "dien giai": item["dien giai"] || "",
              "so tien rut": item["so tien rut"] || 0,
              "so tien gui": item["so tien gui"] || 0,
              "so du": item["so du"] || 0,
              "in dam":
                !data.data[index + 1] ||
                item["ngay gd"].slice(0, 10) !==
                  data.data[index + 1]["ngay gd"].slice(0, 10)
                  ? 1
                  : "",
            };
          }),
          info: data.info,
        });
      })
      .catch((error) => {});
  };

  return (
    <>
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
            href="/scb-template.xlsx"
            download={"scb-template"}
            target="_blank"
            className="mb-4"
          >
            Tải file mẫu
          </Button>
          <br />
          <Upload accept=".xls,.xlsx" beforeUpload={handleUploadFile}>
            <Button icon={<UploadOutlined />}>Upload file</Button>
          </Upload>

          <Form
            onFinish={(values) => {
              setConfig(values);
            }}
            initialValues={config}
            layout="horizontal"
            className="mt-4"
          >
            <Form.Item
              label="Show Header"
              name="showHeader"
              valuePropName="checked"
            >
              <Checkbox />
            </Form.Item>
            <Form.Item
              label="Show Footer"
              name="showFooter"
              valuePropName="checked"
            >
              <Checkbox />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </Drawer>
      </div>

      {dataPages.map((item: any, index: number) => (
        <PageLayout
          key={index}
          header={config.showHeader && <Header data={data.info} />}
          information={item.hasFirst && <Information data={data.info} />}
          footer={
            config.showFooter && (
              <Footer page={item.page} totalPage={dataPages.length} />
            )
          }
          className={cn(
            styles.page,
            "text-[11px] px-6 py-10",
            NotoSans.className
          )}
          conclusion={item.hasLast && <Conclusion />}
          dataTable={
            <DataTable
              hasFirst={item.hasFirst}
              hasLast={item.hasLast}
              data={data.data.slice(item.start, item.end)}
              info={data.info}
            />
          }
        >
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
              className="no-print flex gap-2 !mt-5"
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
        </PageLayout>
      ))}
    </>
  );
};

export default SCBPage;
