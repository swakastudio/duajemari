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

const days = Math.floor(distance / (1000*60*60*24))
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60))
const minutes = Math.floor((distance%(1000*60*60))/(1000*60))
const seconds = Math.floor((distance%(1000*60))/1000)

setTime({days,hours,minutes,seconds})

},1000)

return ()=>clearInterval(timer)

},[])



/* ===============================
FADE UP REVEAL
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

<main className="relative overflow-x-hidden text-neutral-800">



{/* =====================================
BACKGROUND
===================================== */}

<div className="fixed inset-0 -z-10 overflow-hidden">

{/* CLOUDS */}

<div
className="absolute inset-0"
style={{
backgroundImage:"url('/firoh-arofi/bg-clouds.png')",
backgroundSize:"cover",
backgroundPosition:"center"
}}
></div>


{/* MOUNTAIN */}

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130%] md:w-full">

<img
src="/firoh-arofi/bg-mountain.png"
className="w-full opacity-95"
/>

</div>


{/* LIGHT */}

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_60%)]"></div>

</div>



{/* =====================================
HERO
===================================== */}

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



{/* =====================================
AYAT QURAN
===================================== */}

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



{/* =====================================
BRIDE & GROOM
===================================== */}

<section className="py-32 px-6 max-w-5xl mx-auto fade-up">

<div className="grid md:grid-cols-2 gap-20 items-center">


{/* BRIDE */}

<div className="text-center">

<img
src="/firoh-arofi/frame-bride.png"
className="mx-auto w-[260px]"
/>

<h3 className="text-[26px] font-semibold mt-6 tracking-wide">
Nur Lailatul Maghfiroh, S.Pd.
</h3>

<p className="text-neutral-600 mt-4 leading-relaxed font-serif">

Putri Ketiga dari pasangan  
Bapak Muchammad Haris  
&  
Ibu Isnaini (Almarhum)

</p>

<a
href="https://instagram.com/_maghfiroh"
className="block mt-4 text-neutral-500 hover:text-black transition"
>

@_maghfiroh

</a>

</div>



{/* GROOM */}

<div className="text-center">

<img
src="/firoh-arofi/frame-groom.png"
className="mx-auto w-[260px]"
/>

<h3 className="text-[26px] font-semibold mt-6 tracking-wide">
Ibnu Arofi, S.Pd., Gr., SE
</h3>

<p className="text-neutral-600 mt-4 leading-relaxed font-serif">

Putra Kedua dari pasangan  
Bapak Abdul Wahid Musyadad  
&  
Ibu Sri Lestari

</p>

<a
href="https://instagram.com/ibnu.arofi"
className="block mt-4 text-neutral-500 hover:text-black transition"
>

@ibnu.arofi

</a>

</div>

</div>

</section>



{/* =====================================
SAVE THE DATE
===================================== */}

<section className="py-32 px-6 text-center fade-up">

<h2 className="text-[40px] font-semibold mb-16 tracking-wide">
Save The Date
</h2>

<div className="backdrop-blur-md border border-white/40 rounded-xl px-10 py-12 max-w-xl mx-auto shadow-lg">

<div className="grid grid-cols-4 gap-6 text-center">

<div>
<p className="text-3xl font-semibold">{time.days}</p>
<p className="text-xs tracking-widest text-neutral-500">HARI</p>
</div>

<div>
<p className="text-3xl font-semibold">{time.hours}</p>
<p className="text-xs tracking-widest text-neutral-500">JAM</p>
</div>

<div>
<p className="text-3xl font-semibold">{time.minutes}</p>
<p className="text-xs tracking-widest text-neutral-500">MENIT</p>
</div>

<div>
<p className="text-3xl font-semibold">{time.seconds}</p>
<p className="text-xs tracking-widest text-neutral-500">DETIK</p>
</div>

</div>

<p className="text-neutral-600 mt-8">

Dan kami bersyukur, dipertemukan Allah di waktu terbaik.  
Kini kami menanti hari istimewa kami.

</p>

</div>

</section>



{/* =====================================
WEATHER
===================================== */}

<section className="py-24 text-center fade-up">

<p className="text-neutral-600 max-w-xl mx-auto leading-relaxed">

Untuk memudahkan perjalanan Anda menuju acara kami,
berikut kondisi cuaca terkini di lokasi pernikahan.

</p>

</section>



{/* =====================================
EVENT
===================================== */}

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



{/* =====================================
FOOTER
===================================== */}

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