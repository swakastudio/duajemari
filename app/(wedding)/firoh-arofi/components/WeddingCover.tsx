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

<section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">



{/* SKY */}

<div className="absolute inset-0 bg-[#e9f3f8]"></div>



{/* CLOUDS */}

<div
className="absolute inset-0 animate-cloudMove"
style={{
backgroundImage:"url('/firoh-arofi/bg-clouds.png')",
backgroundRepeat:"repeat-x",
backgroundSize:"auto 100%"
}}
></div>



{/* MOUNTAIN */}

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] md:w-full">

<img
src="/firoh-arofi/bg-mountain.png"
className="w-full"
/>

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



{/* CONTENT */}

<div className="relative z-10 flex flex-col items-center px-6">

<p className="tracking-[0.35em] text-[13px] text-black/70 mb-6">
THE WEDDING OF
</p>

<h1
style={{fontFamily:"ClassiqueScript"}}
className="text-[76px] md:text-[120px] text-white drop-shadow-lg"
>

Firoh

<span className="mx-3 text-black/60 text-[22px]">
&
</span>

Arofi

</h1>

<p className="tracking-[0.35em] text-[14px] text-black/70 mt-6 mb-10">
04 • 04 • 2026
</p>

<p className="text-[11px] tracking-[0.35em] text-black/70 mb-1 uppercase">
Kepada Yth
</p>

<h2
style={{fontFamily:"ZTotez"}}
className="text-[24px] text-white mb-8"
>
{guest}
</h2>

<button
onClick={openInvitation}
className="px-10 py-3 border border-white/40 rounded-full text-[12px] tracking-[0.25em] text-white backdrop-blur-sm hover:bg-white hover:text-black transition"
>

BUKA UNDANGAN

</button>

</div>

</section>

)

}
