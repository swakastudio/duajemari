"use client"

import { useEffect, useState } from "react"

export default function WeddingCover({ guest }: { guest: string }) {

const [mounted,setMounted] = useState(false)

useEffect(()=>{
setMounted(true)
},[])

return(

<section
className="
relative
h-[100dvh]
w-full
overflow-hidden
flex
items-center
justify-center
text-center
bg-[#e9f3f8]
"
>


{/* =========================
BACKGROUND
========================= */}

<div className="absolute inset-0 z-0 overflow-hidden">


{/* CLOUD BACKGROUND */}

<div
className="absolute inset-0 animate-clouds"
style={{
backgroundImage: "url('/firoh-arofi/bg-clouds.png')",
backgroundRepeat: "repeat-x",
backgroundSize: "auto 100%",
backgroundPosition: "0 0"
}}
></div>


{/* MOUNTAIN */}

{/* MOUNTAIN */}

<img
src="/firoh-arofi/bg-mountain.png"
className={`
absolute
bottom-0
left-1/2
-translate-x-1/2
w-[160%]
md:w-full
max-w-none
pointer-events-none
transition-all
duration-[2200ms]
ease-[cubic-bezier(.22,.61,.36,1)]
delay-[600ms]
${mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-[160px] scale-[1.04]"}
`}
/>


{/* GRADIENT OVERLAY */}

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40"></div>

</div>



{/* =========================
CONTENT
========================= */}

<div className="relative z-10 flex flex-col items-center px-6 pt-16 md:pt-0">


{/* TITLE */}

<p className="tracking-[0.35em] text-[13px] text-black/70 mb-6">
THE WEDDING OF
</p>



{/* COUPLE NAME */}

<h1
style={{ fontFamily: "ClassiqueScript" }}
className="
text-[76px]
md:text-[120px]
leading-[0.9]
mb-3
-translate-x-3
md:translate-x-0
text-white
"
>

<span>Firoh</span>

<span className="text-neutral-300 text-[22px] mx-2">
&
</span>

<span>Arofi</span>

</h1>



{/* DATE */}

<p className="tracking-[0.35em] text-[14px] text-black/70 mb-10 animate-datePulse drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]"
04 • 04 • 2026
</p>



{/* GUEST TITLE */}

<p className="text-[11px] tracking-[0.35em] text-black/70 mb-1 uppercase">
Kepada Yth
</p>



{/* GUEST NAME */}

<h2
style={{ fontFamily: "ZTotez" }}
className="text-[24px] tracking-[0.04em] text-white mb-5"
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
className="
px-10
py-3
border
border-white/40
rounded-full
text-[12px]
tracking-[0.22em]
backdrop-blur-sm
hover:bg-white
hover:text-black
transition
duration-300
"
>

BUKA UNDANGAN

</button>


</div>

</section>

)

}
