
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function WeddingCover({ guest }: { guest: string }) {
  const router = useRouter()

  const [logoVisible, setLogoVisible] = useState(true)
  const [nameVisible, setNameVisible] = useState(false)
  const [detailsVisible, setDetailsVisible] = useState(false)
  const [opening, setOpening] = useState(false)

  // LOGO INTRO SEQUENCE
  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setLogoVisible(false)
    }, 2800)

    const nameTimer = setTimeout(() => {
      setNameVisible(true)
    }, 3200)

    const detailsTimer = setTimeout(() => {
      setDetailsVisible(true)
    }, 4300)

    return () => {
      clearTimeout(logoTimer)
      clearTimeout(nameTimer)
      clearTimeout(detailsTimer)
    }
  }, [])

  // OPEN INVITATION
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
        relative w-full h-[100svh] min-h-[650px]
        overflow-hidden flex items-center justify-center
        text-center
        transition-all duration-[1400ms]
        ${opening ? "scale-[1.12] blur-sm opacity-0" : "scale-100"}
      `}
    >

      {/* ================= BACKGROUND CASTLE ================= */}

      <div className="absolute inset-0">
        <img
          src="/rizky-gresya/rg_bg02_castle.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* SOFT COLOR OVERLAY */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#35243F]/10 via-[#4A304F]/15 to-[#321C30]/65" />

      {/* ================= LOGO INTRO ================= */}

      <div
        className={`
          absolute inset-0 z-20
          flex items-center justify-center
          transition-all duration-[1200ms] ease-in-out
          ${
            logoVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90 pointer-events-none"
          }
        `}
      >
        <img
          src="/rizky-gresya/rizky-gresya-logo.gif"
          alt="Rizky & Gresya"
          className="
            w-[210px] md:w-[290px]
            max-h-[40svh]
            object-contain
            drop-shadow-[0_8px_25px_rgba(0,0,0,0.25)]
          "
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div
        className={`
          relative z-10
          flex flex-col items-center
          w-full px-6 py-10
          transition-all duration-[1400ms] ease-out
          ${
            nameVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8 pointer-events-none"
          }
          ${opening ? "scale-110 opacity-0" : ""}
        `}
      >

        {/* LABEL */}

        <p className="
          tracking-[0.35em]
          text-[10px] md:text-[13px]
          text-[#FFF1E6]
          mb-6
          drop-shadow-md
        ">
          THE WEDDING OF
        </p>

        {/* COUPLE NAMES */}

        <h1
          style={{ fontFamily: "ClassiqueScript" }}
          className="
            text-[65px] md:text-[110px]
            leading-[1.1]
            text-[#FFF8EF]
            drop-shadow-[0_5px_20px_rgba(45,20,35,0.55)]
          "
        >
          Rizky
          <span className="
            mx-3
            text-[36px] md:text-[55px]
            text-[#F1D6C8]
          ">
            &
          </span>
          Gresya
        </h1>

        {/* DECORATIVE DIVIDER */}

        <div className="flex items-center gap-4 my-7">
          <span className="w-12 h-[1px] bg-[#E8C7B9]" />
          <span className="text-[#F4D9B0] text-lg">✦</span>
          <span className="w-12 h-[1px] bg-[#E8C7B9]" />
        </div>

        {/* WEDDING DATE */}

        <p className="
          tracking-[0.25em]
          text-[13px] md:text-[16px]
          text-white
        ">
          12 DESEMBER 2026
        </p>

        <p className="
          tracking-[0.3em]
          text-[9px] md:text-[11px]
          text-[#F0D7D2]
          mt-3
        ">
          PEMBERKATAN
        </p>

        {/* GUEST INFORMATION */}

        <div
          className={`
            mt-12
            transition-all duration-1000
            ${
              detailsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
          `}
        >

          <p className="
            text-[10px]
            tracking-[0.3em]
            text-[#F3DDD5]
            mb-3
          ">
            KEPADA YTH.
          </p>

          <h2
            style={{ fontFamily: "ZTotez" }}
            className="
              text-[23px] md:text-[30px]
              tracking-[0.06em]
              text-white
              drop-shadow-md
            "
          >
            {guest}
          </h2>

          {/* OPEN BUTTON */}

          <button
            onClick={openInvitation}
            disabled={opening}
            className="
              mt-10
              px-11 py-3
              border border-[#E6C9A8]/80
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
              disabled:opacity-50
            "
          >
            BUKA UNDANGAN
          </button>

        </div>

      </div>

    </section>
  )
}
