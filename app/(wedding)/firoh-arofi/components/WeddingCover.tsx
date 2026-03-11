"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function WeddingCover({ guest }: { guest: string }) {

const router = useRouter()

const [opening,setOpening] = useState(false)



/* =========================
OPEN INVITATION
========================= */

const openInvitation = () => {

setOpening(true)

setTimeout(()=>{

router.push("/firoh-arofi/invitation")

},1400)

}



return(

<section
className={`
relative
h-screen
w-full
overflow-hidden
flex
items-center
justify-center
text-center
bg-[#e9f3f8]
transition-all
duration-[1400ms]
ease-[cubic-bezier(.22,.61,.36,1)]
${opening ? "scale-110 blur-md opacity-0" : ""}
`}
>



{/* ========================================================
BACKGROUND LAYERS
======================================================== */}

<div className="absolute inset-0 z-0 overflow-hidden">



{/* SKY */}

<div
className="absolute inset-0"
style={{
backgroundImage:"url('/firoh-arofi/bg-clouds.png')",
backgroundSize:"cover",
backgroundPosition:"center"
}}
></div>



{/* SUN GLOW */}

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_60%)]"></div>



{/* VIGNETTE */}

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.18))]"></div>



{/* MOUNTAIN */}

<div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[100%] md:w-full pointer-events-none">

<img
src="/firoh-arofi/bg-mountain.png"
className={`
w-full
transition-all
duration-[1600ms]
ease-[cubic-bezier(.22,.61,.36,1)]
${opening ? "scale-[1.12] translate-y-[50px]" : ""}
`}
/>

</div>



{/* FOG SOFT */}

<div className="absolute bottom-0 left-0 w-full h-[120px] pointer-events-none opacity-60">

<div
className="absolute inset-0 blur-[25px]"
style={{
background:"linear-gradient(to top, rgba(255,255,255,0.65), transparent)"
}}
></div>

</div>



{/* COLOR GRADIENT */}

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/[0.04] to-black/[0.22]"></div>



</div>



{/* ========================================================
CONTENT
======================================================== */}

<div
className={`
relative
z-10
flex
flex-col
items-center
px-6
pt-12
transition-all
duration-[1200ms]
${opening ? "scale-95 opacity-0 translate-y-10" : ""}
`}
>



{/* TITLE */}

<p className="tracking-[0.45em] text-[12px] text-black/70 mb-6">

THE WEDDING OF

</p>



{/* COUPLE NAME */}

<h1
style={{fontFamily:"ClassiqueScript"}}
className="
text-[72px]
md:text-[118px]
leading-[0.9]
mb-3
text-white
drop-shadow-[0_10px_40px_rgba(0,0,0,0.45)]
"
>

Firoh

<span className="text-black/70 text-[22px] mx-3">
&
</span>

Arofi

</h1>



{/* DATE */}

<p
className="
tracking-[0.38em]
text-[14px]
text-black/70
mb-10
animate-datePulse
"
>

04 • 04 • 2026

</p>



{/* GUEST TITLE */}

<p className="text-[11px] tracking-[0.35em] text-black/70 mb-2 uppercase">

Kepada Yth

</p>



{/* GUEST NAME */}

<h2
style={{fontFamily:"ZTotez"}}
className="
text-[26px]
tracking-[0.05em]
text-white
mb-7
drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)]
"
>

{guest.charAt(0).toUpperCase() + guest.slice(1)}

</h2>



{/* DIVIDER */}

<div className="relative w-28 h-[2px] mb-10 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>

<div className="absolute inset-0 animate-dividerShimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-80 blur-[1px]"></div>

</div>



{/* BUTTON */}

<button
onClick={openInvitation}
className="
px-10
py-3
border
border-white/50
rounded-full
text-[12px]
tracking-[0.28em]
text-white
backdrop-blur-md
hover:bg-white
hover:text-black
hover:shadow-[0_0_24px_rgba(255,255,255,0.3)]
transition-all
duration-500
"
>

BUKA UNDANGAN

</button>

</div>



{/* ========================================================
TRANSITION OVERLAY
======================================================== */}

<div
className={`
fixed
inset-0
bg-white
pointer-events-none
transition-opacity
duration-[1500ms]
${opening ? "opacity-70" : "opacity-0"}
`}
></div>



</section>

)

}