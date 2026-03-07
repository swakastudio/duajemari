"use client"

import { useState } from "react"

export default function GiftEnvelope(){

const [mode,setMode] = useState("transfer")

return(

<div>

<div className="flex gap-4 mb-4">

<button
onClick={()=>setMode("transfer")}
className="px-4 py-2 border rounded-lg"
>

Transfer

</button>

<button
onClick={()=>setMode("gift")}
className="px-4 py-2 border rounded-lg"
>

Kirim Hadiah

</button>

</div>

{mode==="transfer" &&(

<div className="border p-4 rounded-xl">

<p className="text-sm">
Bank BCA
</p>

<p className="font-semibold">
1234567890
</p>

</div>

)}

{mode==="gift" &&(

<form className="space-y-3">

<input
placeholder="Nama Pengirim"
className="w-full border p-2 rounded"
/>

<input
placeholder="Alamat Pengirim"
className="w-full border p-2 rounded"
/>

<button
className="px-4 py-2 bg-black text-white rounded"
>

Print Label A6

</button>

</form>

)}

</div>

)

}