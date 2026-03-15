"use client"

export default function HariBahagia(){

return(

<section className="fade-up relative px-6 py-20 overflow-hidden flex justify-center">

<div className="relative w-full max-w-[900px] mx-auto text-center">

{/* ORNAMENT */}
<img
src="/firoh-arofi/flower-middle-akadnikah1.gif"
alt="flower-bottom"
className="
absolute
left-1/2
-translate-x-1/2
top-[425px]
w-[120%]
max-w-[720px]
pointer-events-none
z-30
"
/>

{/* TITLE */}
<h2 className="font-ltsip text-[24px] tracking-[0.06em] text-[#3f4d58]">
HARI BAHAGIA
</h2>

{/* DIVIDER */}
<div className="relative w-36 h-[2px] mx-auto mt-6 mb-6 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3f4d58] to-transparent opacity-70"></div>

<div className="absolute inset-0 animate-dividerShine bg-gradient-to-r from-transparent via-white to-transparent opacity-90"></div>

</div>

{/* GRID */}
<div className="grid md:grid-cols-2 gap-14 justify-center items-center">

{/* CARD */}
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

<p className="text-[14px] tracking-[0.08em] text-[#3f4d58] mt-2">
AKAD NIKAH & RESEPSI
</p>

<div className="flex items-center gap-4 my-3">
<div className="w-10 h-[1px] bg-neutral-300"></div>
<span className="text-neutral-400 text-xs">✦</span>
<div className="w-10 h-[1px] bg-neutral-300"></div>
</div>

<h3 className="font-ltsip text-[38px] tracking-[0.06em] text-[#3f4d58] mt-1">
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
04 April 2026 | 08.00 WIB – SELESAI
</p>

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
