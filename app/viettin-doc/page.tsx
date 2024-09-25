import cn from "@/utils/classnames";
import PageContent from "./_components/Content";
import styles from "./styles.module.scss";
import { Suspense } from "react";

export const metadata = {
  title: "Viettin",
};

const BIDVPage = () => {
  return (
    <main className={cn(styles.page, "bg-neutral-700 flex flex-col")}>
      <Suspense fallback={<></>}>
        <PageContent />
      </Suspense>
    </main>
  );
};

export default BIDVPage;
