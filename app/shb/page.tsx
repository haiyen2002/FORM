"use client";

import PageConfiguration from "@/components/Configuration";
import cn from "@/utils/classnames";
import { useEffect, useState } from "react";
import FirstPageBg from './_assets/first_page.png'
import LastPageBg from './_assets/last_page.png'
import Logo from './_assets/logo.png'
import Image from "next/image";
import styles from './styles.module.scss'
import { numberWithThousands } from "@/utils/data";


const SHBPage = () => {
    const [data, setData] = useState({
        info: [],
        data: [],
      });
      const [dataPages, setDataPages] = useState([
        {
          start: 0,
          end: 10,
          hasFirst: true,
          hasLast: false,
          isSigned: false,
          page: 1,
        },
      ]);

      const info:any = (data?.info && data.info[0]) || {
        // debit_total: 24489787783,
        // credit_total: 24652364753,
        // open_balance: 306438,
        // ending_balance: 162883408,
      };

      const dataTable = data?.data || [];

      useEffect(() => {
        document.title = "SHB - " + (info?.name || "template");
      }, [info]);

    return <main className={cn("bg-neutral-500 flex flex-col justify-center items-center",styles.page)}>
        <PageConfiguration 
            data={data}
            setData={setData}
            templateName="SHB Template"
            templateURL="shb-template.xlsx"
            dataPages={dataPages}
            setDataPages={setDataPages}
            template={(props) => {
                const _data = dataTable.slice(
                    props.dataPage.start,
                    props.dataPage.end
                  );
                  const _page = props.dataPage;
                return <section
                  className={cn("flex flex-col w-[794px] h-[1123px] pl-[28px] pr-[20px] pt-[69px] pb-[90px] overflow-y-auto bg-white", 
                    "border-t border-t-solid border-t-black print:border-t-0")}
                  style={{
                    // backgroundImage: `url(${LastPageBg.src})`,
                    // backgroundImage: `url(${FirstPageBg.src})`,
                    backgroundSize: "100%",
                  }}
                >

                    <div className="flex justify-between items-end pb-[12px]">
                        <div>
                            <div className="pl-[40px]">
                            <Image src={Logo} alt="logo" width={155} height={50} />

                            </div>

                            <h1 className="font-bold pl-[3px] mt-[-6px] text-[11.5px]">NGÂN HÀNG TMCP SÀI GÒN - HÀ NỘI</h1>
                        </div>

                        <div className="pr-[59px] pb-[4px]">
                            <p className="text-right mb-[11px] font-[Arial] pr-[2px]">{info.time_printed || "10:35:56"}</p>
                            <p><span className="min-w-[62px]">Ngày in :</span>{info.date_printed || "24/09/2024"}</p>
                        </div>
                    </div>

                    <div className="text-center mt-[14px] pr-[6px]">
                        <h2 className="font-bold text-[16px]">SỔ PHỤ TÀI KHOẢN TIỀN GỬI</h2>
                        <p className="tracking-[-0.2px] pr-[2px] mt-[5px]">Từ ngày: {info.from || "1/3/2024"} Đến ngày: {info.to || "24/9/2024"}</p>
                    </div>

                    {_page.hasFirst && <div className="mt-[11px] pl-[2px]">
                        <p><span className="font-bold">Mã khách hàng:</span> <span className="ml-[2px] font-bold">{info.customer_code || "0100534191"}</span></p>
                        <p className="mt-[9px]"><span className="font-bold">Tên khách hàng:</span> <span className="ml-[10px] tracking-[0.1px] uppercase font-[Arial]">{info.name || "HOANG THI KIM OANH"}</span></p>
                        <p className="mt-[5px]"><span className="font-bold">Địa chỉ:</span> <span className="ml-[9px] tracking-[0.3px] uppercase font-[Arial]">{info.address || "KHOI 6, TRUNG DO, VINH, NGHE AN"}</span></p>
                        <p className="mt-[5px]"><span className="font-bold">Mã số thuế:</span> <span className="ml-[9px] tracking-[0.3px]">{info.tax_code || ""}</span></p>
                    </div>}

                    <div className={cn(_page.hasFirst ? "mt-[30px]" : "mt-[12px]")}>
                        {_page.hasFirst && <div className="flex font-bold">
                            <div className="font-[Arial]">Tài khoản:</div>
                            <div className="min-w-[226px] pl-[50px]">{info.account || "7878787979"}</div>
                            <div>Loại tiền:</div>
                            <div className="ml-[20px]">{info.currency || "VND"}</div>
                        </div>}
                        <div className="pl-[4px] mt-[7px]">

                        <table className="table-fixed w-full">
                            <thead>
                                <tr>
                                    <th className="text-center">Ngày GD</th>
                                    <th className="text-center">Số chứng từ</th>
                                    <th className="text-center">Diễn giải</th>
                                    <th className="text-center">Pos.h toán</th>
                                    <th className="text-center">Ghi nợ</th>
                                    <th className="text-center">Ghi có</th>
                                    <th className="text-center">Dư cuối giao dịch</th>
                                </tr>
                            </thead>

                            <tbody>
                                {_data.map((item:any, index) => (
                                    <tr key={index}>
                                        <td>{item.date}</td>
                                        <td>{item.ref_no}</td>
                                        <td className="whitespace-break-spaces" dangerouslySetInnerHTML={{
                                            __html: item.description,
                                        }}></td>
                                        <td>{item.pos}</td>
                                        <td>{numberWithThousands(item.debit, ",") || 0}</td>
                                        <td>{numberWithThousands(item.credit, ",") || 0}</td>
                                        <td>{numberWithThousands(item.balance, ",")}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    </div>

                    {_page.hasLast && <div className="font-bold mt-[12px] pl-[351px] text-[10.5px]">
                        <div className="flex">
                            <div className="font-bold">Tổng phát sinh:</div>
                            <div className="text-right min-w-[140px]">{numberWithThousands(info.debit_total, ",", ".00")}</div>
                            <div className="text-right min-w-[115px]">{numberWithThousands(info.credit_total, ",", ".00")}</div>
                        </div>
                        <div className="flex mt-[8px]">
                            <div>Dư đầu:</div>
                            <div className="text-right min-w-[289.34px]">{numberWithThousands(info.open_balance, ",", ".00")}</div>
                        </div>
                        <div className="flex mt-[8px]">
                            <div>Dư cuối:</div>
                            <div className="text-right min-w-[287.59px]">{numberWithThousands(info.ending_balance, ",", ".00")}</div>
                        </div>
                    </div>}

                    {_page.isSigned && <div className="flex font-[Arial] font-bold mt-[31px]">
                        <p className="ml-[208px]">LẬP BIỂU</p>
                        <p className="ml-[190px]">KIỂM SOÁT VIÊN</p>
                    </div>}

                    <div className="mt-auto text-right pr-[22px] pt-[20px]">
                        <span>{_page.page}/</span>
                        <span className="ml-[2px]">{dataPages.length}</span>
                    </div>
                </section>
            }}
        />;
    </main>
}

export default SHBPage;