"use client"

import { useState } from "react"

type Wish = {
name:string
message:string
attendance:string
}

export default function GuestWish(){

/* ===============================
FORM STATE
=============================== */

const [name,setName] = useState("")
const [message,setMessage] = useState("")
const [attendance,setAttendance] = useState("Hadir")

const [wishes,setWishes] = useState<Wish[]>([])



/* ===============================
SUBMIT
=============================== */

const submitWish=(e:any)=>{

e.preventDefault()

if(!name || !message) return

const newWish:Wish = {
name,
message,
attendance
}

setWishes([newWish,...wishes])

setName("")
setMessage("")
setAttendance("Hadir")

}



/* ===============================
UI
=============================== */

return(

<div className="max-w-xl mx-auto space-y-10">


{/* TITLE */}

<div className="text-center">

<h2 className="text-[32px] tracking-[0.08em] mb-4">
Ucapan & Doa
</h2>

<p className="text-neutral-500 text-sm">
Tinggalkan doa dan harapan terbaik untuk kami
</p>

</div>



{/* FORM */}

<form
onSubmit={submitWish}
className="bg-white/80 backdrop-blur border border-neutral-200 rounded-xl p-6 space-y-4"
>


{/* NAME */}

<input
value={name}
onChange={(e)=>setName(e.target.value)}
placeholder="Nama Anda"
className="w-full border border-neutral-300 rounded-md px-4 py-2 text-sm"
/>



{/* MESSAGE */}

<textarea
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="Tulis ucapan dan doa"
className="w-full border border-neutral-300 rounded-md px-4 py-2 text-sm h-28"
/>



{/* ATTENDANCE */}

<select
value={attendance}
onChange={(e)=>setAttendance(e.target.value)}
className="w-full border border-neutral-300 rounded-md px-4 py-2 text-sm"
>

<option>Hadir</option>
<option>Tidak Hadir</option>

</select>



{/* BUTTON */}

<button
type="submit"
className="w-full bg-black text-white py-2 rounded-md text-sm hover:opacity-90 transition"
>

Kirim Ucapan

</button>

</form>



{/* WISH LIST */}

<div className="space-y-4">

{wishes.map((wish,index)=>(

<div
key={index}
className="border border-neutral-200 rounded-lg p-4 bg-white/80 backdrop-blur"
>

<p className="font-semibold text-sm">
{wish.name}
</p>

<p className="text-xs text-neutral-500 mb-2">
{wish.attendance}
</p>

<p className="text-sm text-neutral-700">
{wish.message}
</p>

</div>

))}

</div>

</div>

)

}
