"use client"

export default function BrideGroom(){

return(

<section className="fade-up relative px-6 py-18 overflow-hidden">

  <img
src="/firoh-arofi/flower-left-bridegroom.gif"
alt="flower-left"
className="absolute left-[0px] top-[520px] w-[260px] pointer-events-none z-30"
/>

<img
src="/firoh-arofi/flower-right-bridegroom.gif"
alt="flower-right"
className="absolute right-[0px] top-[520px] w-[260px] pointer-events-none z-30"
/>

<img
src="/firoh-arofi/flower-bottom-bridegroom.gif"
alt="flower-bottom"
className="absolute left-1/2 -translate-x-1/2 bottom-[20px] w-full pointer-events-none z-30"
/>
  
 <div className="max-w-xl mx-auto relative z-10">

{/* ================= GLASS CARD ================= */}

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

{/* ================= TITLE ================= */}

<h2
className="
font-ltsip
text-[34px]
md:text-[40px]
tracking-[0.08em]
text-neutral-600
"
>
MEMPELAI
</h2>


{/* SHINY DIVIDER */}

<div className="relative w-36 h-[2px] mx-auto mt-6 mb-10 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3f4d58] to-transparent opacity-70"></div>

<div className="absolute inset-0 animate-dividerShine bg-gradient-to-r from-transparent via-white to-transparent opacity-90"></div>

</div>


<p
className="
text-[12px]
leading-[2]
text-neutral-600
max-w-md
mx-auto
"
>
Assalamualaikum Wr.Wb
Tanpa mengurangi rasa hormat, kami mengundang
Bapak/Ibu/Saudara/i untuk menghadiri
acara pernikahan kami :
</p>


{/* ================= BRIDE ================= */}

<div className="mt-16">

<img
src="/firoh-arofi/photo-woman.png"
alt="Bride"
className="mx-auto w-[220px] animate-photoFloat"
/>

<h3
className="
font-billy
text-[35px]
text-neutral-600
mt-6
leading-[1.2]
"
>
Nur Lailatul Maghfiroh, S.Pd.
</h3>

<p
className="
text-[12px]
leading-[1.9]
text-neutral-600
mt-4
max-w-[260px]
mx-auto
"
>
Putri Ketiga dari
<br/>
Bapak Muchammad Haris
<br/>
& Ibu Isnaini (Almarhum)
</p>

<a
href="https://instagram.com/_maghfiroh"
target="_blank"
rel="noreferrer"
className="
mt-6
inline-flex
items-center
justify-center
w-10 h-10
rounded-full
border border-neutral-300
bg-white/70
shadow-sm
transition
hover:scale-110
"
>
<img
src="/firoh-arofi/logo-instagram.svg"
alt="Instagram"
className="w-5 h-5"
/>
</a>

</div>


{/* ================= ORNAMENT ================= */}

<div className="flex justify-center my-16">

<img
src="/firoh-arofi/tanda-pisah.svg"
alt="Divider"
className="w-[28px] opacity-80"
/>

</div>


{/* ================= GROOM ================= */}

<div>

<img
src="/firoh-arofi/photo-man.png"
alt="Groom"
className="mx-auto w-[220px] animate-photoFloat delay-float"
/>

<h3
className="
font-billy
text-[35px]
text-neutral-600
mt-6
leading-[1.2]
"
>
Ibnu Arofi, S.Pd., Gr., SE
</h3>

<p
className="
text-[12px]
leading-[1.9]
text-neutral-600
mt-4
max-w-[260px]
mx-auto
"
>
Putra Kedua dari
<br/>
Bapak Abdul Wahid Musyadad
<br/>
& Ibu Sri Lestari
</p>

<a
href="https://instagram.com/ibnu.arofi"
target="_blank"
rel="noreferrer"
className="
mt-6
inline-flex
items-center
justify-center
w-10 h-10
rounded-full
border border-neutral-300
bg-white/70
shadow-sm
transition
hover:scale-110
"
>
<img
src="/firoh-arofi/logo-instagram.svg"
alt="Instagram"
className="w-5 h-5"
/>
</a>

</div>


</div>

</div>

</section>

)

}
