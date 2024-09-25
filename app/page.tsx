import { AppstoreAddOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">

      <h1 className="text-3xl">Mục lục</h1>
      <ul className="text-2xl grid grid-cols-3 underline">
        <li className="mt-4">
          <Link href="/mb"> Sao kê MB</Link>
        </li>
        <li className="mt-4">
          <Link href="/mb/so-phu-chi-tiet-kiem">
            MB - Sổ phụ chi tiết kiểm báo nợ/báo có
          </Link>
        </li>
        <li className="mt-4">
          <Link href="/mb/xac-nhan-tai-khoan">MB - Xac nhan tai khoan</Link>
        </li>
        <li className="mt-4">
          <Link href="/mb/xac-nhan-so-du-tiet-kiem">
            MB - Xac nhận số dư tiết kiệm
          </Link>
        </li>
        <li className="mt-4">
          <Link href="/scb">Sao kê SCB</Link>
        </li>
        <li className="mt-4">
          <Link href="/tcb">Sao kê Techcombank</Link>
        </li>
        <li className="mt-4">
          <Link href="/temenos">Sao kê Temenos</Link>
        </li>
        <li className="mt-4">
          <Link href="/vcb">Sao kê vcb</Link>
        </li>
        <li className="mt-4">
          <Link href="/vib">Sao kê vib</Link>
        </li>
        <li className="mt-4">
          <Link href="/agribank">Xác nhận số dư tài khoản ARGIBANK</Link>
        </li>
        <li className="mt-4">
          <Link href="/agr">Sao kê ARGIBANK</Link>
        </li>
        <li className="mt-4">
          <Link href="/vpbank">Sao kê VPBank</Link>
        </li>
        <li className="mt-4">
          <Link href="/viettin">Sao kê Viettin (Ngang)</Link>
        </li>
        <li className="mt-4">
          <Link href="/viettin-doc">Sao kê Viettin (dọc)</Link>
        </li>
        <li className="mt-4">
          <Link href="/viettin-doc-2">Sao kê Viettin (dọc 2)</Link>
        </li>
        <li className="mt-4">
          <Link href="/bidv">Sao kê BIDV</Link>
        </li>
        <li className="mt-4">
          <Link href="/acb">Sao kê ACB</Link>
        </li>
        <li className="mt-4">
          <Link href="/msb">Sao kê MSB</Link>
        </li>
        <li className="mt-4">
          <Link href="/vietbank">Sao kê Vietbank</Link>
        </li>
        <li className="mt-4">
          <Link href="/shb">Sao kê SHB</Link>
        </li>
      </ul>
    </main>
  );
}
