"use client"

/* =========================
   COMPONENT
========================= */

export default function WeddingCover({ guest }: { guest: string }) {

return(

<section className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center text-center text-white radial-open">



{/* BACKGROUND */}

<div className="absolute inset-0 -z-10">

  {/* CLOUDS */}
  <div className="absolute inset-0 flex w-[200%] animate-clouds">

    <img
      src="/firoh-arofi/bg-clouds.png"
      className="w-full object-cover"
    />

    <img
      src="/firoh-arofi/bg-clouds.png"
      className="w-full object-cover"
    />

  </div>


  {/* MOUNTAIN */}

<img
  src="/firoh-arofi/bg-mountain.png"
  className="
  absolute 
  bottom-0 
  left-1/2 
  -translate-x-1/2 
  w-[140%] 
  md:w-full 
  max-w-none
  pointer-events-none
  "
/>


  {/* GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40"></div>

</div>

{/* =========================
   CONTENT
========================= */}

<div className="relative z-10 flex flex-col items-center px-6 pt-16 md:pt-0">


{/* TITLE */}

<p className="tracking-[0.35em] text-[13px] text-neutral-300 mb-8 bounce-up delay-1">
THE WEDDING OF
</p>


{/* COUPLE NAME */}

<h1
style={{ fontFamily: "ClassiqueScript" }}
className="text-[64px] md:text-[120px] leading-[0.9] mb-3"
>

<span>Firoh</span>

<span className="text-neutral-300 text-[22px] mx-2">
&
</span>

<span>Arofi</span>

</h1>


{/* DATE */}

<p className="tracking-[0.35em] text-[14px] text-neutral-300 mb-12 bounce-up delay-3">
04 • 04 • 2026
</p>


{/* GUEST TITLE */}

<p className="text-[10px] tracking-[0.35em] text-neutral-300 mb-1 uppercase">
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

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent"></div>

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>

</div>


{/* BUTTON */}

<button
className="px-8 py-3 border border-white/40 rounded-full text-[11px] tracking-[0.22em] hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.25)] transition duration-300 bounce-up delay-5"
>

BUKA UNDANGAN

</button>

</div>

</section>

)

}