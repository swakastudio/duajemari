"use client"

import { useEffect, useState } from "react"

export default function Countdown() {

const weddingDate = new Date()
weddingDate.setDate(weddingDate.getDate() + 7)

const calculateTime = () => {

const now = new Date().getTime()
const distance = weddingDate.getTime() - now

const days = Math.floor(distance / (1000 * 60 * 60 * 24))
const hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
const minutes = Math.floor((distance / (1000 * 60)) % 60)
const seconds = Math.floor((distance / 1000) % 60)

return { days, hours, minutes, seconds }

}

const [time,setTime] = useState({
days:0,
hours:0,
minutes:0,
seconds:0
})

const [mounted,setMounted] = useState(false)

useEffect(()=>{

setMounted(true)
setTime(calculateTime())

const timer = setInterval(()=>{
setTime(calculateTime())
},1000)

return ()=>clearInterval(timer)

},[])

if(!mounted) return null


const Item = ({value,label}:{value:number,label:string}) => (

<div className="
flex flex-col items-center justify-center
py-7
border border-pink-200
">

<span className="text-3xl font-semibold text-[#ff4d6d]">
{value}
</span>

<span className="text-xs tracking-widest text-neutral-500 mt-2 uppercase">
{label}
</span>

</div>

)


return(

<div className="
grid grid-cols-2
border border-[#ff4d6d]
rounded-2xl
overflow-hidden
bg-white
shadow-md
">

<Item value={time.days} label="Hari"/>
<Item value={time.hours} label="Jam"/>
<Item value={time.minutes} label="Menit"/>
<Item value={time.seconds} label="Detik"/>

</div>

)

}