import connectMongoDB from "../../../libs/mongodb";
import Data from "../../../models/model";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Data.create({ title, description });
  return NextResponse.json(
    { message: "created successfully" },
    { status: 201 }
  );
}

export async function GET() {
  await connectMongoDB();
  const data = await Data.find();
  return NextResponse.json({ data });
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Data.findByIdAndDelete(id);
    return NextResponse.json({message: "deleted successfully"},{status: 200});
}