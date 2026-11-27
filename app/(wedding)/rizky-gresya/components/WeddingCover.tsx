
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function WeddingCover({ guest }: { guest: string }) {
  const router = useRouter()
  const [opening, setOpening] = useState(false)

  const openInvitation = () => {
    if (opening) return

    localStorage.setItem("playMusic", "true")
    setOpening(true)

    setTimeout(() => {
      router.push("/rizky-gresya/invitation")
    }, 1400)
  }

  return (
    <section
      className={`
        relative h-screen min-h-[650px] w-full overflow-hidden
        flex items-center justify-center text-center
        transition-all duration-[1400ms]
        ${opening ? "scale-[1.15] blur-sm opacity-0" : "scale-100"}
      `}
    >

      {/* BACKGROUND BASE */}
      <div className="absolute inset-0 bg-[#d8d1d0]" />

      {/* SKY / FAIRYTALE BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/rizky-gresya/bg-sky.png')",
        }}
      />

      {/* CASTLE BACKGROUND */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <img
          src="/rizky-gresya/castle.png"
          alt=""
          className="w-full object-cover object-bottom"
        />
      </div>

      {/* ORNAMENT VIDEO */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full object-cover"
        >
          <source
            src="/rizky-gresya/frame-ornament-cover.webm"
            type="video/webm"
          />
        </video>
      </div>

      {/* FLOWER VIDEO */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full object-cover"
        >
          <source
            src="/rizky-gresya/frame-flower.webm"
            type="video/webm"
          />
        </video>
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#24151b]/20 via-[#35151e]/25 to-[#241018]/75" />

      {/* CONTENT */}
      <div
        className={`
          relative z-10 flex flex-col items-center
          px-6 py-10 w-full
          transition-all duration-[1400ms]
          ${opening ? "scale-125 opacity-0" : ""}
        `}
      >

        <p
          className="
            tracking-[0.35em]
            text-[10px] md:text-[13px]
            text-[#F5E8DC]
            mb-7
            animate-heroFloat
          "
        >
          THE WEDDING OF
        </p>

        {/* COUPLE NAMES */}
        <h1
          style={{ fontFamily: "ClassiqueScript" }}
          className="
            text-[64px] md:text-[110px]
            leading-[1.1]
            text-[#FFF5E9]
            drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]
            animate-heroFloat
          "
        >
          Rizky
          <span className="mx-3 text-[#D7B2A9] text-[35px] md:text-[55px]">
            &
          </span>
          Gresya
        </h1>

        {/* DECORATIVE LINE */}
        <div className="flex items-center gap-4 my-7">
          <span className="w-12 h-[1px] bg-[#D7B2A9]" />
          <span className="text-[#E6C9A8] text-lg">✦</span>
          <span className="w-12 h-[1px] bg-[#D7B2A9]" />
        </div>

        {/* DATE */}
        <p
          className="
            tracking-[0.22em]
            text-[13px] md:text-[16px]
            text-[#FFF1E6]
            animate-heroFloat
            hero-delay-2
          "
        >
          12 DESEMBER 2026
        </p>

        <p
          className="
            tracking-[0.3em]
            text-[9px] md:text-[11px]
            text-[#E7C9C1]
            mt-3 mb-10
            animate-heroFloat
            hero-delay-2
          "
        >
          PEMBERKATAN
        </p>

        {/* GUEST */}
        <p
          className="
            text-[10px]
            tracking-[0.3em]
            text-[#F3DDD5]
            mb-2
            uppercase
            animate-heroFloat
            hero-delay-3
          "
        >
          KEPADA YTH.
        </p>

        <h2
          style={{ fontFamily: "ZTotez" }}
          className="
            text-[24px] md:text-[30px]
            tracking-[0.06em]
            text-white
            mt-2 mb-10
            animate-heroFloat
            hero-delay-4
            drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]
          "
        >
          {guest}
        </h2>

        {/* OPEN BUTTON */}
        <button
          onClick={openInvitation}
          disabled={opening}
          className="
            px-11 py-3
            border border-[#E6C9A8]/70
            rounded-full
            text-[10px] md:text-[12px]
            tracking-[0.3em]
            text-[#FFF5E9]
            bg-[#661321]/40
            backdrop-blur-md
            hover:bg-[#661321]
            hover:border-[#E6C9A8]
            transition-all duration-500
            shadow-[0_10px_40px_rgba(0,0,0,0.35)]
            animate-heroFloat
            hero-delay-4
            disabled:opacity-50
          "
        >
          BUKA UNDANGAN
        </button>

      </div>
    </section>
  )
}
