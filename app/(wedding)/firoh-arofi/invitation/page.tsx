"use client"

import { useEffect, useState } from "react"
import { Pattern } from "../components/Pattern"
import WeddingEnvelope from "../components/WeddingEnvelope"
import GuestWish from "../components/GuestWish"

export default function InvitationPage() {
  /* ===============================
     COUNTDOWN TARGET
  =============================== */
  const targetDate = new Date("2026-04-04T08:00:00")

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  /* ===============================
     COUNTDOWN EFFECT
  =============================== */
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance <= 0) {
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTime({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  /* ===============================
     FADE UP INTERSECTION OBSERVER
  =============================== */
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="relative overflow-x-hidden text-neutral-800">
      {/* =====================================
          FIXED BACKGROUND
      ===================================== */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/20"></div>
      <div className="fixed inset-0 -z-0 overflow-hidden">
        {/* SKY BASE */}
        <div className="absolute inset-0 bg-[#e9f3f8]" />

        {/* CLOUD TEXTURE */}
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: "url('/firoh-arofi/bg-clouds.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* SOFT LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/0" />

        {/* MOUNTAIN */}
        <div className="absolute bottom-0 left-1/2 w-[130%] -translate-x-1/2 md:w-full">
          <img
            src="/firoh-arofi/bg-mountain.png"
            alt="Mountain background"
            className="w-full opacity-95"
          />
        </div>

        {/* DEPTH OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20" />
      </div>

      {/* =====================================
          PAGE OVERLAY LAYER
      ===================================== */}
      <div className="relative z-10">
        {/* =====================================
            HERO
        ===================================== */}
        <section className="fade-up flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
          {/* PHOTO + FRAME SPACE */}
          <div className="relative mb-10 flex h-[190px] w-[190px] items-center justify-center md:h-[230px] md:w-[230px]">
            <img
              src="https://placehold.co/400x400"
              alt="Couple"
              className="absolute h-[145px] w-[145px] rounded-full object-cover md:h-[175px] md:w-[175px]"
            />

            <img
              src="https://placehold.co/400x400"
              alt="Couple frame"
              className="relative z-10 w-full"
            />
          </div>

          <p className="tracking-[0.35em] text-[13px] text-black/70 mb-6">
THE WEDDING OF
</p>

<h1
style={{fontFamily:"ClassiqueScript"}}
className="
text-[76px]
md:text-[120px]
text-black/70
drop-shadow-lg
-translate-x-4
"
>

Firoh

<span className="mx-3 text-black/70 text-[40px]">
&
</span>

Arofi

</h1>

<p
className="
tracking-[0.35em]
text-[14px]
text-black/70
mt-6
mb-10
animate-datePulse
drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]
"
>
04 • 04 • 2026
</p>
        </section>

        {/* =====================================
            AYAT
        ===================================== */}
        <section className="fade-up px-6 py-28">
          <div className="mx-auto max-w-3xl rounded-[32px] border border-white/40 bg-white/45 px-8 py-12 text-center shadow-[0_10px_50px_rgba(0,0,0,0.05)] backdrop-blur-md">
            <p className="text-[12px] leading-[2.05] tracking-[0.01em] text-neutral-700 md:text-[16px]">
              Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
              untukmu pasangan-pasangan dari jenismu sendiri agar kamu
              cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di
              antara kamu rasa kasih dan sayang.
            </p>

            <p className="mt-6 text-[14px] tracking-[0.18em] text-neutral-500">
              QS. Ar-Rum 30 : 21
            </p>
          </div>
        </section>

     {/* =====================================
BRIDE & GROOM
===================================== */}
<section className="fade-up px-6 py-32">

<div className="mx-auto max-w-5xl">

<div className="mb-14 text-center">

<p className="mb-3 text-[11px] tracking-[0.38em] text-black/70">
BRIDE & GROOM
</p>

<h2 className="font-ltsip text-[34px] md:text-[40px] text-[#3f4d58]">
Mempelai
</h2>

  <p className="text-[12px] leading-[2.05] tracking-[0.01em] text-black/70 md:text-[16px]">
    Tanpa Mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i
    serta kerabat sekalian untuk menghadiri acara pernikahan kami :
    </p>

<div className="relative w-28 h-[2px] mx-auto mt-6 mb-10 overflow-hidden">

  {/* base gold line */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3f4d58] to-transparent"></div>

  {/* shine animation */}
  <div className="absolute inset-0 animate-dividerShimmer bg-gradient-to-r from-transparent via-white/90 to-transparent"></div>

</div>

  </div>


<div className="grid items-start gap-16 md:grid-cols-2 md:gap-20">

{/* BRIDE */}

<div className="rounded-[30px] border border-white/40 bg-white/50 px-8 py-10 text-center shadow-[0_10px_50px_rgba(0,0,0,0.05)] backdrop-blur-md">

<img
src="https://placehold.co/400x400"
alt="Bride frame"
className="mx-auto w-[230px] md:w-[250px]"
/>

<h3 className="font-ltsip text-[34px] md:text-[40px] text-[#3f4d58]">
Nur Lailatul Maghfiroh, S.Pd.
</h3>

<div className="relative w-28 h-[2px] mx-auto mt-6 mb-10 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3f4d58] to-transparent opacity-90"></div>

<div className="absolute inset-0 animate-dividerShimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-70"></div>

</div>

<p className="mt-4 text-[14px] leading-[1.95] tracking-[0.01em] text-neutral-600">
Putri Ketiga dari Bapak Muchammad Haris
<br/>
& Ibu Isnaini (Almarhum)
</p>

<a
href="https://instagram.com/_maghfiroh"
target="_blank"
rel="noreferrer"
className="
mt-6
inline-flex
items-center
justify-center
w-10
h-10
rounded-full
border border-neutral-300
bg-white/70
backdrop-blur
shadow-sm
transition
hover:scale-110
hover:shadow-md
"
>

<img
src="public/firoh-arofi/logo-instagram.svg"
alt="Instagram"
className="w-5 h-5"
/>

</a>

</div>



{/* GROOM */}

<div className="rounded-[30px] border border-white/40 bg-white/50 px-8 py-10 text-center shadow-[0_10px_50px_rgba(0,0,0,0.05)] backdrop-blur-md">

<img
src="https://placehold.co/400x400"
alt="Groom frame"
className="mx-auto w-[230px] md:w-[250px]"
/>

<h3 className="font-ltsip text-[34px] md:text-[40px] text-[#3f4d58]">
Ibnu Arofi, S.Pd., Gr., SE
</h3>

<div className="relative w-28 h-[2px] mx-auto mt-6 mb-10 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3f4d58] to-transparent opacity-90"></div>

<div className="absolute inset-0 animate-dividerShimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-70"></div>

</div>

<p className="mt-4 text-[14px] leading-[1.95] tracking-[0.01em] text-neutral-600">
Putra Kedua dari Bapak Abdul Wahid Musyadad
<br/>
& Ibu Sri Lestari
</p>

<a
href="https://instagram.com/ibnu.arofi"
target="_blank"
rel="noreferrer"
className="
mt-6
inline-flex
items-center
justify-center
w-10
h-10
rounded-full
border border-neutral-300
bg-white/70
backdrop-blur
shadow-sm
transition
hover:scale-110
hover:shadow-md
"
>

<img
src="public/firoh-arofi/logo-instagram.svg"
alt="Instagram"
className="w-5 h-5"
/>

</a>

</div>

</div>

</div>

</section>

        {/* =====================================
            SAVE THE DATE
        ===================================== */}
        <section className="fade-up px-6 py-32 text-center">
          <div className="mx-auto max-w-4xl">
            <p className="mb-3 text-[11px] tracking-[0.38em] text-black/55">
              SAVE THE DATE
            </p>

            <h2 className="font-ltsip text-[32px] md:text-[40px]">
Counting The Days
</h2>
        <div className="relative w-28 h-[2px] mx-auto mt-6 mb-10 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/70 to-transparent"></div>

<div className="absolute inset-0 animate-dividerShimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>

</div>

            <p className="mx-auto mb-12 max-w-2xl text-[14px] leading-[1.9] tracking-[0.01em] text-neutral-600 md:text-[15px]">
              Dan kami bersyukur, dipertemukan Allah di waktu terbaik. Kini
              kami menanti hari istimewa kami, hari di mana dua perjalanan akan
              bertemu dalam satu langkah yang sama.
            </p>

            <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "HARI", value: time.days },
                { label: "JAM", value: time.hours },
                { label: "MENIT", value: time.minutes },
                { label: "DETIK", value: time.seconds },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-[24px] border border-white/45 bg-white/70 px-4 py-7 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-md"
                >
                  <p className="text-[28px] font-semibold text-neutral-800">
                    {item.value}
                  </p>

                  <p className="mt-2 text-[11px] tracking-[0.28em] text-neutral-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-md rounded-[22px] border border-white/45 bg-white/65 px-6 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-md">
              <p className="text-[12px] tracking-[0.16em] text-neutral-500">
                PERKIRAAN CUACA
              </p>
              <p className="mt-2 text-[16px] tracking-[0.03em] text-neutral-700">
                ☁️ Waru, Sidoarjo • 26°C
              </p>
            </div>
          </div>
        </section>

       {/* =====================================
WEDDING EVENT
===================================== */}
<section className="fade-up px-6 py-36 bg-[#7AA6AF]">

<div className="mx-auto max-w-5xl">


{/* TITLE */}

<div className="text-center mb-20">

<p className="text-[11px] tracking-[0.45em] text-neutral-500 mb-4">
WEDDING EVENT
</p>

<h2 className="font-ltsip text-[32px] md:text-[40px]">
Hari Bahagia
</h2>
<div className="relative w-28 h-[2px] mx-auto mt-6 mb-10 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/70 to-transparent"></div>

<div className="absolute inset-0 animate-dividerShimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>

</div>

</div>


{/* EVENT GRID */}

<div className="grid md:grid-cols-2 gap-10">



{/* ===============================
AKAD NIKAH
=============================== */}

<div className="
group
rounded-[34px]
border border-white/50
bg-white/60
backdrop-blur-xl
px-10 py-12
text-center
shadow-[0_15px_60px_rgba(0,0,0,0.06)]
transition
hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]
">

<p className="text-[11px] tracking-[0.38em] text-neutral-500 mb-4">
AKAD NIKAH
</p>

<h3 className="text-[26px] tracking-[0.04em] text-neutral-800 mb-3">
Sabtu
</h3>

<p className="text-[15px] text-neutral-600 leading-[1.9]">
04 April 2026
</p>

<p className="text-[15px] text-neutral-600">
Pukul 08.00 WIB
</p>

<div className="mt-8 w-12 h-[1px] bg-neutral-200 mx-auto"></div>

</div>



{/* ===============================
RESEPSI
=============================== */}

<div className="
group
rounded-[34px]
border border-white/50
bg-white/60
backdrop-blur-xl
px-10 py-12
text-center
shadow-[0_15px_60px_rgba(0,0,0,0.06)]
transition
hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]
">

