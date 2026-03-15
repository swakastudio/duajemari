"use client"

import { useState } from "react"

export default function WeddingEnvelope(){

/* ===============================
   TAB STATE
================================ */

const [tab,setTab] = useState<"transfer"|"kirim"|null>(null)


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

pria:"319401017385538",

wanita:"7254196902"

}


/* ===============================
   DATA PENERIMA
================================ */

const penerima = {

nama:"Nur Lailatul Maghfiroh",

alamat:`Jl. Kepuhkiriman Dalam Masjid
Gang IV RT 04 RW 01
Waru - Sidoarjo`,

telp:"08973124009"

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

const now = new Date()

const fileName =
`label_pengiriman_${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}_${now.getHours()}-${now.getMinutes()}`

const win = window.open("","_blank")

if(!win) return

win.document.write(`

<html>

<head>

<title>${fileName}</title>

<style>

@page{
size:A5 landscape;
margin:0;
}

*{
-webkit-print-color-adjust:exact;
print-color-adjust:exact;
}

body{
margin:0;
font-family:Arial, Helvetica, sans-serif;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
background:white;
}

.label{

width:18.5cm;
height:12cm;

border:2px solid #333;

padding:7px;

box-sizing:border-box;

display:flex;
flex-direction:column;
justify-content:space-between;

}

.header{

background:#ff4d6d;
color:white;
text-align:center;
font-size:26px;
font-weight:bold;
padding:10px;
border-radius:8px;
margin-bottom:15px;

}

.row{

display:flex;
font-size:18px;
margin-bottom:10px;

}

.label-name{
width:180px;
font-weight:bold;
}

.separator{
width:10px;
}

.value{
flex:1;
white-space:pre-line;
line-height:1.4;
}

.divider{
height:2px;
background:#ff4d6d;
margin:15px 0;
}

.footer{

background:#ff4d6d;
color:white;
text-align:center;
font-size:18px;
font-weight:bold;
padding:10px;
border-radius:6px;

}

</style>

</head>

<body>

<div class="label">

<div>

<div class="header">
KETERANGAN PENGIRIMAN PAKET
</div>

<div class="row">
<div class="label-name">Nama Pengirim</div>
<div class="separator">:</div>
<div class="value">${nama}</div>
</div>

<div class="row">
<div class="label-name">Alamat</div>
<div class="separator">:</div>
<div class="value">${alamat}</div>
</div>

<div class="row">
<div class="label-name">No. Telp</div>
<div class="separator">:</div>
<div class="value">${telp}</div>
</div>

<div class="divider"></div>

<div class="row">
<div class="label-name">Nama Penerima</div>
<div class="separator">:</div>
<div class="value">${penerima.nama}</div>
</div>

<div class="row">
<div class="label-name">Alamat</div>
<div class="separator">:</div>
<div class="value">${penerima.alamat}</div>
</div>

<div class="row">
<div class="label-name">No. Telp</div>
<div class="separator">:</div>
<div class="value">${penerima.telp}</div>
</div>

<div class="divider"></div>

<div class="footer">
TEMPELKAN LABEL INI DIATAS PAKET
</div>

</div>

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

<section className="fade-up relative px-6 pt-12 pb-24">

<div className="mx-auto max-w-4xl text-center">

{/* GLASS CONTAINER */}

<div className="
max-w-md
mx-auto
bg-white/40
backdrop-blur-xl
border border-white/40
rounded-2xl
shadow-[0_10px_40px_rgba(0,0,0,0.08)]
p-6
space-y-6
">

{/* TITLE */}

<h2 className="font-ltsip text-[24px] tracking-[0.06em] text-[#3f4d58]">
AMPL0P DIGITAL
</h2>


{/* DIVIDER */}

<div className="relative w-36 h-[2px] mx-auto mt-6 mb-12 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3f4d58] to-transparent opacity-70"></div>

<div className="absolute inset-0 animate-dividerShine bg-gradient-to-r from-transparent via-white to-transparent opacity-90"></div>

</div>


<p className="
text-[12px]
md:text-[16px]
leading-[2.25]
tracking-[0.02em]
text-neutral-700
font-light
">
Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
Namun apabila memberi adalah ungkapan tanda kasih,
Anda dapat memberi kado secara digital.
</p>


{/* TAB BUTTON */}

<div className="glass-radio-group">

<input
type="radio"
name="amplop"
id="transfer"
checked={tab==="transfer"}
onChange={()=>setTab("transfer")}
/>

<label htmlFor="transfer">
Transfer
</label>


<input
type="radio"
name="amplop"
id="kirim"
checked={tab==="kirim"}
onChange={()=>setTab("kirim")}
/>

<label htmlFor="kirim">
Kirim Hadiah
</label>

<div className="glass-glider"></div>

</div>



{/* ===============================
   TRANSFER
================================ */}

<div className={`transition-all duration-500 overflow-hidden
${tab==="transfer"?"max-h-[400px] opacity-100":"max-h-0 opacity-0"}
`}>

<p className="text-xs text-neutral-500 mb-4">
Klik kartu untuk menyalin nomor rekening
</p>

<div className="flex justify-center gap-6 flex-wrap">


<div
onClick={()=>copyRek(rekening.pria)}
className="cursor-pointer transition hover:scale-105"
>

<img
src="/firoh-arofi/card-pria.png"
className="w-[180px] md:w-[210px]"
/>

</div>


<div
onClick={()=>copyRek(rekening.wanita)}
className="cursor-pointer transition hover:scale-105"
>

<img
src="/firoh-arofi/card-wanita.png"
className="w-[180px] md:w-[210px]"
/>

</div>

</div>

</div>



{/* ===============================
   KIRIM HADIAH
================================ */}

<div className={`transition-all duration-500 overflow-hidden
${tab==="kirim"?"max-h-[500px] opacity-100":"max-h-0 opacity-0"}
`}>

<div className="space-y-3">

<input
placeholder="Nama Pengirim"
value={nama}
onChange={(e)=>setNama(e.target.value)}
className="w-full border border-neutral-300 rounded-lg px-4 py-2 text-sm"
/>

<input
placeholder="Alamat"
value={alamat}
onChange={(e)=>setAlamat(e.target.value)}
className="w-full border border-neutral-300 rounded-lg px-4 py-2 text-sm"
/>

<input
placeholder="No. Telp"
value={telp}
onChange={(e)=>setTelp(e.target.value)}
className="w-full border border-neutral-300 rounded-lg px-4 py-2 text-sm"
/>


<button
onClick={printLabel}
className="
w-full
py-2
rounded-full
bg-white/50
backdrop-blur-md
border border-white/60
text-sm
text-[#3f4d58]
hover:bg-white/70
transition
"
>

Cetak Label Pengiriman

</button>

</div>

</div>


</div>

</div>

</section>

)

}
