import { getPortfolioData } from "@/lib/googleSheet"
import PortfolioCard from "@/components/PortfolioCard"

export default async function PortoPage() {

  const data = await getPortfolioData()

  return (
    <main className="min-h-screen bg-white">

      <section className="px-6 py-14 max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Portfolio Undangan
          </h1>

          <p className="text-sm text-neutral-500 mt-3">
            Koleksi desain undangan digital Duajemari
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">

          {data.length === 0 ? (
            <p className="col-span-full text-center text-neutral-400">
              Belum ada data portfolio
            </p>
          ) : (
            data.map((item: any) => (
              <PortfolioCard key={item.slug} item={item} />
            ))
          )}

        </div>

      </section>

    </main>
  )
}
