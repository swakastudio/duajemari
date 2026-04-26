import { getPortfolioData } from "@/lib/googleSheet"
import PortfolioCard from "@/components/PortfolioCard"

export default async function PortoPage() {
  let data: any[] = []

  try {
    data = await getPortfolioData()
    console.log("PORTFOLIO DATA:", data) // 🔍 debug penting
  } catch (error) {
    console.error("ERROR FETCH PORTFOLIO:", error)
  }

  return (
    <main className="min-h-screen bg-white">

      {/* kasih jarak dari navbar */}
      <section className="px-6 pt-28 pb-16 max-w-6xl mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">

          {/* EMPTY STATE */}
          {data.length === 0 ? (
            <p className="col-span-full text-center text-neutral-400">
              Belum ada data portfolio
            </p>
          ) : (
            data.map((item, index) => (
              <PortfolioCard
                key={item.slug || index}
                item={item}
              />
            ))
          )}

        </div>

      </section>

    </main>
  )
}
