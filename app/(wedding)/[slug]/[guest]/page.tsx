

import { notFound } from "next/navigation"
import type { Metadata } from "next"
import WeddingCover from "../../rizky-gresya/components/WeddingCover"
import WeddingLoader from "../../rizky-gresya/components/WeddingLoader"

type PageProps = {
  params: Promise<{
    slug: string
    guest: string
  }>
}

// WHATSAPP LINK PREVIEW
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug, guest } = await params

  const guestName = guest.replace(/\+/g, " ")

  const title = "Rizky & Gresya | Wedding Invitation"

  const description =
    `Kepada Yth. ${guestName}, dengan penuh sukacita kami mengundang Anda untuk merayakan pernikahan Rizky & Gresya pada 12 Desember 2026.`

  const image =
    "https://www.duajemari.com/rizky-gresya/og-preview.jpg"

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.duajemari.com/${slug}/${encodeURIComponent(guest)}`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Wedding Invitation Rizky & Gresya",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  }
}

// WEDDING GUEST PAGE
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
