"use client";

import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Drawer,
  Form,
  Input,
  InputNumber,
  Upload,
  notification,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { ConfigurationProps } from "./types";

const PageConfiguration = ({
  data,
  setData,
  templateURL,
  templateName,
  template,
  dataPages,
  setDataPages,
}: ConfigurationProps) => {
  const [open, setOpen] = React.useState(false);
  const [tempName, setTempName] = React.useState(templateName);
  const [preview, setPreview] = React.useState(data);

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
      .catch((error) => {});
  };

  useEffect(() => {
    setTempName(templateName);
  }, [templateName]);

  useEffect(() => {
    setPreview(data);
  }, [data]);

  useEffect(() => {
    if (localStorage.getItem("dataPage")) {
      try {
        setDataPages(JSON.parse(localStorage.getItem("dataPage") as string));
      } catch (error) {
        localStorage.removeItem("dataPage");
      }

      localStorage.removeItem("dataPage");
    }
  }, []);

  return (
    <>
      <div className="no-print">
        <Button
          type="primary"
          onClick={() => {
            window.print();
          }}
        >
          Click me to print
        </Button>

        <Button
          className="ml-4"
          type="dashed"
          onClick={() => {
            setOpen(true);
          }}
        >
          Cấu hình data
        </Button>

        <Button
          className="ml-4"
          type="primary"
          onClick={() => {
            if (dataPages) {
              localStorage.setItem("dataPage", JSON.stringify(dataPages));

              notification.success({
                message: "Success",
                description: "Lưu cấu hình trang thành công",
              });
            }
          }}
        >
          Lưu cấu hình trang
        </Button>

        <Drawer
          title="Cấu hình data"
          open={open}
          placement="left"
          onClose={() => setOpen(false)}
          destroyOnClose
          width={"80%"}
        >
          <label htmlFor="name">Tên file tải về</label>
          <Input
            id="name"
            value={tempName}
            onChange={(e) => {
              if (e.target.value === "") {
                e.target.value = templateName;
              } else {
                setTempName(e.target.value);
              }
            }}
          />
          <Button
            href={templateURL}
            download={tempName}
            target="_blank"
            className="mb-4 mt-2"
          >
            Tải file mẫu
          </Button>
          <br />
          <Upload accept=".xls,.xlsx" beforeUpload={handleUploadFile}>
            <Button icon={<UploadOutlined />}>Upload file</Button>
          </Upload>

          <label htmlFor="preview">Preview data</label>
          <Input.TextArea
            value={JSON.stringify(preview, null, 4)}
            onChange={(e) => {
              try {
                setPreview(JSON.parse(e.target.value));
              } catch (error) {
                notification.error({
                  message: "Error",
                  description: "Invalid JSON",
                });
              }
            }}
            rows={30}
          />
        </Drawer>
      </div>

      {template && (
        <div>
          {dataPages.map((dataPage: any, dataPageIndex: number) => (
            <React.Fragment key={dataPageIndex}>
              {template({ dataPage })}

              <div className="bg-slate-400 no-print">
                {dataPageIndex === dataPages.length - 1 && (
                  <Form
                    onFinish={(values) => {
                      setDataPages(
                        dataPages.map((item: any) =>
                          item.page === values.page
                            ? { ...item, ...values }
                            : item
                        )
                      );
                    }}
                    initialValues={dataPage}
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
                    {dataPage.hasOwnProperty("isSigned") && (
                      <Form.Item
                        label="Có chữ ký"
                        name={"isSigned"}
                        valuePropName="checked"
                      >
                        <Checkbox />
                      </Form.Item>
                    )}
                    <Form.Item label="Trang" name={"page"}>
                      <InputNumber disabled />
                    </Form.Item>
                    <Form.Item label="" name={"hasLast"}>
                      <Button htmlType="submit">Submit</Button>
                    </Form.Item>
                  </Form>
                )}
                <div className="flex justify-center gap-4 no-print">
                  {dataPageIndex === dataPages.length - 1 && (
                    <Button
                      className="no-print"
                      onClick={() => {
                        setDataPages([
                          ...dataPages,
                          {
                            ...dataPages[dataPages.length - 1],
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

                  {dataPages.length > 1 &&
                    dataPageIndex === dataPages.length - 1 && (
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
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
};

export default PageConfiguration;
