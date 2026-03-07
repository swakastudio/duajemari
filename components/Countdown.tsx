"use client"

import { useEffect,useState } from "react"

export default function Countdown(){

const [time,setTime] = useState(172800)

useEffect(()=>{

const timer = setInterval(()=>{

setTime(prev=>prev>0?prev-1:0)

},1000)

return ()=>clearInterval(timer)

},[])

const days = Math.floor(time/86400)
const hours = Math.floor((time%86400)/3600)
const minutes = Math.floor((time%3600)/60)
const seconds = time%60

return(

<div className="text-lg font-semibold text-[#ff4d6d]">

{days} Hari {hours} Jam {minutes} Menit {seconds} Detik

</div>

)

}