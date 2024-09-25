"use client";

import React, { useState } from "react";
import Header from "./_components/Header";
import BG from "./_assets/bg_Page_1.png";
import cn from "@/utils/classnames";
import styles from "./styles.module.scss";
import Template from "./_components/Template";
import Footer from "./_components/Footer";
import { Button, Form, Input, Upload } from "antd";
import Link from "next/link";

const MBPage = () => {
  const [initialValues, setInitialValues] = useState({
    from: "07/12/2023",
    to: "24/01/2024",
    branch: "VN0010814 - PGD Ha Huy tap",
    customer_name: "NGUYEN THI DAO XUYEN",
    code: "31565541",
    account: "1820121995",
    time_created: "08:57:16",
    date_created: "25/1/2024",
    user_created: "PHUONGLT3",
    start: "0.00",
    end: "0.00",
    date: "Ngày 25 tháng 01 năm 2024",
    json_data: "[]",
  });

  return (
    <main
      className={cn("w-[794px] mx-auto min-h-screen", styles.main)}
      style={{
        // backgroundImage: `url(${BG.src})`,
        backgroundSize: "100%",
      }}
    >
      <div className="no-print">
        <Form
          initialValues={initialValues}
          onFinish={(values: any) => {
            setInitialValues(values);
          }}
        >
          <Form.Item label="Từ ngày" name="from">
            <Input />
          </Form.Item>
          <Form.Item label="Đến ngày" name="to">
            <Input />
          </Form.Item>
          <Form.Item label="Chi nhánh" name="branch">
            <Input />
          </Form.Item>
          <Form.Item label="Tên khách hàng" name="customer_name">
            <Input />
          </Form.Item>
          <Form.Item label="Mã khách hàng" name="code">
            <Input />
          </Form.Item>
          <Form.Item label="Tài khoản" name="account">
            <Input />
          </Form.Item>
          <Form.Item label="Giờ tạo" name="time_created">
            <Input />
          </Form.Item>
          <Form.Item label="Ngày tạo" name="date_created">
            <Input />
          </Form.Item>
          <Form.Item label="Người tạo" name="user_created">
            <Input />
          </Form.Item>
          <Form.Item label="Số dư đầu" name="start">
            <Input />
          </Form.Item>
          <Form.Item label="Tổng nợ" name="debit_total">
            <Input />
          </Form.Item>
          <Form.Item label="Tổng có" name="credit_total">
            <Input />
          </Form.Item>
          <Form.Item label="Số dư cuối" name="end">
            <Input />
          </Form.Item>
          <Form.Item label="Ngày" name="date">
            <Input />
          </Form.Item>
          <Form.Item label="JSON Data" name="json_data">
            <Input.TextArea />
          </Form.Item>

          <Link
            className="text-blue-400 underline"
            href={"https://tableconvert.com/excel-to-json"}
            target="_blank"
          >
            Excel to Json
          </Link>
          <Form.Item className="pt-4">
            <Button htmlType="submit">Save</Button>
          </Form.Item>
        </Form>
      </div>

      <Header data={initialValues} />

      <Template
        data={JSON.parse(initialValues.json_data)}
        info={initialValues}
      />

      <Footer data={initialValues} />
    </main>
  );
};

export default MBPage;
