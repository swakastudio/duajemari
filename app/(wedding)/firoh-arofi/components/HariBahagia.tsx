"use client"

export default function HariBahagia(){

return(

<section className="fade-up relative px-6 py-20 overflow-hidden">

<div className="mx-auto max-w-4xl text-center">
  {/* FLOWER GIF */}
    <img
      src="/firoh-arofi/flower-middle-akadnikah0.gif"
      alt="flower-bottom"
      className="
      absolute
      left-1/2
      -translate-x-1/2
top-[450px]
      w-[129%]
      pointer-events-none
      z-0
      "
    />

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
border border-white/30
shadow-[0_20px_70px_rgba(0,0,0,0.08)]
flex
flex-col
items-center
justify-center
text-center
px-6
py-7
">

<p className="text-[14px] tracking-[0.08em] text-[#3f4d58]">
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


<p className="
text-[12px]
md:text-[16px]
leading-[2.25]
tracking-[0.02em]
text-neutral-700
font-light
">
04 April 2026
</p>


<p className="
text-[12px]
md:text-[16px]
leading-[2.25]
tracking-[0.02em]
text-neutral-700
font-light
">
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
border border-white/30
shadow-[0_20px_70px_rgba(0,0,0,0.08)]
flex
flex-col
items-center
text-center
px-6
pt-6
pb-7
">


{/* HEADER */}

<p className="text-[14px] tracking-[0.08em] text-[#3f4d58] mt-2">
RESEPSI
</p>


{/* DIVIDER */}

<div className="flex items-center gap-4 my-3">

<div className="w-10 h-[1px] bg-neutral-300"></div>

<span className="text-neutral-400 text-xs">✦</span>

<div className="w-10 h-[1px] bg-neutral-300"></div>

</div>


{/* DAY */}

<h3 className="font-ltsip text-[38px] tracking-[0.06em] text-[#3f4d58] mt-1">
Sabtu
</h3>


{/* DATE */}

<p className="
text-[12px]
md:text-[16px]
leading-[2.25]
tracking-[0.02em]
text-neutral-700
font-light
">
04 April 2026 | 08.00 WIB – SELESAI
</p>

{/* ADDRESS */}

<div className="mt-2">

<p className="
text-[12px]
tracking-[0.35em]
text-[#3f4d58]
mb-2
">
LOKASI
</p>

<p className="
text-[12px]
md:text-[16px]
leading-[2.25]
tracking-[0.02em]
text-neutral-700
font-light
">
Jl. Kepuhkiriman Dalam Masjid  
<br/>
Gang IV RT 04 RW 01 , Waru – Sidoarjo
</p>

</div>


{/* BUTTON */}

<a
href="https://maps.app.goo.gl/KyBmg8SrXz88uX1n9"
target="_blank"
rel="noreferrer"
className="
mt-auto
inline-flex
items-center
justify-center
px-7
py-[8px]
rounded-full
bg-white/45
backdrop-blur-md
border border-white/75
text-[11px]
tracking-[0.35em]
text-neutral-700
transition
duration-500
hover:bg-white/45
hover:-translate-y-[2px]
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