<p className="text-[11px] tracking-[0.38em] text-neutral-500 mb-4">
RESEPSI
</p>

<h3 className="text-[26px] tracking-[0.04em] text-neutral-800 mb-3">
Sabtu
</h3>

<p className="text-[15px] text-neutral-600 leading-[1.9]">
04 April 2026
</p>

<p className="text-[15px] text-neutral-600">
08.00 WIB – selesai
</p>


{/* ADDRESS */}

<div className="mt-6 text-[14px] leading-[1.8] text-neutral-600">

Jl. Kepuhkiriman Dalam Masjid  
<br/>
Gang IV RT 04 RW 01  
<br/>
Waru – Sidoarjo

</div>



{/* MAP BUTTON */}

<a
href="https://maps.app.goo.gl/KyBmg8SrXz88uX1n9"
target="_blank"
rel="noreferrer"
className="
inline-block
mt-8
px-7 py-2.5
rounded-full
border border-neutral-800
text-[11px]
tracking-[0.28em]
text-neutral-800
transition-all
duration-500
hover:bg-neutral-800
hover:text-white
hover:shadow-lg
"
>

LIHAT LOKASI

</a>

</div>


</div>


</div>

</section>
        {/* =====================================
            GALLERY
        ===================================== */}
        <section className="fade-up px-6 py-32">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-[11px] tracking-[0.38em] text-black/55">
              GALLERY
            </p>

            <h2 className="font-ltsip text-[32px] md:text-[40px]">
