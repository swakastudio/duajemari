
"use client"

import { useMemo, useState, type FormEvent, type ReactNode } from "react"
import {
  buildUrlSuggestions,
  buildInvitationUrl,
  cleanSlug,
  type UrlFormat,
} from "@/lib/order/url-generator"

const PINK = "#ff4d6d"

const INPUT_STYLE =
  "w-full min-w-0 rounded-xl border border-neutral-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-neutral-400 focus:border-[#ff4d6d] focus:ring-2 focus:ring-[#ff4d6d]/10"

const STEPS = [
  "Pemesan",
  "Mempelai",
  "Alamat Undangan",
  "Konfirmasi",
]

export default function OrderPage() {
  const [step, setStep] = useState(1)

  // Informasi pemesan
  const [customerName, setCustomerName] = useState("")
  const [whatsapp, setWhatsapp] = useState("")

  // Informasi mempelai
  const [groomFullName, setGroomFullName] = useState("")
  const [groomNickname, setGroomNickname] = useState("")
  const [brideFullName, setBrideFullName] = useState("")
  const [brideNickname, setBrideNickname] = useState("")

  // URL undangan
  const [urlFormat, setUrlFormat] =
    useState<UrlFormat>("Pria - Nama Wanita")
  const [customSlug, setCustomSlug] = useState("")

  // Status URL
  const [checking, setChecking] = useState(false)
  const [available, setAvailable] = useState<boolean | null>(null)
  const [urlMessage, setUrlMessage] = useState("")

  // Status submit
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [orderId, setOrderId] = useState("")

  const suggestions = useMemo(
    () =>
      buildUrlSuggestions(
        groomNickname,
        brideNickname,
        customSlug
      ),
    [groomNickname, brideNickname, customSlug]
  )

  const selectedSuggestion = suggestions.find(
    (item) => item.format === urlFormat
  )

  const activeSlug =
    urlFormat === "Custom"
      ? cleanSlug(customSlug)
      : selectedSuggestion?.slug || ""

  const invitationUrl = buildInvitationUrl(activeSlug)

  function resetAvailability() {
    setAvailable(null)
    setUrlMessage("")
  }

  function changeFormat(format: UrlFormat) {
    setUrlFormat(format)
    resetAvailability()
    setMessage("")
  }

  function validateStep(): boolean {
    if (step === 1) {
      if (!customerName.trim() || !whatsapp.trim()) {
        setMessage("Lengkapi nama dan nomor WhatsApp terlebih dahulu.")
        return false
      }

      const phone = whatsapp.replace(/[\s+()-]/g, "")

      if (!/^\d{9,15}$/.test(phone)) {
        setMessage("Periksa kembali nomor WhatsApp kamu.")
        return false
      }
    }

    if (step === 2) {
      if (
        !groomFullName.trim() ||
        !groomNickname.trim() ||
        !brideFullName.trim() ||
        !brideNickname.trim()
      ) {
        setMessage("Lengkapi seluruh informasi kedua mempelai.")
        return false
      }
    }

    if (step === 3) {
      if (!activeSlug) {
        setMessage("Pilih atau masukkan alamat URL undangan.")
        return false
      }

      if (available !== true) {
        setMessage("Periksa dan pastikan URL tersedia terlebih dahulu.")
        return false
      }
    }

    setMessage("")
    return true
  }

  function nextStep() {
    if (!validateStep()) return

    setStep((current) => Math.min(current + 1, 4))
    setMessage("")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function previousStep() {
    setStep((current) => Math.max(current - 1, 1))
    setMessage("")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  async function checkAvailability() {
    if (!activeSlug) {
      setUrlMessage("Masukkan nama panggilan atau URL custom.")
      return
    }

    setChecking(true)
    setAvailable(null)
    setUrlMessage("Sedang memeriksa alamat undangan...")

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "checkSlug",
          slug: activeSlug,
        }),
      })

      const result = await response.json()

      if (!response.ok || result.success === false) {
        throw new Error(
          result.message || "Pemeriksaan URL gagal."
        )
      }

      const isAvailable =
        result.available === true ||
        result.status === "AVAILABLE"

      setAvailable(isAvailable)

      setUrlMessage(
        isAvailable
          ? "URL tersedia dan dapat digunakan!"
          : "Maaf, URL ini sudah digunakan atau tidak tersedia."
      )
    } catch (error) {
      setAvailable(null)
      setUrlMessage(
        error instanceof Error
          ? error.message
          : "Tidak dapat memeriksa URL."
      )
    } finally {
      setChecking(false)
    }
  }

  async function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!validateStep()) return

    setSubmitting(true)
    setMessage("")

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "submitOrder",
          customerName: customerName.trim(),
          whatsapp: whatsapp.trim(),
          groomFullName: groomFullName.trim(),
          groomNickname: groomNickname.trim(),
          brideFullName: brideFullName.trim(),
          brideNickname: brideNickname.trim(),
          urlFormat,
          urlSlug: activeSlug,
        }),
      })

      const result = await response.json()

      if (!response.ok || result.success === false) {
        throw new Error(
          result.message || "Pesanan gagal dikirim."
        )
      }

      setOrderId(
        result.orderId ||
        result.order?.orderId ||
        result.data?.orderId ||
        ""
      )

      setSubmitted(true)
      setMessage("")
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan saat mengirim pesanan."
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-white px-5 pb-20 pt-32 md:pt-36">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-neutral-200 bg-white p-7 text-center shadow-sm md:p-12">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#fff7f9] text-4xl text-[#ff4d6d]">
              ✓
            </div>

            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-[#ff4d6d]">
              DUAJEMARI ORDER
            </p>

            <h1 className="text-3xl font-semibold md:text-4xl">
              Terima Kasih!
            </h1>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-neutral-500">
              Data pemesanan kamu sudah berhasil dikirim.
              Tim Duajemari akan menghubungi kamu melalui WhatsApp
              untuk proses selanjutnya.
            </p>

            {orderId && (
              <div className="mt-7 rounded-xl bg-neutral-50 p-4">
                <p className="text-xs text-neutral-500">
                  Nomor pesanan
                </p>
                <p className="mt-1 font-semibold text-[#ff4d6d]">
                  {orderId}
                </p>
              </div>
            )}

            <div className="mt-7 rounded-xl border border-[#ff4d6d]/20 bg-[#fff7f9] p-4 text-left">
              <p className="text-xs text-neutral-500">
                Alamat undangan pilihan
              </p>
              <p className="mt-2 break-all text-sm font-semibold text-[#ff4d6d]">
                {invitationUrl}
              </p>
            </div>

            <a
              href="/"
              className="mt-8 inline-flex rounded-full bg-[#ff4d6d] px-8 py-3.5 text-sm font-medium text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg"
            >
              Kembali ke Beranda
            </a>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white px-5 pb-20 pt-32 md:px-8 md:pt-36">
      <div className="mx-auto max-w-4xl">

        {/* HEADER */}

        <header className="mb-10 text-center md:mb-14">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#ff4d6d]">
            DUAJEMARI DIGITAL INVITATION
          </p>

          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            Mulai Kisah Baru{" "}
            <span className="text-[#ff4d6d]">
              Bersama Kami
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-500 md:text-base">
            Lengkapi informasi pernikahan kalian untuk memulai
            pembuatan undangan digital Duajemari.
          </p>
        </header>

        {/* PROGRESS */}

        <div className="mb-8 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm md:p-7">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs text-neutral-500">
                LANGKAH {step} DARI 4
              </p>
              <p className="mt-1 text-sm font-semibold">
                {STEPS[step - 1]}
              </p>
            </div>

            <p className="text-sm font-semibold text-[#ff4d6d]">
              {Math.round((step / 4) * 100)}%
            </p>
          </div>

          <div className="flex gap-2">
            {STEPS.map((item, index) => (
              <div
                key={item}
                className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                  index < step
                    ? "bg-[#ff4d6d]"
                    : "bg-neutral-100"
                }`}
              />
            ))}
          </div>

          <div className="mt-3 hidden grid-cols-4 gap-2 md:grid">
            {STEPS.map((item, index) => (
              <p
                key={item}
                className={`text-center text-xs ${
                  index + 1 === step
                    ? "font-semibold text-[#ff4d6d]"
                    : "text-neutral-400"
                }`}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <form onSubmit={submitOrder}>

          {/* STEP 1 */}

          {step === 1 && (
            <Section
              number="01"
              title="Informasi Pemesan"
              description="Siapa yang akan menjadi kontak utama dalam proses pembuatan undangan?"
            >
              <div className="space-y-5">
                <Field label="Nama Lengkap Pemesan">
                  <input
                    required
                    autoComplete="name"
                    value={customerName}
                    onChange={(event) =>
                      setCustomerName(event.target.value)
                    }
                    placeholder="Masukkan nama lengkap"
                    className={INPUT_STYLE}
                  />
                </Field>

                <Field label="Nomor WhatsApp Aktif">
                  <input
                    required
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={whatsapp}
                    onChange={(event) =>
                      setWhatsapp(event.target.value)
                    }
                    placeholder="Contoh: 081234567890"
                    className={INPUT_STYLE}
                  />
                  <p className="mt-2 text-xs leading-5 text-neutral-400">
                    Pastikan nomor WhatsApp dapat dihubungi.
                  </p>
                </Field>
              </div>
            </Section>
          )}

          {/* STEP 2 */}

          {step === 2 && (
            <Section
              number="02"
              title="Informasi Kedua Mempelai"
              description="Masukkan nama lengkap dan nama panggilan yang akan digunakan pada alamat undangan."
            >
              <div className="space-y-8">

                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff7f9] text-sm font-semibold text-[#ff4d6d]">
                      P
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        Mempelai Pria
                      </h3>
                      <p className="text-xs text-neutral-400">
                        Informasi calon pengantin pria
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Field label="Nama Lengkap">
                      <input
                        required
                        value={groomFullName}
                        onChange={(event) =>
                          setGroomFullName(event.target.value)
                        }
                        placeholder="Nama lengkap mempelai pria"
                        className={INPUT_STYLE}
                      />
                    </Field>

                    <Field label="Nama Panggilan">
                      <input
                        required
                        value={groomNickname}
                        onChange={(event) => {
                          setGroomNickname(event.target.value)
                          resetAvailability()
                        }}
                        placeholder="Contoh: Febri"
                        className={INPUT_STYLE}
                      />
                    </Field>
                  </div>
                </div>

                <div className="border-t border-neutral-100 pt-7">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff7f9] text-sm font-semibold text-[#ff4d6d]">
                      W
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        Mempelai Wanita
                      </h3>
                      <p className="text-xs text-neutral-400">
                        Informasi calon pengantin wanita
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Field label="Nama Lengkap">
                      <input
                        required
                        value={brideFullName}
                        onChange={(event) =>
                          setBrideFullName(event.target.value)
                        }
                        placeholder="Nama lengkap mempelai wanita"
                        className={INPUT_STYLE}
                      />
                    </Field>

                    <Field label="Nama Panggilan">
                      <input
                        required
                        value={brideNickname}
                        onChange={(event) => {
                          setBrideNickname(event.target.value)
                          resetAvailability()
                        }}
                        placeholder="Contoh: Luckta"
                        className={INPUT_STYLE}
                      />
                    </Field>
                  </div>
                </div>
              </div>
            </Section>
          )}

          {/* STEP 3 */}

          {step === 3 && (
            <Section
              number="03"
              title="Alamat Undangan"
              description="Pilih alamat khusus untuk undangan digital kalian. Sistem akan memberikan rekomendasi berdasarkan nama panggilan."
            >
              <div className="space-y-4">

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
                    <button
                      key={format}
                      type="button"
                      onClick={() => changeFormat(format)}
                      className={`w-full rounded-xl border p-4 text-left transition duration-200 ${
                        urlFormat === format
                          ? "border-[#ff4d6d] bg-[#fff7f9] shadow-[0_4px_20px_rgba(255,77,109,0.08)]"
                          : "border-neutral-200 bg-white hover:border-[#ff4d6d]/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                            urlFormat === format
                              ? "border-[#ff4d6d]"
                              : "border-neutral-300"
                          }`}
                        >
                          {urlFormat === format && (
                            <span className="h-2.5 w-2.5 rounded-full bg-[#ff4d6d]" />
                          )}
                        </span>

                        <span className="text-sm font-semibold">
                          {format}
                        </span>

                        {urlFormat === format && (
                          <span className="ml-auto text-[10px] font-semibold tracking-wider text-[#ff4d6d]">
                            DIPILIH
                          </span>
                        )}
                      </div>

                      {format !== "Custom" && (
                        <p className="mt-3 break-all pl-8 text-xs leading-5 text-neutral-500">
                          {suggestion
                            ? `duajemari.com/${suggestion.slug}/Tamu-Undangan`
                            : "Masukkan nama panggilan kedua mempelai"}
                        </p>
                      )}
                    </button>
                  )
                })}

                {urlFormat === "Custom" && (
                  <div className="rounded-xl border border-[#ff4d6d]/30 bg-[#fff7f9] p-4">
                    <Field label="URL Custom Pilihan">
                      <input
                        required
                        value={customSlug}
                        onChange={(event) => {
                          setCustomSlug(event.target.value)
                          resetAvailability()
                        }}
                        placeholder="Contoh: kisah-febri-luckta"
                        className={INPUT_STYLE}
                      />
                    </Field>
                    <p className="mt-2 text-xs text-neutral-400">
                      Gunakan huruf, angka, dan tanda hubung.
                    </p>
                  </div>
                )}

                {/* URL PREVIEW */}

                <div className="rounded-2xl border border-[#ff4d6d]/30 bg-[#fff7f9] p-5">
                  <p className="mb-2 text-xs font-semibold tracking-widest text-[#ff4d6d]">
                    PREVIEW ALAMAT UNDANGAN
                  </p>

                  {activeSlug ? (
                    <p className="break-all text-sm font-semibold leading-6 text-neutral-800">
                      {invitationUrl}
                    </p>
                  ) : (
                    <p className="text-sm text-neutral-400">
                      Isi nama panggilan kedua mempelai untuk melihat rekomendasi URL.
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={checkAvailability}
                    disabled={checking || !activeSlug}
                    className="mt-5 w-full rounded-full bg-[#ff4d6d] px-5 py-3 text-sm font-medium text-white shadow-md transition hover:scale-[1.01] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {checking
                      ? "Memeriksa URL..."
                      : "Periksa Ketersediaan URL"}
                  </button>

                  {urlMessage && (
                    <p
                      aria-live="polite"
                      className={`mt-4 text-center text-sm font-medium ${
                        available === true
                          ? "text-green-600"
                          : available === false
                            ? "text-red-500"
                            : "text-neutral-500"
                      }`}
                    >
                      {urlMessage}
                    </p>
                  )}
                </div>
              </div>
            </Section>
          )}

          {/* STEP 4 */}

          {step === 4 && (
            <Section
              number="04"
              title="Konfirmasi Pesanan"
              description="Periksa kembali semua informasi sebelum mengirimkan data pemesanan."
            >
              <div className="space-y-5">

                <Summary title="Informasi Pemesan">
                  <SummaryItem label="Nama" value={customerName} />
                  <SummaryItem label="WhatsApp" value={whatsapp} />
                </Summary>

                <Summary title="Mempelai Pria">
                  <SummaryItem label="Nama lengkap" value={groomFullName} />
                  <SummaryItem label="Nama panggilan" value={groomNickname} />
                </Summary>

                <Summary title="Mempelai Wanita">
                  <SummaryItem label="Nama lengkap" value={brideFullName} />
                  <SummaryItem label="Nama panggilan" value={brideNickname} />
                </Summary>

                <Summary title="Alamat Undangan">
                  <SummaryItem label="Format" value={urlFormat} />
                  <div className="mt-3 rounded-xl bg-[#fff7f9] p-4">
                    <p className="text-xs text-neutral-500">
                      URL pilihan
                    </p>
                    <p className="mt-2 break-all text-sm font-semibold leading-6 text-[#ff4d6d]">
                      {invitationUrl}
                    </p>
                    <p className="mt-2 text-xs text-green-600">
                      ✓ URL telah diperiksa tersedia
                    </p>
                  </div>
                </Summary>

                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                  <p className="text-xs leading-6 text-neutral-500">
                    Dengan mengirimkan formulir ini, kamu menyatakan
                    bahwa informasi yang diberikan sudah benar dan
                    dapat digunakan oleh tim Duajemari untuk proses
                    pembuatan undangan digital.
                  </p>
                </div>
              </div>
            </Section>
          )}

          {/* MESSAGE */}

          {message && (
            <div
              role="alert"
              className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600"
            >
              {message}
            </div>
          )}

          {/* NAVIGATION */}

          <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={previousStep}
                disabled={submitting}
                className="w-full rounded-full border border-neutral-200 px-7 py-3.5 text-sm font-medium text-neutral-700 transition hover:border-[#ff4d6d] hover:text-[#ff4d6d] disabled:opacity-50 sm:w-auto"
              >
                ← Kembali
              </button>
            ) : (
              <a
                href="/"
                className="w-full rounded-full border border-neutral-200 px-7 py-3.5 text-center text-sm font-medium text-neutral-700 transition hover:border-[#ff4d6d] hover:text-[#ff4d6d] sm:w-auto"
              >
                Batalkan
              </a>
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="w-full rounded-full bg-[#ff4d6d] px-9 py-3.5 text-sm font-medium text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg sm:w-auto"
              >
                Lanjutkan →
              </button>
            ) : (
              <button
                type="submit"
                disabled={submitting || available !== true}
                className="w-full rounded-full bg-[#ff4d6d] px-9 py-3.5 text-sm font-medium text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                {submitting
                  ? "Mengirim Pesanan..."
                  : "Kirim Pesanan"}
              </button>
            )}
          </div>
        </form>

        {/* FOOTNOTE */}

        <p className="mt-10 text-center text-xs leading-6 text-neutral-400">
          DUAJEMARI — Setiap kisah cinta memiliki cerita.
        </p>
      </div>
    </main>
  )
}

// =====================================
// REUSABLE COMPONENTS
// =====================================

function Section({
  number,
  title,
  description,
  children,
}: {
  number: string
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm md:p-9">
      <div className="mb-7 border-b border-neutral-100 pb-6">
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-[#ff4d6d]">
          {number} — DUAJEMARI ORDER
        </p>

        <h2 className="text-2xl font-semibold md:text-3xl">
          {title}
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-500">
          {description}
        </p>
      </div>

      {children}
    </section>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <label className="block min-w-0">
      <span className="mb-2 block text-sm font-medium text-neutral-800">
        {label}
      </span>
      {children}
    </label>
  )
}

function Summary({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <div className="rounded-xl border border-neutral-200 p-4 md:p-5">
      <h3 className="mb-4 text-sm font-semibold text-[#ff4d6d]">
        {title}
      </h3>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  )
}

function SummaryItem({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-5">
      <span className="text-xs text-neutral-500">
        {label}
      </span>
      <span className="break-words text-sm font-medium text-neutral-800 sm:text-right">
        {value || "-"}
      </span>
    </div>
  )
}
