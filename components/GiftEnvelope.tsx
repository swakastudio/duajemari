"use client"

import { useState } from "react"

export default function GiftEnvelope() {

  /* ===============================
     TAB STATE
  =============================== */

  const [tab, setTab] = useState<"transfer" | "kirim">("transfer")


  /* ===============================
     FORM STATE
  =============================== */

  const [nama, setNama] = useState("")
  const [alamat, setAlamat] = useState("")
  const [telp, setTelp] = useState("")


  /* ===============================
     DATA REKENING
  =============================== */

  const rekening = {
    pria: "5379001234567890",
    wanita: "5249001433367560"
  }


  /* ===============================
     DATA PENERIMA (SPREADSHEET)
  =============================== */

  const penerima = {

    nama: "Bagas Putra",

    alamat:
      "Jl. Kutisari No.36, Kutisari, Kec. Tenggilis Mejoyo, Surabaya, Jawa Timur",

    telp: "081234567890"

  }


  /* ===============================
     COPY REKENING
  =============================== */

  const copyRek = (rek: string) => {

    navigator.clipboard.writeText(rek)

    alert("Nomor rekening berhasil disalin")

  }



  /* ===============================
     DOWNLOAD LABEL
  =============================== */

  const downloadLabel = () => {

    const link = document.createElement("a")

    link.href = "/shipping.png"

    link.download = "label-pengiriman.png"

    link.click()

  }



  /* ===============================
     PRINT LABEL
  =============================== */
const printLabel = () => {

const penerimaNama = "Bagas Putra"

const penerimaAlamat = `Jl. Kutisari No.36 Kutisari
Kec. Tenggilis Mejoyo
Surabaya
Jawa Timur`

const penerimaTelp = "081234567890"

const now = new Date()

const fileName =
`print_label_duajemari_${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}_${now.getHours()}-${now.getMinutes()}`

const win = window.open("", "_blank")

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

/* HEADER */

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

/* ROW */

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

/* divider */

.divider{

height:2px;

background:#ff4d6d;

margin:15px 0;

}

/* footer */

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
window.onload = function(){
window.print()
}
</script>

</body>
</html>
`)

win.document.close()

}



  /* ===============================
     UI COMPONENT
  =============================== */

  return (

    <div className="border border-[#ff4d6d] rounded-2xl p-4 space-y-4">


      {/* ===============================
         TAB BUTTON
      =============================== */}

      <div className="flex justify-center gap-3">

        <button
          onClick={() => setTab("transfer")}
          className={`px-4 py-1.5 text-sm rounded-md border transition
          ${tab === "transfer"
              ? "bg-[#ff4d6d] text-white border-[#ff4d6d]"
              : "border-[#ff4d6d] text-[#ff4d6d]"
            }`}
        >
          Transfer
        </button>


        <button
          onClick={() => setTab("kirim")}
          className={`px-4 py-1.5 text-sm rounded-md border transition
          ${tab === "kirim"
              ? "bg-[#ff4d6d] text-white border-[#ff4d6d]"
              : "border-[#ff4d6d] text-[#ff4d6d]"
            }`}
        >
          Kirim Hadiah
        </button>

      </div>



      {/* ===============================
         TRANSFER TAB
      =============================== */}

      {tab === "transfer" && (

        <div className="space-y-3">

          <p className="text-[11px] text-center text-neutral-500">
            Klik kartu untuk menyalin nomor rekening mempelai
          </p>

          <div className="grid grid-cols-2 gap-3 justify-items-center">

            <div
              onClick={() => copyRek(rekening.pria)}
              className="cursor-pointer hover:scale-105 transition"
            >

              <img
                src="/card-pria.png"
                className="w-[120px]"
              />

            </div>


            <div
              onClick={() => copyRek(rekening.wanita)}
              className="cursor-pointer hover:scale-105 transition"
            >

              <img
                src="/card-wanita.png"
                className="w-[120px]"
              />

            </div>

          </div>

        </div>

      )}



      {/* ===============================
         KIRIM HADIAH TAB
      =============================== */}

      {tab === "kirim" && (

        <div className="space-y-3">

          <p className="text-[11px] text-center text-neutral-500">
            Tamu dapat mencetak keterangan pengiriman paket
          </p>


          <input
            placeholder="Nama Pengirim"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full border border-neutral-300 rounded-md px-3 py-1.5 text-xs"
          />


          <input
            placeholder="Alamat"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            className="w-full border border-neutral-300 rounded-md px-3 py-1.5 text-xs"
          />


          <input
            placeholder="No. Telp"
            value={telp}
            onChange={(e) => setTelp(e.target.value)}
            className="w-full border border-neutral-300 rounded-md px-3 py-1.5 text-xs"
          />


          <div className="flex justify-center gap-3">

            <button
              onClick={downloadLabel}
              className="px-3 py-1 text-xs border border-[#ff4d6d] text-[#ff4d6d] rounded-md hover:bg-[#ff4d6d] hover:text-white transition"
            >
              Unduh
            </button>


            <button
              onClick={printLabel}
              className="px-3 py-1 text-xs border border-[#ff4d6d] text-[#ff4d6d] rounded-md hover:bg-[#ff4d6d] hover:text-white transition"
            >
              Cetak
            </button>

          </div>

        </div>

      )}

    </div>

  )

}