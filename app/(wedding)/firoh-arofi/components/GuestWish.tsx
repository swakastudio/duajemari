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
COUNT RSVP
=============================== */

const hadirCount = wishes.filter(w=>w.attendance==="Hadir").length
const tidakCount = wishes.filter(w=>w.attendance==="Tidak Hadir").length



/* ===============================
UI
=============================== */

return(

<section className="fade-up relative px-6 py-24 bg-[#E7F2F6]">

<div className="mx-auto max-w-4xl">


{/* ===============================
TITLE
=============================== */}

<div className="text-center mb-14">

<h2 className="fade-up
fade-delay-1 font-ltsip text-[26px] tracking-[0.06em] text-[#3f4d58]">
UCAPAN & DOA
</h2>

<div className="relative w-36 h-[2px] mx-auto mt-6 mb-8 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3f4d58] to-transparent opacity-70"></div>

<div className="absolute inset-0 animate-dividerShine bg-gradient-to-r from-transparent via-white to-transparent opacity-90"></div>

</div>

<p className="fade-up
fade-delay-2 text-neutral-600 text-sm max-w-md mx-auto leading-relaxed">
Tinggalkan doa serta harapan terbaik untuk perjalanan baru kami.
Kehadiran dan doa Anda adalah kebahagiaan bagi kami.
</p>

</div>



{/* ===============================
RSVP COUNTER
=============================== */}

<div className="fade-up
fade-delay-3 flex justify-center gap-6 mb-14">

<div className="fade-up
fade-delay-4
bg-white/60
backdrop-blur-xl
border border-white/40
rounded-2xl
px-8 py-4
text-center
shadow-[0_10px_30px_rgba(0,0,0,0.05)]
">

<p className="fade-up
fade-delay-5 text-2xl font-semibold text-green-600">
{hadirCount}
</p>

<p className="fade-up
fade-delay-6 text-xs tracking-[0.25em] text-green-600">
HADIR
</p>

</div>


<div className="fade-up
fade-delay-7
bg-white/60
backdrop-blur-xl
border border-white/40
rounded-2xl
px-8 py-4
text-center
shadow-[0_10px_30px_rgba(0,0,0,0.05)]
">

<p className="fade-up
fade-delay-8 text-2xl font-semibold text-red-500">
{tidakCount}
</p>

<p className="fade-up
fade-delay-9 text-xs tracking-[0.25em] text-red-500">
TIDAK HADIR
</p>

</div>

</div>



{/* ===============================
FORM
=============================== */}

<form
onSubmit={submitWish}
className="fade-up
fade-delay-10
bg-white/60
backdrop-blur-xl
border border-white/40
rounded-[28px]
shadow-[0_20px_60px_rgba(0,0,0,0.08)]
p-8
space-y-5
max-w-xl
mx-auto
mb-16
">

<input
value={name}
onChange={(e)=>setName(e.target.value)}
placeholder="Nama Anda"
className="fade-up
fade-delay-11
w-full
border border-neutral-200
rounded-lg
px-4 py-3
text-sm
focus:outline-none
focus:border-[#3f4d58]
"
/>


<textarea
value={message}
onChange={(e)=>setMessage(e.target.value)}
placeholder="Ucapan & Doa"
className="fade-up
fade-delay-12
w-full
border border-neutral-200
rounded-lg
px-4 py-3
text-sm
h-28
resize-none
focus:outline-none
focus:border-[#3f4d58]
"
/>


<select
value={attendance}
onChange={(e)=>setAttendance(e.target.value)}
className="fade-up
fade-delay-13
w-full
border border-neutral-200
rounded-lg
px-4 py-3
text-sm
focus:outline-none
focus:border-[#3f4d58]
"
>

<option>Hadir</option>
<option>Tidak Hadir</option>

</select>


<button
type="submit"
className="fade-up
fade-delay-14
w-full
py-3
rounded-full
border border-neutral-800
text-sm
tracking-[0.2em]
hover:bg-neutral-800
hover:text-white
transition
"
>

KIRIM UCAPAN

</button>

</form>



{/* ===============================
WISH LIST
=============================== */}

<div className="space-y-4 max-w-xl mx-auto">

{wishes.map((wish,index)=>(

<div
key={index}
className="
bg-white/70
backdrop-blur-xl
border border-white/40
rounded-2xl
p-5
shadow-[0_10px_30px_rgba(0,0,0,0.05)]
"
>

<div className="flex justify-between items-center mb-2">

<p className="font-semibold text-sm text-[#3f4d58]">
{wish.name}
</p>

<p className={`text-xs tracking-wider ${
wish.attendance==="Hadir"
?"text-green-600"
:"text-red-500"
}`}>
{wish.attendance}
</p>

</div>

<p className="text-sm text-neutral-700 leading-relaxed">
{wish.message}
</p>

</div>

))}

</div>


</div>

</section>

)

}
