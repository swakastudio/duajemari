"use client"

import { supabase } from "../../../../lib/supabase"
import { useState, useEffect } from "react"

type Wish = {
  id?: string
  name: string
  message: string
  attendance: string
  wedding_slug: string
  created_at?: string
}

export default function GuestWish({ slug }: { slug: string }) {

  /* ===============================
  STATE
  =============================== */

  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [attendance, setAttendance] = useState("Hadir")

  const [wishes, setWishes] = useState<Wish[]>([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")


  /* ===============================
  FETCH WISHES
  =============================== */

  const fetchWishes = async () => {
    const { data, error } = await supabase
      .from("wishes")
      .select("*")
      .eq("wedding_slug", slug)
      .order("created_at", { ascending: false })

    if (error) {
      console.error("FETCH ERROR:", error)
      setErrorMsg(error.message)
      return
    }

    if (data) {
      setWishes(data as Wish[])
    }
  }


  /* ===============================
  REALTIME LISTENER
  =============================== */

  useEffect(() => {

    fetchWishes()

    const channel = supabase
      .channel("wishes-realtime")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "wishes",
          filter: `wedding_slug=eq.${slug}`
        },
        (payload) => {
          setWishes(prev => [payload.new as Wish, ...prev])
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }

  }, [slug])


  /* ===============================
  SUBMIT WISH
  =============================== */

  const submitWish = async (e: React.FormEvent) => {
    e.preventDefault()

    setErrorMsg("")

    // VALIDATION
    if (name.trim().length < 2) {
      setErrorMsg("Nama minimal 2 karakter")
      return
    }

    if (message.trim().length < 5) {
      setErrorMsg("Ucapan minimal 5 karakter")
      return
    }

    setLoading(true)

    const { error } = await supabase
      .from("wishes")
      .insert([
        {
          name: name.trim(),
          message: message.trim(),
          attendance,
          wedding_slug: slug
        }
      ])

    setLoading(false)

    if (error) {
      console.error("INSERT ERROR:", error)
      setErrorMsg(error.message)
      return
    }

    // reset form
    setName("")
    setMessage("")
    setAttendance("Hadir")
  }


  /* ===============================
  HELPERS
  =============================== */

  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase()
  }

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
          <h2 className="font-ltsip text-[26px] tracking-[0.06em] text-[#3A3A3A]">
            UCAPAN & DOA
          </h2>

          <p className="text-[#3A3A3A] text-sm max-w-md mx-auto mt-6">
            Tinggalkan doa terbaik untuk kami ✨
          </p>
        </div>


        {/* RSVP COUNTER */}
        <div className="flex justify-center gap-6 mb-14">

          <div className="bg-white/60 rounded-2xl px-8 py-4 text-center">
            <p className="text-2xl font-semibold text-green-600">
              {hadirCount}
            </p>
            <p className="text-xs tracking-[0.25em] text-green-600">
              HADIR
            </p>
          </div>

          <div className="bg-white/60 rounded-2xl px-8 py-4 text-center">
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
          className="bg-white/60 rounded-[28px] p-8 space-y-5 max-w-xl mx-auto mb-16"
        >

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Anda"
            className="w-full border rounded-lg px-4 py-3 text-sm"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ucapan & Doa"
            className="w-full border rounded-lg px-4 py-3 text-sm h-28"
          />

          <select
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            className="w-full border rounded-lg px-4 py-3 text-sm"
          >
            <option>Hadir</option>
            <option>Tidak Hadir</option>
          </select>

          {errorMsg && (
            <p className="text-red-500 text-sm">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full border border-neutral-800 text-sm tracking-[0.2em]"
          >
            {loading ? "Mengirim..." : "KIRIM UCAPAN"}
          </button>

        </form>


        {/* LIST */}
        <div className="max-w-xl mx-auto max-h-[400px] overflow-y-auto space-y-4">

          {wishes.length === 0 && (
            <p className="text-center text-sm text-neutral-500">
              Belum ada ucapan, jadilah yang pertama ✨
            </p>
          )}

          {wishes.map((wish) => (
            <div key={wish.id} className="bg-white/70 rounded-2xl p-5">

              <div className="flex items-center gap-3 mb-2">

                <div className="w-9 h-9 rounded-full bg-[#3f4d58] text-white flex items-center justify-center text-sm font-semibold">
                  {getInitial(wish.name)}
                </div>

                <div className="flex-1 flex justify-between items-center">

                  <p className="font-semibold text-sm text-[#3f4d58]">
                    {wish.name}
                  </p>

                  <p className={`text-xs ${
                    wish.attendance === "Hadir"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}>
                    {wish.attendance}
                  </p>

                </div>

              </div>

              <p className="text-sm text-neutral-700">
                {wish.message}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
