import Link from "next/link"

import Reveal from "@/components/Reveal"
import FeatureCard from "@/components/FeatureCard"
import Counter from "@/components/Counter"
import TestimonialSlider from "@/components/TestimonialSlider"

import Countdown from "@/components/Countdown"
import WeatherCard from "@/components/WeatherCard"
import GiftEnvelope from "@/components/GiftEnvelope"
import GuestCounter from "@/components/GuestCounter"

export default function Home(){

return(

<main className="bg-white text-black">



{/* ================= HERO ================= */}

<section className="min-h-screen flex items-center px-6">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-24">

{/* TEXT */}

<div className="space-y-8">

<h1 className="text-5xl md:text-6xl font-semibold leading-tight">

Kisah Baru{" "}

<Link
href="/product"
className="hero-link text-[#ff4d6d]"
>
Dimulai
</Link>

<br/>

Dari Sebuah Undangan

</h1>


<p className="text-lg text-neutral-500 max-w-lg">

Rayakan hari paling berharga dengan undangan digital
yang elegan dan siap dibagikan ke semua tamu.

</p>



{/* BUTTON */}

<div className="flex gap-4">

<Link
href="/product"
className="px-8 py-3 rounded-full bg-[#ff4d6d] text-white font-medium shadow-md
hover:shadow-lg hover:scale-[1.02] transition duration-300"
>

Pesan Undangan

</Link>


<Link
href="/porto"
className="px-8 py-3 rounded-full border border-[#ff4d6d] text-[#ff4d6d] font-medium
hover:bg-[#ff4d6d] hover:text-white transition duration-300"
>

Lihat Contoh

</Link>

</div>

</div>



{/* PREVIEW */}

<div className="flex justify-center">

<div className="w-full max-w-md h-[380px] border border-neutral-200 rounded-3xl flex items-center justify-center text-neutral-400">

Preview Undangan

</div>

</div>

</div>

</section>



{/* ================= TRUST ================= */}

<section className="py-18 border-t border-neutral-200">

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">


{/* CARD */}

<div>

<p className="text-4xl font-semibold text-[#ff4d6d]">

<Counter value={500}/>+

</p>

<p className="text-neutral-500 mt-2">

Undangan telah dibuat

</p>

</div>



<div>

<p className="text-4xl font-semibold text-[#ff4d6d]">

<Counter value={12000}/>+

</p>

<p className="text-neutral-500 mt-2">

Tamu menghadiri acara

</p>

</div>



<div>

<p className="text-4xl font-semibold text-[#ff4d6d]">

<Counter value={98}/>%

</p>

<p className="text-neutral-500 mt-2">

Rating pasangan

</p>

</div>


</div>

</section>



{/* ================= FITUR ================= */}

<section className="py-16 px-6 bg-neutral-50">

<div className="max-w-7xl mx-auto">

<h2 className="text-4xl text-center mb-16 font-semibold">

Fitur Undangan

</h2>



<div className="grid md:grid-cols-3 gap-8">


{/* MUSIK */}

<Reveal delay={0}>

<FeatureCard
title="Nada Kisah"
description="Musik latar romantis saat membuka undangan"
>

<p className="text-sm text-neutral-500">

Undangan dapat memutar lagu romantis yang menyertai kisah cinta pasangan.

</p>

</FeatureCard>

</Reveal>



{/* GALERI */}

<Reveal delay={100}>

<FeatureCard
title="Jejak Kenangan"
description="Galeri perjalanan cinta pasangan"
>

<p className="text-sm text-neutral-500">

Galeri foto perjalanan cinta pasangan dari awal hingga hari bahagia.

</p>

</FeatureCard>

</Reveal>



{/* COUNTDOWN */}

<Reveal delay={200}>

<FeatureCard
title="Hitung Hari Bahagia"
description="Countdown menuju hari pernikahan"
>

<Countdown/>

</FeatureCard>

</Reveal>



{/* MAP */}

<Reveal delay={300}>

<FeatureCard
title="Petunjuk Arah"
description="Peta lokasi acara"
>

<div className="space-y-4">

<iframe
src="https://maps.google.com/maps?q=Sheraton%20Surabaya&t=&z=15&ie=UTF8&iwloc=&output=embed"
className="w-full h-[230px] rounded-xl border-2 border-[#ff4d6d] shadow-[0_4px_20px_rgba(255,77,109,0.25)]"
/>

<a
href="https://maps.google.com/?q=Sheraton%20Surabaya"
target="_blank"
className="block text-center text-sm font-medium text-[#ff4d6d] hover:underline"
>

Buka di Google Maps

</a>

</div>

</FeatureCard>

</Reveal>



{/* RSVP */}

<Reveal delay={400}>

<FeatureCard
title="Kehadiran Anda"
description="Konfirmasi kehadiran tamu"
>

<p className="text-sm text-neutral-500">

Tamu dapat mengisi RSVP untuk memastikan kehadiran.

</p>

</FeatureCard>

</Reveal>



{/* UCAPAN */}

<Reveal delay={500}>

<FeatureCard
title="Doa & Harapan"
description="Pesan dari tamu undangan"
>

<p className="text-sm text-neutral-500">

Tamu dapat meninggalkan doa dan ucapan untuk pasangan mempelai.

</p>

</FeatureCard>

</Reveal>



{/* GIFT */}

<Reveal delay={600}>

<div className="md:col-span-3">

<FeatureCard
title="Gift Envelope"
description="Transfer atau kirim hadiah"
>

<GiftEnvelope/>

</FeatureCard>

</div>

</Reveal>



{/* GUEST COUNTER */}

<Reveal delay={700}>

<FeatureCard
title="Live Guest Counter"
description="Jumlah tamu membuka undangan"
>

<GuestCounter/>

</FeatureCard>

</Reveal>



{/* WEATHER */}

<Reveal delay={800}>

<FeatureCard
title="Wedding Weather"
description="Update cuaca lokasi acara"
>

<WeatherCard/>

</FeatureCard>

</Reveal>



{/* SOCIAL */}

<Reveal delay={900}>

<FeatureCard
title="Social Media Effect"
description="Twibbon effect untuk story"
>

<p className="text-sm text-neutral-500">

Gunakan effect untuk membagikan momen bahagia ke sosial media.

</p>

</FeatureCard>

</Reveal>


</div>

</div>

</section>


{/* ================= TESTIMONIAL ================= */}

{/* TESTIMONIAL */}

<section className="pt-8 pb-14 px-6 bg-[#fff7f9]">

<div className="max-w-7xl mx-auto text-center">

<h2 className="text-4xl md:text-5xl font-semibold mb-8">
Cerita dari Pasangan
</h2>

<p className="text-neutral-500 max-w-xl mx-auto mb-16">
Pengalaman pasangan yang telah menggunakan undangan digital duajemari.
</p>


{/* GRID TESTIMONIAL */}

<div className="grid md:grid-cols-3 gap-8">


{/* CARD 1 */}

<div className="bg-white border border-[#ff4d6d]/30 rounded-2xl p-8 shadow-[0_10px_30px_rgba(255,77,109,0.12)] hover:shadow-[0_10px_40px_rgba(255,77,109,0.2)] transition">

<div className="flex justify-center mb-4">

<img
src="https://i.pravatar.cc/120?img=11"
className="w-16 h-16 rounded-full object-cover"
/>

</div>

<p className="text-neutral-600 text-sm leading-relaxed mb-4">

"Undangannya elegan banget dan mudah dibagikan ke tamu.
Semua tamu langsung bisa lihat lokasi dan RSVP."

</p>

<p className="font-semibold text-[#ff4d6d]">
Andra & Fina
</p>

</div>



{/* CARD 2 */}

<div className="bg-white border border-[#ff4d6d]/30 rounded-2xl p-8 shadow-[0_10px_30px_rgba(255,77,109,0.12)] hover:shadow-[0_10px_40px_rgba(255,77,109,0.2)] transition">

<div className="flex justify-center mb-4">

<img
src="https://i.pravatar.cc/120?img=12"
className="w-16 h-16 rounded-full object-cover"
/>

</div>

<p className="text-neutral-600 text-sm leading-relaxed mb-4">

"Fitur gift envelope sangat membantu.
Tamu bisa langsung transfer tanpa ribet."

</p>

<p className="font-semibold text-[#ff4d6d]">
Rafi & Nabila
</p>

</div>



{/* CARD 3 */}

<div className="bg-white border border-[#ff4d6d]/30 rounded-2xl p-8 shadow-[0_10px_30px_rgba(255,77,109,0.12)] hover:shadow-[0_10px_40px_rgba(255,77,109,0.2)] transition">

<div className="flex justify-center mb-4">

<img
src="https://i.pravatar.cc/120?img=15"
className="w-16 h-16 rounded-full object-cover"
/>

</div>

<p className="text-neutral-600 text-sm leading-relaxed mb-4">

"Designnya simpel tapi terlihat mahal.
Kami sangat puas menggunakan duajemari."

</p>

<p className="font-semibold text-[#ff4d6d]">
Bagas & Intan
</p>

</div>


</div>

</div>

</section>


</main>

)

}
