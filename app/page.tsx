import Link from "next/link"

import Reveal from "@/components/Reveal"
import FeatureCard from "@/components/FeatureCard"
import Counter from "@/components/Counter"
import TestimonialSlider from "@/components/TestimonialSlider"

import Countdown from "@/components/Countdown"
import WeatherCard from "@/components/WeatherCard"
import GiftEnvelope from "@/components/GiftEnvelope"
import GuestCounter from "@/components/GuestCounter"



export default function Home() {

return (

<main className="bg-white text-black">



{/* HERO SECTION */}

<section className="min-h-screen flex items-center px-6">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">


{/* TEXT */}

<div className="space-y-8">

<h1 className="text-5xl md:text-6xl font-semibold leading-tight">

Kisah Baru{" "}

<Link href="/product" className="hero-link">

Dimulai

</Link>

<br/>

Dari Sebuah Undangan

</h1>


<p className="text-lg text-neutral-500 max-w-lg">

Rayakan hari paling berharga dengan undangan digital
yang elegan dan siap dibagikan ke semua tamu.

</p>


<div className="flex gap-4">

<Link
href="/product"
className="px-8 py-3 bg-black text-white rounded-full hover:opacity-90 transition"
>

Pesan Undangan

</Link>


<Link
href="/porto"
className="px-8 py-3 border rounded-full hover:bg-neutral-100 transition"
>

Lihat Contoh

</Link>

</div>

</div>



{/* PREVIEW */}

<div className="flex justify-center">

<div className="w-full max-w-md h-[380px] border rounded-3xl flex items-center justify-center text-neutral-400">

Preview Undangan

</div>

</div>


</div>

</section>



{/* TRUST SECTION */}

<section className="py-24 border-t">

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 text-center">


<div>

<p className="text-4xl font-semibold">

<Counter value={500}/>+

</p>

<p className="text-neutral-500 mt-2">

Undangan telah dibuat

</p>

</div>



<div>

<p className="text-4xl font-semibold">

<Counter value={12000}/>+

</p>

<p className="text-neutral-500 mt-2">

Tamu menghadiri acara

</p>

</div>



<div>

<p className="text-4xl font-semibold">

<Counter value={98}/>%

</p>

<p className="text-neutral-500 mt-2">

Rating pasangan

</p>

</div>


</div>

</section>



{/* SECTION FITUR */}

<section className="py-32 px-6 bg-neutral-50">

<div className="max-w-7xl mx-auto">

<h2 className="text-4xl text-center mb-20">

Fitur Undangan

</h2>



<div className="grid md:grid-cols-3 gap-10">


{/* NADA KISAH */}

<Reveal delay={0}>

<FeatureCard
title="Nada Kisah"
description="Musik latar romantis saat membuka undangan"
>

<p className="text-sm text-neutral-500">

Undangan dapat memutar lagu romantis yang menyertai
kisah cinta pasangan.

</p>

</FeatureCard>

</Reveal>



{/* JEJAK KENANGAN */}

<Reveal delay={100}>

<FeatureCard
title="Jejak Kenangan"
description="Galeri perjalanan cinta pasangan"
>

<p className="text-sm text-neutral-500">

Galeri foto perjalanan cinta pasangan dari awal
hingga hari bahagia.

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

<iframe
src="https://maps.google.com/maps?q=Sheraton%20Surabaya&t=&z=13&ie=UTF8&iwloc=&output=embed"
className="w-full h-40 rounded-lg border"
/>

</FeatureCard>

</Reveal>



{/* RSVP */}

<Reveal delay={400}>

<FeatureCard
title="Kehadiran Anda"
description="Konfirmasi kehadiran tamu"
>

<p className="text-sm text-neutral-500">

Tamu dapat mengisi RSVP untuk memastikan
kehadiran di acara pernikahan.

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

Tamu dapat meninggalkan doa dan ucapan
untuk pasangan mempelai.

</p>

</FeatureCard>

</Reveal>



{/* GIFT ENVELOPE */}

<Reveal delay={600}>

<FeatureCard
title="Gift Envelope"
description="Transfer atau kirim hadiah"
>

<GiftEnvelope/>

</FeatureCard>

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



{/* TIKTOK */}

<Reveal delay={900}>

<FeatureCard
title="TikTok Effect"
description="Twibbon effect untuk story"
>

<p className="text-sm text-neutral-500">

Gunakan effect TikTok untuk membagikan
momen bahagia ke sosial media.

</p>

</FeatureCard>

</Reveal>



{/* STORY MODE */}

<Reveal delay={1000}>

<FeatureCard
title="Story Mode"
description="Mode story untuk membagikan undangan"
>

<p className="text-sm text-neutral-500">

Undangan dapat dibagikan dalam format story
seperti Instagram.

</p>

</FeatureCard>

</Reveal>


</div>

</div>

</section>



{/* TESTIMONIAL */}

<section className="py-32 px-6">

<h2 className="text-4xl text-center mb-20">

Cerita dari Pasangan

</h2>

<TestimonialSlider/>

</section>



</main>

)

}