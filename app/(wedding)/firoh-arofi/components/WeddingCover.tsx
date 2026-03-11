"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function WeddingCover({ guest }: { guest: string }) {

const router = useRouter()

const [mounted, setMounted] = useState(false)
const [opening, setOpening] = useState(false)

useEffect(() => {
  setMounted(true)
}, [])



/* =========================
OPEN INVITATION
========================= */

const openInvitation = () => {

setOpening(true)

setTimeout(() => {

router.push("/firoh-arofi/invitation")

},1500)

}



return (

<section
className={`
relative
h-screen
min-h-screen
w-full
overflow-hidden
flex
items-center
justify-center
text-center
transition-all
duration-[1400ms]
ease-[cubic-bezier(.22,.61,.36,1)]
${opening ? "scale-110 blur-md opacity-0" : ""}
`}
>



{/* ========================================================
BACKGROUND
======================================================== */}

<div className="absolute inset-0 z-0 overflow-hidden">



{/* CLOUD BACKGROUND */}

<div
className="absolute inset-0"
style={{
backgroundImage:"url('/firoh-arofi/bg-clouds.png')",
backgroundSize:"cover",
backgroundPosition:"center"
}}
></div>



{/* MOUNTAIN */}

<div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[110%] md:w-full pointer-events-none">

<img
src="/firoh-arofi/bg-mountain.png"
className={`
w-full
transition-all
duration-[1500ms]
ease-[cubic-bezier(.22,.61,.36,1)]
${opening ? "scale-[1.15] translate-y-[60px]" : ""}
`}
/>

</div>

</div>



{/* FOG / KABUT */}

<div
className={`
absolute
bottom-0
left-0
w-[200%]
h-[45%]
animate-fogMove
opacity-60
pointer-events-none
transition-opacity
duration-[1500ms]
${opening ? "opacity-80" : ""}
`}
>

<img
src="/firoh-arofi/bg-clouds.png"
className="w-1/2 h-full object-cover blur-[20px] opacity-40"
/>

<img
src="/firoh-arofi/bg-clouds.png"
className="w-1/2 h-full object-cover blur-[20px] opacity-40"
/>

</div>



{/* GRADIENT OVERLAY */}

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40"></div>

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
pt-16
md:pt-0
transition-all
duration-[1200ms]
${opening ? "scale-95 opacity-0 translate-y-10" : ""}
`}
>



{/* TITLE */}

<p className="tracking-[0.35em] text-[13px] text-black/70 mb-6">
THE WEDDING OF
</p>



{/* COUPLE NAME */}

<h1
style={{ fontFamily:"ClassiqueScript" }}
className="
text-[76px]
md:text-[120px]
leading-[0.9]
mb-3
-translate-x-3
md:translate-x-0
text-white
drop-shadow-[0_6px_20px_rgba(0,0,0,0.35)]
"
>

<span>Firoh</span>

<span className="text-black/70 text-[22px] mx-2">
&
</span>

<span>Arofi</span>

</h1>



{/* DATE */}

<p
className="
tracking-[0.35em]
text-[14px]
text-black/70
mb-10
animate-datePulse
drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]
"
>
04 • 04 • 2026
</p>



{/* GUEST TITLE */}

<p className="text-[11px] tracking-[0.35em] text-black/70 mb-1 uppercase">
Kepada Yth
</p>



{/* GUEST NAME */}

<h2
style={{ fontFamily:"ZTotez" }}
className="text-[24px] tracking-[0.04em] text-white mb-6"
>
{guest.charAt(0).toUpperCase() + guest.slice(1)}
</h2>



{/* DIVIDER */}

<div className="relative w-28 h-[2px] mb-12 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent"></div>

<div className="absolute inset-0 animate-dividerShimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-70 blur-[1px]"></div>

</div>



{/* BUTTON */}

<button
onClick={openInvitation}
className="
px-10
py-3
border
border-white/40
rounded-full
text-[12px]
tracking-[0.25em]
text-white
backdrop-blur-sm
hover:bg-white
hover:text-black
hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]
transition-all
duration-500
"
>

BUKA UNDANGAN

</button>

</div>



{/* ========================================================
TRANSITION FOG
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
