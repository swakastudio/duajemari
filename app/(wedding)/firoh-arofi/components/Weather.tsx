"use client"

import { useEffect,useState } from "react"

export default function Weather(){

const [temp,setTemp] = useState<number | null>(null)

useEffect(()=>{

fetch("https://api.open-meteo.com/v1/forecast?latitude=-7.352&longitude=112.758&current=temperature_2m")
.then(res=>res.json())
.then(data=>{

setTemp(data.current.temperature_2m)

})

},[])

return(

<div>

<p className="text-[12px] tracking-[0.16em] text-neutral-500">
PERKIRAAN CUACA
</p>

<p className="mt-2 text-[16px] text-neutral-700">
🌤️ Waru, Sidoarjo • {temp ?? "--"}°C
</p>

</div>

)

}
