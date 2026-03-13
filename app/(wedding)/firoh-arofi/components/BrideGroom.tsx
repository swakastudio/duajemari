"use client"

export default function BrideGroom(){

return(

<section className="fade-up px-6 py-16">

<div className="
mx-auto
max-w-3xl
rounded-[32px]
border border-white/40
bg-white/45
px-8 py-12
text-center
backdrop-blur-md
shadow-[0_10px_50px_rgba(0,0,0,0.05)]
">

{/* TITLE */}

<h2 className="
font-ltsip
text-[32px]
tracking-[0.06em]
text-[#3f4d58]
">
Mempelai
</h2>

<p className="
text-[13px]
leading-[2]
text-neutral-600
mt-3
max-w-md
mx-auto
">
Tanpa mengurangi rasa hormat, kami mengundang
Bapak/Ibu/Saudara/i untuk menghadiri
acara pernikahan kami
</p>


{/* DIVIDER */}

<div className="flex items-center justify-center gap-4 my-8">

<div className="w-16 h-[1px] bg-neutral-300"></div>

<span className="text-neutral-400 text-sm">✦</span>

<div className="w-16 h-[1px] bg-neutral-300"></div>

</div>


{/* COUPLE GRID */}

<div className="grid md:grid-cols-3 gap-10 items-center">

{/* BRIDE */}

<div>

<img
src="https://placehold.co/400x400"
alt="Bride"
className="
mx-auto
w-[170px]
rounded-full
border border-white
shadow-lg
animate-photoFloat
"
/>

<h3 className="
font-royalti
text-[28px]
text-[#3f4d58]
mt-4
tracking-[-0.01em]
">
Nur Lailatul Maghfiroh, S.Pd.
</h3>

<p className="
text-[13px]
leading-[1.8]
text-neutral-600
mt-3
max-w-[220px]
mx-auto
">
Putri Ketiga dari
<br/>
Bapak Muchammad Haris
<br/>
& Ibu Isnaini (Almarhum)
</p>


{/* INSTAGRAM */}

<a
href="https://instagram.com/_maghfiroh"
target="_blank"
rel="noreferrer"
className="
mt-4
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


{/* SYMBOL */}

<div className="
text-[42px]
text-[#3f4d58]
font-light
">
&
</div>


{/* GROOM */}

<div>

<img
src="https://placehold.co/400x400"
alt="Groom"
className="
mx-auto
w-[170px]
rounded-full
border border-white
shadow-lg
animate-photoFloat
delay-float
"
/>

<h3 className="
font-royalti
text-[28px]
text-[#3f4d58]
mt-4
tracking-[-0.01em]
">
Ibnu Arofi, S.Pd., Gr., SE
</h3>

<p className="
text-[13px]
leading-[1.8]
text-neutral-600
mt-3
max-w-[220px]
mx-auto
">
Putra Kedua dari
<br/>
Bapak Abdul Wahid Musyadad
<br/>
& Ibu Sri Lestari
</p>


{/* INSTAGRAM */}

<a
href="https://instagram.com/ibnu.arofi"
target="_blank"
rel="noreferrer"
className="
mt-4
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
