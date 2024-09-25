import React from "react";
import { PageLayoutProps } from "./types";
import cn from "@/utils/classnames";

const PageLayout = (props: PageLayoutProps) => {
  return (
    <main className={cn("w-[794px] mx-auto break-before-page relative")}>
      <section className={cn("relative h-[1123px] z-1", props.className)}>
        {props.header && props.header}
        {props.information && props.information}
        {props.dataTable && props.dataTable}
        {props.conclusion && props.conclusion}
        {props.footer && props.footer}
        {props.children && props.children}
      </section>
      <div className="no-print absolute z-[-1] top-0 left-0 right-0 bottom-0 border border-solid border-black"></div>
    </main>
  );
};

export default PageLayout;
