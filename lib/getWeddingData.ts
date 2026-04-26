export async function getWeddingData(slug: string) {
  try {
    const SHEET_ID = "1WhT8BsT1vl2i9GMeZCWuWmTxavNuTkwOuoS6oHZRh58"
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ""

    if (!API_KEY) throw new Error("API KEY tidak ditemukan")

    const res = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`,
      { cache: "no-store" }
    )

    if (!res.ok) throw new Error("Gagal fetch sheet")

    const data = await res.json()

    const rows: string[][] = data.values?.slice(1) || []

    const found = rows.find((row) => row[0] === slug)
    if (!found) return null

    return {
      slug: found[0] || "",
      template: found[1] || "",
      ayat: found[2] || "",

      fotoMempelaiWanita: found[3] || "",
      mempelaiWanita: found[4] || "",
      anakKeWanita: found[5] || "",
      namaAyahWanita: found[6] || "",
      namaIbuWanita: found[7] || "",

      fotoMempelaiPria: found[8] || "",
      mempelaiPria: found[9] || "",
      anakKePria: found[10] || "",
      namaAyahPria: found[11] || "",
      namaIbuPria: found[12] || "",

      hariBahagia: found[13] || "",
      waktuBahagia: found[14] || "",
      lokasiPernikahan: found[15] || "",
      linkGmaps: found[16] || "",

      galeri: [
        found[17],
        found[18],
        found[19],
        found[20],
        found[21],
      ].filter(Boolean),

      imageRekeningPria: found[22] || "",
      textRekeningPria: found[23] || "",
      imageRekeningWanita: found[24] || "",
      textRekeningWanita: found[25] || "",

      supabaseSlug: found[26] || "",

      photoClosing: found[27] || "",
      textClosing: found[28] || "",
    }
  } catch (err) {
    console.error("ERROR WEDDING DATA:", err)
    return null
  }
}
