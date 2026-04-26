export async function getPortfolioData(): Promise<any[]> {
  try {
    const SHEET_ID = "1oixS66qVeyYamJl2eqFRJwXCg8T8UFOJkguDam95E5o"
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY

    if (!API_KEY) {
      throw new Error("API KEY tidak ditemukan")
    }

    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`,
      { cache: "no-store" }
    )

    if (!res.ok) {
      throw new Error("Gagal fetch Google Sheets")
    }

    const data = await res.json()

    const rows = data.values?.slice(1) || []

    return rows.map((row: string[]) => ({
      slug: row[0] || "",
      namaPria: row[1] || "",
      namaWanita: row[2] || "",
      date: row[3] || "",
      design: row[4] || "",
      linkProduk: row[5] || "",
      image1: row[6] || "",
      image2: row[7] || "",
      image3: row[8] || "",
      linkUndangan: row[9] || "",
    }))

  } catch (error) {
    console.error("ERROR GOOGLE SHEET:", error)
    return []
  }
}
