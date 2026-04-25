import { getPortfolioData } from "@/lib/googleSheet"
import PortfolioCard from "@/components/PortfolioCard"

export default async function PortoPage() {

  const data = await getPortfolioData()

  return (
    <main className="min-h-screen bg-white">

      <section className="px-6 py-28 max-w-6xl mx-auto">

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
