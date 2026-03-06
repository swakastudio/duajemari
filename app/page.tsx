import Link from "next/link"
import Reveal from "@/components/Reveal"
import FeatureCard from "@/components/FeatureCard"

export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* HERO SECTION */}

      <section className="min-h-screen flex items-center pt-24 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}

          <div className="space-y-8">

            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">

              Kisah Baru{" "}

              <Link
                href="/product"
                className="hero-link"
              >
                Dimulai
              </Link>

              <br />

              Dari Sebuah Undangan

            </h1>

            <p className="text-lg text-neutral-500 max-w-lg leading-relaxed">
              Rayakan hari paling berharga dengan undangan digital
              yang elegan, personal, dan siap dibagikan ke semua tamu.
            </p>


            {/* BUTTONS */}

            <div className="flex flex-wrap gap-4">

              <Link
                href="/product"
                className="px-8 py-3 bg-black text-white rounded-full hover:opacity-90 transition"
              >
                Pesan Undangan
              </Link>

              <Link
                href="/porto"
                className="px-8 py-3 border border-neutral-300 rounded-full hover:bg-neutral-100 transition"
              >
                Lihat Contoh
              </Link>

            </div>

          </div>


          {/* RIGHT PREVIEW */}

          <div className="flex justify-center">

            <div className="w-full max-w-md h-[420px] rounded-3xl border border-neutral-200 flex items-center justify-center text-neutral-400">

              Preview Undangan

            </div>

          </div>

        </div>

      </section>



      {/* SECTION FITUR */}

      <section className="py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-20">
            Fitur Undangan
          </h2>


          {/* GRID FITUR */}

          <div className="grid md:grid-cols-3 gap-10">

            <Reveal delay={0}>
              <FeatureCard
                title="Nada Kisah"
                description="Putar lagu romantis yang menyertai kisah hari bahagia."
                link="#"
              />
            </Reveal>

            <Reveal delay={100}>
              <FeatureCard
                title="Jejak Kenangan"
                description="Galeri foto perjalanan cinta pasangan."
                link="#"
              />
            </Reveal>

            <Reveal delay={200}>
              <FeatureCard
                title="Hitung Hari Bahagia"
                description="Countdown menuju hari yang dinanti."
                link="#"
              />
            </Reveal>

            <Reveal delay={300}>
              <FeatureCard
                title="Petunjuk Arah"
                description="Peta lokasi acara agar tamu mudah menemukan tempat."
                link="#"
              />
            </Reveal>

            <Reveal delay={400}>
              <FeatureCard
                title="Kehadiran Anda"
                description="Konfirmasi kehadiran tamu secara digital."
                link="#"
              />
            </Reveal>

            <Reveal delay={500}>
              <FeatureCard
                title="Doa & Harapan"
                description="Tamu dapat meninggalkan pesan dan doa."
                link="#"
              />
            </Reveal>

          </div>

        </div>

      </section>

    </main>
  )
}