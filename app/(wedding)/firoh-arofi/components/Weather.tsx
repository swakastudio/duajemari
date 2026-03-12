"use client"

import { useEffect, useState } from "react"

export default function Weather() {

const [weather,setWeather] = useState<any>(null)
const [error,setError] = useState(false)

useEffect(()=>{

const fetchWeather = async()=>{

try{

const res = await fetch(
"https://api.openweathermap.org/data/2.5/weather?lat=-7.352&lon=112.758&units=metric&appid=YOUR_API_KEY"
)

const data = await res.json()

if(data.cod !== 200){
setError(true)
return
}

setWeather(data)

}catch{
setError(true)
}

}

fetchWeather()

},[])



if(error){

return(
<p className="text-sm text-neutral-500">
Cuaca tidak tersedia
</p>
)

}



if(!weather){

return(
<p className="text-sm text-neutral-500">
Memuat cuaca...
</p>
)

}



const icon = weather.weather?.[0]?.icon

return(

<div className="text-center">

<p className="text-[12px] tracking-[0.16em] text-neutral-500">
PERKIRAAN CUACA
</p>

<div className="flex items-center justify-center gap-2 mt-2">

{icon && (

<img
src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
alt="weather"
className="w-8 h-8"
/>

)}

<p className="text-[16px] text-neutral-700">

{weather.main?.temp}°C

</p>

</div>

<p className="text-[12px] text-neutral-500 mt-1">

{weather.weather?.[0]?.description}

</p>

<p className="text-[12px] text-neutral-500">

Waru, Sidoarjo

</p>

</div>

)

}
