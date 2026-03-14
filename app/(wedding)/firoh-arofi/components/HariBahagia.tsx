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
text-[16px]
tracking-[0.04em]
leading-[1.9]
text-[#3f4d58]
mt-3
max-w-[260px]
mx-auto
"
>
04 April 2026
</p>


<p className="
text-[16px]
tracking-[0.04em]
leading-[1.9]
text-[#3f4d58]
mt-3
max-w-[260px]
mx-auto
"
>
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
justify-center
text-center
px-6
">

<div className="relative w-[360px] h-[392px]">

<img
src="/firoh-arofi/frame-hari-bahagia.png"
className="absolute inset-0 w-full h-full object-contain pointer-events-none"
/>

<div className="
absolute
top-[60px]
bottom-[60px]
left-[55px]
right-[55px]

bg-white/65
backdrop-blur-xl
rounded-[28px]

border border-white/40
shadow-[0_25px_70px_rgba(0,0,0,0.08)]

flex
flex-col
items-center
text-center
px-6
py-7
">


{/* HEADER */}

<p className="
text-[12px]
tracking-[0.35em]
text-[#3f4d58]
">
RESEPSI
</p>


{/* DIVIDER */}

<div className="flex items-center justify-center gap-4 my-4">

<div className="w-10 h-[1px] bg-neutral-300"></div>

<span className="text-neutral-400 text-xs">✦</span>

<div className="w-10 h-[1px] bg-neutral-300"></div>

</div>


{/* DAY */}

<h3 className="
font-ltsip
text-[38px]
tracking-[0.05em]
text-[#3f4d58]
leading-none
">
Sabtu
</h3>


{/* DATE */}

<p className="
text-[15px]
tracking-[0.04em]
text-neutral-600
mt-2
">
04 April 2026
</p>


{/* TIME */}

<p className="
text-[15px]
tracking-[0.04em]
text-neutral-600
mt-1
">
08.00 WIB – selesai
</p>


{/* LOCATION */}

<div className="mt-5">

<p className="
text-[11px]
tracking-[0.35em]
text-[#3f4d58]
mb-2
">
LOKASI
</p>

<p className="
text-[14px]
leading-[1.8]
text-neutral-600
max-w-[240px]
mx-auto
">
Jl. Kepuhkiriman Dalam Masjid  
<br/>
Gang IV RT 04 RW 01  
<br/>
Waru – Sidoarjo
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
py-[10px]

rounded-full

bg-white/25
backdrop-blur-md

border
border-white/40

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

</section>

)

}
