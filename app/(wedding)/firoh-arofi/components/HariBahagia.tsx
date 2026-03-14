"use client"

export default function HariBahagia(){

return(

<section className="fade-up relative px-6 py-20 overflow-hidden">

<div className="mx-auto max-w-4xl text-center">


{/* TITLE */}

<h2 className="font-ltsip text-[24px] tracking-[0.06em] text-[#3f4d58]">
HARI BAHAGIA
</h2>


{/* DIVIDER */}

<div className="relative w-36 h-[2px] mx-auto mt-6 mb-14 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3f4d58] to-transparent opacity-70"></div>

<div className="absolute inset-0 animate-dividerShine bg-gradient-to-r from-transparent via-white to-transparent opacity-90"></div>

</div>


{/* GRID */}

<div className="grid md:grid-cols-2 gap-14 justify-items-center">


{/* ================= AKAD ================= */}

<div className="relative w-[360px] h-[392px]">

{/* FRAME */}

<img
src="/firoh-arofi/frame-hari-bahagia.png"
alt="frame"
className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
/>


{/* GLASS CARD */}

<div className="
absolute
top-[18px]
bottom-[18px]
left-[18px]
right-[18px]
bg-white/15
backdrop-blur-xl
rounded-[26px]
border border-white/3
shadow-[0_20px_70px_rgba(0,0,0,0.08)]
flex
flex-col
items-center
justify-center
text-center
px-6
">


<p className="text-[10px] tracking-[0.4em] text-neutral-500">
AKAD NIKAH
</p>


<div className="flex items-center gap-4 my-4">

<div className="w-10 h-[1px] bg-neutral-300"></div>

<span className="text-neutral-400 text-xs">✦</span>

<div className="w-10 h-[1px] bg-neutral-300"></div>

</div>


<h3 className="font-ltsip text-[38px] tracking-[0.06em] text-[#3f4d58]">
Sabtu
</h3>


<p className="mt-2 text-[15px] text-neutral-600">
04 April 2026
</p>


<p className="text-[15px] text-neutral-600">
08.00 WIB
</p>


</div>

</div>




{/* ================= RESEPSI ================= */}

<div className="relative w-[360px] h-[392px]">


{/* FRAME */}

<img
src="/firoh-arofi/frame-hari-bahagia.png"
alt="frame"
className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
/>


{/* GLASS CARD */}

<div className="
absolute
top-[18px]
bottom-[18px]
left-[18px]
right-[18px]
bg-white/15
backdrop-blur-xl
rounded-[26px]
border border-white/3
shadow-[0_20px_70px_rgba(0,0,0,0.08)]
flex
flex-col
items-center
text-center
px-6
py-6
">


<p className="text-[10px] tracking-[0.4em] text-neutral-500">
RESEPSI
</p>


<div className="flex items-center gap-4 my-4">

<div className="w-10 h-[1px] bg-neutral-300"></div>

<span className="text-neutral-400 text-xs">✦</span>

<div className="w-10 h-[1px] bg-neutral-300"></div>

</div>


<h3 className="font-ltsip text-[38px] tracking-[0.06em] text-[#3f4d58]">
Sabtu
</h3>


<p className="mt-2 text-[15px] text-neutral-600">
04 April 2026
</p>


<p className="text-[15px] text-neutral-600">
08.00 WIB – selesai
</p>



{/* ADDRESS */}

<div className="mt-4 text-[14px] leading-[1.8] text-neutral-600">

<p className="mb-2 text-[11px] tracking-[0.3em] text-neutral-500">
LOKASI
</p>

Jl. Kepuhkiriman Dalam Masjid
<br/>
Gang IV RT 04 RW 01
<br/>
Waru – Sidoarjo

</div>



{/* BUTTON */}

<a
href="https://maps.app.goo.gl/KyBmg8SrXz88uX1n9"
target="_blank"
rel="noreferrer"
className="
mt-5
inline-block
px-7
py-[10px]
rounded-full
border
border-neutral-700
text-[11px]
tracking-[0.35em]
text-neutral-700
transition
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

</div>

</section>

)

}
