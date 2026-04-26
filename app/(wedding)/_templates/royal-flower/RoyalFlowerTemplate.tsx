"use client"

import Ayat from "./components/Ayat"
import BrideGroom from "./components/BrideGroom"
import Closing from "./components/Closing"

export default function RoyalFlowerTemplate({ data }: any) {
  return (
    <main>

      <BrideGroom data={data} />

      <Ayat ayat={data.ayat} />

      <Closing text={data.textClosing} />

    </main>
  )
}
