
export default function Ayat() {
  return (
    <section className="relative px-6 py-24 overflow-hidden">

      <div className="max-w-xl mx-auto text-center relative z-10">

        {/* Ornamen atas */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="w-12 h-[1px] bg-[#B67A7D]/70" />
          <span className="text-[#697551] text-xl">✦</span>
          <span className="w-12 h-[1px] bg-[#B67A7D]/70" />
        </div>

        {/* Label */}
        <p className="fade-up text-[10px] tracking-[0.35em] text-[#697551] mb-6">
          HOLY BIBLE
        </p>

        {/* Judul */}
        <h2 className="fade-up font-ltsip text-2xl md:text-4xl tracking-wider text-[#661321] mb-10">
          Firman Tuhan
        </h2>

        {/* Ayat */}
        <div className="fade-up relative px-7 py-10 md:px-12 md:py-14 rounded-[32px] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_15px_50px_rgba(0,0,0,0.08)]">

          <span className="block font-royalti text-5xl text-[#B67A7D] opacity-70 mb-5">
            “
          </span>

          <p className="font-royalti text-[24px] md:text-[32px] leading-[1.8] text-[#641522]">
            Kasih itu sabar; kasih itu murah hati.
          </p>

          <p className="text-[11px] md:text-sm leading-[2] text-[#51464A] mt-6 font-light">
            Kasih tidak berkesudahan. Dalam setiap musim kehidupan,
            kasih hendaknya menjadi dasar untuk saling menguatkan,
            memahami, dan setia mendampingi.
          </p>

          <div className="w-12 h-[1px] bg-[#B67A7D] mx-auto my-7" />

          <p className="text-[10px] tracking-[0.25em] text-[#697551]">
            1 KORINTUS 13:4–7
          </p>

        </div>

        {/* Penutup */}
        <p className="fade-up italic font-royalti text-xl md:text-2xl text-[#641522] mt-10">
          “And above all these things put on charity,
          which is the bond of perfectness.”
        </p>

        <div className="flex items-center justify-center gap-4 mt-8">
          <span className="w-12 h-[1px] bg-[#B67A7D]/70" />
          <span className="text-[#697551]">✦</span>
          <span className="w-12 h-[1px] bg-[#B67A7D]/70" />
        </div>

      </div>
    </section>
  )
}
