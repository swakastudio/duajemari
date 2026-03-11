"use client"

import { useEffect } from "react"

export default function InvitationPage(){

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

<main className="relative overflow-x-hidden bg-[#e9f3f8] text-neutral-800">



{/* =====================================
BACKGROUND (STATIC CLOUD + MOUNTAIN)
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

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180%] md:w-full">

<img
src="/firoh-arofi/bg-mountain.png"
className="w-full opacity-90"
/>

</div>


{/* GRADIENT */}

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white"></div>

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
className="text-[64px] md:text-[110px] leading-[0.9] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
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

<section className="py-32 px-6 max-w-3xl mx-auto text-center fade-up">

<p className="text-[28px] leading-relaxed mb-10">

</p>

<p className="text-neutral-700 leading-relaxed">

Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
untukmu pasangan-pasangan dari jenismu sendiri agar kamu
cenderung dan merasa tenteram kepadanya.

</p>

<p className="mt-6 text-sm text-neutral-500">
QS. Ar-Rum 30 : 21
</p>

</section>



{/* =====================================
INTRO TEXT
===================================== */}

<section className="py-28 px-6 text-center max-w-xl mx-auto fade-up">

<p className="text-lg">
Assalamu'alaikum Wr. Wb.
</p>

<p className="mt-6 leading-relaxed text-neutral-600">

Dengan memohon rahmat dan ridho Allah SWT,
kami bermaksud mengundang
Bapak/Ibu/Saudara/i
untuk menghadiri acara pernikahan
putra-putri kami.

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

<h3
style={{fontFamily:"ClassiqueScript"}}
className="text-[42px] mt-6"
>

Nur Lailatul Maghfiroh, S.Pd.

</h3>

<p className="text-neutral-600 mt-4 leading-relaxed">

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

<h3
style={{fontFamily:"ClassiqueScript"}}
className="text-[42px] mt-6"
>

Ibnu Arofi, S.Pd., Gr., SE

</h3>

<p className="text-neutral-600 mt-4 leading-relaxed">

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

<h2
style={{fontFamily:"ClassiqueScript"}}
className="text-[52px] mb-12"
>
Save The Date
</h2>

<div className="backdrop-blur-md border border-white/40 rounded-xl px-10 py-12 max-w-xl mx-auto">

<p className="text-lg mb-6">
04 April 2026
</p>

<p className="text-neutral-600">
Dan kami bersyukur, dipertemukan Allah di waktu terbaik.  
Kini kami menanti hari istimewa kami.
</p>

</div>

</section>



{/* =====================================
EVENT SECTION
===================================== */}

<section className="py-32 px-6 text-center max-w-xl mx-auto fade-up">

<h2
style={{fontFamily:"ClassiqueScript"}}
className="text-[48px] mb-16"
>
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