"use client"

import Ayat from "../components/Ayat"
import BrideGroom from "../components/BrideGroom"
import MenghitungHari from "../components/MenghitungHari"
import HariBahagia from "../components/HariBahagia"
import Pattern from "../components/Pattern"
import WeddingEnvelope from "../components/WeddingEnvelope"
import GuestWish from "../components/GuestWish"
import Closing from "../components/Closing"
import MusicPlayer from "../components/MusicPlayer"
import useFadeUp from "../components/useFadeUp"

export default function InvitationPage(){

useFadeUp()

return(

<main className="relative overflow-x-hidden text-neutral-800">

{/* BACKGROUND */}

<div className="fixed inset-0 -z-0 overflow-hidden">

{/* SKY */}

<div className="absolute inset-0 bg-[#e9f3f8]" />

{/* CLOUDS */}

<div
className="absolute inset-0 opacity-60"
style={{
backgroundImage: "url('/firoh-arofi/bg-clouds.png')",
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
}}
/>

{/* MOUNTAIN */}

<img
src="/firoh-arofi/bg-mountain.png"
alt="mountain"
className="
absolute
bottom-0
left-1/2
-translate-x-1/2
w-[160%]
md:w-full
opacity-90
pointer-events-none
"
/>

  {/* FLOWER VIDEO */}

<div className="absolute bottom-0 left-0 w-full pointer-events-none">

<video
autoPlay
loop
muted
playsInline
className="w-full object-cover"
>

<source src="/firoh-arofi/frame-flower.webm" type="video/webm"/>

</video>

</div>

</div>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/50"></div>
{/* ===============================
PAGE CONTENT
=============================== */}

<div className="relative z-10 space-y-16 md:space-y-40">

<MusicPlayer/>

<Ayat/>

<BrideGroom/>

<MenghitungHari/>

<HariBahagia/>

<Pattern/>

<WeddingEnvelope/>

<GuestWish/>

<Closing/>

{/* FOOTER */}

<footer className="text-center py-16 mt-16">

<p className="text-[12px] tracking-[0.18em] text-[#FEFEFE]">
DIBUAT OLEH
</p>

<a
href="https://duajemari.vercel.app"
target="_blank"
rel="noreferrer"
className="
inline-block
mt-3
text-[15px]
font-medium
tracking-[0.05em]
text-[#FEFEFE]
hover:underline
"
>
duajemari.vercel.app
</a>

</footer>

</div>

</main>

)

}
