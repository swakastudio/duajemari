"use client"

import { useEffect,useState } from "react"

export default function GuestCounter(){

const [count,setCount] = useState(0)

useEffect(()=>{

let current = 0

const interval = setInterval(()=>{

current+=1
setCount(current)

if(current>=100){
clearInterval(interval)
}

},50)

},[])

return(

<div className="text-lg font-semibold">

{count} tamu membuka undangan

</div>

)

}