"use client"

/* =========================
   COMPONENT
========================= */

export default function WeddingCover({ guest }: { guest: string }) {

return(

<section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#0b0b0b] text-white radial-open">

{/* TITLE */}

<p className="tracking-[0.35em] text-[11px] text-neutral-500 mb-8 bounce-up delay-1">
THE WEDDING OF
</p>


{/* COUPLE NAME */}

<h1
style={{ fontFamily: "ClassiqueScript" }}
className="text-[78px] md:text-[120px] leading-[0.88] mb-6 -translate-x-4 bounce-up delay-2"
>

<span>Firoh</span>

<span className="text-neutral-500 text-[22px] mx-2">
&
</span>

<span>Arofi</span>

</h1>


{/* DATE */}

<p className="tracking-[0.35em] text-[12px] text-neutral-500 mb-12 bounce-up delay-3">
04 • 04 • 2026
</p>

{/* GUEST TITLE */}

<p className="text-[10px] tracking-[0.35em] text-neutral-500 mb-1 uppercase">
Kepada Yth
</p>


{/* GUEST NAME */}

<h2
style={{ fontFamily: "ZTotez" }}
className="text-[20px] md:text-[22px] tracking-[0.03em] text-white mb-5 bounce-up delay-4"
>

{guest.charAt(0).toUpperCase() + guest.slice(1)}

</h2>


{/* DIVIDER */}

<div className="relative w-24 h-[1px] mb-10 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-500 to-transparent"></div>

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>

</div>


{/* BUTTON */}

<button
className="px-8 py-3 border border-white/40 rounded-full text-[11px] tracking-[0.22em] hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] transition duration-300"
>

BUKA UNDANGAN

</button>

</section>

)

}