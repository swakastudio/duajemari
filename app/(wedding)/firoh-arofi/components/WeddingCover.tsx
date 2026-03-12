"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function WeddingCover({ guest }: { guest: string }) {

const router = useRouter()

const [opening,setOpening] = useState(false)



/* ===============================
OPEN INVITATION
=============================== */

const openInvitation = ()=>{

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
transition-all
duration-[1400ms]
${opening ? "scale-110 blur-md opacity-0" : ""}
`}

>



{/* ====================================
BACKGROUND CONTAINER
==================================== */}

<div className="absolute inset-0 -z-10 overflow-hidden">



{/* SKY COLOR */}

<div

className="absolute inset-0"

style={{background:"#e9f3f8"}}

></div>



{/* CLOUD BACKGROUND */}

<div

className="absolute inset-0 animate-cloudMove"

style={{

backgroundImage:"url('/firoh-arofi/bg-clouds.png')",

backgroundRepeat:"repeat-x",

backgroundSize:"auto 100%",

backgroundPosition:"0 0"

}}

></div>



{/* MOUNTAIN */}

<div

className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] md:w-full pointer-events-none"

>

<img

src="/firoh-arofi/bg-mountain.png"

className="w-full"

alt="mountain"

 />

</div>



{/* FLOWER VIDEO */}

<div

className="absolute bottom-0 left-0 w-full pointer-events-none z-10"

>

<video

autoPlay
loop
muted
playsInline
preload="auto"

className="w-full object-cover"

>

<source

src="/firoh-arofi/frame-flower.webm"

type="video/webm"

/>

</video>

</div>



{/* GRADIENT CINEMATIC */}

<div

className="
absolute
inset-0
bg-gradient-to-b
from-transparent
via-black/10
to-black/40
"

></div>



</div>



{/* ====================================
CONTENT
==================================== */}

<div

className="
relative
z-20
flex
flex-col
items-center
px-6
"

>



{/* TITLE */}

<p

className="
tracking-[0.35em]
text-[13px]
text-black/70
mb-6
"

>

THE WEDDING OF

</p>



{/* COUPLE NAME */}

<h1

style={{fontFamily:"ClassiqueScript"}}

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
"

>

04 • 04 • 2026

</p>



{/* GUEST */}

<p

className="
text-[11px]
tracking-[0.35em]
text-black/70
mb-1
uppercase
"

>

Kepada Yth

</p>



<h2

style={{fontFamily:"ZTotez"}}

className="
text-[24px]
tracking-[0.04em]
text-white
mb-6
"

>

{guest}

</h2>



{/* DIVIDER */}

<div

className="
relative
w-28
h-[2px]
mb-12
overflow-hidden
"

>

<div

className="
absolute
inset-0
bg-gradient-to-r
from-transparent
via-neutral-400
to-transparent
"

></div>

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
transition-all
duration-500
"

>

BUKA UNDANGAN

</button>

</div>



</section>

)

}
