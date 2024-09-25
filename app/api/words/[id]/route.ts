import { read, rewrite } from "@/app/_utils/fs";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: any } }
) {
  try {
    const word = await request.json();
    const words = await read();
    words.map((item: Word, index: number) => {
      if (item.id == params.id) words.splice(index, 1, word);
    });
    await rewrite(words);
    return NextResponse.json(word);
  } catch {
    return NextResponse.json({ msg: "Server error!" });
  }
}
