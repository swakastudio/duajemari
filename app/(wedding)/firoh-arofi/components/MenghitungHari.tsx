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

<section className="fade-up relative w-full bg-[#E7F2F6] px-6 py-20 -mt-32">
    
    <img
src="/firoh-arofi/flower-middle-akadnikah0.gif"
alt="flower-bottom"
className="fade-up
fade-delay-7 absolute left-1/2 -translate-x-1/2 bottom-[-90px] w-[130%] pointer-events-none z-30"
/>
{/* ORNAMENT */}
<img
src="/firoh-arofi/flower-middle-akadnikah1.gif"
alt="flower-bottom"
className="fade-up
fade-delay-8
absolute
left-1/2
-translate-x-1/2
bottom-[-90px]
w-[120%]
pointer-events-none
z-40
"
/>

<div className="mx-auto max-w-3xl text-center">


{/* TITLE */}

<h2 className="fade-up
fade-delay-1
font-ltsip
text-[24px]
tracking-[0.06em]
text-[#3A3A3A]
">
MENGHITUNG HARI
</h2>


{/* DIVIDER */}

<div className="relative w-36 h-[2px] mx-auto mt-6 mb-10 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3f4d58] to-transparent opacity-70"></div>

<div className="absolute inset-0 animate-dividerShine bg-gradient-to-r from-transparent via-white to-transparent opacity-90"></div>

</div>


{/* TEXT */}

<p className="fade-up
fade-delay-2
text-[12px]
md:text-[16px]
leading-[2.25]
tracking-[0.02em]
text-[#3A3A3A]
font-light
">

Dan kami bersyukur dipertemukan Allah di waktu terbaik.  
Kini kami menanti hari istimewa kami, hari di mana dua perjalanan
akan bertemu dalam satu langkah yang sama.

</p>


{/* COUNTDOWN */}

<div className="fade-up
fade-delay-3
font-ltsip
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
className="fade-up
fade-delay-4
rounded-[20px]
bg-white/70
border border-white/40
px-4 py-6
backdrop-blur
shadow-[0_10px_30px_rgba(0,0,0,0.04)]
"
>

<p className="fade-up
fade-delay-5
text-[26px]
font-semibold
text-[#3A3A3A]
">
{item.value}
</p>

<p className="fade-up
fade-delay-6
text-[11px]
tracking-[0.3em]
text-[#3A3A3A]
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
