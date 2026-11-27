
"use client"

import WeddingCover from "./components/WeddingCover"
import WeddingLoader from "./components/WeddingLoader"

export default function Page() {
  const guest = "Tamu Undangan"

  return (
    <main className="fixed inset-0 w-full h-[100dvh] overflow-hidden overscroll-none">
      <WeddingLoader />
      <WeddingCover guest={guest} />
    </main>
  )
}
