"use client"

import Ayat from "./components/Ayat"
import BrideGroom from "./components/BrideGroom"
import Closing from "./components/Closing"

// TYPE DATA (biar aman & gak typo)
type WeddingData = {
  mempelaiPria?: string
  mempelaiWanita?: string
  ayat?: string
  textClosing?: string
}

export default function RoyalFlowerTemplate({ data }: { data: WeddingData }) {

  return (
    <main className="flex flex-col gap-16">

      {/* MEMPELAI */}
      <BrideGroom data={data} />

      {/* AYAT */}
      <Ayat ayat={data.ayat || ""} />

      {/* CLOSING */}
      <Closing text={data.textClosing || ""} />

    </main>
  )
}
