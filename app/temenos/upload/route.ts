import { read, readFile, utils } from "xlsx";
import csvToJson from "csvtojson";
// import xlsxtojson from "xlsx-to-json";
// import excelToJson from 'convert-excel-to-json'

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file") as File;

    const data = read(file, { type: "buffer" });
    // const data = xlsxtojson.console.log(data.Sheets["Sheet1"]);

    let rowObject = utils.sheet_to_json(data.Sheets["Sheet1"], {});

    // const reader = new FileReader();
    // reader.onload = (e) => {
    //   const data = new Uint8Array(file);
    //   const workbook = XLSX.read(data, { type: "array" });
    //   const sheetName = workbook.SheetNames[0];
    //   const worksheet = workbook.Sheets[sheetName];
    //   const json = utils.sheet_to_json(worksheet);

    //   console.log(json);
    // };
    // reader.readAsArrayBuffer(file);

    return Response.json({
      data: rowObject,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ error: true });
  }
}
