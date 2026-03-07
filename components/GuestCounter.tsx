"use client"

import { useEffect, useState } from "react"

export default function GuestCounter(){

const [count,setCount]=useState(0)
const [name,setName]=useState("")

useEffect(()=>{

let start=0

const intro=setInterval(()=>{

start+=5
setCount(start)

if(start>=100){
clearInterval(intro)

let total=100

setInterval(()=>{

total+=1
setCount(total)

const names=["Lukman","Sarah","Andi","Rina","Fajar"]

const random=names[Math.floor(Math.random()*names.length)]

setName(random)

},3000)

}

},30)

},[])

return(

<div className="bg-neutral-100 rounded-2xl p-6 text-center">

<div className="text-4xl font-semibold text-[#ff4d6d]">
{count}
</div>

<div className="text-sm text-neutral-500 mt-2">
tamu telah membuka undangan
</div>

{name && (
<div className="text-xs text-neutral-400 mt-3">
{name} membuka undangan
</div>
)}

</div>

)

}