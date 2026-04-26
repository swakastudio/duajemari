"use client"

import Ayat from "./components/Ayat"
import BrideGroom from "./components/BrideGroom"
import Closing from "./components/Closing"

type WeddingData = {
  mempelaiPria: string
  mempelaiWanita: string
  ayat: string
  textClosing: string
}

export default function RoyalFlowerTemplate({ data }: { data: WeddingData }) {
  return (
    <main>

      <BrideGroom data={data} />

      <Ayat ayat={data.ayat} />

      <Closing text={data.textClosing} />

    </main>
  )
}
