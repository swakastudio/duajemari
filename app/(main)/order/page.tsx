"use client"

import { useMemo, useState, type FormEvent, type ReactNode } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowLeft, ArrowRight, Check, CheckCircle2, Clock3, Heart,
  MapPin, ShieldCheck, Sparkles, UserRound, CalendarDays,
} from "lucide-react"
import {
  buildUrlSuggestions,
  buildInvitationUrl,
  cleanSlug,
  type UrlFormat,
} from "@/lib/order/url-generator"

const PINK = "#ff4d6d"
const STEPS = [
  { title: "Pemesan", caption: "Kontak utama", icon: UserRound },
  { title: "Mempelai", caption: "Identitas & keluarga", icon: Heart },
  { title: "Akad", caption: "Detail akad nikah", icon: CalendarDays },
  { title: "Resepsi", caption: "Detail resepsi", icon: MapPin },
  { title: "Alamat", caption: "URL undangan", icon: Sparkles },
  { title: "Tambahan", caption: "Cerita & media", icon: Heart },
  { title: "Konfirmasi", caption: "Periksa pesanan", icon: ShieldCheck },
]

const INPUT =
  "w-full min-w-0 rounded-xl border border-neutral-200/90 bg-white/80 px-4 py-3 text-[14px] text-neutral-900 outline-none transition duration-200 placeholder:text-neutral-400 hover:border-neutral-300 focus:border-[#ff4d6d] focus:ring-4 focus:ring-[#ff4d6d]/10"
const SELECT = INPUT
const TEXTAREA = `${INPUT} min-h-[104px] resize-y`

type FormData = {
  customerName: string
  whatsapp: string
  groomFullName: string
  groomNickname: string
  brideFullName: string
  brideNickname: string
  groomFatherName: string
  groomMotherName: string
  groomBirthOrder: string
  groomFatherStatus: string
  groomMotherStatus: string
  brideFatherName: string
  brideMotherName: string
  brideBirthOrder: string
  brideFatherStatus: string
  brideMotherStatus: string
  akadDate: string
  akadStartTime: string
  akadEndTime: string
  akadVenue: string
  akadAddress: string
  akadMapsUrl: string
  receptionDate: string
  receptionStartTime: string
  receptionEndTime: string
  receptionVenue: string
  receptionAddress: string
  receptionMapsUrl: string
  urlFormat: UrlFormat
  customSlug: string
  groomInstagram: string
  brideInstagram: string
  loveStory: string
  galleryLink: string
  musicLink: string
  specialNotes: string
}

const INITIAL: FormData = {
  customerName: "", whatsapp: "",
  groomFullName: "", groomNickname: "", brideFullName: "", brideNickname: "",
  groomFatherName: "", groomMotherName: "", groomBirthOrder: "",
  groomFatherStatus: "", groomMotherStatus: "",
  brideFatherName: "", brideMotherName: "", brideBirthOrder: "",
  brideFatherStatus: "", brideMotherStatus: "",
  akadDate: "", akadStartTime: "", akadEndTime: "", akadVenue: "", akadAddress: "", akadMapsUrl: "",
  receptionDate: "", receptionStartTime: "", receptionEndTime: "", receptionVenue: "", receptionAddress: "", receptionMapsUrl: "",
  urlFormat: "Pria - Nama Wanita", customSlug: "",
  groomInstagram: "", brideInstagram: "", loveStory: "", galleryLink: "", musicLink: "", specialNotes: "",
}

const URL_FORMATS: UrlFormat[] = [
  "Pria - Nama Wanita", "Wanita - Pria", "The Wedding", "Custom",
]

