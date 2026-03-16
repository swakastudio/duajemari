"use client"

export default function Closing(){

return(

<section className="fade-up px-6 py-20 text-center mt-16">

<div className="
mx-auto
max-w-3xl
rounded-[32px]
border border-white/55
bg-white/40
px-10 py-14
backdrop-blur-md
shadow-[0_10px_50px_rgba(0,0,0,0.05)]
">

{/* FOTO MEMPELAI */}

<div className="fade-up fade-delay-1 mb-10 flex justify-center">

<img
src="/firoh-arofi/firo-arofi-(6).jpeg"
alt="Firoh & Arofi"
className="
w-[160px]
h-[160px]
md:w-[190px]
md:h-[190px]
object-cover
rounded-[28px]
border border-white/60
shadow-[0_15px_40px_rgba(0,0,0,0.12)]
"
/>

</div>


{/* TEXT */}

<p className="
fade-up
fade-delay-2
text-[12px]
md:text-[16px]
leading-[2.25]
tracking-[0.02em]
text-[#3A3A3A]
font-light
">

Merupakan suatu kehormatan dan kebahagiaan bagi kami
apabila Bapak/Ibu/Saudara/i berkenan hadir
untuk memberikan doa restu kepada kami.

</p>


{/* DIVIDER */}

<div className="flex items-center justify-center gap-4 my-8">

<div className="w-16 h-[1px] bg-neutral-300"></div>

<span className="text-neutral-400 text-sm">✦</span>

<div className="w-16 h-[1px] bg-neutral-300"></div>

</div>


{/* THANK YOU */}

<p className="
fade-up
fade-delay-3
text-[13px]
tracking-[0.2em]
text-[#3A3A3A]
mb-3
">
Terima Kasih
</p>


{/* NAMA MEMPELAI */}

<h3 className="
fade-up
fade-delay-4
font-royalti
text-[36px]
text-[#3f4d58]
tracking-[-0.01em]
">

Firoh
<span className="mx-3 text-[24px] text-neutral-400">
&
</span>
Arofi

</h3>


{/* DATE */}

<p className="
fade-up
fade-delay-5
mt-3
text-[12px]
tracking-[0.25em]
text-[#3A3A3A]
">
04 • 04 • 2026
</p>

</div>

</section>

)

}
