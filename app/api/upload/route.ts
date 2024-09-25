import { read, utils } from "xlsx";

export async function POST(request: Request) {
  const formData = await request.formData();
  const numberSheet = formData.get("numberSheet") as string;

  const file = formData.get("file") as File;

  // convert excel file to json
  const workbook = read(await file.arrayBuffer(), { type: "array" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = utils.sheet_to_json(sheet, {
    raw: true,
  });

  if (numberSheet && Number(numberSheet) == 1) {
    return Response.json({ data: data });
  }

  const sheetInfo = workbook.Sheets[workbook.SheetNames[1]];
  const dataInfo = utils.sheet_to_json(sheetInfo);

  return Response.json({ data: data, info: dataInfo });
}
