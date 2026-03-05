import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex items-center px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}

        <div className="space-y-8">

          {/* HEADLINE */}

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">

            Kisah Baru{" "}

            <Link
              href="/product"
              className="hero-link text-[#ff4d6d]"
            >
              Dimulai
            </Link>

            <br/>

            Dari Sebuah Undangan

          </h1>


          {/* SUBTEXT */}

          <p className="text-lg text-neutral-500 max-w-lg leading-relaxed">
            Rayakan hari paling berharga dengan undangan digital yang elegan,
            personal, dan siap dibagikan ke semua tamu.
          </p>


          {/* BUTTON */}

          <div className="flex gap-4 flex-wrap">

            <Link
              href="/product"
              className="px-8 py-3 bg-black text-white rounded-full hover:opacity-90 transition"
            >
              Buat Undangan
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

    </main>
  )
}