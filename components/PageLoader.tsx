"use client"

import Image from "next/image"

export default function PageLoader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md z-50 radial-reveal">

      <Image
        src="/logonavbar.png"
        alt="duajemari loading"
        width={160}
        height={60}
        className="animate-pulse"
        priority
      />

      <p className="mt-6 text-sm tracking-[0.3em] text-neutral-700">
        menyiapkan kisah<span className="loading-dots"></span>
      </p>

    </div>
  )
}