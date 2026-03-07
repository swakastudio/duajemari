import Link from "next/link"

export default function Footer(){

return(

<footer className="bg-[#ff4d6d] text-white py-16 px-6">

<div className="max-w-7xl mx-auto px-6 py-16">

<div className="grid md:grid-cols-3 gap-12">

{/* BRAND */}

<div>

<h2 className="text-2xl font-semibold mb-4">

duajemari

</h2>

<p className="text-neutral-400">

Undangan digital elegan untuk
momen pernikahan yang berkesan.

</p>

</div>


{/* KONTAK */}

<div>

<h3 className="font-semibold mb-4">

Kontak

</h3>

<p className="text-neutral-400">

Perum Tas 7 Blok C2 No.31  
Popoh, Wonoayu  
Sidoarjo

</p>

<div className="mt-4 space-y-2">

<p>
WhatsApp :
</p>

<a
href="https://wa.me/6285748502216"
className="block text-neutral-400 hover:text-white transition"
>

085748502216

</a>

<a
href="https://wa.me/6281358435642"
className="block text-neutral-400 hover:text-white transition"
>

081358435642

</a>

</div>

</div>


{/* SOCIAL */}

<div>

<h3 className="font-semibold mb-4">

Social Media

</h3>

<div className="space-y-3">

<Link
href="#"
className="block text-neutral-400 hover:text-white transition"
>

Instagram

</Link>

<Link
href="#"
className="block text-neutral-400 hover:text-white transition"
>

TikTok

</Link>

</div>

</div>

</div>


{/* COPYRIGHT */}

<div className="border-t border-neutral-800 mt-12 pt-6 text-center text-neutral-500 text-sm">

© {new Date().getFullYear()} duajemari. All rights reserved.

</div>

</div>

</footer>

)

}