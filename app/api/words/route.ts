import { NextRequest, NextResponse } from "next/server";
import { read, rewrite } from "@/app/_utils/fs";

export async function GET() {
  try {
    const words = await read();
    const group = words.reduce((a: any, _: any, i: number) => {
      if (i % 4 == 0) a.push(words.slice(i, i + 4));
      return a;
    }, []);
    return NextResponse.json(group);
  } catch {
    return NextResponse.json({ msg: "Server error!" });
  }
}

export async function POST(request: NextRequest) {
  try {
    const word = await request.json();
    const words = await read();
    const id = Math.floor(Date.now() / (Math.random() * 999));
    words.push({ ...word, know: false, id });
    await rewrite(words);
    return NextResponse.json(word);
  } catch {
    return NextResponse.json({ msg: "Server error!" });
  }
}
