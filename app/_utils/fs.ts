import { promises as fs } from "fs";
import { path } from "@/app/globals";

export const read = async () => {
  const data = await fs.readFile(path.words, "utf8");
  return JSON.parse(data);
};

export const rewrite = async (data: any) => {
  await fs.writeFile(path.words, JSON.stringify(data));
};
