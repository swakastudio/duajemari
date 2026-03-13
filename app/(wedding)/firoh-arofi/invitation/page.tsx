"use client"

import { useEffect } from "react"

import Ayat from "../components/Ayat"
import BrideGroom from "../components/BrideGroom"
import MenghitungHari from "../components/MenghitungHari"
import HariBahagia from "../components/HariBahagia"
import Pattern from "../components/Pattern"
import WeddingEnvelope from "../components/WeddingEnvelope"
import GuestWish from "../components/GuestWish"
import Closing from "../components/Closing"

export default function InvitationPage() {

/* ===============================
SCROLL REVEAL
=============================== */

useEffect(() => {

```
const elements = document.querySelectorAll(".fade-up")

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  },
  { threshold: 0.15 }
)

elements.forEach((el) => observer.observe(el))

return () => observer.disconnect()
```

}, [])

return ( <main className="relative overflow-x-hidden text-neutral-800">

```
  {/* BACKGROUND */}
  <div className="fixed inset-0 -z-10 overflow-hidden">

    {/* SKY */}
    <div className="absolute inset-0 bg-[#e9f3f8]" />

    {/* CLOUDS */}
    <div
      className="absolute inset-0 opacity-60"
      style={{
        backgroundImage: "url('/firoh-arofi/bg-clouds.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />

    {/* MOUNTAIN */}
    <img
      src="/firoh-arofi/bg-mountain.png"
      alt="mountain"
      className="
      absolute
      bottom-0
      left-1/2
      -translate-x-1/2
      w-[160%]
      md:w-full
      opacity-90
      pointer-events-none
    "
    />
  </div>

  {/* =====================================
      PAGE CONTENT
  ===================================== */}

  <div className="relative z-10 space-y-32 md:space-y-40">

    <Ayat />

    <BrideGroom />

    <MenghitungHari />

    <HariBahagia />

    <Pattern />

    <WeddingEnvelope />

    <GuestWish />

    <Closing />

    {/* =====================================
        FOOTER
    ===================================== */}

    <footer className="text-center py-20">

      <p className="text-[12px] tracking-[0.18em] text-neutral-500">
        DIBUAT OLEH
      </p>

      <a
        href="https://duajemari.vercel.app"
        target="_blank"
        rel="noreferrer"
        className="
        inline-block
        mt-3
        text-[15px]
        font-medium
        tracking-[0.05em]
        text-neutral-800
        hover:underline
      "
      >
        duajemari.vercel.app
      </a>

    </footer>

  </div>

</main>
        )
}
