
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function WeddingCover({ guest }: { guest: string }) {
  const router = useRouter()

  const [logoEntered, setLogoEntered] = useState(false)
  const [logoVisible, setLogoVisible] = useState(true)

  const [showEyebrow, setShowEyebrow] = useState(false)
  const [showNames, setShowNames] = useState(false)
  const [showDate, setShowDate] = useState(false)
  const [showGuest, setShowGuest] = useState(false)
  const [showButton, setShowButton] = useState(false)

  const [opening, setOpening] = useState(false)

  useEffect(() => {
    const timers = [
      setTimeout(() => setLogoEntered(true), 100),
// LOGO INTRO
setTimeout(() => setLogoVisible(false), 7000),

// CONTENT SEQUENCE
setTimeout(() => setShowEyebrow(true), 7700),
setTimeout(() => setShowNames(true), 8400),
setTimeout(() => setShowDate(true), 9200),
setTimeout(() => setShowGuest(true), 10000),
setTimeout(() => setShowButton(true), 10800),
    ]

    return () => timers.forEach(clearTimeout)
  }, [])

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
    fixed inset-0 w-full h-[100dvh] min-h-0
        overflow-hidden flex items-center justify-center
        transition-all duration-[1400ms]
        ${opening ? "scale-[1.12] blur-sm opacity-0" : ""}
      `}
    >

      {/* SKY BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/rizky-gresya/rg_bg01_sky.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      

{/* CLOUD 01 - MOVING RIGHT TO LEFT */}
<div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">

  <div className="cloud-track cloud-track-one">
    <img
      src="/rizky-gresya/cloud01.png"
      alt=""
      className="cloud-sprite cloud-sprite-one"
    />

    {/* Duplicate for seamless looping */}
    <img
      src="/rizky-gresya/cloud01.png"
      alt=""
      className="cloud-sprite cloud-sprite-one"
    />
  </div>

</div>

{/* CLOUD 02 - MOVING RIGHT TO LEFT */}
<div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">

  <div className="cloud-track cloud-track-two">
    <img
      src="/rizky-gresya/cloud02.png"
      alt=""
      className="cloud-sprite cloud-sprite-two"
    />

    {/* Duplicate for seamless looping */}
    <img
      src="/rizky-gresya/cloud02.png"
      alt=""
      className="cloud-sprite cloud-sprite-two"
    />
  </div>

</div>



      {/* SOFT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#443450]/10 via-[#443450]/5 to-[#49334F]/45" />

      {/* LOGO INTRO */}
      <div
        className={`
          absolute inset-0 z-20
          flex items-center justify-center
          transition-all duration-[1200ms] ease-in-out
          ${
            logoVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-75 pointer-events-none"
          }
        `}
      >
        <img
          src="/rizky-gresya/rizky-gresya-logo.gif"
          alt="Rizky & Gresya"
          className={`
            w-[300px] md:w-[430px]
            max-h-[60svh]
            object-contain
            transition-all duration-[1800ms] ease-out
            ${
              logoEntered
                ? "opacity-100 scale-100"
                : "opacity-0 scale-50"
            }
          `}
          style={{
            filter:
              "brightness(0) invert(1) drop-shadow(0 8px 25px rgba(55,30,60,0.25))",
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div
        className={`
          relative z-10
          flex flex-col items-center
          text-center w-full px-6 py-10
          transition-all duration-1000
          ${opening ? "scale-110 opacity-0" : ""}
        `}
      >

        {/* THE WEDDING OF */}
        <p
          className={`
            tracking-[0.4em]
            text-[11px] md:text-[14px]
            text-white
            mb-6
            drop-shadow-md
            transition-all duration-1000
            ${
              showEyebrow
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          THE WEDDING OF
        </p>

        {/* COUPLE NAMES */}
        
<h1
  style={{ fontFamily: "ClassiqueScript" }}
  className={`
    text-[68px] md:text-[115px]
    leading-[1.15]
    text-white
    drop-shadow-[0_5px_20px_rgba(50,25,50,0.4)]
    transition-all duration-[1500ms] ease-out
    ${
      showNames
        ? "opacity-100 translate-y-0 scale-100 rg-name-pulse"
        : "opacity-0 translate-y-12 scale-[0.92]"
    }
  `}
>
  Rizky
  <span className="mx-3 text-[38px] md:text-[55px] text-[#F3D9D8]">
    &
  </span>
  Gresya
</h1>


        {/* DECORATIVE DIVIDER */}
        <div
          className={`
            flex items-center gap-4 my-7
            transition-all duration-1000
            ${
              showDate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <span className="w-12 h-[1px] bg-white/80" />
          <span className="text-[#FFF0D9] text-lg">✦</span>
          <span className="w-12 h-[1px] bg-white/80" />
        </div>

        {/* DATE */}
        <div
          className={`
            transition-all duration-1000
            ${
              showDate
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <p className="tracking-[0.25em] text-[14px] md:text-[17px] text-white">
            12 DESEMBER 2026
          </p>

          <p className="tracking-[0.3em] text-[10px] text-white/90 mt-3">
            PEMBERKATAN
          </p>
        </div>

        {/* GUEST */}
        <div
          className={`
            mt-12
            transition-all duration-1000
            ${
              showGuest
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <p className="text-[10px] tracking-[0.3em] text-white mb-3">
            KEPADA YTH.
          </p>

          <h2
            style={{ fontFamily: "ZTotez" }}
            className="text-[24px] md:text-[30px] tracking-wider text-white drop-shadow-md"
          >
            {guest}
          </h2>
        </div>


{/* OPEN BUTTON */}
<button
  onClick={openInvitation}
  disabled={opening || !showButton}
  className={`
    rg-open-button
    mt-10 px-12 py-3
    border border-white/80
    rounded-full
    text-[11px] md:text-[12px]
    tracking-[0.3em]
    text-white
    bg-[#661321]/30
    backdrop-blur-md
    hover:bg-[#661321]/80
    transition-all duration-1000
    shadow-[0_10px_40px_rgba(0,0,0,0.25)]
    ${
      showButton
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-8"
    }
  `}
>
  <span className="relative z-10">
    BUKA UNDANGAN
  </span>
</button>


      </div>
    </section>
  )
}
