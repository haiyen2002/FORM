export const generateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const convertCSVtoJSON = (csv: string): any[] => {
  const lines = csv.split("\n");
  const result = [];
  const headers = lines[0].split(",");
  for (let i = 1; i < lines.length; i++) {
    const obj: { [key: string]: any } = {};
    const currentline = lines[i].split(",");
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]!] = currentline[j];
    }
    result.push(obj);
  }
  return result;
};

export function numberWithThousands(
  x: number,
  separator = ".",
  suffix = ""
): string {
  if (!x?.toString()) return "";

  return (
    x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) +
    (suffix ? suffix : "")
  );
}
