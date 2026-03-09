"use client"

import { useParams } from "next/navigation"
import WeddingLoader from "../components/WeddingLoader"

export default function Page(){

const params = useParams()

const guest =
decodeURIComponent(String(params.guest)).replaceAll("-", " ")

return(

<>

{/* LOADER */}

<WeddingLoader/>

{/* COVER */}

<main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-white">

<p className="text-sm mb-2 text-neutral-500 tracking-widest">
Kepada Yth.
</p>

<h2 className="text-2xl font-semibold mb-10">
{guest}
</h2>

<h1 className="text-3xl font-bold text-[#6B8FA3]">
Ibnu Arofi
</h1>

<p className="my-2 text-neutral-400">
&
</p>

<h1 className="text-3xl font-bold text-[#6B8FA3]">
Maghfiroh
</h1>

<button className="mt-10 px-8 py-3 bg-[#6B8FA3] text-white rounded-full text-sm hover:opacity-90 transition">
Buka Undangan
</button>

</main>

</>

)

}