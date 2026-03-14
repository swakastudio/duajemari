"use client"

import { useState } from "react"

export default function GiftEnvelope(){

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

const penerimaNama = "Bagas Putra"

const penerimaAlamat = `Jl. Kutisari No.36 Kutisari
Kec. Tenggilis Mejoyo
Surabaya
Jawa Timur`

const penerimaTelp = "081234567890"

const now = new Date()

const fileName =
`print_label_duajemari_${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}_${now.getHours()}-${now.getMinutes()}`

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
-webkit-print-color-adjust: exact;
print-color-adjust: exact;
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

padding:20px;

box-sizing:border-box;

display:flex;
flex-direction:column;
justify-content:space-between;

}

.header{

background:#ff4d6d;
color:white;
text-align:center;
font-size:28px;
font-weight:bold;
padding:10px;
border-radius:10px;
margin-bottom:15px;

}

.row{
display:flex;
font-size:20px;
margin-bottom:10px;
align-items:flex-start;
}

.label-name{
width:180px;
font-weight:bold;
}

.separator{
width:15px;
}

.value{
flex:1;
white-space:pre-line;
line-height:1.3;
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
font-size:20px;
font-weight:bold;
padding:12px;
margin-top:18px;
border-radius:6px;
}

.printinfo{
position:absolute;
bottom:8px;
left:12px;
font-size:10px;
color:#555;
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
<div class="value">${penerimaNama}</div>
</div>

<div class="row">
<div class="label-name">Alamat</div>
<div class="separator">:</div>
<div class="value">${penerimaAlamat}</div>
</div>

<div class="row">
<div class="label-name">No. Telp</div>
<div class="separator">:</div>
<div class="value">${penerimaTelp}</div>
</div>

<div class="divider"></div>

<div class="footer">
TEMPELKAN KETERANGAN BERIKUT DIATAS PAKET
</div>

</div>

<div class="printinfo">
${fileName}
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

<section className="fade-up relative px-6 py-24">

   <div
className="
relative z-20
max-w-xl mx-auto
text-center
px-10
py-16
rounded-[36px]
bg-white/35
backdrop-blur-xl
border border-white/40
shadow-[0_20px_70px_rgba(0,0,0,0.12)]
"
>

<div className="mx-auto max-w-4xl text-center">


{/* TITLE */}

<h2 className="font-ltsip text-[24px] tracking-[0.06em] text-[#3f4d58]">
AMPL0P DIGITAL
</h2>


{/* DIVIDER */}

<div className="relative w-36 h-[2px] mx-auto mt-6 mb-12 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3f4d58] to-transparent opacity-70"></div>

<div className="absolute inset-0 animate-dividerShine bg-gradient-to-r from-transparent via-white to-transparent opacity-90"></div>

</div>


<p className="text-sm text-neutral-600 mb-8 max-w-md mx-auto leading-relaxed">
Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
Namun apabila memberi adalah ungkapan tanda kasih,
Anda dapat memberi kado secara digital.
</p>



{/* TAB BUTTON */}

<div className="flex justify-center gap-4 mb-10">

<button
onClick={()=>setTab("transfer")}
className={`px-5 py-2 text-sm rounded-full border transition
${tab==="transfer"
?"bg-[#ff4d6d] text-white border-[#ff4d6d]"
:"border-[#ff4d6d] text-[#ff4d6d]"
}`}
>
Transfer
</button>


<button
onClick={()=>setTab("kirim")}
className={`px-5 py-2 text-sm rounded-full border transition
${tab==="kirim"
?"bg-[#ff4d6d] text-white border-[#ff4d6d]"
:"border-[#ff4d6d] text-[#ff4d6d]"
}`}
>
Kirim Hadiah
</button>

</div>



{/* ===============================
   TRANSFER
================================ */}

<div
className={`
transition-all duration-500 overflow-hidden
${tab==="transfer"
?"max-h-[500px] opacity-100"
:"max-h-0 opacity-0"}
`}
>

<p className="text-xs text-neutral-500 mb-6">
Klik kartu untuk menyalin nomor rekening
</p>

<div className="flex justify-center gap-8 flex-wrap">


{/* CARD PRIA */}

<div
onClick={()=>copyRek(rekening.pria)}
className="cursor-pointer transition hover:scale-105"
>

<img
src="/firoh-arofi/card-pria.png"
className="w-[190px] md:w-[220px]"
/>

</div>



{/* CARD WANITA */}

<div
onClick={()=>copyRek(rekening.wanita)}
className="cursor-pointer transition hover:scale-105"
>

<img
src="/firoh-arofi/card-wanita.png"
className="w-[190px] md:w-[220px]"
/>

</div>

</div>

</div>



{/* ===============================
   KIRIM HADIAH
================================ */}

<div
className={`
transition-all duration-500 overflow-hidden
${tab==="kirim"
?"max-h-[600px] opacity-100"
:"max-h-0 opacity-0"}
`}
>

<div className="max-w-sm mx-auto space-y-4 mt-4">

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


<div className="flex justify-center gap-4 pt-2">

<button
onClick={printLabel}
className="px-4 py-2 text-sm rounded-full border border-[#ff4d6d] text-[#ff4d6d] hover:bg-[#ff4d6d] hover:text-white transition"
>
Cetak Label
</button>

</div>

</div>

</div>



</div>

</section>

)

}
