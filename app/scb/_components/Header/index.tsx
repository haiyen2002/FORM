import React from "react";

import styles from "./styles.module.scss";
import cn from "@/utils/classnames";

const Header = ({ data }: { data: any }) => {
  return (
    <header className={cn("flex absolute top-5 left-0 right-0", styles.header)}>
      <div className="w-[41%] pl-4">{data[0]?.value}</div>
      <div>Dich vu thanh toan tai quay Sacombank - Payment Service</div>
    </header>
  );
};

export default Header;
