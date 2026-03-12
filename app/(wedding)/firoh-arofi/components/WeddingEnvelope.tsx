"use client"

import { useState } from "react"

export default function WeddingEnvelope() {

/* ===============================
TAB STATE
=============================== */

const [tab,setTab] = useState<"transfer" | "kirim">("transfer")



/* ===============================
DATA REKENING
=============================== */

const rekening = {

pria:"5379001234567890",

wanita:"5249001433367560"

}



/* ===============================
COPY REKENING
=============================== */

const copyRek=(rek:string)=>{

navigator.clipboard.writeText(rek)

alert("Nomor rekening berhasil disalin")

}



/* ===============================
UI
=============================== */

return(

<div className="border border-neutral-300 rounded-2xl p-6 bg-white/80 backdrop-blur space-y-6 max-w-md mx-auto">


{/* TITLE */}

<p className="text-sm text-center text-neutral-500">

Pilih metode hadiah untuk mempelai

</p>



{/* TAB BUTTON */}

<div className="flex justify-center gap-4">


<button
onClick={()=>setTab("transfer")}
className={`px-5 py-2 text-sm rounded-full border transition
${tab==="transfer"
?"bg-black text-white border-black"
:"border-neutral-300 text-neutral-600"}
`}
>

Transfer

</button>


<button
onClick={()=>setTab("kirim")}
className={`px-5 py-2 text-sm rounded-full border transition
${tab==="kirim"
?"bg-black text-white border-black"
:"border-neutral-300 text-neutral-600"}
`}
>

Kirim Hadiah

</button>


</div>



{/* ===============================
TRANSFER TAB
=============================== */}

{tab==="transfer" &&(

<div className="grid grid-cols-2 gap-6 justify-items-center">


{/* CARD PRIA */}

<div
onClick={()=>copyRek(rekening.pria)}
className="cursor-pointer hover:scale-105 transition"
>

<img
src="/card-pria.png"
className="w-[130px]"
/>

<p className="text-xs text-center mt-2 text-neutral-500">
Klik untuk salin
</p>

</div>



{/* CARD WANITA */}

<div
onClick={()=>copyRek(rekening.wanita)}
className="cursor-pointer hover:scale-105 transition"
>

<img
src="/card-wanita.png"
className="w-[130px]"
/>

<p className="text-xs text-center mt-2 text-neutral-500">
Klik untuk salin
</p>

</div>



</div>

)}



{/* ===============================
KIRIM HADIAH
=============================== */}

{tab==="kirim" &&(

<div className="text-center text-sm text-neutral-600 leading-relaxed">

<p>

Hadiah juga dapat dikirim langsung
ke alamat mempelai berikut

</p>


<p className="mt-4 font-medium">

Nur Lailatul Maghfiroh

</p>


<p className="text-neutral-500">

Jl. Kepuhkiriman Dalam Masjid  
Gang IV RT 04 RW 01  
Waru - Sidoarjo

</p>


<p className="mt-3 text-neutral-500">

Telp: 08973124009

</p>

</div>

)}

</div>

)

}