Momen Kami
</h2>
            <div className="relative w-28 h-[2px] mx-auto mt-6 mb-10 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/70 to-transparent"></div>

<div className="absolute inset-0 animate-dividerShimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>

</div>

            <div className="flex justify-center">
              <Pattern />
            </div>
          </div>
        </section>

        {/* =====================================
            WEDDING GIFT
        ===================================== */}
        <section className="fade-up px-6 py-32">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 text-[11px] tracking-[0.38em] text-black/55">
              WEDDING GIFT
            </p>

            <h2 className="font-ltsip text-[32px] md:text-[40px]">
Tanda Kasih
</h2>
            <div className="relative w-28 h-[2px] mx-auto mt-6 mb-10 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/70 to-transparent"></div>

<div className="absolute inset-0 animate-dividerShimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>

</div>

            <p className="mx-auto mb-12 max-w-2xl text-[14px] leading-[1.95] text-neutral-600">
              Doa restu Anda merupakan hadiah terindah bagi kami. Namun apabila
              ingin memberikan tanda kasih, kami dengan senang hati menyediakan
              pilihan hadiah berikut ini.
            </p>
            <WeddingEnvelope />
          </div>
        </section>

        {/* =====================================
            GUEST WISH
        ===================================== */}
        <section className="fade-up px-6 py-32">
          <div className="mx-auto max-w-5xl">
            <GuestWish />
          </div>
        </section>

        {/* =====================================
            FOOTER
        ===================================== */}
        <section className="fade-up px-6 py-24 text-center">
          <p className="text-[12px] tracking-[0.18em] text-neutral-500">
          DIBUAT OLEH
          </p>

          <a
            href="https://duajemari.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-[16px] font-medium tracking-[0.05em] text-neutral-800 transition hover:underline"
          >
            duajemari.vercel.app
          </a>
        </section>
      </div>
    </main>
  )
}
