"use client"

import Image from "next/image"

export default function PageLoader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50 animate-fadeIn">

      <Image
        src="/logonavbar.png"
        alt="loading"
        width={160}
        height={60}
        className="animate-pulse"
        priority
      />

      <p className="mt-6 text-xs tracking-[0.3em] text-neutral-500">
        menyiapkan kisah<span className="loading-dots"></span>
      </p>

    </div>
  )
}