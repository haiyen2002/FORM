"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import cn from "@/utils/classnames";
import logo from "../_assets/logo.png";
import Image from "next/image";
import { Button, Form, Input, Modal, notification } from "antd";
import FormItem from "antd/es/form/FormItem";
import { SettingOutlined } from "@ant-design/icons";

const MB3Page = () => {
  const [data, setData] = useState<any>({
    name: "Nguyễn Thị Như Quỳnh",
    identity: "022181003421",
    account: "0795355919",
    confirmation_date: "01/07/2024",
    open_date: "22/04/2022",
    customer_no: "6507400",
    address: "TO 8 - PHUC DONG - GIA LAM - HA NOI",
    transaction_office_vi: "PGD GIA LÂM",
    transaction_office_en: "GIA LAM Transaction Room",
    branch_vi: "GIA LÂM",
    branch_en: "GIA LAM",
    branch_address: "Ha Noi",
    branch_swift_code: "MSCBVNVX",
    bank_telephone: "024.33876999",
    bank_fax: "024.38761168",
    office_address_1: "Số 132 - 134 Ngô Xuân Quảng, Trâu Quỳ",
    // office_address_2: "Gia Lâm, Hà Nội",
    contact_telephone: "(024) 3876 1268",
    contact_fax: "(024) 3876 1168",
  });

  const [open, setOpen] = useState(false);

  const handleFinish = (values: any) => {
    try {
      const _data = JSON.parse(values.data);
      setData(_data);
      setOpen(false);
    } catch (error) {
      notification.error({
        message: "Lỗi",
        description: "Dữ liệu không hợp lệ",
      });
    }
  };

  return (
    <main className={cn(styles.page, "bg-neutral-700")}>
      <div className="no-print">
        <div>
          <Button
            type="primary"
            onClick={() => {
              window.print();
            }}
          >
            Print
          </Button>

          <Button
            icon={<SettingOutlined />}
            onClick={() => setOpen(true)}
          ></Button>
        </div>

        <Modal
          open={open}
          onCancel={() => {
            setOpen(false);
          }}
          title="Cập nhật"
          footer={null}
        >
          <Form onFinish={handleFinish}>
            <Form.Item
              label="data"
              name={"data"}
              initialValue={JSON.stringify(data, null, 4)}
            >
              <Input.TextArea rows={20} />
            </Form.Item>
            <Button htmlType="submit">Cập nhật</Button>
          </Form>
        </Modal>
      </div>

      <section className="mx-auto flex flex-col w-[794px] h-[1123px] bg-white px-[64px] py-10">
        <div>
          <Image src={logo} alt="logo" width={121} height={52} />
        </div>
        <div className="pl-[54px]">
          <div className="text-center">
            <h1 className="font-bold text-xl">XÁC NHẬN TÀI KHOẢN</h1>
            <h2 className="text-xl">CONFIRMATION OF ACCOUNTS</h2>
            <p className="text-right mt-1">
              Date/Ngày: {data.confirmation_date}
            </p>
          </div>

          <div className="mt-4">
            <p>Kính gửi: Quý Khách hàng</p>
            <p>
              <i>To: Whom it may concern</i>
            </p>
            <p>
              Ngân hàng TMCP Quân đội xin xác nhận tài khoản của Quý khách tại
              Ngân hàng chúng tôi đến ngày {data.confirmation_date} như sau:
            </p>
            <p>
              <i>
                We, Military commercial joint stock Bank, hereby confirm your
                account at our Bank as of {data.confirmation_date} as follows:
              </i>
            </p>
          </div>

          <div className="mt-3 pl-2">
            <div className="flex flex-col gap-[3px]">
              <p>
                <span className="inline-block min-w-[240px]">
                  Tên Khách hàng:
                </span>
                <span className="font-bold uppercase">{data.name}</span>
              </p>
              <p>
                <span className="inline-block italic">Customer name</span>
              </p>
              <p className="relative">
                <span className="inline-block min-w-[240px]">
                  Mã số Khách hàng:
                </span>
                <span className="uppercase absolute top-[14px] left-[240px]">
                  {data.customer_no}
                </span>
              </p>
              <p>
                <span className="inline-block italic">Customer no.</span>
              </p>
              <p>
                <span className="inline-block min-w-[240px]">
                  Chứng minh thư/Hộ chiếu:
                </span>
              </p>
              <p className="relative">
                <span className="inline-block italic min-w-[240px]">
                  ID no./Passport no.
                </span>
                <span className="uppercase absolute top-[-14px] left-[240px]">
                  {data.identity}
                </span>
              </p>
              <p>
                <span className="inline-block min-w-[240px]">Địa chỉ:</span>
              </p>
              <p className="relative">
                <span className="inline-block italic min-w-[240px]">
                  Address
                </span>
                <span className="uppercase absolute top-[-14px] left-[240px]">
                  {data.address}
                </span>
              </p>
            </div>

            <table className="w-full table-fixed">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>Loại tài khoản</p>
                    <p>
                      <i>Type of account</i>
                    </p>
                  </td>
                  <td>
                    <p>Số tài khoản</p>
                    <p>
                      <i>Account Number</i>
                    </p>
                  </td>
                  <td>
                    <p>Ngày mở</p>
                    <p>
                      <i>Open date</i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Tài khoản thanh toán - VND</p>
                    <p>
                      <i>Current accounts - VND</i>
                    </p>
                  </td>
                  <td>
                    <p>{data.account}</p>
                  </td>
                  <td>
                    <p>{data.open_date}</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex flex-col gap-[3px]">
              <p className="flex">
                <span className="inline-block min-w-[240px]">
                  Tên Ngân hàng:
                </span>
                <span className="">
                  Ngân hàng TMCP Quân đội - Chi nhánh {data.branch_vi} -{" "}
                  {data.transaction_office_vi}
                </span>
              </p>
              <p className="italic flex">
                <span className="inline-block min-w-[240px]">Bank name</span>
                <span>
                  Military commercial joint stock Bank - {data.branch_en} Branch
                  - {data.transaction_office_en}
                </span>
              </p>
              <p className="relative">
                <span className="inline-block min-w-[240px]">Địa chỉ:</span>
                <span className="uppercase absolute top-[14px] left-[240px]">
                  {data.branch_address}
                </span>
              </p>
              <p>
                <span className="inline-block italic">Address</span>
              </p>
              <p>
                <span className="inline-block min-w-[240px]">
                  Số điện thoại:
                </span>
              </p>
              <p className="relative">
                <span className="inline-block italic min-w-[240px]">
                  Telephone
                </span>
                <span className="uppercase absolute top-[-14px] left-[240px]">
                  {data.bank_telephone}
                </span>
              </p>
              <p>
                <span className="inline-block min-w-[240px]">Fax:</span>
              </p>
              <p className="relative">
                <span className="inline-block italic min-w-[240px]">
                  Fax No
                </span>
                <span className="uppercase absolute top-[-14px] left-[240px]">
                  {data.bank_fax}
                </span>
              </p>
              <p>
                <span className="inline-block min-w-[240px]">Mã SWIFT:</span>
              </p>
              <p className="relative">
                <span className="inline-block italic min-w-[240px]">
                  SWIFT Code
                </span>
                <span className="uppercase absolute top-[-14px] left-[240px]">
                  {data.branch_swift_code}
                </span>
              </p>
              <p>
                <span className="inline-block min-w-[240px]">Mã CITAD:</span>
              </p>
              <p className="relative">
                <span className="inline-block italic min-w-[240px]">
                  CITAD Code
                </span>
              </p>
            </div>
          </div>

          <div>
            <p>
              Cảm ơn Quý khách đã sử dụng dịch vụ của Ngân hàng TMCP Quân đội.
            </p>
            <p>
              <i>
                Thank you for doing business with Military commercial joint
                stock Bank
              </i>
            </p>
          </div>

          <div className="flex justify-end mt-3">
            <h3 className="uppercase w-fit text-center text-base font-bold">
              NGÂN HÀNG TMCP QUÂN ĐỘI <br />
              CN {data.branch_vi}
            </h3>
          </div>
        </div>

        <div className={cn("flex gap-x-6 text-[11px] mt-auto", styles.footer)}>
          <div className="col-span-3 max-w-[276px]">
            <h6 className="font-bold">Branch office</h6>
            <p>
              NGÂN HÀNG TMCP QUÂN ĐỘI - CHI NHÁNH {data.branch_vi} -{" "}
              {data.transaction_office_vi}
            </p>
            <p>{data.office_address_1}</p>
            {/* <p>{data.office_address_2}</p> */}
          </div>

          <div className="col-span-2">
            <h6 className="font-bold">Contact us</h6>
            <p>Điện thoại: {data.contact_telephone}</p>
            <p>Fax: {data.contact_fax}</p>
            <p>www.mbbank.com.vn</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MB3Page;
