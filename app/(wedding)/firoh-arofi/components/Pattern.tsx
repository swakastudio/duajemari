"use client"

import { useState, useEffect } from "react"

const images = [
"/firoh-arofi/firo-arofi-(1).jpeg",
"/firoh-arofi/firo-arofi-(2).jpeg",
"/firoh-arofi/firo-arofi-(3).jpeg",
"/firoh-arofi/firo-arofi-(4).jpeg",
"/firoh-arofi/firo-arofi-(5).jpeg"
]

export default function Pattern(){

const [current,setCurrent] = useState(0)

useEffect(()=>{

const interval = setInterval(()=>{

setCurrent(prev => (prev + 1) % images.length)

},4000)

return ()=>clearInterval(interval)

},[])

return(

<section className="relative px-6 py-20 -mt-32 bg-[#E7F2F6]">

<div className="mx-auto max-w-4xl text-center">


{/* TITLE */}

<h2 className="fade-up
fade-delay-1 font-ltsip text-[24px] tracking-[0.06em] text-[#3A3A3A]">
GALERI
</h2>


{/* DIVIDER */}

<div className="relative w-36 h-[2px] mx-auto mt-6 mb-12 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3f4d58] to-transparent opacity-70"></div>

<div className="absolute inset-0 animate-dividerShine bg-gradient-to-r from-transparent via-white to-transparent opacity-90"></div>

</div>



<div className="max-w-xl w-full mx-auto">


{/* MAIN IMAGE */}

<div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6">

{images.map((img,index)=>(

<img
key={index}
src={img}
className={`
absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
${current === index ? "opacity-100" : "opacity-0"}
`}
/>

))}

</div>



{/* THUMBNAILS */}

<div className="flex gap-3 justify-center flex-wrap">

{images.map((img,index)=>(

<img
key={index}
src={img}
onClick={()=>setCurrent(index)}
className={`
w-12 h-12 object-cover rounded-lg cursor-pointer transition
${current===index
? "ring-2 ring-[#3f4d58] scale-110"
: "opacity-60 hover:opacity-100"
}
`}
/>

))}

</div>

</div>

</div>

</section>

)

}
