"use client"

import { useEffect,useState } from "react"

export default function WeatherCard(){

const [icon,setIcon] = useState("☀")
const [status,setStatus] = useState("Cerah")

useEffect(()=>{

const hour = new Date().getHours()

if(hour>18){
setIcon("🌙")
}

},[])

return(

<div className="flex items-center gap-4">

<div className="text-3xl">
{icon}
</div>

<div>

<p className="font-semibold">
{status}
</p>

<p className="text-sm text-neutral-500">
Surabaya • Update sekarang
</p>

</div>

</div>

)

}