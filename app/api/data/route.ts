import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const key = url.searchParams.get("key"); 

  if (key === "xxx") {
    return NextResponse.json({ msg: "You got data" });
  } else {
    return NextResponse.json({ msg: "Error" }, { status: 403 });
  }
}
