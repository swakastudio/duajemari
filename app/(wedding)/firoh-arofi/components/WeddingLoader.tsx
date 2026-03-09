"use client"

import { useEffect, useState } from "react"

export default function WeddingLoader(){

const [loading,setLoading] = useState(true)
const [fade,setFade] = useState(false)

useEffect(()=>{

const fadeTimer = setTimeout(()=>{
setFade(true)
},2500)

const endTimer = setTimeout(()=>{
setLoading(false)
},3200)

return ()=>{
clearTimeout(fadeTimer)
clearTimeout(endTimer)
}

},[])

if(!loading) return null

return(

<div
className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-14 bg-black transition-all duration-700 ${
fade ? "opacity-0 blur-sm" : "opacity-100"
}`}
>

{/* LOGO */}

<img
src="/firoh-arofi/logo-wedding-loader.svg"
alt="Wedding Logo"
className="w-[200px] animate-pulse"
/>


{/* DOT STREAM */}

<div className="loader-stream">

<div className="loader-dot"></div>
<div className="loader-dot"></div>
<div className="loader-dot"></div>
<div className="loader-dot"></div>
<div className="loader-dot"></div>

</div>

</div>

)

}