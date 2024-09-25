import React from "react";
import Footer from "./Footer";
import Image from "next/image";
import Logo from "../_assets/logo.jpg";
import { numberWithThousands } from "@/utils/data";
import style from "./styles.module.scss";
import cn from "@/utils/classnames";

const PageTemplate = ({ dataPage, data: { info, data }, totalPage }: any) => {
  return (
    <section
      className="max-w-[794px] mx-auto h-[1123px] flex flex-col px-[30px] pt-11 pb-11 bg-white relative border-t border-t-solid border-t-black print:border-t-transparent"
      style={{
        // backgroundImage: `url(${BGTemplate.src})`,
        backgroundSize: "796px 1123px",
        backgroundPosition: "top left",
      }}
    >
      {dataPage.hasFirst && (
        <>
          <header>
            <div className="flex justify-between">
              <div className="relative w-[219px] h-[80px] ml-[18px]">
                <Image
                  src={Logo}
                  alt="logo"
                  fill
                  objectFit="cover"
                  objectPosition="center -48px"
                />
              </div>
              <div className="text-right pr-[6px] pt-[13px] self-end font-bold text-[15.5px]">
                <p className="leading-[1]">SAO KÊ TÀI KHOẢN</p>
                <p className="mt-[6px]">ACCOUNT STATEMENT</p>
              </div>
            </div>

            <div className="pt-[25px] text-[11.2px] tracking-[0.5px] leading-[0.8]">
              <div className="grid grid-cols-11">
                <p className="col-span-6">
                  Tên tài khoản/<i>Account name:</i>{" "}
                  <span className="inline-block ml-[6px]">
                    {info.account_name}
                  </span>
                </p>

                <p className="col-span-5 pl-[16px]">
                  Ngày thực hiện/ <i>Date:</i> {info.date}
                </p>
              </div>

              <div className="grid grid-cols-11 mt-[12px] leading-normal">
                <p className="col-span-6">
                  Số tài khoản/<i>Account number:</i>{" "}
                  <span className="inline-block ml-[2px]">
                    {info.account_number}
                  </span>
                </p>

                <p className="col-span-5 pl-[16px] flex">
                  <span className="inline-block flex-none">
                    Chi nhánh thực hiện/ <i>Branch:</i>
                  </span>
                  <span className="pl-[14px] leading-[1.3] flex-none inline-block w-[175px]">
                    {info.branch}
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-11 mt-[11px] leading-normal">
                <p className="col-span-6">
                  Loại tài khoản/<i>Type of Account:</i>
                  <span className="inline-block ml-[8px]">
                    Tài khoản 1 chủ sở hữu/ <i>Sole owner account</i>
                  </span>
                </p>

                <p
                  className="col-span-5 pl-[16px] leading-[1.4]"
                  style={{
                    wordSpacing: "7px",
                  }}
                >
                  Số lượng đồng chủ sở hữu tài
                  <br /> khoản/{" "}
                  <i>
                    Number of Joint account
                    <br />{" "}
                    <span
                      style={{
                        wordSpacing: "initial",
                      }}
                    >
                      holder (nếu có):
                    </span>
                  </i>
                </p>
              </div>

              <div className="mt-[12px] grid grid-cols-11">
                <p className="col-span-11 flex">
                  <span className="inline-block flex-none">
                    Địa chỉ/<i> Address:</i>
                  </span>
                  <span className="inline-block ml-[2px]">{info.address}</span>
                </p>
              </div>

              <div className="grid grid-cols-11 mt-[17px]">
                <p className="col-span-4">
                  <span className="tracking-[1px] inline-block min-w-[175px]">
                    CMND/CCCD/Hộ chiếu số
                  </span>
                  <span className="inline-block">{info.identity}</span>
                </p>
              </div>

              <div className="grid grid-cols-11 mt-[16px]">
                <p className="col-span-6">
                  <span className="tracking-[0.8px] inline-block min-w-[175px]">
                    <i>ID/Citizen ID/PP No:</i>
                  </span>
                  <span></span>
                </p>
              </div>

              <div className="grid grid-cols-11 mt-[15px]">
                <p className="col-span-6">
                  <span className="tracking-[0.8px] inline-block min-w-[175px]">
                    CIF:
                  </span>
                  <span className="inline-block">{info.cif}</span>
                </p>
              </div>

              <div className="grid grid-cols-6 mt-[14px]">
                <p className="col-span-6">
                  <span className=" inline-block min-w-[175px]">
                    Loại tiền/<i>Currency:</i>
                  </span>
                  <span className="inline-block">{info.currency}</span>
                </p>
              </div>

              <div className="grid grid-cols-11 mt-[14px]">
                <p className="col-span-6">
                  <span className=" inline-block min-w-[175px]">
                    Từ /<i>From:</i>
                    <span className="inline-block ml-[10px]">{info.from}</span>
                  </span>
                  <span className=" inline-block min-w-[175px] tracking-[1px]">
                    Đến /<i>To:</i>
                    <span className="inline-block ml-[5px] tracking-[0.6px]">
                      {info.to}
                    </span>
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-11 mt-[15px]">
                <p className="col-span-6 flex justify-between pr-[40px]">
                  <span className=" inline-block min-w-[175px] tracking-[0.6px] font-bold">
                    Số dư đầu kỳ/ <i>Opening balance</i>:
                  </span>
                  <span className="inline-block">
                    {numberWithThousands(info.open_balance)}
                  </span>
                </p>
              </div>
            </div>
          </header>
        </>
      )}

      {data.slice(dataPage.start, dataPage.end).length > 0 && (
        <table
          className={cn(
            style.data_table,
            "table-fixed w-full",
            dataPage.hasFirst && "mt-[18px]"
          )}
        >
          <thead>
            <tr>
              <th>
                <span>STT</span>
                <br />
                <span className="italic">No</span>
              </th>
              <th>
                <span>Ngày GD/</span>
                <br />
                <span className="italic">TNX Date</span>
                <br />
                <span>
                  Số CT/ <i>Doc No</i>
                </span>
              </th>
              <th>
                <span>Số tiền ghi nợ/</span>
                <br />
                <span className="italic">Debit</span>
              </th>
              <th>
                <span>Số tiền ghi có/</span>
                <br />
                <span className="italic">Credit</span>
              </th>
              <th>
                <span>Số dư/</span>
                <br />
                <span className="italic">Balance</span>
              </th>
              <th>
                <span>Nội dung chi tiết/</span>
                <br />
                <span className="italic">Transactions in detail</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .slice(dataPage.start, dataPage.end)
              .map((item: any, index: number) => (
                <tr key={index}>
                  <td>{item.no}</td>
                  <td>
                    {item.date?.split(" ")[0]}
                    <br />
                    {item.date?.split(" ")[1]}
                  </td>
                  <td>{item.debit > 0 && numberWithThousands(item.debit)}</td>
                  <td>{item.credit > 0 && numberWithThousands(item.credit)}</td>
                  <td>
                    {item.balance > 0 && numberWithThousands(item.balance)}
                  </td>
                  <td>{item.detail}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}

      {dataPage.hasLast && (
        <>
          <div
            className={cn(
              data.slice(dataPage.start, dataPage.end).length > 0 && "mt-2"
            )}
          >
            <div className="font-bold">
              <div>
                <span>Tổng số:</span>
                <span className="inline-block min-w-[220px] text-right text-[11px] mt-[-2px] relative">
                  {numberWithThousands(info.debit)}
                </span>
                <span className="inline-block min-w-[119px] text-right text-[11px]">
                  {numberWithThousands(info.credit)}
                </span>
              </div>
              <div className="italic">
                <span>Total</span>
              </div>
              <div className="mt-[2px] inline-block">
                <span>Số dư cuối kỳ:</span>
                <span className="inline-block text-[11px] min-w-[430px] text-right">
                  {numberWithThousands(info.end_balance)}
                </span>
              </div>
              <div className="italic">
                <span>Closing balance</span>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-end mt-[-10px] justify-center">
                <p className="min-w-[224px] text-center font-bold tracking-[0.5px]">
                  Xác nhận của ngân hàng/
                </p>
                <p className="min-w-[230px] text-center font-bold italic tracking-[0.5px]">
                  Bank&apos;s confirmation
                </p>
              </div>

              <div
                className={cn(
                  "italic text-center font-bold mt-[100px] tracking-[0.2px] pr-3",
                  style.thank
                )}
              >
                <p>
                  Trân trọng cảm ơn quý khách đã sử dụng dịch vụ của
                  Vietcombank!
                </p>
                <p>Thank you for using Vietcombank&apos;s services!</p>
              </div>
            </div>

            <div className="text-center text-sm mt-[33px] font-bold tracking-[0.5px] pr-3">
              <p>
                <span className="tracking-[0.8px]">VIETCOMBANK</span> - Chung
                niềm tin vững tương lai
              </p>
              <p className="mt-1 tracking-[-0.2px] italic pr-1">
                <span className="tracking-[0.3px]">VIETCOMBANK</span> -{" "}
                <span className="tracking-[0.1px]">
                  Together for the future
                </span>
              </p>
              <p className="text-[10px] pl-[19px] mt-[2px]">*************</p>
            </div>

            <div
              className="text-sm tracking-[0.5px] mt-[12px]"
              style={{
                wordSpacing: "1.5px",
              }}
            >
              <p className="font-bold leading-[1.38] text-justify pr-2">
                <span className="underline font-bold">Ghi chú:</span>
                <span
                  className="pl-1"
                  style={{
                    wordSpacing: "1.28px",
                  }}
                >
                  Giấy Xác nhận này của Ngân hàng TMCP Ngoại thương Việt Nam đảm
                  bảo thông tin chính xác tại thời điểm xác nhận theo nội dung
                  yêu cầu của Khách hàng. Văn bản Xác nhận này không cấu thành
                  bất kỳ cam đoan hay bảo đảm nào của Ngân hàng TMCP Ngoại
                  thương Việt Nam tại thời điểm hiện tại hay tương{" "}
                  <span
                    className="tracking-[0px]"
                    style={{
                      wordSpacing: "2px",
                    }}
                  >
                    lai đối các nghĩa vụ của Khách hàng xác lập với bên thứ
                    ba./.
                  </span>
                </span>
              </p>
              <p className="italic text-justify pr-2 leading-[1.28]">
                <span className="font-bold underline">Note:</span>
                <span
                  className="pl-1"
                  style={{
                    wordSpacing: "1.5px",
                  }}
                >
                  This letter of confirmation of the Joint Stock Commercial Bank
                  for Foreign Trade of Vietnam ensures accurate information at
                  the time of confirmation as requested by the customer. This
                  acknowledgment does not{" "}
                  <span
                    className="tracking-[0px]"
                    style={{
                      wordSpacing: "1px",
                    }}
                  >
                    constitute any current or future guarantees of the
                    customer&apos;s obligations confirmed to third parties./.
                  </span>
                </span>
              </p>
            </div>
          </div>
        </>
      )}

      <Footer page={dataPage.page} totalPage={totalPage} />
    </section>
  );
};

export default PageTemplate;
