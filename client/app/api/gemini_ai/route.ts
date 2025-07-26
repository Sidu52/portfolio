import Http_Request from "@/app/utils/http_client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json();
    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }
    const apiKey = process.env.GIMINI_APIKEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key is missing" },
        { status: 500 }
      );
    }

    const responseData = await Http_Request({
      method: "POST",
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        contents: [{ parts: [{ text: prompt }] }],
      },
    });
    const generatedText =
      responseData?.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return NextResponse.json({ message: generatedText });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
