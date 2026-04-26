type GoogleSheetResponse = {
  values: string[][]
}

export async function getPortfolioData() {

const SHEET_ID = "1oixS66qVeyYamJl2eqFRJwXCg8T8UFOJkguDam95E5o"
  const API_KEY = "AIzaSyAWBP6FjqWDrUx6zLs3pBB4T6IE1D97zJ8"

    const res = await fetch(
  `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`,
  { cache: "no-store" })

  const data: GoogleSheetResponse = await res.json()

  const rows = data.values?.slice(1) || []

  return rows.map((row) => ({
    slug: row[0],
    namaPria: row[1],
    namaWanita: row[2],
    date: row[3],
    design: row[4],
    linkProduk: row[5],
    image1: row[6],
    image2: row[7],
    image3: row[8],
    linkUndangan: row[9],
  }))
}
