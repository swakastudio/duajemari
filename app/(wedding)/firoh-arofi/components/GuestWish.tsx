"use client"

import { supabase } from "../lib/supabase"
import { useState, useEffect } from "react"

type Wish = {
  id?: number
  name: string
  message: string
  attendance: string
  created_at?: string
}

export default function GuestWish() {

  /* ===============================
  STATE
  =============================== */

  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [attendance, setAttendance] = useState("Hadir")

  const [wishes, setWishes] = useState<Wish[]>([])


  /* ===============================
  FETCH WISHES
  =============================== */

  const fetchWishes = async () => {

    const { data, error } = await supabase
      .from("wishes")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error(error)
      return
    }

    if (data) {
      setWishes(data as Wish[])
    }

  }


  /* ===============================
  LOAD DATA WHEN PAGE OPEN
  =============================== */

  useEffect(() => {
    fetchWishes()
  }, [])


  /* ===============================
  SUBMIT WISH
  =============================== */

  const submitWish = async (e: React.FormEvent) => {

    e.preventDefault()

    if (!name || !message) return

    const { error } = await supabase
      .from("wishes")
      .insert([
        {
          name: name,
          message: message,
          attendance: attendance
        }
      ])

    if (error) {
      console.error(error)
      return
    }

    /* refresh wishes */

    fetchWishes()

    setName("")
    setMessage("")
    setAttendance("Hadir")

  }


  /* ===============================
  COUNT RSVP
  =============================== */

  const hadirCount = wishes.filter(w => w.attendance === "Hadir").length
  const tidakCount = wishes.filter(w => w.attendance === "Tidak Hadir").length


  /* ===============================
  UI
  =============================== */

  return (

    <section className="fade-up relative px-6 py-20 bg-[#E7F2F6] mt-16">

      <div className="mx-auto max-w-4xl">


        {/* TITLE */}

        <div className="text-center mb-14">

          <h2 className="fade-up fade-delay-1 font-ltsip text-[26px] tracking-[0.06em] text-[#3A3A3A]">
            UCAPAN & DOA
          </h2>

          <div className="relative w-36 h-[2px] mx-auto mt-6 mb-8 overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3f4d58] to-transparent opacity-70"></div>

            <div className="absolute inset-0 animate-dividerShine bg-gradient-to-r from-transparent via-white to-transparent opacity-90"></div>

          </div>

          <p className="fade-up fade-delay-2 text-[#3A3A3A] text-sm max-w-md mx-auto leading-relaxed">
            Tinggalkan doa serta harapan terbaik untuk perjalanan baru kami.
            Kehadiran dan doa Anda adalah kebahagiaan bagi kami.
          </p>

        </div>


        {/* RSVP COUNTER */}

        <div className="fade-up fade-delay-3 flex justify-center gap-6 mb-14">

          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl px-8 py-4 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)]">

            <p className="text-2xl font-semibold text-green-600">
              {hadirCount}
            </p>

            <p className="text-xs tracking-[0.25em] text-green-600">
              HADIR
            </p>

          </div>


          <div className="bg-white/60 backdrop-blur-xl border border-white/40 rounded-2xl px-8 py-4 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)]">

            <p className="text-2xl font-semibold text-red-500">
              {tidakCount}
            </p>

            <p className="text-xs tracking-[0.25em] text-red-500">
              TIDAK HADIR
            </p>

          </div>

        </div>


        {/* FORM */}

        <form
          onSubmit={submitWish}
          className="fade-up fade-delay-10 bg-white/60 backdrop-blur-xl border border-white/40 rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 space-y-5 max-w-xl mx-auto mb-16"
        >

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Anda"
            className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#3f4d58]"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ucapan & Doa"
            className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm h-28 resize-none focus:outline-none focus:border-[#3f4d58]"
          />

          <select
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            className="w-full border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#3f4d58]"
          >

            <option>Hadir</option>
            <option>Tidak Hadir</option>

          </select>

          <button
            type="submit"
            className="w-full py-3 rounded-full border border-neutral-800 text-sm tracking-[0.2em] hover:bg-neutral-800 hover:text-white transition"
          >

            KIRIM UCAPAN

          </button>

        </form>


        {/* WISH LIST */}

        <div className="space-y-4 max-w-xl mx-auto">

          {wishes.map((wish) => (

            <div
              key={wish.id}
              className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            >

              <div className="flex justify-between items-center mb-2">

                <p className="font-semibold text-sm text-[#3f4d58]">
                  {wish.name}
                </p>

                <p className={`text-xs tracking-wider ${
                  wish.attendance === "Hadir"
                    ? "text-green-600"
                    : "text-red-500"
                }`}>
                  {wish.attendance}
                </p>

              </div>

              <p className="text-sm text-neutral-700 leading-relaxed">
                {wish.message}
              </p>

            </div>

          ))}

        </div>


      </div>

    </section>

  )

}
