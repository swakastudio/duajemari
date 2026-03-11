"use client"

import { useEffect, useState } from "react"

export default function InvitationPage(){

/* ===============================
COUNTDOWN
=============================== */

const targetDate = new Date("2026-04-04T08:00:00")

const [time,setTime] = useState({
days:0,
hours:0,
minutes:0,
seconds:0
})

useEffect(()=>{

const timer = setInterval(()=>{

const now = new Date().getTime()
const distance = targetDate.getTime() - now

const days = Math.floor(distance/(1000*60*60*24))
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60))
const minutes = Math.floor((distance%(1000*60*60))/(1000*60))
const seconds = Math.floor((distance%(1000*60))/1000)

setTime({days,hours,minutes,seconds})

},1000)

return ()=>clearInterval(timer)

},[])



/* ===============================
FADE UP ANIMATION
=============================== */

useEffect(()=>{

const elements = document.querySelectorAll(".fade-up")

const observer = new IntersectionObserver(
(entries)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
entry.target.classList.add("visible")
}
})
},
{threshold:0.2}
)

elements.forEach((el)=>observer.observe(el))

return ()=>observer.disconnect()

},[])



return(

<main className="relative min-h-screen overflow-x-hidden text-neutral-800">



{/* =========================================
BACKGROUND SKY + MOUNTAIN
========================================= */}

<div className="fixed inset-0 -z-0 overflow-hidden">

{/* SKY */}

<div
className="absolute inset-0"
style={{
backgroundImage:"url('/firoh-arofi/bg-clouds.png')",
backgroundSize:"cover",
backgroundPosition:"center"
}}
></div>


{/* MOUNTAIN */}

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] md:w-full">

<img
src="/firoh-arofi/bg-mountain.png"
className="w-full opacity-95"
/>

</div>


{/* LIGHT */}

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_60%)]"></div>

</div>



{/* =========================================
HERO
========================================= */}

<section className="min-h-screen flex flex-col items-center justify-center text-center px-6 fade-up">

<p className="tracking-[0.35em] text-[13px] text-black/70 mb-6">
THE WEDDING OF
</p>

<h1
style={{fontFamily:"ClassiqueScript"}}
className="text-[70px] md:text-[120px] leading-[0.9] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
>

Firoh

<span className="mx-3 text-black/60 text-[26px]">
&
</span>

Arofi

</h1>

<p className="tracking-[0.35em] text-[14px] text-black/70 mt-6">
04 • 04 • 2026
</p>

</section>



{/* =========================================
AYAT
========================================= */}

<section className="py-28 px-6 max-w-3xl mx-auto text-center fade-up">

<p className="text-neutral-700 leading-relaxed text-lg">

Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
untukmu pasangan-pasangan dari jenismu sendiri agar kamu
cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
di antara kamu rasa kasih dan sayang.

</p>

<p className="mt-6 text-sm text-neutral-500">
QS. Ar-Rum 30 : 21
</p>

</section>



{/* =========================================
SAVE THE DATE
========================================= */}

<section className="py-32 px-6 text-center fade-up">

<h2 className="text-[40px] font-semibold mb-16 tracking-wide">
Save The Date
</h2>



{/* COUNTDOWN CARD */}

<div className="backdrop-blur-md border border-white/40 rounded-2xl px-8 py-10 max-w-xl mx-auto shadow-xl">



{/* COUNTDOWN BOX */}

<div className="grid grid-cols-4 gap-4 mb-8">

{/* HARI */}

<div className="border border-neutral-200 rounded-lg py-4 bg-white/70">

<p className="text-3xl font-semibold">
{time.days}
</p>

<p className="text-xs tracking-widest text-neutral-500 mt-1">
HARI
</p>

</div>



{/* JAM */}

<div className="border border-neutral-200 rounded-lg py-4 bg-white/70">

<p className="text-3xl font-semibold">
{time.hours}
</p>

<p className="text-xs tracking-widest text-neutral-500 mt-1">
JAM
</p>

</div>



{/* MENIT */}

<div className="border border-neutral-200 rounded-lg py-4 bg-white/70">

<p className="text-3xl font-semibold">
{time.minutes}
</p>

<p className="text-xs tracking-widest text-neutral-500 mt-1">
MENIT
</p>

</div>



{/* DETIK */}

<div className="border border-neutral-200 rounded-lg py-4 bg-white/70">

<p className="text-3xl font-semibold">
{time.seconds}
</p>

<p className="text-xs tracking-widest text-neutral-500 mt-1">
DETIK
</p>

</div>

</div>



<p className="text-neutral-600 leading-relaxed">

Dan kami bersyukur, dipertemukan Allah di waktu terbaik.  
Kini kami menanti hari istimewa kami.

</p>

</div>



{/* =========================================
WEATHER CARD
========================================= */}

<div className="mt-10 max-w-xl mx-auto backdrop-blur-md border border-white/40 rounded-2xl px-8 py-8 shadow-lg">

<p className="text-neutral-600 leading-relaxed mb-6">

Untuk memudahkan perjalanan Anda menuju acara kami,
berikut kondisi cuaca terkini di lokasi pernikahan.

</p>

<div className="flex justify-center items-center gap-4">

<div className="text-4xl">
☁️
</div>

<div>

<p className="text-lg font-semibold">
Waru, Sidoarjo
</p>

<p className="text-neutral-500 text-sm">
Sebagian berawan • 26°C
</p>

</div>

</div>

</div>



</section>



{/* =========================================
WEDDING EVENT
========================================= */}

<section className="py-32 px-6 text-center max-w-xl mx-auto fade-up">

<h2 className="text-[38px] font-semibold mb-16 tracking-wide">
Wedding Event
</h2>



{/* AKAD */}

<div className="mb-16">

<h3 className="text-xl font-semibold mb-3">
Akad Nikah
</h3>

<p className="text-neutral-600">
Sabtu, 04 April 2026
</p>

<p className="text-neutral-600 mb-6">
Pukul 08.00 WIB
</p>

<button className="border px-6 py-2 rounded-full text-sm">
Lihat Lokasi
</button>

</div>



{/* RESEPSI */}

<div>

<h3 className="text-xl font-semibold mb-3">
Resepsi
</h3>

<p className="text-neutral-600">
Sabtu, 04 April 2026
</p>

<p className="text-neutral-600">
08.00 - selesai
</p>

<p className="text-neutral-600 mt-3">
Jl. Kepuhkiriman Dalam Masjid  
Gang IV RT 04 RW 01  
Waru - Sidoarjo
</p>

<button className="border px-6 py-2 rounded-full text-sm mt-6">
Lihat Lokasi
</button>

</div>

</section>



{/* =========================================
FOOTER
========================================= */}

<section className="py-24 text-center fade-up">

<p className="text-neutral-500">
Website undangan dibuat oleh
</p>

<a
href="https://duajemari.vercel.app"
className="block mt-2 font-semibold hover:underline"
>

duajemari.vercel.app

</a>

</section>



</main>

)

}