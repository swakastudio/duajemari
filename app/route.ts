
import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    const scriptUrl = process.env.DUAJEMARI_SCRIPT_URL
    const apiToken = process.env.DUAJEMARI_API_TOKEN

    if (!scriptUrl || !apiToken) {
      return NextResponse.json(
        { success: false, message: "Konfigurasi server belum lengkap." },
        { status: 500 }
      )
    }

    const body = await request.json()

    const allowedActions = ["checkSlug", "submitOrder"]

    if (!allowedActions.includes(body.action)) {
      return NextResponse.json(
        { success: false, message: "Action tidak valid." },
        { status: 400 }
      )
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...body,
        token: apiToken,
      }),
      redirect: "follow",
      cache: "no-store",
    })

    const result = await response.json()

    return NextResponse.json(result, {
      status: response.ok ? 200 : 502,
    })
  } catch (error) {
    console.error("DUAJEMARI ORDER API:", error)

    return NextResponse.json(
      { success: false, message: "Terjadi kesalahan pada server." },
      { status: 500 }
    )
  }
}
