import React from "react";

const Conclusion = () => {
  return (
    <div className="pl-3">
      <p className="font-bold text-[10px]">
        Trong đó/<i>With</i>:
      </p>

      <div className="text-[10px]">
        <div>
          <span className="inline-block min-w-[96px]">Số dư (*):</span>
          <span>
            là số dư với các giao dịch thực tế đã được hạch toán và ghi nhận vào
            tài khoản của Quý khách
          </span>
        </div>
        <div className="italic">
          <span className="inline-block min-w-[96px]">Actual Balance (*):</span>
          <span>
            the balance of actual transaction(s) which is credited or debited to
            your account
          </span>
        </div>
      </div>

      <div className="text-[10px]">
        <div>
          <span className="inline-block min-w-[96px]">Ngày giao dịch (*):</span>
          <span>là ngày giờ ghi nhận phát sinh giao dịch</span>
        </div>
        <div className="italic">
          <span className="inline-block min-w-[96px]">Booking date (*):</span>
          <span>
            the date a transaction occurs (Used in recording transaction(s))
          </span>
        </div>
      </div>

      <div className="text-[10px]">
        <div>
          <span className="inline-block min-w-[96px]">Ngày hiệu lực (*):</span>
          <span>
            Ngày hạch toán là ngày giờ giao dịch được ghi nhận hạch toán thật sự
            vào tài khoản của quý khách
          </span>
        </div>
        <div className="italic">
          <span className="inline-block min-w-[96px]">Value date (*):</span>
          <span>
            the actual date a transaction is credited or debited to your account
          </span>
        </div>
      </div>

      <p className="mt-2 text-[10.4px] text-justify">
        Sổ phụ này được thể hiện song ngữ Việt Anh, trong trường hợp xảy ra bất
        cứ mâu thuẫn nào giữa tiếng Anh và bảng tiếng Việt thì bảng Tiếng Việt
        sẽ được ưu tiên về mặt pháp lý{" "}
      </p>
      <p className="italic text-[10.4px] text-justify">
        This statement is made in English and Vietnamese, in case of any
        conflict or inconsistency between the Vietnamese version and English
        version, the Vietnamese version shall prevail
      </p>
    </div>
  );
};

export default Conclusion;
