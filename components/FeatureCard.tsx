"use client"

import { useState } from "react"

type Props = {
  title: string
  description: string
  children?: React.ReactNode
}

export default function FeatureCard({
  title,
  description,
  children
}: Props){

const [open,setOpen] = useState(false)

return(

<div className="flex flex-col">

{/* CARD */}

<div
onClick={()=>setOpen(!open)}
className="p-8 border border-neutral-200 rounded-2xl hover:shadow-xl transition cursor-pointer min-h-[170px] flex justify-between items-start"
>

<div>

<h3 className="text-xl font-semibold mb-2">
{title}
</h3>

<p className="text-neutral-500 text-sm">
{description}
</p>

</div>

<div
className={`transition-transform ${open ? "rotate-180" : ""}`}
>
▼
</div>

</div>


{/* PREVIEW */}

<div
className={`transition-all duration-500 overflow-hidden ${
open ? "max-h-[320px] opacity-100 mt-4" : "max-h-0 opacity-0"
}`}
>

<div className="border border-neutral-200 rounded-2xl p-6 bg-white">

{children}

</div>

</div>

</div>

)

}