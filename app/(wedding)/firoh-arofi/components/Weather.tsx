"use client"

import { useEffect, useState } from "react"

export default function Weather() {

const [weather,setWeather] = useState<any>(null)

useEffect(()=>{

const fetchWeather = async()=>{

const res = await fetch(
"https://api.openweathermap.org/data/2.5/weather?lat=-7.352&lon=112.758&units=metric&appid=API_KEY"
)

const data = await res.json()

setWeather(data)

}

fetchWeather()

},[])


if(!weather) return <p>Memuat cuaca...</p>

return(

<div className="text-center">

<p className="text-[12px] tracking-[0.16em] text-neutral-500">
PERKIRAAN CUACA
</p>

<p className="mt-2 text-[16px] tracking-[0.03em] text-neutral-700">

{weather.weather[0].main} • {weather.main.temp}°C

</p>

</div>

)

}
