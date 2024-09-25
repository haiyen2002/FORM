"use client";

import React, { useEffect, useState } from "react";
import Logo from "./_assets/logo.png";
import Image from "next/image";
import styles from "./styles.module.scss";
import cn from "@/utils/classnames";
import PageConfiguration from "@/components/Configuration";
import { numberWithThousands } from "@/utils/data";
import { Button, Checkbox, Form, InputNumber } from "antd";

const VPBankPage = () => {
  const paperRef = React.useRef<HTMLDivElement>(null);
  const [data, setData] = useState<any>({});
  const [numberOfPage, setNumberOfPage] = useState(1);
  const [dataPages, setDataPages] = useState([
    { start: 0, end: 10, hasFirst: true, hasLast: false, page: 1 },
  ]);

  const info = (data?.info && data.info[0]) || {};
  const dataTable = data?.data || [];

  useEffect(() => {
    if (paperRef.current) {
      setNumberOfPage(
        Math.ceil(paperRef.current.getBoundingClientRect().height / 1123)
      );
    }
  }, [data]);

  return (
    <main className={cn("bg-neutral-600", styles.page)}>
      <PageConfiguration
        templateName="VPBank-Template"
        templateURL="/vpbank-template.xlsx"
        data={data}
        setData={setData}
        setDataPages={setDataPages}
      />

      <div>
        {dataPages.map((dataPage: any, dataPageIndex: number) => (
          <React.Fragment key={dataPageIndex}>
            <section
              ref={paperRef}
              className={cn(
                "relative w-[794px] bg-white mx-auto px-[72px] h-[1123px] pb-12",
                "border-t border-t-solid border-t-black print:border-t-transparent",
                dataPageIndex !== 0 ? "pt-12" : "pt-12"
              )}
            >
              {dataPage.hasFirst && (
                <>
                  <div className="flex justify-between">
                    <div className="relative w-[142px] h-[47px]">
                      <Image src={Logo} fill alt="logo" objectFit="cover" />
                    </div>
                    <div className="w-[55%] text-right">
                      <p className="text-sm">
                        Chi nhánh/<i>Branch:</i> <b>{info.branch}</b>
                      </p>
                    </div>
                  </div>

                  <div className="text-center">
                    <h1 className="font-bold text-lg">
                      SỔ PHỤ KIÊM PHIẾU BÁO NỢ, BÁO CÓ
                    </h1>
                    <h2 className="italic text-sm">
                      BANK STATEMENT, DEBIT - CREDIT TRANSACTION
                    </h2>
                    <p className="font-bold mt-1 text-[11.5px]">
                      Kỳ sao kê/<i>from</i> {info.from} tới/<i>to</i> {info.to}
                    </p>
                  </div>

                  <div className="flex gap-x-[20px] text-[14px] mt-4">
                    <div className="w-[37%]">
                      <div>
                        <span className="inline-block min-w-[100px]">
                          Số tài khoản/
                        </span>
                        <span className="font-bold">{info.account}</span>
                        <br />
                        <span className="italic inline-block w-[100px]">
                          Account number:
                        </span>
                      </div>

                      <div>
                        <span className="inline-block min-w-[100px]">
                          Loại tài khoản/
                        </span>
                        <span className="font-bold">{info.account_type}</span>
                        <br />
                        <span className="italic">Account type:</span>
                      </div>

                      <div>
                        <span className="inline-block min-w-[100px]">
                          Loại tiền tệ/
                        </span>
                        <span className="font-bold">{info.currency}</span>
                        <br />
                        <span className="italic">Currency:</span>
                      </div>

                      <div>
                        <span className="inline-block min-w-[100px]">
                          Hạn mức thấu chi/
                        </span>
                        <span className="font-bold">{""}</span>
                        <br />
                        <span className="italic">Overdraft limit:</span>
                      </div>
                    </div>
                    <div className="">
                      <div>
                        <span className="inline-block w-[108px]">
                          Tên khách hàng/
                        </span>
                        <span className="font-bold">{info.customer_name}</span>
                        <br />
                        <span className="italic">Customer name:</span>
                      </div>

                      <div className="mt-4">
                        <div className="flex">
                          <span className="inline-block w-[108px]">
                            Địa chỉ/
                            <br />
                            <span className="italic">Address:</span>
                          </span>
                          <span className="font-bold">{info.address}</span>
                        </div>
                      </div>

                      <div>
                        <span className="inline-block w-[108px]">
                          Mã số KH/
                        </span>
                        <span className="font-bold">{info.customer_gif}</span>
                        <br />
                        <span className="italic">Customer GIF:</span>
                      </div>

                      <div>
                        <span className="inline-block mr-9">
                          Số CMND/CCCD/HC/GCNĐKDN/
                        </span>
                        <span className="font-bold">{info.identity}</span>
                        <br />
                        <span className="">
                          QĐTL/<i>ID paper/BRC No:</i>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-[6px] py-1 grid grid-cols-4 border-solid border-2 border-l-0 border-r-0 border-black text-sm leading-[1.1]">
                    <div>
                      <p>Số dư đầu kỳ</p>
                      <p>
                        <i>Begin balance</i>
                      </p>
                      <p>(1)</p>
                      <p>
                        <b>{numberWithThousands(info.begin_balance)}</b>
                      </p>
                    </div>
                    <div className="text-center">
                      <p>Tổng phát sinh có</p>
                      <p>
                        <i>Total credit</i>
                      </p>
                      <p>(2)</p>
                      <p>
                        <b>{numberWithThousands(info.credit_total)}</b>
                      </p>
                    </div>
                    <div className="text-center">
                      <p>Tổng phát sinh nợ</p>
                      <p>
                        <i>Total debit</i>
                      </p>
                      <p>(3)</p>
                      <p>
                        <b>{numberWithThousands(info.debit_total)}</b>
                      </p>
                    </div>
                    <div className="text-right">
                      <p>Số dư cuối kỳ</p>
                      <p>
                        <i>End balance</i>
                      </p>
                      <p>(4) = (1) + (2) - (3)</p>
                      <p>
                        <b>
                          {numberWithThousands(
                            (info.begin_balance || 0) +
                              (info.credit_total || 0) -
                              (info.debit_total || 0)
                          )}
                        </b>
                      </p>
                    </div>
                  </div>
                </>
              )}

              <div className="text-sm py-1">
                Chi tiết giao dịch/<i>Transaction details:</i>
              </div>

              <div className="relative">
                <table className="w-full table-fixed">
                  <thead>
                    <tr>
                      <th>
                        STT
                        <br />
                        <i>No</i>
                      </th>
                      <th>
                        Nội dung
                        <br />
                        <i>Txn details</i>
                      </th>
                      <th>
                        Số chứng từ
                        <br />
                        <i>Ref No</i>
                      </th>
                      <th>
                        Phát sinh nợ
                        <br />
                        <i>Debit Amt</i>
                      </th>
                      <th>
                        Phát sinh có
                        <br />
                        <i>Credit Amt</i>
                      </th>
                      <th>
                        Số dư
                        <br />
                        <i>Balance</i>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataTable
                      .slice(dataPage.start, dataPage.end)
                      .map((item: any, index: number) => {
                        if (
                          item.date &&
                          item.date !==
                            dataTable[dataPage.start + index - 1]?.date &&
                          (index === 0 && dataPage.start !== 0
                            ? item.date !== dataTable[dataPage.start - 1]?.date
                            : true)
                        ) {
                          return (
                            <React.Fragment key={index}>
                              <tr className={styles.row_group}>
                                <td colSpan={6}>
                                  Ngày giao dịch/Txn date {item.date}
                                </td>
                              </tr>
                              <tr>
                                <td>{dataPage.start + index + 1}</td>
                                <td>{item.details}</td>
                                <td>{item.ref}</td>
                                <td>
                                  {item.debit &&
                                    numberWithThousands(item.debit)}
                                </td>
                                <td>
                                  {item.credit &&
                                    numberWithThousands(item.credit)}
                                </td>
                                <td>
                                  {item.balance &&
                                    numberWithThousands(item.balance)}
                                </td>
                              </tr>
                            </React.Fragment>
                          );
                        }

                        return (
                          <tr key={index}>
                            <td>{dataPage.start + index + 1}</td>
                            <td>{item.details}</td>
                            <td>{item.ref}</td>
                            <td>
                              {item.debit && numberWithThousands(item.debit)}
                            </td>
                            <td>
                              {item.credit && numberWithThousands(item.credit)}
                            </td>
                            <td>
                              {item.balance &&
                                numberWithThousands(item.balance)}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>

              {dataPage.hasLast && (
                <div>
                  <div className="w-fit text-center ml-auto mr-[100px] mt-4">
                    Người kiểm soát
                    <br />
                    <i>(Approved by)</i>
                  </div>
                </div>
              )}

              <div
                className="absolute left-[72px] right-[72px] italic flex justify-between text-xs"
                key={dataPageIndex}
                style={{ bottom: `32px` }}
              >
                <span>
                  Ngày giờ in/Printed time: {info.printed_time} Người in/Printed
                  user:
                  {info.printed_user}
                </span>
                <span className="inline-block ml-auto mr-[18px]">
                  STT/No. {info.no}
                </span>
                <span>
                  Trang/Page {dataPageIndex + 1}/{dataPages.length}
                </span>
              </div>
            </section>
            <div className="bg-slate-400 no-print">
              {dataPageIndex === dataPages.length - 1 && (
                <Form
                  onFinish={(values) => {
                    setDataPages(
                      dataPages.map((item) =>
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
    </main>
  );
};

export default VPBankPage;
