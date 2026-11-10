
"use client"

import { useMemo, useState } from "react"
import {
  buildUrlSuggestions,
  buildInvitationUrl,
  cleanSlug,
  UrlFormat,
} from "@/lib/order/url-generator"

export default function OrderPage() {
  const [customerName, setCustomerName] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [groomFullName, setGroomFullName] = useState("")
  const [groomNickname, setGroomNickname] = useState("")
  const [brideFullName, setBrideFullName] = useState("")
  const [brideNickname, setBrideNickname] = useState("")
  const [urlFormat, setUrlFormat] = useState<UrlFormat>("Pria - Nama Wanita")
  const [customSlug, setCustomSlug] = useState("")
  const [selectedSlug, setSelectedSlug] = useState("")
  const [checking, setChecking] = useState(false)
  const [availability, setAvailability] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const suggestions = useMemo(
    () => buildUrlSuggestions(groomNickname, brideNickname, customSlug),
    [groomNickname, brideNickname, customSlug]
  )

  const selectedSuggestion = suggestions.find(
    (item) => item.format === urlFormat
  )

  const activeSlug =
    urlFormat === "Custom"
      ? cleanSlug(customSlug)
      : selectedSlug || selectedSuggestion?.slug || ""

  const invitationUrl = buildInvitationUrl(activeSlug)

  function chooseFormat(format: UrlFormat) {
    setUrlFormat(format)
    setSelectedSlug("")
    setAvailability("")
    setMessage("")
  }

  async function checkAvailability() {
    if (!activeSlug) {
      setMessage("Isi nama panggilan kedua mempelai terlebih dahulu.")
      return
    }

    setChecking(true)
    setAvailability("")
    setMessage("")

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "checkSlug",
          slug: activeSlug,
        }),
      })

      const result = await response.json()

      if (!response.ok || result.success === false) {
        throw new Error(result.message || "Gagal memeriksa URL.")
      }

      const available =
        result.available === true ||
        result.status === "AVAILABLE"

      setAvailability(
        available
          ? "URL tersedia!"
          : "URL belum tersedia atau sudah digunakan."
      )
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Terjadi kesalahan."
      )
    } finally {
      setChecking(false)
    }
  }

  async function submitOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage("")

    if (!activeSlug) {
      setMessage("Silakan pilih format URL terlebih dahulu.")
      return
    }

    if (!availability.includes("tersedia!")) {
      setMessage("Silakan periksa ketersediaan URL terlebih dahulu.")
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "submitOrder",
          customerName,
          whatsapp,
          groomFullName,
          groomNickname,
          brideFullName,
          brideNickname,
          urlFormat,
          urlSlug: activeSlug,
        }),
      })

      const result = await response.json()

      if (!response.ok || result.success === false) {
        throw new Error(result.message || "Pesanan gagal dikirim.")
      }

      setMessage(
        `Pesanan berhasil dikirim! ID: ${result.orderId || result.order?.orderId || "-"}`
      )
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Terjadi kesalahan."
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#faf8f5] px-5 py-14 text-[#292521]">
      <div className="mx-auto max-w-3xl">
        <header className="mb-12 text-center">
          <p className="mb-4 text-xs tracking-[0.4em] text-[#b18b70]">
            DUAJEMARI DIGITAL INVITATION
          </p>
          <h1 className="font-serif text-4xl md:text-5xl">
            Begin Your <span className="italic text-[#b18b70]">Story</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#827970]">
            Ceritakan detail hari istimewa kalian. Kami akan membantu
            menyiapkan undangan digital yang personal dan berkesan.
          </p>
        </header>

        <form onSubmit={submitOrder} className="space-y-8">
          <section className="rounded-2xl border border-[#eee5dc] bg-white p-6 shadow-sm md:p-9">
            <p className="mb-2 text-xs tracking-[0.2em] text-[#b18b70]">
              01 — CONTACT
            </p>
            <h2 className="mb-6 font-serif text-2xl">Informasi Pemesan</h2>

            <div className="space-y-5">
              <Field label="Nama Lengkap Pemesan">
                <input
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Nama lengkap kamu"
                  className={inputStyle}
                />
              </Field>

              <Field label="Nomor WhatsApp Aktif">
                <input
                  required
                  type="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="Contoh: 081234567890"
                  className={inputStyle}
                />
              </Field>
            </div>
          </section>

          <section className="rounded-2xl border border-[#eee5dc] bg-white p-6 shadow-sm md:p-9">
            <p className="mb-2 text-xs tracking-[0.2em] text-[#b18b70]">
              02 — THE COUPLE
            </p>
            <h2 className="mb-6 font-serif text-2xl">Tentang Kedua Mempelai</h2>

            <div className="space-y-7">
              <div>
                <h3 className="mb-4 text-sm font-semibold text-[#b18b70]">
                  Mempelai Pria
                </h3>
                <div className="space-y-4">
                  <Field label="Nama Lengkap">
                    <input
                      required
                      value={groomFullName}
                      onChange={(e) => setGroomFullName(e.target.value)}
                      placeholder="Nama lengkap mempelai pria"
                      className={inputStyle}
                    />
                  </Field>
                  <Field label="Nama Panggilan">
                    <input
                      required
                      value={groomNickname}
                      onChange={(e) => {
                        setGroomNickname(e.target.value)
                        setSelectedSlug("")
                        setAvailability("")
                      }}
                      placeholder="Contoh: Firoh"
                      className={inputStyle}
                    />
                  </Field>
                </div>
              </div>

              <div className="border-t border-[#eee5dc] pt-6">
                <h3 className="mb-4 text-sm font-semibold text-[#b18b70]">
                  Mempelai Wanita
                </h3>
                <div className="space-y-4">
                  <Field label="Nama Lengkap">
                    <input
                      required
                      value={brideFullName}
                      onChange={(e) => setBrideFullName(e.target.value)}
                      placeholder="Nama lengkap mempelai wanita"
                      className={inputStyle}
                    />
                  </Field>
                  <Field label="Nama Panggilan">
                    <input
                      required
                      value={brideNickname}
                      onChange={(e) => {
                        setBrideNickname(e.target.value)
                        setSelectedSlug("")
                        setAvailability("")
                      }}
                      placeholder="Contoh: Arofi"
                      className={inputStyle}
                    />
                  </Field>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-[#eee5dc] bg-white p-6 shadow-sm md:p-9">
            <p className="mb-2 text-xs tracking-[0.2em] text-[#b18b70]">
              03 — YOUR INVITATION URL
            </p>
            <h2 className="mb-2 font-serif text-2xl">Pilih Alamat Undangan</h2>
            <p className="mb-6 text-sm text-[#827970]">
              Kami rekomendasikan beberapa kombinasi nama untuk alamat
              undangan kalian.
            </p>

            <div className="space-y-3">
              {([
                "Pria - Nama Wanita",
                "Wanita - Pria",
                "The Wedding",
                "Custom",
              ] as UrlFormat[]).map((format) => {
                const suggestion = suggestions.find(
                  (item) => item.format === format
                )

                return (
                  <label
                    key={format}
                    className={`block cursor-pointer rounded-xl border p-4 transition ${
                      urlFormat === format
                        ? "border-[#b18b70] bg-[#faf6f1]"
                        : "border-[#eee5dc] hover:border-[#c7ad98]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="urlFormat"
                        checked={urlFormat === format}
                        onChange={() => chooseFormat(format)}
                        className="accent-[#b18b70]"
                      />
                      <span className="text-sm font-medium">{format}</span>
                    </div>

                    {format !== "Custom" && (
                      <p className="mt-2 break-all pl-6 text-xs text-[#827970]">
                        {suggestion
                          ? `duajemari.com/${suggestion.slug}/Tamu-Undangan`
                          : "Isi nama panggilan kedua mempelai"}
                      </p>
                    )}
                  </label>
                )
              })}
            </div>

            {urlFormat === "Custom" && (
              <div className="mt-5">
                <Field label="Alamat URL Pilihan">
                  <input
                    required
                    value={customSlug}
                    onChange={(e) => {
                      setCustomSlug(e.target.value)
                      setAvailability("")
                    }}
                    placeholder="Contoh: kisahfirohdan arofi"
                    className={inputStyle}
                  />
                </Field>
              </div>
            )}

            {activeSlug && (
              <div className="mt-6 rounded-xl bg-[#f7f3ee] p-4">
                <p className="mb-2 text-xs text-[#827970]">
                  Preview alamat undangan
                </p>
                <p className="break-all text-sm font-semibold text-[#9a755c]">
                  {invitationUrl}
                </p>

                <button
                  type="button"
                  onClick={checkAvailability}
                  disabled={checking}
                  className="mt-4 rounded-full bg-[#b18b70] px-5 py-2.5 text-xs font-medium text-white disabled:opacity-50"
                >
                  {checking ? "Memeriksa..." : "Periksa Ketersediaan URL"}
                </button>

                {availability && (
                  <p className="mt-3 text-sm font-medium">
                    {availability}
                  </p>
                )}
              </div>
            )}
          </section>

          <div className="rounded-2xl border border-[#eee5dc] bg-white p-6 text-center shadow-sm md:p-8">
            <p className="mb-4 text-sm leading-6 text-[#827970]">
              Pastikan semua informasi sudah benar sebelum mengirimkan
              formulir pemesanan.
            </p>

            <button
              type="submit"
              disabled={submitting || !activeSlug}
              className="w-full rounded-full bg-[#292521] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#9a755c] disabled:opacity-50"
            >
              {submitting ? "Mengirim Pesanan..." : "Kirim Data Pemesanan"}
            </button>

            {message && (
              <p className="mt-4 text-sm text-[#9a755c]">{message}</p>
            )}
          </div>
        </form>

        <footer className="mt-12 text-center text-xs tracking-widest text-[#a99b8e]">
          DUAJEMARI — EVERY LOVE HAS A STORY
        </footer>
      </div>
    </main>
  )
}

const inputStyle =
  "w-full rounded-xl border border-[#e8dfd6] bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#b8aea5] focus:border-[#b18b70]"

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium">{label}</span>
      {children}
    </label>
  )
}
