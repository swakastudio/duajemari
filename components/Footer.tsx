"use client"

import Link from "next/link"

export default function Footer() {

return(

<footer className="bg-gradient-to-b from-[#ff4d6d] to-[#ff3b60] text-white mt-32">

<div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12">


{/* BRAND */}

<div>

<h3 className="text-2xl font-semibold mb-4">
duajemari
</h3>

<p className="text-white/80 leading-relaxed max-w-xs">
Undangan digital elegan untuk momen pernikahan
yang berkesan dan mudah dibagikan ke semua tamu.
</p>

</div>


{/* KONTAK */}

<div>

<h4 className="font-semibold mb-4">
Kontak
</h4>

<p className="text-white/80 mb-4 leading-relaxed">

Perum Tas 7 Blok C2 No.31  
Popoh, Wonoayu  
Sidoarjo

</p>

<p className="text-white/90 font-medium">
WhatsApp
</p>

<div className="space-y-1 mt-2 text-white/80">

<p>085748502216</p>
<p>081358435642</p>

</div>

</div>


{/* SOCIAL */}

<div>

<h4 className="font-semibold mb-4">
Social Media
</h4>

<div className="space-y-2 text-white/80">

<a
href="#"
className="block hover:text-white transition"
>
Instagram
</a>

<a
href="#"
className="block hover:text-white transition"
>
TikTok
</a>

</div>

</div>


</div>


{/* LINE */}

<div className="max-w-7xl mx-auto px-6">

<div className="border-t border-white/30 py-6 text-center text-sm text-white/80">

© {new Date().getFullYear()} duajemari. All rights reserved.

</div>

</div>

</footer>

)

}