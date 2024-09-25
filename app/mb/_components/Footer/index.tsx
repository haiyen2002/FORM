import React from "react";

const Footer = ({ data }: { data: any }) => {
  return (
    <section>
      <div className="pl-[238px] py-5">
        <b className="text-base">Số dư cuối: {data.end}</b>
      </div>

      <div className="grid grid-cols-2 items-center text-base mt-6">
        <div className="text-center">
          <p className="uppercase font-bold leading-none">Lập biểu</p>
          <p className="italic font-bold leading-none mt-1">Teller</p>
        </div>

        <div className="text-center">
          <p className="italic leading-none">{data.date}</p>
          <p className="uppercase font-bold leading-none mt-1">Kiểm soát</p>
          <p className="italic font-bold leading-none">Supervisor</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
