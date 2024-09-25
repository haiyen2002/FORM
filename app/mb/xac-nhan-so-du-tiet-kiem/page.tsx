"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import cn from "@/utils/classnames";
import logo from "../_assets/logo.png";
import Image from "next/image";
import { Button, Form, Input, Modal, notification } from "antd";
import FormItem from "antd/es/form/FormItem";
import { SettingOutlined } from "@ant-design/icons";
import TemplateBg from "../_assets/xac-nhan-so-du-tiet-kiem.webp";

const MB3Page = () => {
  const [data, setData] = useState({
    main_date: "Nam Định, ngày 07 tháng 11 năm 2019",
    date: "07/11/2019",
    time: "11giờ28phút",
    branch: {
      name: "Nam Định",
      address: "69 Lê Hồng Phong, Nguyễn Du, Nam Định",
      tel: "(+84)2286569999",
    },
    name: "Lương Văn A",
    identity: "0123456789",
    identity_date: "07/11/2019",
    identity_place: "Cục cảnh sát ĐKQL cư trú và DLQG về dân cư",
    address: "Xã Yên Phong, Huyện Ý Yên, Tỉnh Nam Định, Việt Nam",
    table_data: [
      {
        stt: 1,
        account: "7753108805009",
        balance: "520,000,000VND",
        term: "12 Tháng",
        open_date: "07/11/2020",
        end_date: "07/11/2020",
        note: "",
      },
    ],
    total: "520,000,000VND",
    total_text: "Năm trăm hai mươi triệu Việt Nam đồng",
    swift_code: "MSCBVNVX",
    head_office: {
      name: "NGÂN HÀNG TMCP QUÂN ĐỘI",
      address: "Số 21 Cát Linh, Phường Cát Linh Quận Đống Đa, Hà Nội",
      tel: "(+84)2286569999",
      fax: "123123123",
      website: "www.mbbank.com.vn",
    },
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

      <section
        className="relative mx-auto flex flex-col w-[794px] h-[1123px] bg-white pl-[56px] pr-[28px] pt-[50px] pb-[30px]"
        style={{
          // backgroundImage: `url(${TemplateBg.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <Image src={logo} alt="logo" width={160} height={67} />
        </div>
        <div className="font-bold text-right mt-[-10px]">
          <p className="pr-[76px] tracking-[-0.5px]">
            CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
          </p>
          <p className="pr-[138px] tracking-[-0.5px] relative">
            Độc lập - Tự do - Hạnh phúc
            <span className="absolute h-[1px] w-[150px] bg-black right-[90px] top-[100%]"></span>
          </p>
          <p className="font-normal mt-[8px] pr-[74px] tracking-[-0.5px]">
            <i>{data.main_date}</i>
          </p>
        </div>
        <div className="">
          <div className="text-center mt-[20px]">
            <h1 className="font-bold text-[22px] tracking-[-0.6px] pl-[0px]">
              GIẤY XÁC NHẬN
            </h1>
            <h2 className="font-bold pl-[0px] tracking-[-0.7px] relative">
              Số dư tài khoản tiết kiệm dành cho Cá nhân
              <span className="absolute h-[1px] w-[100px] bg-black right-[43.6%] top-[91%]"></span>
            </h2>
          </div>

          <div className="mt-[25px] pl-[11px]">
            <p className="text-center font-bold pr-[10px] tracking-[-1.2px]">
              Kính gửi: Quý Khách hàng
            </p>
            <p className="mt-[30px]">
              Hôm nay ngày {data.date} Ngân hàng TMCP Quân đội - Chi nhánh{" "}
              {data.branch.name} xác nhận:
            </p>
            <p className="mt-[10px]">
              Ông/Bà: <span className="font-bold uppercase">{data.name}</span>
            </p>
            <p className="relative mt-[10px]">
              Số CMND/CCCD/Hộ chiếu: {data.identity}
              <span className="absolute top-[50%] left-[46.5%] translate-y-[-50%]">
                Ngày cấp: {data.identity_date}
              </span>
            </p>
            <p className="mt-[10px]">Nơi cấp: {data.identity_place}</p>
            <p className="mt-[8px]">Địa chỉ: {data.address}</p>
            <p className="mt-[8px]">
              <span className="inline-block relative h-[16px] w-[18px] border border-solid border-black">
                <span className="absolute h-[1px] w-[21px] bg-black top-[6px] left-[-3px] rotate-[42deg]"></span>
                <span className="absolute h-[1px] w-[21px] bg-black top-[6px] right-[-3px] rotate-[-42deg]"></span>
              </span>
              <span className="ml-[4px]">
                Có Thẻ tiết kiệm tại Ngân hàng TMCP Quân đội vào thời điểm{" "}
                {data.time}, ngày {data.date} với chi tiết sau:
              </span>
            </p>
          </div>
          <div className="pl-[12px] mt-[2px]">
            <table className="w-full table-fixed">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p>STT</p>
                  </td>
                  <td>
                    <p>Số TK/TTK</p>
                  </td>
                  <td>
                    <p>Số dư</p>
                  </td>
                  <td>
                    <p>Thời hạn</p>
                  </td>
                  <td>
                    <p>Ngày mở</p>
                  </td>
                  <td>
                    <p>Ngày đến hạn</p>
                  </td>
                  <td>
                    <p>Ghi chú</p>
                  </td>
                </tr>
                {data.table_data.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <p>{item.stt}</p>
                    </td>
                    <td>
                      <p>{item.account}</p>
                    </td>
                    <td>
                      <p>{item.balance}</p>
                    </td>
                    <td>
                      <p>{item.term}</p>
                    </td>
                    <td>
                      <p>{item.open_date}</p>
                    </td>
                    <td>
                      <p>{item.end_date}</p>
                    </td>
                    <td>
                      <p>{item.note}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-[8px] border border-solid border-black border-t-0">
              <p className="tracking-[-0.2px]">
                Tổng tiền bằng số: <b>{data.total}</b>
              </p>
              <p className=" mt-[10px]">Bằng chữ: {data.total_text}/.</p>
              <p className=" mt-[8px]">
                Swift code Ngân hàng TMCP Quân Đội: {data.swift_code}
              </p>
            </div>

            <div className="mt-[6px]">
              <p>
                Phần xác nhận này chỉ sử dụng cho mục đích bổ sung hồ sơ du học,
                du lịch, chữa bệnh ở nước ngoài, và các mục đích khác không vi
                phạm quy định pháp luật.
              </p>
              <p className="mt-[10px] tracking-[-0.7px]">
                Giấy xác nhận này không có giá trị thay thế cho các cam kết của
                Ngân hàng về các nghĩa vụ của Khách hàng được xác nhận với bên
                thứ ba bất kỳ.
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="pr-[118px] tracking-[0.2px]">{data.main_date}</p>
            <h3 className="uppercase text-base font-bold text-right pr-[74px] tracking-[-1.1px]">
              NGÂN HÀNG TMCP QUÂN ĐỘI/MILITATY BANK
            </h3>
          </div>
        </div>

        <div
          className={cn(
            "flex gap-x-6 text-[11px] mt-auto ml-[-4px] tracking-[-0.2px]",
            styles.footer
          )}
        >
          <div className="col-span-3 max-w-[176px] leading-[1.2]">
            <h6 className="font-bold">Head office</h6>
            <p>{data.head_office.name}</p>
            <p>{data.head_office.address}</p>
          </div>

          <div className="col-span-2">
            <h6 className="font-bold">Contact us</h6>
            <p>Điện thoại: {data.head_office.tel}</p>
            <p>Fax: {data.head_office.fax}</p>
            <p>{data.head_office.website}</p>
          </div>
        </div>

        <div className="text-right text-[14px] w-fit absolute bottom-[82px] right-[38px] leading-[1]">
          <p>
            <b>Chi nhánh {data.branch.name}</b>
          </p>
          <p>{data.branch.address}</p>
          <p>T: {data.branch.tel}</p>
        </div>
      </section>
    </main>
  );
};

export default MB3Page;