export default function OrderPage() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<FormData>(INITIAL)
  const [checking, setChecking] = useState(false)
  const [available, setAvailable] = useState<boolean | null>(null)
  const [urlMessage, setUrlMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [orderId, setOrderId] = useState("")

  const suggestions = useMemo(
    () => buildUrlSuggestions(form.groomNickname, form.brideNickname, form.customSlug),
    [form.groomNickname, form.brideNickname, form.customSlug]
  )
  const selectedSuggestion = suggestions.find(item => item.format === form.urlFormat)
  const activeSlug = form.urlFormat === "Custom"
    ? cleanSlug(form.customSlug)
    : selectedSuggestion?.slug || ""
  const invitationUrl = buildInvitationUrl(activeSlug)

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm(current => ({ ...current, [key]: value }))
    if (["groomNickname", "brideNickname", "customSlug", "urlFormat"].includes(key)) {
      setAvailable(null)
      setUrlMessage("")
    }
    setMessage("")
  }

  function validateStep(target = step) {
    if (target === 1) {
      if (!form.customerName.trim() || !form.whatsapp.trim()) {
        setMessage("Lengkapi nama pemesan dan nomor WhatsApp.")
        return false
      }
      const phone = form.whatsapp.replace(/[\s+()-]/g, "")
      if (!/^\d{9,15}$/.test(phone)) {
        setMessage("Periksa kembali nomor WhatsApp. Masukkan 9–15 digit angka.")
        return false
      }
    }
    if (target === 2) {
      const required = [
        form.groomFullName, form.groomNickname, form.brideFullName, form.brideNickname,
        form.groomFatherName, form.groomMotherName, form.groomBirthOrder,
        form.brideFatherName, form.brideMotherName, form.brideBirthOrder,
      ]
      if (required.some(value => !value.trim())) {
        setMessage("Lengkapi identitas mempelai dan data keluarga yang wajib diisi.")
        return false
      }
    }
    if (target === 3) {
      if (!form.akadDate || !form.akadStartTime || !form.akadVenue.trim() || !form.akadAddress.trim()) {
        setMessage("Lengkapi tanggal, jam mulai, tempat, dan alamat akad.")
        return false
      }
    }
    if (target === 4) {
      if (!form.receptionDate || !form.receptionStartTime || !form.receptionVenue.trim() || !form.receptionAddress.trim()) {
        setMessage("Lengkapi tanggal, jam mulai, tempat, dan alamat resepsi.")
        return false
      }
    }
    if (target === 5) {
      if (!activeSlug) {
        setMessage("Pilih format atau masukkan URL custom.")
        return false
      }
      if (available !== true) {
        setMessage("Periksa ketersediaan URL sebelum melanjutkan.")
        return false
      }
    }
    setMessage("")
    return true
  }

  function nextStep() {
    if (!validateStep()) return
    setStep(current => Math.min(current + 1, STEPS.length))
    setMessage("")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function previousStep() {
    setStep(current => Math.max(current - 1, 1))
    setMessage("")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  async function checkAvailability() {
    if (!activeSlug) {
      setUrlMessage("Isi nama panggilan kedua mempelai atau URL custom.")
      return
    }
    setChecking(true)
    setAvailable(null)
    setUrlMessage("Sedang memeriksa alamat undangan…")
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "checkSlug", slug: activeSlug }),
        cache: "no-store",
      })
      const result = await response.json()
      if (!response.ok || result.success === false) {
        throw new Error(result.message || "Pemeriksaan URL gagal.")
      }
      const isAvailable = result.available === true || result.status === "AVAILABLE"
      setAvailable(isAvailable)
      setUrlMessage(isAvailable ? "URL tersedia dan bisa digunakan." : "URL sudah digunakan. Pilih format lain.")
    } catch (error) {
      setAvailable(null)
      setUrlMessage(error instanceof Error ? error.message : "Tidak dapat memeriksa URL.")
    } finally {
      setChecking(false)
    }
  }

  async function submitOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!validateStep(2) || !validateStep(3) || !validateStep(4) || !validateStep(5)) {
      const firstInvalid = [2, 3, 4, 5].find(index => !validateStep(index))
      if (firstInvalid) setStep(firstInvalid)
      return
    }
    setSubmitting(true)
    setMessage("")
    try {
      const {
        customSlug, ...rest
      } = form
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Apps Script menerima data melalui payload.data
        body: JSON.stringify({
          action: "submitOrder",
          data: { ...rest, urlSlug: activeSlug },
        }),
      })
      const result = await response.json()
      if (!response.ok || result.success === false) {
        throw new Error(result.message || "Pesanan gagal dikirim.")
      }
      setOrderId(result.orderId || result.order?.orderId || result.data?.orderId || "")
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Terjadi kesalahan saat mengirim pesanan.")
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-white px-4 pb-16 pt-28 md:px-8 md:pt-36">
        <div className="mx-auto max-w-xl">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            className="rounded-[28px] border border-white/80 bg-white/75 p-7 text-center shadow-[0_20px_70px_rgba(30,20,20,0.08)] backdrop-blur-xl md:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#fff1f4] text-[#ff4d6d]">
              <CheckCircle2 size={34} />
            </div>
            <p className="text-[10px] font-semibold tracking-[0.28em] text-[#ff4d6d]">DUAJEMARI ORDER</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Terima Kasih!</h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-neutral-500">
              Informasi pemesanan berhasil diterima. Tim Duajemari akan menghubungi kamu melalui WhatsApp untuk proses berikutnya.
            </p>
            {orderId && <div className="mt-7 rounded-2xl bg-neutral-50 p-4">
              <p className="text-xs text-neutral-500">Nomor pesanan</p>
              <p className="mt-1 font-semibold text-[#ff4d6d]">{orderId}</p>
            </div>}
            <div className="mt-5 rounded-2xl border border-[#ff4d6d]/20 bg-[#fff7f9] p-4 text-left">
              <p className="text-xs text-neutral-500">Alamat undangan pilihan</p>
              <p className="mt-2 break-all text-sm font-semibold text-[#ff4d6d]">{invitationUrl}</p>
            </div>
            <a href="/" className="mt-8 inline-flex rounded-full bg-[#ff4d6d] px-8 py-3.5 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
              Kembali ke Beranda
            </a>
          </motion.div>
        </div>
      </main>
    )
  }

  const progress = Math.round(step / STEPS.length * 100)

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fffdfc] px-4 pb-16 pt-28 text-neutral-900 md:px-8 md:pt-36">
      {/* Soft ambient glass accents */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-24 -z-0 h-[420px] overflow-hidden">
        <div className="absolute left-[8%] top-10 h-56 w-56 rounded-full bg-[#ff4d6d]/[0.07] blur-3xl" />
        <div className="absolute right-[8%] top-20 h-64 w-64 rounded-full bg-[#e8c9b9]/[0.18] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <header className="mb-8 text-center md:mb-10">
          <p className="mb-3 text-[10px] font-semibold tracking-[0.32em] text-[#c58b72]">DUAJEMARI DIGITAL INVITATION</p>
          <h1 className="font-serif text-[2.15rem] leading-tight tracking-tight text-neutral-900 md:text-5xl">
            Begin Your <span className="italic text-[#b98b75]">Story</span>
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-[13px] leading-6 text-neutral-500 md:text-sm">
            Ceritakan detail hari istimewa kalian. Kami akan menyiapkan undangan digital yang personal dan berkesan.
          </p>
        </header>

        {/* Glass progress panel */}
        <section className="mb-5 rounded-2xl border border-white/80 bg-white/75 p-4 shadow-[0_12px_40px_rgba(40,25,20,0.06)] backdrop-blur-xl md:mb-7 md:p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-medium tracking-[0.18em] text-neutral-400">LANGKAH {step} DARI {STEPS.length}</p>
              <p className="mt-1 text-sm font-semibold">{STEPS[step - 1].title} <span className="font-normal text-neutral-400">— {STEPS[step - 1].caption}</span></p>
            </div>
            <span className="text-sm font-semibold tabular-nums text-[#ff4d6d]">{progress}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
            <motion.div className="h-full rounded-full bg-[#ff4d6d]" animate={{ width: `${progress}%` }} transition={{ duration: 0.45, ease: "easeOut" }} />
          </div>
          <div className="mt-3 grid grid-cols-7 gap-1.5">
            {STEPS.map((item, index) => {
              const Icon = item.icon
              return <div key={item.title} className="flex flex-col items-center gap-1.5">
                <div className={`flex h-7 w-7 items-center justify-center rounded-full transition-all ${index + 1 <= step ? "bg-[#ff4d6d] text-white shadow-[0_3px_10px_rgba(255,77,109,0.22)]" : "bg-neutral-100 text-neutral-400"}`}>
                  {index + 1 < step ? <Check size={13} /> : <Icon size={13} />}
                </div>
                <span className={`hidden text-[10px] sm:block ${index + 1 === step ? "font-semibold text-[#ff4d6d]" : "text-neutral-400"}`}>{item.title}</span>
              </div>
            })}
          </div>
        </section>

        <form onSubmit={submitOrder}>
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8, filter: "blur(3px)" }}
              transition={{ duration: 0.24, ease: "easeOut" }}>
              {step === 1 && <Section number="01" title="Informasi Pemesan" description="Siapa yang akan menjadi kontak utama selama proses pembuatan undangan?">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Nama lengkap pemesan" required>
                    <input autoFocus autoComplete="name" value={form.customerName} onChange={e => update("customerName", e.target.value)} placeholder="Nama lengkap kamu" className={INPUT} />
                  </Field>
                  <Field label="Nomor WhatsApp aktif" required hint="Gunakan nomor yang bisa menerima pesan WhatsApp.">
                    <input type="tel" inputMode="tel" autoComplete="tel" value={form.whatsapp} onChange={e => update("whatsapp", e.target.value)} placeholder="Contoh: 081234567890" className={INPUT} />
                  </Field>
                </div>
              </Section>}

              {step === 2 && <Section number="02" title="Identitas & Keluarga" description="Data ini akan digunakan untuk penulisan nama dan keterangan keluarga pada undangan.">
                <div className="grid gap-7 lg:grid-cols-2">
                  <PersonFields title="Mempelai pria" prefix="groom" form={form} update={update} />
                  <PersonFields title="Mempelai wanita" prefix="bride" form={form} update={update} />
                </div>
                <p className="mt-6 rounded-xl border border-[#ff4d6d]/15 bg-[#fff7f9]/80 p-3 text-xs leading-5 text-neutral-500">
                  Contoh keterangan: “Putra pertama dari Bapak … dan Ibu …”. Status orang tua dapat dipilih sesuai keadaan.
                </p>
              </Section>}

              {step === 3 && <Section number="03" title="Detail Akad Nikah" description="Masukkan jadwal dan lokasi pelaksanaan akad. Kolom bertanda opsional boleh dilewati.">
                <EventFields prefix="akad" form={form} update={update} />
              </Section>}

              {step === 4 && <Section number="04" title="Detail Resepsi" description="Masukkan jadwal dan lokasi resepsi. Jika akad dan resepsi berlangsung di tempat berbeda, isi alamat masing-masing.">
                <EventFields prefix="reception" form={form} update={update} />
              </Section>}

              {step === 5 && <Section number="05" title="Alamat Undangan" description="Pilih alamat khusus untuk undangan digital kalian. Rekomendasi dibuat otomatis dari nama panggilan.">
                <div className="space-y-3">
                  {URL_FORMATS.map(format => {
                    const suggestion = suggestions.find(item => item.format === format)
                    const selected = form.urlFormat === format
                    return <button key={format} type="button" onClick={() => update("urlFormat", format)}
                      className={`group w-full rounded-2xl border p-4 text-left transition duration-200 ${selected ? "border-[#ff4d6d] bg-[#fff7f9]/90 shadow-[0_8px_24px_rgba(255,77,109,0.08)]" : "border-neutral-200 bg-white/70 hover:border-[#ff4d6d]/50"}`}>
                      <div className="flex items-center gap-3">
                        <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${selected ? "border-[#ff4d6d]" : "border-neutral-300"}`}>
                          {selected && <span className="h-2.5 w-2.5 rounded-full bg-[#ff4d6d]" />}
                        </span>
                        <span className="text-sm font-semibold">{format}</span>
                        {selected && <span className="ml-auto text-[9px] font-semibold tracking-widest text-[#ff4d6d]">DIPILIH</span>}
                      </div>
                      {format !== "Custom" && <p className="mt-2 break-all pl-8 text-xs text-neutral-500">{suggestion ? `duajemari.com/${suggestion.slug}` : "Isi nama panggilan kedua mempelai terlebih dahulu"}</p>}
                    </button>
                  })}
                </div>
                {form.urlFormat === "Custom" && <div className="mt-4 rounded-2xl border border-[#ff4d6d]/20 bg-[#fff7f9]/70 p-4">
                  <Field label="Nama URL custom" required>
                    <input value={form.customSlug} onChange={e => update("customSlug", e.target.value)} placeholder="Contoh: kisah-febri-luckta" className={INPUT} />
                  </Field>
                </div>}
                <div className="mt-5 rounded-2xl border border-[#ff4d6d]/20 bg-white/80 p-4 shadow-[0_8px_25px_rgba(255,77,109,0.06)] backdrop-blur-md md:p-5">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-[#ff4d6d]">PREVIEW ALAMAT UNDANGAN</p>
                  <p className="mt-2 break-all text-sm font-semibold leading-6">{invitationUrl || "Isi nama panggilan untuk melihat URL"}</p>
                  <button type="button" onClick={checkAvailability} disabled={checking || !activeSlug}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff4d6d] px-5 py-3 text-sm font-medium text-white shadow-[0_6px_18px_rgba(255,77,109,0.2)] transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50">
                    {checking ? <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> Memeriksa…</> : "Periksa ketersediaan URL"}
                  </button>
                  {urlMessage && <p aria-live="polite" className={`mt-3 text-center text-xs font-medium ${available === true ? "text-emerald-600" : available === false ? "text-red-500" : "text-neutral-500"}`}>{urlMessage}</p>}
                </div>
              </Section>}

              {step === 6 && <Section number="06" title="Informasi Tambahan" description="Lengkapi informasi pendukung agar undangan terasa lebih personal. Semua kolom di tahap ini opsional.">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Instagram mempelai pria">
                    <input value={form.groomInstagram} onChange={e => update("groomInstagram", e.target.value)} placeholder="@username" className={INPUT} />
                  </Field>
                  <Field label="Instagram mempelai wanita">
                    <input value={form.brideInstagram} onChange={e => update("brideInstagram", e.target.value)} placeholder="@username" className={INPUT} />
                  </Field>
                  <Field label="Link galeri foto" hint="Link Google Drive dengan akses yang dapat dibuka.">
                    <input type="url" value={form.galleryLink} onChange={e => update("galleryLink", e.target.value)} placeholder="https://drive.google.com/..." className={INPUT} />
                  </Field>
                  <Field label="Link musik pilihan">
                    <input type="url" value={form.musicLink} onChange={e => update("musicLink", e.target.value)} placeholder="Link YouTube atau sumber musik" className={INPUT} />
                  </Field>
                </div>
                <div className="mt-5 space-y-5">
                  <Field label="Cerita singkat perjalanan cinta">
                    <textarea value={form.loveStory} onChange={e => update("loveStory", e.target.value)} placeholder="Ceritakan secara singkat bagaimana kalian bertemu…" className={TEXTAREA} />
                  </Field>
                  <Field label="Catatan khusus untuk Duajemari">
                    <textarea value={form.specialNotes} onChange={e => update("specialNotes", e.target.value)} placeholder="Hal lain yang ingin disampaikan (opsional)" className={TEXTAREA} />
                  </Field>
                </div>
              </Section>}

              {step === 7 && <Section number="07" title="Konfirmasi Pesanan" description="Periksa kembali data yang telah diisi. Kamu masih bisa kembali ke tahap sebelumnya untuk melakukan perubahan.">
                <div className="space-y-4">
                  <Summary title="Informasi pemesan">
                    <SummaryItem label="Nama" value={form.customerName} />
                    <SummaryItem label="WhatsApp" value={form.whatsapp} />
                  </Summary>
                  <Summary title="Mempelai & keluarga">
                    <SummaryItem label="Mempelai pria" value={form.groomFullName} />
                    <SummaryItem label="Nama panggilan" value={form.groomNickname} />
                    <SummaryItem label="Ayah" value={form.groomFatherName} />
                    <SummaryItem label="Ibu" value={form.groomMotherName} />
                    <SummaryItem label="Urutan kelahiran" value={`Anak ke-${form.groomBirthOrder}`} />
                    <SummaryItem label="Mempelai wanita" value={form.brideFullName} />
                    <SummaryItem label="Nama panggilan" value={form.brideNickname} />
                    <SummaryItem label="Ayah" value={form.brideFatherName} />
                    <SummaryItem label="Ibu" value={form.brideMotherName} />
                    <SummaryItem label="Urutan kelahiran" value={`Anak ke-${form.brideBirthOrder}`} />
                  </Summary>
                  <Summary title="Akad nikah">
                    <SummaryItem label="Tanggal" value={formatDate(form.akadDate)} />
                    <SummaryItem label="Waktu" value={formatTime(form.akadStartTime, form.akadEndTime)} />
                    <SummaryItem label="Tempat" value={form.akadVenue} />
                    <SummaryItem label="Alamat" value={form.akadAddress} />
                    <SummaryItem label="Google Maps" value={form.akadMapsUrl} />
                  </Summary>
                  <Summary title="Resepsi">
                    <SummaryItem label="Tanggal" value={formatDate(form.receptionDate)} />
                    <SummaryItem label="Waktu" value={formatTime(form.receptionStartTime, form.receptionEndTime)} />
                    <SummaryItem label="Tempat" value={form.receptionVenue} />
                    <SummaryItem label="Alamat" value={form.receptionAddress} />
                    <SummaryItem label="Google Maps" value={form.receptionMapsUrl} />
                  </Summary>
                  <Summary title="Alamat undangan">
                    <SummaryItem label="Format" value={form.urlFormat} />
                    <SummaryItem label="URL" value={invitationUrl} accent />
                  </Summary>
                  <Summary title="Informasi tambahan">
                    <SummaryItem label="Instagram pria" value={form.groomInstagram} />
                    <SummaryItem label="Instagram wanita" value={form.brideInstagram} />
                    <SummaryItem label="Cerita cinta" value={form.loveStory} />
                    <SummaryItem label="Galeri" value={form.galleryLink} />
                    <SummaryItem label="Musik" value={form.musicLink} />
                    <SummaryItem label="Catatan" value={form.specialNotes} />
                  </Summary>
                  <div className="rounded-xl border border-[#ff4d6d]/15 bg-[#fff7f9]/70 p-4 text-xs leading-6 text-neutral-500">
                    Dengan mengirim formulir ini, kamu menyatakan informasi yang diberikan sudah benar dan dapat digunakan tim Duajemari untuk proses pembuatan undangan.
                  </div>
                </div>
              </Section>}
            </motion.div>
          </AnimatePresence>

          {message && <div role="alert" className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{message}</div>}

          <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            {step > 1 ? <button type="button" onClick={previousStep} disabled={submitting}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-7 text-sm font-medium text-neutral-600 transition hover:border-[#ff4d6d]/50 hover:text-[#ff4d6d] disabled:opacity-50 sm:w-auto">
              <ArrowLeft size={16} /> Kembali
            </button> : <a href="/" className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-neutral-200 bg-white/80 px-7 text-sm font-medium text-neutral-600 transition hover:border-[#ff4d6d]/50 hover:text-[#ff4d6d] sm:w-auto">Batalkan</a>}

            {step < STEPS.length ? <button type="button" onClick={nextStep}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#ff4d6d] px-8 text-sm font-medium text-white shadow-[0_7px_20px_rgba(255,77,109,0.2)] transition hover:-translate-y-0.5 hover:shadow-lg sm:w-auto">
              Lanjutkan <ArrowRight size={16} />
            </button> : <button type="submit" disabled={submitting || available !== true}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#ff4d6d] px-8 text-sm font-medium text-white shadow-[0_7px_20px_rgba(255,77,109,0.2)] transition hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">
              {submitting ? "Mengirim pesanan…" : <><Check size={16} /> Kirim pesanan</>}
            </button>}
          </div>
        </form>

        <p className="mt-8 text-center text-[10px] tracking-[0.12em] text-neutral-400">DUAJEMARI — SETIAP KISAH CINTA MEMILIKI CERITA</p>
      </div>
    </main>
  )
}

function PersonFields({ title, prefix, form, update }: {
  title: string
  prefix: "groom" | "bride"
  form: FormData
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void
}) {
  const fullNameKey = `${prefix}FullName` as const
  const nicknameKey = `${prefix}Nickname` as const
  const fatherKey = `${prefix}FatherName` as const
  const motherKey = `${prefix}MotherName` as const
  const birthKey = `${prefix}BirthOrder` as const
  const fatherStatusKey = `${prefix}FatherStatus` as const
  const motherStatusKey = `${prefix}MotherStatus` as const
  return <div className="rounded-2xl border border-neutral-200/80 bg-white/65 p-4 md:p-5">
    <div className="mb-5 flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff1f4] text-sm font-semibold text-[#ff4d6d]">{prefix === "groom" ? "P" : "W"}</div>
      <div><h3 className="text-sm font-semibold">{title}</h3><p className="text-xs text-neutral-400">Identitas dan orang tua</p></div>
    </div>
    <div className="space-y-4">
      <Field label="Nama lengkap" required><input value={form[fullNameKey]} onChange={e => update(fullNameKey, e.target.value)} placeholder="Nama lengkap" className={INPUT} /></Field>
      <Field label="Nama panggilan" required><input value={form[nicknameKey]} onChange={e => update(nicknameKey, e.target.value)} placeholder="Nama panggilan" className={INPUT} /></Field>
      <div className="border-t border-neutral-100 pt-4">
        <p className="mb-3 text-xs font-semibold tracking-wide text-[#c58b72]">INFORMASI ORANG TUA</p>
        <div className="space-y-4">
          <Field label="Nama ayah" required><input value={form[fatherKey]} onChange={e => update(fatherKey, e.target.value)} placeholder="Nama ayah" className={INPUT} /></Field>
          <Field label="Status ayah"><select value={form[fatherStatusKey]} onChange={e => update(fatherStatusKey, e.target.value)} className={SELECT}><option value="">Pilih status (opsional)</option><option value="Masih hidup">Masih hidup</option><option value="Telah wafat">Telah wafat</option></select></Field>
          <Field label="Nama ibu" required><input value={form[motherKey]} onChange={e => update(motherKey, e.target.value)} placeholder="Nama ibu" className={INPUT} /></Field>
          <Field label="Status ibu"><select value={form[motherStatusKey]} onChange={e => update(motherStatusKey, e.target.value)} className={SELECT}><option value="">Pilih status (opsional)</option><option value="Masih hidup">Masih hidup</option><option value="Telah wafat">Telah wafat</option></select></Field>
          <Field label="Anak ke-" required><input type="number" min="1" step="1" inputMode="numeric" value={form[birthKey]} onChange={e => update(birthKey, e.target.value)} placeholder="Contoh: 1" className={INPUT} /></Field>
        </div>
      </div>
    </div>
  </div>
}

function EventFields({ prefix, form, update }: {
  prefix: "akad" | "reception"
  form: FormData
  update: <K extends keyof FormData>(key: K, value: FormData[K]) => void
}) {
  const isAkad = prefix === "akad"
  const fields = isAkad
    ? { date: "akadDate", start: "akadStartTime", end: "akadEndTime", venue: "akadVenue", address: "akadAddress", maps: "akadMapsUrl" } as const
    : { date: "receptionDate", start: "receptionStartTime", end: "receptionEndTime", venue: "receptionVenue", address: "receptionAddress", maps: "receptionMapsUrl" } as const
  return <div className="space-y-5">
    <div className="grid gap-4 sm:grid-cols-2">
      <Field label="Tanggal acara" required><input type="date" value={form[fields.date]} onChange={e => update(fields.date, e.target.value)} className={INPUT} /></Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Mulai" required><input type="time" value={form[fields.start]} onChange={e => update(fields.start, e.target.value)} className={INPUT} /></Field>
        <Field label="Selesai"><input type="time" value={form[fields.end]} onChange={e => update(fields.end, e.target.value)} className={INPUT} /></Field>
      </div>
    </div>
    <Field label="Nama tempat / gedung" required><input value={form[fields.venue]} onChange={e => update(fields.venue, e.target.value)} placeholder={isAkad ? "Contoh: Masjid..." : "Contoh: Gedung..."} className={INPUT} /></Field>
    <Field label="Alamat lengkap" required><textarea value={form[fields.address]} onChange={e => update(fields.address, e.target.value)} placeholder="Nama jalan, nomor, kelurahan, kecamatan, kota…" className={TEXTAREA} /></Field>
    <Field label="Link Google Maps" hint="Opsional — tempel tautan lokasi dari Google Maps."><input type="url" value={form[fields.maps]} onChange={e => update(fields.maps, e.target.value)} placeholder="https://maps.app.goo.gl/..." className={INPUT} /></Field>
  </div>
}

function Field({ label, required, hint, children }: {
  label: string
  required?: boolean
  hint?: string
  children: ReactNode
}) {
  return <label className="block min-w-0">
    <span className="mb-2 flex items-center gap-1.5 text-[13px] font-medium text-neutral-700">
      {label}{required && <span className="text-[#ff4d6d]">*</span>}
    </span>
    {children}
    {hint && <span className="mt-1.5 block text-[11px] leading-5 text-neutral-400">{hint}</span>}
  </label>
}

function Section({ number, title, description, children }: {
  number: string
  title: string
  description: string
  children: ReactNode
}) {
  return <section className="rounded-[26px] border border-white/90 bg-white/80 p-5 shadow-[0_16px_55px_rgba(35,25,20,0.07)] backdrop-blur-xl md:p-8">
    <div className="mb-6 border-b border-neutral-100 pb-5 md:mb-7">
      <p className="mb-2 text-[10px] font-semibold tracking-[0.24em] text-[#ff4d6d]">{number} — DUAJEMARI ORDER</p>
      <h2 className="font-serif text-2xl tracking-tight md:text-3xl">{title}</h2>
      <p className="mt-2 max-w-2xl text-[13px] leading-6 text-neutral-500">{description}</p>
    </div>
    {children}
  </section>
}

function Summary({ title, children }: { title: string; children: ReactNode }) {
  return <div className="rounded-2xl border border-neutral-200/80 bg-white/70 p-4 md:p-5">
    <h3 className="mb-3 text-xs font-semibold tracking-wide text-[#ff4d6d]">{title}</h3>
    <div className="space-y-2.5">{children}</div>
  </div>
}

function SummaryItem({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return <div className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-3 text-xs">
    <span className="text-neutral-400">{label}</span>
    <span className={`break-words text-right font-medium ${accent ? "text-[#ff4d6d]" : "text-neutral-800"}`}>{value || "—"}</span>
  </div>
}

function formatDate(value: string) {
  if (!value) return "—"
  return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(new Date(`${value}T00:00:00`))
}

function formatTime(start: string, end: string) {
  if (!start) return "—"
  return end ? `${start} – ${end}` : start
}
