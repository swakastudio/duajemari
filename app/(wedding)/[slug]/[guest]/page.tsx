import { getWeddingData } from "@/lib/getWeddingData"
import RoyalFlowerTemplate from "@/app/(wedding)/_templates/royal-flower/RoyalFlowerTemplate"

export default async function WeddingPage({ params }: any) {
  const { slug, guest } = params

  const data = await getWeddingData(slug)

  if (!data) {
    return <div>Undangan tidak ditemukan</div>
  }

  return <RoyalFlowerTemplate data={data} guest={guest} />
}
