"use client"

import { useEffect, useState } from "react"
import { Pattern } from "@/components/Pattern"
import GiftEnvelope from "@/components/GiftEnvelope"

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

<main className="relative overflow-x-hidden text-neutral-800 font-serif">



{/* =====================================
BACKGROUND LAYER
===================================== */}

<div className="fixed inset-0 -z-10">

{/* SKY */}

<div className="absolute inset-0 bg-[#e9f3f8]"></div>


{/* CLOUD IMAGE */}

<div
className="absolute inset-0 opacity-40"
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
className="w-full opacity-90"
/>

</div>

</div>



{/* =====================================
HERO
===================================== */}

<section className="min-h-screen flex flex-col items-center justify-center text-center px-6 fade-up">



{/* COUPLE PHOTO FRAME */}

<div className="relative mb-12 w-[180px] md:w-[220px] mx-auto">

<img
src="/firoh-arofi/photo-couple.jpg"
className="absolute inset-0 w-full h-full object-cover rounded-full"
/>

<img
src="/firoh-arofi/frame-couple.png"
className="relative w-full"
/>

</div>



<p className="tracking-[0.35em] text-[12px] text-neutral-700 mb-6">
THE WEDDING OF
</p>



<h1
style={{fontFamily:"ClassiqueScript"}}
className="text-[58px] md:text-[100px] text-white tracking-[0.02em] drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
>

Firoh

<span className="mx-3 text-black/60 text-[28px]">
&
</span>

Arofi

</h1>



<p className="tracking-[0.35em] text-[13px] text-neutral-700 mt-6">
04 • 04 • 2026
</p>

</section>



{/* =====================================
AYAT
===================================== */}

<section className="py-28 px-6 max-w-3xl mx-auto text-center fade-up">

<p className="text-[15px] leading-[1.9] text-neutral-700">

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
className="mx-auto w-[240px]"
/>

<h3 className="text-[24px] mt-6 tracking-wide">
Nur Lailatul Maghfiroh
</h3>

<p className="text-neutral-600 mt-4 leading-relaxed text-[14px]">

Putri Ketiga dari pasangan  
Bapak Muchammad Haris  
&  
Ibu Isnaini (Almarhum)

</p>

</div>



{/* GROOM */}

<div className="text-center">

<img
src="/firoh-arofi/frame-groom.png"
className="mx-auto w-[240px]"
/>

<h3 className="text-[24px] mt-6 tracking-wide">
Ibnu Arofi
</h3>

<p className="text-neutral-600 mt-4 leading-relaxed text-[14px]">

Putra Kedua dari pasangan  
Bapak Abdul Wahid Musyadad  
&  
Ibu Sri Lestari

</p>

</div>



</div>

</section>



{/* =====================================
SAVE THE DATE
===================================== */}

<section className="py-32 px-6 text-center fade-up">

<h2 className="text-[32px] tracking-[0.08em] mb-12">
Save The Date
</h2>


<div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-12">

{[
{label:"HARI",value:time.days},
{label:"JAM",value:time.hours},
{label:"MENIT",value:time.minutes},
{label:"DETIK",value:time.seconds},
].map((item,i)=>(

<div
key={i}
className="bg-white/80 backdrop-blur-md border border-neutral-200 rounded-xl py-6 shadow-sm"
>

<p className="text-2xl font-semibold">
{item.value}
</p>

<p className="text-xs tracking-widest text-neutral-500 mt-2">
{item.label}
</p>

</div>

))}

</div>

</section>



{/* =====================================
WEDDING EVENT
===================================== */}

<section className="py-32 px-6 text-center max-w-xl mx-auto fade-up">

<h2 className="text-[32px] tracking-[0.08em] mb-16">
Wedding Event
</h2>



{/* AKAD */}

<div className="mb-16">

<h3 className="text-lg font-semibold mb-3">
Akad Nikah
</h3>

<p className="text-neutral-600">
Sabtu, 04 April 2026
</p>

<p className="text-neutral-600">
Pukul 08.00 WIB
</p>

</div>



{/* RESEPSI */}

<div>

<h3 className="text-lg font-semibold mb-3">
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

<a
href="https://maps.app.goo.gl/KyBmg8SrXz88uX1n9"
target="_blank"
className="inline-block border px-6 py-2 rounded-full text-sm mt-6 hover:bg-black hover:text-white transition"
>

Lihat Lokasi

</a>

</div>

</section>

{/* =====================================
GALLERY
===================================== */}

<section className="py-32 px-6 text-center fade-up">

<h2 className="text-[32px] tracking-[0.08em] mb-16">
Gallery
</h2>

<div className="flex justify-center">

<Pattern />

</div>

</section>



{/* =====================================
WEDDING GIFT
===================================== */}

<section className="py-32 px-6 text-center fade-up">

<h2 className="text-[32px] tracking-[0.08em] mb-10">
Wedding Gift
</h2>

<p className="text-neutral-600 mb-10 max-w-lg mx-auto">

Doa restu dari Anda merupakan hadiah terindah bagi kami.
Namun jika ingin memberikan tanda kasih,
kami menyediakan fitur hadiah berikut.

</p>

<div className="max-w-md mx-auto">

<GiftEnvelope />

</div>

</section>



{/* =====================================
FOOTER
===================================== */}

<section className="py-24 text-center fade-up">

<p className="text-neutral-500">
Dibuat oleh
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
