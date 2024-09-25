import { ReactNode } from "react";

export type ConfigurationProps = {
  data: any;
  setData: any;
  templateURL: string;
  templateName: string;
  template?: (props: any) => ReactNode;
  dataPages?: any;
  setDataPages?: any;
};
