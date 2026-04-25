export async function getPortfolioData() {

  const SHEET_ID = "1oixS66qVeyYamJl2eqFRJwXCg8T8UFOJkguDam95E5o"
  const API_KEY = "AIzaSyAfh9L6JwIKgxFyc-UKQkPg7WEPpXuRpcQ"

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`,
    { cache: "no-store" }
  )

  const data = await res.json()

  const rows = data.values?.slice(1) || []

  return rows.map((row: string[]) => ({
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
