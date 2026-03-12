"use client"

import { useState } from "react"

type Wish = {
  name:string
  message:string
  attendance:string
}

export default function GuestWish(){

/* ===============================
STATE
=============================== */

const [name,setName] = useState("")
const [message,setMessage] = useState("")
const [attendance,setAttendance] = useState("Hadir")

const [wishes,setWishes] = useState<Wish[]>([])

const [open,setOpen] = useState(false)



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

setOpen(false)

}



/* ===============================
COUNT RSVP
=============================== */

const hadirCount = wishes.filter(w=>w.attendance==="Hadir").length
const tidakCount = wishes.filter(w=>w.attendance==="Tidak Hadir").length



/* ===============================
UI
=============================== */

return(

<div className="max-w-xl mx-auto space-y-10">


{/* ===============================
TITLE
=============================== */}

<div className="text-center">

<h2 className="font-ltsip text-[32px] md:text-[40px] tracking-[0.08em] text-[#3f4d58] mb-4">
Ucapan & Doa
</h2>

<div className="relative w-28 h-[2px] mx-auto mt-4 mb-10 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/70 to-transparent"></div>

<div className="absolute inset-0 animate-dividerShimmer bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>

</div>

<p className="text-neutral-500 text-sm">
Tinggalkan doa dan harapan terbaik untuk kami
</p>

</div>



{/* ===============================
RSVP COUNT
=============================== */}

<div className="flex justify-center gap-4">

<div className="bg-green-50 border border-green-200 px-6 py-3 rounded-xl text-center">

<p className="text-green-700 text-lg font-semibold">
{hadirCount}
</p>

<p className="text-xs text-green-600 tracking-wider">
HADIR
</p>

</div>


<div className="bg-red-50 border border-red-200 px-6 py-3 rounded-xl text-center">

<p className="text-red-700 text-lg font-semibold">
{tidakCount}
</p>

<p className="text-xs text-red-600 tracking-wider">
TIDAK HADIR
</p>

</div>

</div>



{/* ===============================
OPEN FORM BUTTON
=============================== */}

<div className="text-center">

<button
onClick={()=>setOpen(true)}
className="
px-8 py-3
rounded-full
border border-neutral-800
text-sm
tracking-[0.2em]
hover:bg-neutral-800
hover:text-white
transition
"
>

ISI UCAPAN

</button>

</div>



{/* ===============================
POPUP FORM
=============================== */}

{open && (

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">

<div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-xl animate-fadeIn space-y-4">


<h3 className="text-lg font-medium text-center">
Ucapan & Kehadiran
</h3>


<input
value={name}
onChange={(e)=>setName(e.target.value)}
placeholder="Nama Anda"
className="w-full border border-neutral-300 rounded-md px-4 py-2 text-sm"
/>


<textarea
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="Ucapan & Doa"
className="w-full border border-neutral-300 rounded-md px-4 py-2 text-sm h-24"
/>


<select
value={attendance}
onChange={(e)=>setAttendance(e.target.value)}
className="w-full border border-neutral-300 rounded-md px-4 py-2 text-sm"
>

<option>Hadir</option>
<option>Tidak Hadir</option>

</select>


<div className="flex justify-between pt-2">

<button
onClick={()=>setOpen(false)}
className="text-sm text-neutral-500"
>
Batal
</button>

<button
onClick={submitWish}
className="
px-6 py-2
rounded-full
border border-neutral-800
text-sm
hover:bg-neutral-800
hover:text-white
transition
"
>
Kirim
</button>

</div>

</div>

</div>

)}



{/* ===============================
WISH LIST
=============================== */}

<div className="space-y-4">

{wishes.map((wish,index)=>(

<div
key={index}
className="border border-neutral-200 rounded-lg p-4 bg-white/80 backdrop-blur"
>

<p className="font-semibold text-sm">
{wish.name}
</p>

<p className={`text-xs mb-2 ${
wish.attendance==="Hadir"
?"text-green-600"
:"text-red-500"
}`}>
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
