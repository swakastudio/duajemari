"use client"

export default function BrideGroom(){

return(

<section className="fade-up relative px-6 py-40 overflow-hidden">

<div className="max-w-xl mx-auto text-center">


{/* TITLE */}

<h2 className="
font-ltsip
text-[34px]
md:text-[40px]
tracking-[0.08em]
text-[#3f4d58]
">
Mempelai
</h2>

<p className="
text-[13px]
leading-[2]
text-neutral-600
mt-4
max-w-md
mx-auto
">
Assalamualaikum Wr.Wb
Tanpa mengurangi rasa hormat, kami mengundang
Bapak/Ibu/Saudara/i untuk menghadiri
acara pernikahan kami :
</p>


{/* DIVIDER */}

<div className="flex items-center justify-center gap-6 my-14">

<div className="w-24 h-[1px] bg-neutral-300/70"></div>

<div className="w-2 h-2 rounded-full bg-neutral-400"></div>

<div className="w-24 h-[1px] bg-neutral-300/70"></div>

</div>



{/* ================= BRIDE ================= */}

<div className="mb-24">


{/* PHOTO */}

<div className="relative mx-auto w-[240px]">

<img
src="/firoh-arofi/photo-woman.png"
alt="Bride"
className="
mx-auto
w-[240px]
rounded-[28px]
shadow-[0_25px_60px_rgba(0,0,0,0.25)]
animate-photoFloat
"
/>

</div>


{/* GLASS CARD */}

<div className="
mt-10
mx-auto
max-w-[320px]
px-8
py-8
rounded-[26px]
bg-white/40
backdrop-blur-xl
border border-white/40
shadow-[0_10px_40px_rgba(0,0,0,0.08)]
">

<h3 className="
font-billy
text-[36px]
text-[#2f3b45]
leading-[1.2]
">

Nur Lailatul Maghfiroh, S.Pd.

</h3>
  
<p className="
text-[13px]
leading-[1.9]
text-neutral-600
">

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

</div>



<div className="flex justify-center mb-24">

<img
src="/firoh-arofi/tanda-pisah.svg"
alt="divider"
className="
w-[140px]
opacity-90
drop-shadow-[0_8px_20px_rgba(0,0,0,0.15)]
animate-photoFloat
"
/>

</div>



{/* ================= GROOM ================= */}

<div>


{/* PHOTO */}

<div className="relative mx-auto w-[240px]">

<img
src="/firoh-arofi/photo-man.png"
alt="Groom"
className="
mx-auto
w-[240px]
rounded-[28px]
shadow-[0_25px_60px_rgba(0,0,0,0.25)]
animate-photoFloat
delay-float
"
/>

</div>


{/* GLASS CARD */}

<div className="
mt-10
mx-auto
max-w-[320px]
px-8
py-8
rounded-[26px]
bg-white/40
backdrop-blur-xl
border border-white/40
shadow-[0_10px_40px_rgba(0,0,0,0.08)]
">

<h3 className="
font-billy
text-[36px]
text-[#2f3b45]
leading-[1.2]
">

Ibnu Arofi, S.Pd., Gr., SE

</h3>

<p className="
text-[13px]
leading-[1.9]
text-neutral-600
">

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
