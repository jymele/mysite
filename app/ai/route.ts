import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const prompt = url.searchParams.get("prompt");

  if (!prompt)
    return NextResponse.json({ error: "No prompt provided" }, { status: 400 });

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await openai.responses.create({
    model: "gpt-5-nano",
    // input: prompt,
    input: "write a haiku about ai",
    store: true,
  });

  return NextResponse.json({
    message: "Hello from AI route",
    prompt,
    response: response,
  });
}
