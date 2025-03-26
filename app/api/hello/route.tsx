import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hi from Das Next.js server" });
}