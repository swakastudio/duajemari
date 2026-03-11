"use client"

import { useEffect } from "react"

export default function Page() {

  useEffect(() => {

    const elements = document.querySelectorAll(".fade-up")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()

  }, [])


  return (

<main className="min-h-screen bg-white text-neutral-800 overflow-hidden">


{/* ===================================================== */
/* HERO INVITATION */
/* ===================================================== */}

<section className="min-h-screen flex flex-col items-center justify-center text-center px-6 fade-up">

<h1
style={{ fontFamily: "ClassiqueScript" }}
className="text-[56px] md:text-[90px] leading-[0.9] text-neutral-900"
>
Firoh & Arofi
</h1>

<p className="tracking-[0.35em] text-[12px] text-neutral-500 mt-6">
THE WEDDING
</p>

<div className="mt-12">

<img
src="/firoh-arofi/frame-couple.png"
className="w-[260px] md:w-[340px]"
/>

</div>

</section>



{/* ===================================================== */
/* AYAT AL QURAN */
/* ===================================================== */}

<section className="py-28 px-6 text-center max-w-3xl mx-auto fade-up">

<p className="text-[28px] leading-relaxed mb-8">

وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ
أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا
وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً

</p>

<p className="text-neutral-600 leading-relaxed">

Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
untukmu pasangan-pasangan dari jenismu sendiri agar kamu
cenderung dan merasa tenteram kepadanya, dan Dia menjadikan
di antaramu rasa kasih dan sayang.

</p>

<p className="mt-6 text-sm text-neutral-500">
QS. Ar-Rum 30 : 21
</p>

</section>



{/* ===================================================== */
/* INTRO INVITATION */
/* ===================================================== */}

<section className="py-24 text-center px-6 max-w-2xl mx-auto fade-up">

<p className="text-neutral-700 leading-relaxed">
Assalamu’alaikum Wr. Wb.
</p>

<p className="mt-6 leading-relaxed text-neutral-600">

Dengan memohon rahmat dan ridho Allah SWT,
kami bermaksud mengundang
Bapak/Ibu/Saudara/i
untuk menghadiri acara pernikahan
putra-putri kami.

</p>

</section>



{/* ===================================================== */
/* BRIDE & GROOM */
/* ===================================================== */}

<section className="py-28 px-6 max-w-5xl mx-auto fade-up">

<div className="grid md:grid-cols-2 gap-20 items-center">


{/* ================= BRIDE ================= */}

<div className="text-center">

<img
src="/firoh-arofi/frame-bride.png"
className="mx-auto w-[240px]"
/>

<h3
style={{ fontFamily: "ClassiqueScript" }}
className="text-[40px] mt-6"
>
Nur Lailatul Maghfiroh, S.Pd.
</h3>

<p className="text-neutral-600 mt-4 leading-relaxed">

Putri Ketiga dari pasangan  
Bapak Muchammad Haris  
&  
Ibu Isnaini (Almarhum)

</p>

<a
href="https://instagram.com/_maghfiroh"
target="_blank"
className="inline-block mt-4 text-neutral-500 hover:text-black transition"
>
@_maghfiroh
</a>

</div>



{/* ================= GROOM ================= */}

<div className="text-center">

<img
src="/firoh-arofi/frame-groom.png"
className="mx-auto w-[240px]"
/>

<h3
style={{ fontFamily: "ClassiqueScript" }}
className="text-[40px] mt-6"
>
Ibnu Arofi, S.Pd., Gr., SE
</h3>

<p className="text-neutral-600 mt-4 leading-relaxed">

Putra Kedua dari pasangan  
Bapak Abdul Wahid Musyadad  
&  
Ibu Sri Lestari

</p>

<a
href="https://instagram.com/ibnu.arofi"
target="_blank"
className="inline-block mt-4 text-neutral-500 hover:text-black transition"
>
@ibnu.arofi
</a>

</div>


</div>

</section>



{/* ===================================================== */
/* FOOTER SEMENTARA */
/* ===================================================== */}

<section className="py-24 text-center fade-up">

<p className="text-neutral-500">
Website undangan dibuat oleh
</p>

<a
href="https://duajemari.vercel.app"
className="block mt-2 font-semibold hover:underline"
>
duajemari.vercel.app
</a>

</section>


</main>

  )
}
