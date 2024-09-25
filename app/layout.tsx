import type { Metadata } from "next";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Script from "next/script";

export const metadata: Metadata = {
  title: "IUH App",
  description: "A Next.js app with Ant Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        {/* <Script src="https://unpkg.com/pagedjs/dist/paged.polyfill.js" /> */}
        <body>
          <AntdRegistry>{children}</AntdRegistry>
        </body>
      </html>
  );
}
