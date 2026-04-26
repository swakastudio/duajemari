"use client"

import WeddingCover from "./components/WeddingCover"
import BrideGroom from "./components/BrideGroom"
import MusicPlayer from "./components/MusicPlayer"

export default function RoyalFlower({ data }: any) {

  return (
    <main>

      {/* COVER */}
      <WeddingCover guest={data.guest || "Tamu Undangan"} />

      {/* MUSIC */}
      <MusicPlayer />

      {/* MEMPELAI */}
      <BrideGroom />

    </main>
  )
}
