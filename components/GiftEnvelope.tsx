"use client"

import { useState } from "react"

export default function GiftEnvelope(){

/* ===============================
   TAB STATE
================================ */

const [tab,setTab] = useState<"transfer"|"kirim">("transfer")


/* ===============================
   FORM STATE
================================ */

const [nama,setNama] = useState("")
const [alamat,setAlamat] = useState("")
const [telp,setTelp] = useState("")


/* ===============================
   DATA REKENING
================================ */

const rekening = {
pria:"1234567890",
wanita:"0987654321"
}


/* ===============================
   COPY REKENING
================================ */

const copyRek = (rek:string)=>{

navigator.clipboard.writeText(rek)
alert("Nomor rekening berhasil disalin")

}


/* ===============================
   PRINT LABEL
================================ */

const printLabel = ()=>{

if(!nama || !alamat || !telp){
alert("Lengkapi data terlebih dahulu")
return
}

const win = window.open("","_blank")
if(!win) return

win.document.write(`
<html>
<head>
<title>Label Pengiriman</title>
<style>
body{
font-family:Arial;
padding:20px;
}
h2{
text-align:center;
}
</style>
</head>
<body>

<h2>LABEL PENGIRIMAN</h2>

<p><b>Nama:</b> ${nama}</p>
<p><b>Alamat:</b> ${alamat}</p>
<p><b>Telp:</b> ${telp}</p>

<hr/>

<p><b>Penerima:</b> Bagas Putra</p>
<p><b>Alamat:</b> Surabaya</p>

<script>
window.onload=function(){
window.print()
}
</script>

</body>
</html>
`)

win.document.close()

}


/* ===============================
   UI
================================ */

return(

<section className="px-6 py-20 text-center">

<div className="max-w-3xl mx-auto">


{/* TITLE */}

<h2 className="text-xl font-semibold mb-6">
Amplop Digital
</h2>


{/* TAB BUTTON */}

<div className="flex justify-center gap-4 mb-10">

<button
onClick={()=>setTab("transfer")}
className={`px-4 py-2 rounded-full border text-sm ${
tab==="transfer"
?"bg-pink-500 text-white"
:"border-pink-500 text-pink-500"
}`}
>
Transfer
</button>

<button
onClick={()=>setTab("kirim")}
className={`px-4 py-2 rounded-full border text-sm ${
tab==="kirim"
?"bg-pink-500 text-white"
:"border-pink-500 text-pink-500"
}`}
>
Kirim Hadiah
</button>

</div>


{/* ===============================
   TRANSFER
================================ */}

{tab==="transfer" && (

<div>

<p className="text-sm mb-6">
Klik kartu untuk menyalin nomor rekening
</p>

<div className="flex justify-center gap-6 flex-wrap">


<div onClick={()=>copyRek(rekening.pria)} className="cursor-pointer">
<img
src="/card-pria.png"
alt="rekening pria"
className="w-[200px]"
/>
</div>


<div onClick={()=>copyRek(rekening.wanita)} className="cursor-pointer">
<img
src="/card-wanita.png"
alt="rekening wanita"
className="w-[200px]"
/>
</div>

</div>

</div>

)}


{/* ===============================
   KIRIM HADIAH
================================ */}

{tab==="kirim" && (

<div className="max-w-sm mx-auto space-y-4">

<input
placeholder="Nama"
value={nama}
onChange={(e)=>setNama(e.target.value)}
className="w-full border px-3 py-2 rounded"
/>

<input
placeholder="Alamat"
value={alamat}
onChange={(e)=>setAlamat(e.target.value)}
className="w-full border px-3 py-2 rounded"
/>

<input
placeholder="No Telp"
value={telp}
onChange={(e)=>setTelp(e.target.value)}
className="w-full border px-3 py-2 rounded"
/>

<button
onClick={printLabel}
className="px-4 py-2 bg-pink-500 text-white rounded"
>
Cetak Label
</button>

</div>

)}

</div>

</section>

)

}
