import { NextRequest, NextResponse } from "next/server";
import { read, rewrite } from "@/app/_utils/fs";

export async function GET() {
  try {
    return NextResponse.json(await read());
  } catch (error) {
    return NextResponse.json({ msg: "Server error!" });
  }
}

export async function POST(request: NextRequest) {
  try {
    const word = await request.json();
    const words = await read();
    words.push(word);
    await rewrite(words);
    return NextResponse.json(word);
  } catch (error) {
    return NextResponse.json({ msg: "Server error!" });
  }
}
