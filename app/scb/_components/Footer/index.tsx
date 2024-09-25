import React from "react";

import styles from "./styles.module.scss";
import cn from "@/utils/classnames";

const Footer = (props: any) => {
  return (
    <footer
      className={cn(
        "flex justify-between absolute bottom-3 left-0 right-0",
        styles.footer
      )}
    >
      <div className="pl-4">
        https://epayment.sacombank.com/payment/sma_printSophuAction.stb
      </div>
      <div className="pr-4">
        {props.page} / {props.totalPage}
      </div>
    </footer>
  );
};

export default Footer;
