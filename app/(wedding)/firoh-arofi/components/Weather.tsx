"use client"

import { useEffect, useState } from "react"

export default function Weather(){

const [weather,setWeather] = useState<any>(null)

useEffect(()=>{

const fetchWeather = async()=>{

const res = await fetch(
"https://api.openweathermap.org/data/2.5/weather?lat=-7.352&lon=112.758&units=metric&appid=YOUR_API_KEY"
)

const data = await res.json()

setWeather(data)

}

fetchWeather()

},[])


if(!weather) return <p className="text-sm">Memuat cuaca...</p>


const icon = weather.weather[0].icon


return(

<div className="text-center">

<p className="text-[12px] tracking-[0.16em] text-neutral-500">
PERKIRAAN CUACA
</p>

<div className="flex items-center justify-center gap-2 mt-2">

<img
src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
alt="weather"
className="w-8 h-8"
/>

<p className="text-[16px] text-neutral-700">

{weather.main.temp}°C

</p>

</div>

<p className="text-[12px] text-neutral-500 mt-1">

{weather.weather[0].description}

</p>

<p className="text-[12px] text-neutral-500">

Waru, Sidoarjo

</p>

</div>

)

}
