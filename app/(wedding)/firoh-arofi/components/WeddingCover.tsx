"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function WeddingCover({ guest }: { guest: string }) {

const router = useRouter()
const [opening,setOpening] = useState(false)

const openInvitation = ()=>{

setOpening(true)

setTimeout(()=>{
router.push("/firoh-arofi/invitation")
},1400)

}

return(

<section
className={`
relative h-screen w-full overflow-hidden flex items-center justify-center text-center
transition-all duration-[1400ms]
${opening ? "scale-[1.15] blur-sm opacity-0" : "scale-100"}
`}
>



{/* SKY */}

<div className="absolute inset-0 bg-[#e9f3f8]"></div>


<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e9f3f8]/40 to-transparent"></div>
{/* CLOUDS */}

<div className="absolute inset-0 overflow-hidden">

<div
className="absolute top-0 left-0 h-full w-[200%] animate-cloudMove"
style={{
backgroundImage:"url('/firoh-arofi/bg-clouds.png')",
backgroundRepeat:"repeat-x",
backgroundSize:"auto 100%"
}}
></div>

</div>



{/* MOUNTAIN */}

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] md:w-full">

<img
src="/firoh-arofi/bg-mountain.png"
className={`
w-full transition-transform duration-[1400ms]
${opening ? "scale-[1.25]" : "scale-100"}
`}
/>

</div>

{/* FRAME-ORNAMENT */}
  <div className="absolute bottom-0 left-0 w-full translate-y-[-100px] pointer-events-none">
    <video
autoPlay
loop
muted
playsInline
className="w-full object-cover"
>

<source src="/firoh-arofi/frame-ornament-cover.webm" type="video/webm"/>

</video>

</div>

{/* FLOWER VIDEO */}

<div className="absolute bottom-0 left-0 w-full pointer-events-none">

<video
autoPlay
loop
muted
playsInline
className="w-full object-cover"
>

<source src="/firoh-arofi/frame-flower.webm" type="video/webm"/>

</video>

</div>

<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/50"></div>



{/* CONTENT */}

<div className={`
relative z-10 flex flex-col items-center px-10 py-10
transition-all duration-[1400ms]
${opening ? "scale-125 opacity-0" : ""}
`}>
  
<p className="
tracking-[0.35em]
text-[13px]
text-black/70
mb-6
animate-heroFloat
">
THE WEDDING OF
</p>

<h1
style={{fontFamily:"ClassiqueScript"}}
className="
text-[76px]
md:text-[120px]
text-white
drop-shadow-lg
-translate-x-4
animate-heroFloat
hero-delay-1
"
>

Firoh

<span className="mx-3 text-black/60 text-[40px]">
&
</span>

Arofi

</h1>

<p
className="
tracking-[0.35em]
text-[14px]
text-white/80
mt-6
mb-10
animate-datePulse
animate-heroFloat
hero-delay-2
drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]
"
>
04 • 04 • 2026
</p>

<p className="
text-[11px]
tracking-[0.35em]
text-black/70
mb-1
uppercase
animate-heroFloat
hero-delay-3
">
Kepada Yth
</p>

<h2
style={{fontFamily:"ZTotez"}}
className="
text-[26px]
tracking-[0.06em]
text-white
mt-2
mb-10
animate-heroFloat
hero-delay-4
drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]
"
>
{guest}
</h2>

<div className="relative w-28 h-[2px] mb-10 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

<div className="absolute inset-0 animate-dividerShimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>

</div>

<button
onClick={openInvitation}
className="
px-12
py-3
border
border-white/40
rounded-full
text-[12px]
tracking-[0.35em]
text-white
bg-white/10
backdrop-blur-md
hover:bg-white
hover:text-black
transition-all
duration-500
shadow-[0_10px_40px_rgba(0,0,0,0.35)]
animate-heroFloat
hero-delay-4
"
>
BUKA UNDANGAN
</button>

</div>

</section>

)

}
