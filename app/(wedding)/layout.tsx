"use client"

import { useEffect, useState } from "react"
import WeddingLoader from "./firoh-arofi/components/WeddingLoader"

export default function WeddingLayout({
children
}:{
children: React.ReactNode
}){

const [show,setShow] = useState(false)

useEffect(()=>{

setTimeout(()=>{
setShow(true)
},3200)

},[])

return(

<div className="relative min-h-screen bg-white overflow-hidden">

<WeddingLoader/>

<div className={`${show ? "page-reveal" : "opacity-0"}`}>

{children}

</div>

</div>

)

}