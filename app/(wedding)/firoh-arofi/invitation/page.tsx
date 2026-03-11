"use client"

import { useEffect, useState } from "react"

export default function InvitationPage(){

/* ===============================
COUNTDOWN
=============================== */

const weddingDate = new Date("2026-04-04T08:00:00")

const [timeLeft,setTimeLeft] = useState({
days:0,
hours:0,
minutes:0,
seconds:0
})

useEffect(()=>{

const interval = setInterval(()=>{

const now = new Date().getTime()
const distance = weddingDate.getTime() - now

if(distance < 0) return

setTimeLeft({
days:Math.floor(distance / (1000*60*60*24)),
hours:Math.floor((distance%(1000*60*60*24))/(1000*60*60)),
minutes:Math.floor((distance%(1000*60*60))/(1000*60)),
seconds:Math.floor((distance%(1000*60))/1000)
})

},1000)

return ()=>clearInterval(interval)

},[])



/* ===============================
SCROLL REVEAL
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
{threshold:0.15}
)

elements.forEach((el)=>observer.observe(el))

return ()=>observer.disconnect()

},[])



return(

<main className="relative overflow-x-hidden text-neutral-800 bg-[#e9f3f8]">



{/* ===============================
BACKGROUND
=============================== */}

<div className="fixed inset-0 -z-10 overflow-hidden">

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

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[130%] md:w-full">

<img
src="/firoh-arofi/bg-mountain.png"
className="w-full opacity-90"
/>

</div>

{/* LIGHT */}

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_60%)]"></div>

{/* VIGNETTE */}

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.15))]"></div>

</div>



{/* ===============================
HERO
=============================== */}

<section className="min-h-screen flex flex-col items-center justify-center text-center px-6 fade-up">

<p className="tracking-[0.45em] text-[12px] text-black/70 mb-6">
THE WEDDING OF
</p>

<h1
style={{fontFamily:"ClassiqueScript"}}
className="text-[70px] md:text-[120px] leading-[0.9] text-white drop-shadow-[0_12px_40px_rgba(0,0,0,0.45)]"
>

Firoh

<span className="mx-4 text-black/70 text-[26px]">
&
</span>

Arofi

</h1>

<p className="tracking-[0.38em] text-[14px] text-black/70 mt-6">
04 • 04 • 2026
</p>

</section>



{/* ===============================
AYAT / QUOTE
=============================== */}

<section className="py-32 px-6 max-w-3xl mx-auto text-center fade-up">

<p
style={{fontFamily:"ClassiqueScript"}}
className="text-[40px] md:text-[48px] mb-10 text-neutral-800"
>

Love is not about finding the perfect person,
but learning to see an imperfect person perfectly.

</p>

<p className="text-neutral-600 font-serif leading-relaxed">

Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
pasangan hidup agar manusia menemukan ketenangan,
cinta, dan kasih sayang di dalamnya.

</p>

<p className="mt-6 text-sm text-neutral-500 tracking-wide">
QS. Ar-Rum : 21
</p>

</section>



{/* ===============================
INTRO
=============================== */}

<section className="py-24 px-6 max-w-xl mx-auto text-center fade-up">

<p className="text-lg font-medium">
Assalamu'alaikum Wr. Wb.
</p>

<p className="mt-6 leading-relaxed text-neutral-600 font-serif">

Dengan memohon rahmat dan ridho Allah SWT,
kami bermaksud mengundang
Bapak/Ibu/Saudara/i
untuk menghadiri acara pernikahan
putra-putri kami.

</p>

</section>



{/* ===============================
BRIDE & GROOM
=============================== */}

<section className="py-32 px-6 max-w-5xl mx-auto fade-up">

<div className="grid md:grid-cols-2 gap-20 items-center">

{/* BRIDE */}

<div className="text-center">

<img
src="/firoh-arofi/frame-bride.png"
className="mx-auto w-[240px]"
/>

<h3
style={{fontFamily:"ClassiqueScript"}}
className="text-[44px] mt-6"
>

Nur Lailatul Maghfiroh, S.Pd.

</h3>

<p className="mt-4 text-neutral-600 leading-relaxed font-serif">

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

<h3
style={{fontFamily:"ClassiqueScript"}}
className="text-[44px] mt-6"
>

Ibnu Arofi, S.Pd., Gr., SE

</h3>

<p className="mt-4 text-neutral-600 leading-relaxed font-serif">

Putra Kedua dari pasangan  
Bapak Abdul Wahid Musyadad  
&  
Ibu Sri Lestari

</p>

</div>

</div>

</section>



{/* ===============================
SAVE THE DATE
=============================== */}

<section className="py-32 text-center fade-up">

<h2
style={{fontFamily:"ClassiqueScript"}}
className="text-[52px] mb-12"
>
Save The Date
</h2>


<div className="backdrop-blur-md border border-white/40 rounded-xl px-10 py-12 max-w-xl mx-auto">

<div className="grid grid-cols-4 gap-6 text-center">

<div>
<p className="text-3xl font-semibold">{timeLeft.days}</p>
<p className="text-xs tracking-widest">DAYS</p>
</div>

<div>
<p className="text-3xl font-semibold">{timeLeft.hours}</p>
<p className="text-xs tracking-widest">HOURS</p>
</div>

<div>
<p className="text-3xl font-semibold">{timeLeft.minutes}</p>
<p className="text-xs tracking-widest">MIN</p>
</div>

<div>
<p className="text-3xl font-semibold">{timeLeft.seconds}</p>
<p className="text-xs tracking-widest">SEC</p>
</div>

</div>

<p className="mt-8 text-neutral-600 font-serif">

Dan kami bersyukur, dipertemukan Allah di waktu terbaik.  
Kini kami menanti hari istimewa kami.

</p>

</div>

</section>



{/* ===============================
EVENT
=============================== */}

<section className="py-32 text-center max-w-xl mx-auto fade-up">

<h2
style={{fontFamily:"ClassiqueScript"}}
className="text-[48px] mb-16"
>
Wedding Event
</h2>


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

</div>



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

</div>

</section>



{/* ===============================
FOOTER
=============================== */}

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