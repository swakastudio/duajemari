"use client"

import { useState } from "react"

const images = [
"https://picsum.photos/800/600?random=1",
"https://picsum.photos/800/600?random=2",
"https://picsum.photos/800/600?random=3",
"https://picsum.photos/800/600?random=4",
"https://picsum.photos/800/600?random=5"
]

export function Pattern(){

const [current,setCurrent] = useState(0)

return(

<div className="max-w-xl w-full">

{/* MAIN IMAGE */}

<div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4">

<img
src={images[current]}
className="w-full h-full object-cover"
/>

</div>


{/* THUMBNAILS */}

<div className="flex gap-2 justify-center">

{images.map((img,index)=>(

<img
key={index}
src={img}
onClick={()=>setCurrent(index)}
className={`w-16 h-16 object-cover rounded cursor-pointer transition
${current===index ? "ring-2 ring-black" : "opacity-50"}
`}
/>

))}

</div>

</div>

)

}
