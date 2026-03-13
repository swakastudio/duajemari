"use client"

import { useEffect, useState } from "react"

export default function MenghitungHari(){

/* ===============================
COUNTDOWN TARGET
=============================== */

const targetDate = new Date("2026-04-04T08:00:00")

const [time,setTime] = useState({
days:0,
hours:0,
minutes:0,
seconds:0
})


/* ===============================
COUNTDOWN EFFECT
=============================== */

useEffect(()=>{

const timer = setInterval(()=>{

const now = new Date().getTime()
const distance = targetDate.getTime() - now

if(distance <= 0){
setTime({
days:0,
hours:0,
minutes:0,
seconds:0
})
return
}

const days = Math.floor(distance/(1000*60*60*24))
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60))
const minutes = Math.floor((distance%(1000*60*60))/(1000*60))
const seconds = Math.floor((distance%(1000*60))/1000)

setTime({days,hours,minutes,seconds})

},1000)

return()=>clearInterval(timer)

},[])



return(

<section className="fade-up w-full bg-[#E7F2F6] px-6 py-24">

<div className="mx-auto max-w-3xl text-center">


{/* TITLE */}

<h2 className="
font-ltsip
text-[32px]
tracking-[0.06em]
text-[#3f4d58]
">
MENGHITUNG HARI
</h2>


{/* DIVIDER */}

<div className="relative w-36 h-[2px] mx-auto mt-6 mb-10 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3f4d58] to-transparent opacity-70"></div>

<div className="absolute inset-0 animate-dividerShine bg-gradient-to-r from-transparent via-white to-transparent opacity-90"></div>

</div>


{/* TEXT */}

<p className="
text-[13px]
leading-[2]
text-neutral-600
max-w-md
mx-auto
">

Dan kami bersyukur dipertemukan Allah di waktu terbaik.  
Kini kami menanti hari istimewa kami, hari di mana dua perjalanan
akan bertemu dalam satu langkah yang sama.

</p>


{/* COUNTDOWN */}

<div className="
grid
grid-cols-2
sm:grid-cols-4
gap-4
mt-10
">

{[
{label:"HARI",value:time.days},
{label:"JAM",value:time.hours},
{label:"MENIT",value:time.minutes},
{label:"DETIK",value:time.seconds}
].map((item,i)=>(
<div
key={i}
className="
rounded-[20px]
bg-white/70
border border-white/40
px-4 py-6
backdrop-blur
shadow-[0_10px_30px_rgba(0,0,0,0.04)]
"
>

<p className="
text-[26px]
font-semibold
text-neutral-800
">
{item.value}
</p>

<p className="
text-[11px]
tracking-[0.3em]
text-neutral-500
mt-1
">
{item.label}
</p>

</div>
))}

</div>

</div>

</section>

)

}
