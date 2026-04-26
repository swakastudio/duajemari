const SHEET_ID = "1WhT8BsT1vl2i9GMeZCWuWmTxavNuTkwOuoS6oHZRh58"
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY

export async function getWeddingData(slug: string) {
  try {
    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`,
      { cache: "no-store" }
    )

    const data = await res.json()

    const rows = data.values

    if (!rows || rows.length === 0) return null

    // ambil header (baris pertama)
    const headers = rows[0]

    // mapping semua data
    const items = rows.slice(1).map((row: string[]) => {
      const obj: any = {}

      headers.forEach((header: string, i: number) => {
        obj[header] = row[i]
      })

      return obj
    })

    // cari berdasarkan slug
    const result = items.find((item: any) => item.slug === slug)

    return result || null

  } catch (error) {
    console.error("Error fetching wedding data:", error)
    return null
  }
}
