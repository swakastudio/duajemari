
import { notFound } from "next/navigation"
import WeddingCover from "../../rizky-gresya/components/WeddingCover"
import WeddingLoader from "../../rizky-gresya/components/WeddingLoader"

type PageProps = {
  params: Promise<{
    slug: string
    guest: string
  }>
}

export default async function GuestPage({ params }: PageProps) {
  const { slug, guest } = await params

  if (slug !== "rizky-gresya") {
    notFound()
  }

  const guestName = decodeURIComponent(guest.replace(/\+/g, " "))

  return (
    <main className="fixed inset-0 w-full h-[100dvh] overflow-hidden overscroll-none">
      <WeddingLoader />
      <WeddingCover guest={guestName} />
    </main>
  )
}
