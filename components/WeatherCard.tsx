"use client"

import { useEffect,useState } from "react"

export default function WeatherCard(){

const [temp,setTemp] = useState<number | null>(null)
const [status,setStatus] = useState("Loading")
const [icon,setIcon] = useState("☀")

useEffect(()=>{

const fetchWeather = async()=>{

try{

const res = await fetch(
"https://api.open-meteo.com/v1/forecast?latitude=-7.2575&longitude=112.7521&current_weather=true"
)

const data = await res.json()

const temperature = data.current_weather.temperature
const code = data.current_weather.weathercode

setTemp(temperature)

const weatherMap:any = {

0:{text:"Cerah",icon:"☀"},
1:{text:"Sebagian Cerah",icon:"🌤"},
2:{text:"Berawan",icon:"⛅"},
3:{text:"Mendung",icon:"☁"},

45:{text:"Kabut",icon:"🌫"},
48:{text:"Kabut Tebal",icon:"🌫"},

51:{text:"Gerimis",icon:"🌦"},
53:{text:"Gerimis",icon:"🌦"},
55:{text:"Gerimis Lebat",icon:"🌧"},

61:{text:"Hujan Ringan",icon:"🌦"},
63:{text:"Hujan",icon:"🌧"},
65:{text:"Hujan Lebat",icon:"🌧"},

71:{text:"Salju",icon:"❄"},
73:{text:"Salju Lebat",icon:"❄"},

80:{text:"Hujan Lokal",icon:"🌦"},
81:{text:"Hujan",icon:"🌧"},
82:{text:"Hujan Lebat",icon:"🌧"},

95:{text:"Badai",icon:"⛈"},
96:{text:"Badai Petir",icon:"⛈"},
99:{text:"Badai Besar",icon:"⛈"}

}

const weather = weatherMap[code] || {text:"Cerah",icon:"☀"}

setStatus(weather.text)
setIcon(weather.icon)

}catch{

setStatus("Tidak tersedia")

}

}

fetchWeather()

},[])

return(

<div className="flex items-center gap-4">

{/* ICON */}

<div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#fff1f4] border border-[#ff4d6d] text-2xl shadow-sm">
{icon}
</div>


{/* TEXT */}

<div>

<p className="font-semibold text-[15px]">

{temp !== null ? `${temp}°C • ${status}` : status}

</p>

<p className="text-sm text-neutral-500">
Surabaya • Update sekarang
</p>

</div>

</div>

)

}