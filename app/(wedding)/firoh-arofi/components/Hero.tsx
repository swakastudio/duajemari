"use client"

export default function Hero(){

return(

<section className="fade-up flex min-h-screen items-center justify-center px-6 text-center">

<div className="max-w-xl mx-auto">


{/* PHOTO */}

<div className="relative mx-auto mb-8 w-[220px] h-[220px] rounded-full overflow-hidden shadow-xl floating-photo">

<img
src="https://placehold.co/600x600"
alt="Mempelai"
className="w-full h-full object-cover"
/>

</div>


{/* TITLE */}

<p className="tracking-[0.35em] text-[13px] text-neutral-600 mb-4">
THE WEDDING OF
</p>


{/* NAMES */}

<h1
style={{fontFamily:"ClassiqueScript"}}
className="text-[70px] md:text-[110px] leading-[0.9] text-neutral-800"
>

Firoh

<span className="mx-3 text-[36px] text-neutral-500">
&
</span>

Arofi

</h1>


{/* DATE */}

<p
className="
mt-6
text-[14px]
tracking-[0.45em]
text-neutral-600
"
>

04 • 04 • 2026

</p>


</div>

</section>

)

}
