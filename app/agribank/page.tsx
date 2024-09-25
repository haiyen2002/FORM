"use client";

import React, { useRef, useState } from "react";
import template from "./_assets/template.jpg";
import logo from "./_assets/logo.webp";
import Image from "next/image";
import cn from "@/utils/classnames";
import styles from "./styles.module.scss";
import squareLogo from "./_assets/square_log.jpg";
import { Button, Drawer, Input, Upload, notification } from "antd";
import { SettingOutlined, UploadOutlined } from "@ant-design/icons";

const ArgibankPage = () => {
  const [open, setOpen] = useState(true);
  const [data, setData] = useState<any>({});
  const [fileName, setFileName] = useState<string>("argibank-template");

  const handleUploadFile = (file: File) => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("numberSheet", "1");

    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.data[0]);
      })
      .catch(() => {
        notification.error({
          message: "Lỗi",
        });
      });
  };

  return (
    <>
      <div className="no-print">
        <Button onClick={() => window.print()} type="primary">
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
          <p>Tên file tải về</p>
          <Input
            onChange={(e) => {
              setFileName(e.target.value);
            }}
            value={fileName}
          />
          <Button
            href="/agr-template.xlsx"
            download={fileName}
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
      <main
        className={cn(
          "bg-neutral-500 tracking-[-0.3px] text-[17px] font-medium !leading-[1.2]",
          styles.page
        )}
      >
        <section
          className="w-[794px] h-[1123px] mx-auto bg-white p-6"
          style={{
            //   backgroundImage: `url(${template.src})`,
            backgroundSize: "100%",
            backgroundPosition: "bottom",
          }}
        >
          <div>
            <div
              className="w-[265px] h-[58px]"
              style={{
                backgroundImage: `url(${logo.src})`,
                backgroundPosition: "center bottom",
                backgroundSize: "100%",
              }}
            ></div>
          </div>

          <div className="pl-10 pr-4 mt-[10px] relative">
            <div className="relative z-10">
              <h1 className="font-bold text-center text-[19px]">
                CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
              </h1>
              <h2 className="font-bold text-center text-[19px] leading-none">
                Độc lập - Tự do - Hạnh phúc
              </h2>
            </div>

            <div className="flex justify-end tracking-tight mt-4 relative z-10">
              <div className="w-1/2 text-center italic">
                <p>{data.date_vi}</p>
                <p className="leading-none">
                  {data.date_en?.split("/")[0]}
                  <sup>{data.date_en?.split("/")[1]}</sup>
                  {data.date_en?.split("/")[2]}
                </p>
              </div>
            </div>

            <div className="text-center font-bold text-[19px] mt-[18px] mb-3 relative z-10">
              <h3 className="">XÁC NHẬN SỐ DƯ TÀI KHOẢN</h3>
              <h4 className="">CONFIRMATION OF ACCOUNT BALANCE</h4>
            </div>

            <div className="relative z-10 leading-[1.25]">
              <div className="px-8 flex flex-col gap-[2px] text-[17px] indent-5">
                <p className="">
                  <span className="font-bold">Kính gửi:</span>{" "}
                  <span className="font-bold">Các cơ quan hữu quan</span>/ To
                  whom it may Concern.
                </p>

                <p className="font-bold">
                  Ngân hàng Nông nghiệp và Phát triển nông thôn Việt Nam{" "}
                  <i>(Agribank)</i> - Chi nhánh {data.branch_vi} xác nhận thông
                  tin dưới đây tính đến {data.time_vi}
                </p>

                <p className="">
                  Vietnam Bank for Agriculture and rural development{" "}
                  <i>(Agribank)</i> -{data.branch_en} Branch hereby confirm the
                  following information as of{" "}
                  {data.time_en?.split(",")[0] + ", "}{" "}
                  <i>
                    {data.time_en?.split(",")[1]?.split("/")[0]}
                    <sup>{data.time_en?.split("/")[1]}</sup>
                    {data.time_en?.split("/")[2]}
                  </i>
                </p>

                <p>
                  <span className="font-bold">Tên khách hàng</span>
                  /Customer&apos;s name:{" "}
                  <span className="uppercase font-bold">
                    {data.customer_name}
                  </span>
                </p>

                <p>
                  <span className="font-bold">Địa chỉ</span>/Customer&apos;s
                  address: <span className="font-bold">{data.address}</span>
                </p>

                <p>
                  <span className="font-bold">Thẻ CCCD</span>/ ID No:{" "}
                  <span className="font-bold">{data.cccd}</span>
                  <span className="font-bold pl-[4px]"> Ngày cấp</span>/ Issue
                  date: <span className="font-bold">{data.issue_date}</span>
                </p>

                <p>
                  <span className="font-bold">Nơi cấp</span>/At:{" "}
                  <span className="font-bold">{data.issue_at}</span>
                </p>

                <p className="font-bold">
                  Đang có tiền gửi tiết kiệm tại Agribank Chi nhánh{" "}
                  {data.branch_vi}:
                </p>
                <p className="font-bold">
                  Is maintaining the savings account at Agribank{" "}
                  {data.branch_en} Branch:
                </p>
              </div>

              <div className="mt-2">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <span>Số tài khoản</span>
                        <br />
                        <span className="font-normal">Account No</span>
                      </th>
                      <th>
                        <span>Ngày gửi</span>
                        <br />
                        <span className="font-normal">
                          Date of <br /> deposit
                        </span>
                      </th>
                      <th>
                        <span>Thời hạn</span>
                        <br />
                        <span className="font-normal">Duration</span>
                      </th>
                      <th>
                        <span>
                          Số dư đến <br /> thời điểm xác <br /> nhận
                        </span>
                        <br />
                        <span className="font-normal">
                          Balance as of <br /> confirming <br /> date
                        </span>
                      </th>
                      <th>
                        <span>
                          Loại tiền <br /> tệ
                        </span>
                        <br />
                        <span className="font-normal">
                          equivalent <br /> amount
                        </span>
                      </th>
                      <th>
                        <span>
                          Tình trạng <br /> tài khoản <br /> TGTK
                        </span>
                        <br />
                        <span className="font-normal">
                          Status of <br /> deposit <br /> account
                        </span>
                      </th>
                      <th>
                        <span>
                          Tương <br /> đương <br />
                          với
                        </span>
                        <br />
                        <span className="font-normal">
                          Amount <br /> in <br /> equivalen
                          <br />t to
                        </span>
                        <br />
                        <span>USD</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{data.account}</td>
                      <td>{data.date_deposit}</td>
                      <td>{data.duration}</td>
                      <td>{data.balance?.toLocaleString()}</td>
                      <td>VND</td>
                      <td>Normal</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td colSpan={3}>Tổng/total</td>
                      <td>{data.balance_total?.toLocaleString()}</td>
                      <td>VND</td>
                      <td></td>
                      <td>{data.usd_total?.toLocaleString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="px-6 mt-[6px]">
                <div className="text-[17px]">
                  <p>
                    <span className="font-bold">Số dư</span>/Balance:{" "}
                    <span className="font-bold">{data.balance_words}.</span>
                  </p>
                  <p>
                    (<b>Tỷ giá ngày</b>/Date of exchange rate{" "}
                    {data.exhange_info}
                    VND/USD<b>).</b>
                  </p>
                </div>

                <div className="mt-4">
                  <h6 className="text-right text-[19px] font-bold">
                    Giám đốc/ General Director
                  </h6>
                </div>

                <div className="font-bold text-[15px] tracking-tighter mt-[120px] border-t border-t-solid border-t-black ">
                  <p>
                    Ghi chú: giấy xác nhận này không thay thế cho các cam kết
                    của Ngân hàng về các nghĩa vụ của khách hàng được xác nhận
                    với bên thứ ba.
                  </p>
                  <p className="">
                    Note: This confirmation is not the Bank&apos;s commitment
                    regarding the customer&apos;s obligation with tthird party.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute z-0 top-[200px] left-[185px] opacity-10">
              <Image src={squareLogo} width={375} height={375} alt="logo" />
            </div>
            <div
              className="w-[270px] h-[58px] absolute z-0 top-[132px] left-[0px] opacity-10"
              style={{
                backgroundImage: `url(${logo.src})`,
                backgroundPosition: "center bottom",
                backgroundSize: "100%",
              }}
            ></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ArgibankPage;
