"use client"

import { useEffect, useState } from "react"

export default function Page() {

const [visible,setVisible] = useState(false)

useEffect(()=>{
setTimeout(()=>{
setVisible(true)
},200)
},[])

return(

<main className="relative min-h-screen w-full overflow-x-hidden bg-[#e9f3f8]">


{/* ================= BACKGROUND ================= */}

<div className="fixed inset-0 -z-10 overflow-hidden">


{/* CLOUDS */}

<div
className="absolute inset-0 animate-clouds"
style={{
backgroundImage:"url('/firoh-arofi/bg-clouds.png')",
backgroundRepeat:"repeat-x",
backgroundSize:"auto 100%",
backgroundPosition:"0 0"
}}
></div>


{/* MOUNTAIN */}

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[170%] md:w-full">

<img
src="/firoh-arofi/bg-mountain.png"
className="w-full"
/>

</div>


{/* GRADIENT */}

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white"></div>

</div>



{/* ================= HERO SECTION ================= */}

<section
className={`
min-h-screen
flex
flex-col
items-center
justify-center
text-center
px-6
transition-all
duration-[1400ms]
${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
`}
>


<p className="tracking-[0.35em] text-[13px] text-black/70 mb-6">
THE WEDDING OF
</p>


<h1
style={{ fontFamily:"ClassiqueScript" }}
className="
text-[64px]
md:text-[100px]
leading-[0.9]
text-white
drop-shadow-[0_6px_20px_rgba(0,0,0,0.35)]
"
>

Firoh

<span className="text-black/60 mx-2 text-[26px]">
&
</span>

Arofi

</h1>


<p className="tracking-[0.35em] text-[14px] text-black/70 mt-6">
04 • 04 • 2026
</p>


</section>



{/* ================= AYAT ================= */}

<section className="py-32 px-6 text-center max-w-3xl mx-auto">

<p className="text-[28px] leading-relaxed mb-10">

وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ
أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا
وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً

</p>


<p className="text-neutral-700 leading-relaxed">

Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
untukmu pasangan-pasangan dari jenismu sendiri agar kamu
cenderung dan merasa tenteram kepadanya, dan Dia menjadikan
di antaramu rasa kasih dan sayang.

</p>


<p className="mt-6 text-sm text-neutral-500">
QS. Ar-Rum 30 : 21
</p>

</section>



{/* ================= INTRO ================= */}

<section className="py-28 px-6 text-center max-w-xl mx-auto">

<p className="text-neutral-800 text-lg">
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



{/* ================= BRIDE & GROOM ================= */}

<section className="py-32 px-6 max-w-5xl mx-auto">

<div className="grid md:grid-cols-2 gap-20 items-center">


{/* BRIDE */}

<div className="text-center">

<img
src="/firoh-arofi/frame-bride.png"
className="mx-auto w-[260px]"
/>


<h3
style={{ fontFamily:"ClassiqueScript" }}
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
target="_blank"
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
style={{ fontFamily:"ClassiqueScript" }}
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
target="_blank"
className="block mt-4 text-neutral-500 hover:text-black transition"
>

@ibnu.arofi

</a>

</div>


</div>

</section>



{/* ================= FOOTER ================= */}

<section className="py-24 text-center">

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
