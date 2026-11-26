
"use client"

export default function BrideGroom() {
  return (
    <section className="fade-up relative px-6 py-20 overflow-hidden mt-16">

      {/* ================= FLOWER ORNAMENTS ================= */}

      <img
        src="/rizky-gresya/flower-left-bridegroom.gif"
        alt="Flower left"
        className="fade-up fade-delay-8 absolute left-0 top-[950px] w-[180px] pointer-events-none z-30"
      />

      <img
        src="/rizky-gresya/flower-right-bridegroom.gif"
        alt="Flower right"
        className="fade-up fade-delay-9 absolute right-0 top-[950px] w-[180px] pointer-events-none z-30"
      />

      <img
        src="/rizky-gresya/flower-bottom-bridegroom.gif"
        alt="Flower bottom"
        className="fade-up fade-delay-16 absolute left-1/2 -translate-x-1/2 bottom-[60px] w-full pointer-events-none z-30"
      />

      <div className="max-w-xl mx-auto relative z-10">

        {/* ================= GLASS CARD ================= */}

        <div
          className="
            relative z-20
            max-w-xl mx-auto
            text-center
            px-10 py-16
            rounded-[36px]
            bg-white/40
            backdrop-blur-xl
            border border-white/55
            shadow-[0_20px_70px_rgba(0,0,0,0.12)]
          "
        >

          {/* ================= TITLE ================= */}

          <h2
            className="
              fade-up fade-delay-1
              font-ltsip
              text-[24px] md:text-[40px]
              tracking-[0.08em]
              text-[#641522]
            "
          >
            MEMPELAI
          </h2>

          {/* SHINY DIVIDER */}

          <div className="relative w-36 h-[2px] mx-auto mt-6 mb-10 overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B77A7D] to-transparent opacity-70"></div>

            <div className="absolute inset-0 animate-dividerShine bg-gradient-to-r from-transparent via-white to-transparent opacity-90"></div>

          </div>

          {/* ================= INTRODUCTION ================= */}

          <p
            className="
              fade-up fade-delay-2
              text-[12px] md:text-[16px]
              leading-[2.25]
              tracking-[0.02em]
              text-[#51464A]
              font-light
            "
          >
            Salam Sejahtera Dalam Kasih Tuhan.
            <br />
            Dengan penuh sukacita dan rasa syukur,
            kami mengundang Bapak/Ibu/Saudara/i
            untuk menghadiri pernikahan kami.
          </p>


          {/* ================================================== */}
          {/* ================= THE GROOM ====================== */}
          {/* ================================================== */}

          <div className="mt-16">

            <p className="fade-up fade-delay-3 text-[10px] tracking-[0.3em] text-[#68744F] mb-5">
              THE GROOM
            </p>

            <img
              src="/rizky-gresya/photo-groom.png"
              alt="Rizky Prayogi Pribadi"
              className="
                fade-up fade-delay-4
                mx-auto w-[220px]
                animate-photoFloat
              "
            />

            <h3
              className="
                fade-up fade-delay-5
                font-royalti
                text-[35px]
                text-[#641522]
                mt-5
                leading-[1.2]
              "
            >
              Rizky Prayogi Pribadi
            </h3>

            <p
              className="
                fade-up fade-delay-6
                text-[12px] md:text-[16px]
                leading-[2.25]
                tracking-[0.02em]
                text-[#51464A]
                font-light
                mt-5
              "
            >
              Putra Kedua dari
              <br />
              Bapak Suparlan
              <br />
              &amp; Almh. Ibu Suharti
            </p>

          </div>


          {/* ================= ORNAMENT ================= */}

          <div className="flex justify-center my-16">

            <img
              src="/rizky-gresya/tanda-pisah.svg"
              alt="Divider"
              className="fade-up fade-delay-10 w-[28px] opacity-80"
            />

          </div>


          {/* ================================================== */}
          {/* ================= THE BRIDE ====================== */}
          {/* ================================================== */}

          <div>

            <p className="fade-up fade-delay-11 text-[10px] tracking-[0.3em] text-[#68744F] mb-5">
              THE BRIDE
            </p>

            <img
              src="/rizky-gresya/photo-bride.png"
              alt="Gresya Erly Yudiawati"
              className="
                fade-up fade-delay-12
                mx-auto w-[220px]
                animate-photoFloat delay-float
              "
            />

            <h3
              className="
                fade-up fade-delay-13
                font-royalti
                text-[35px]
                text-[#641522]
                mt-5
                leading-[1.2]
              "
            >
              Gresya Erly Yudiawati
            </h3>

            <p
              className="
                fade-up fade-delay-14
                text-[12px] md:text-[16px]
                leading-[2.25]
                tracking-[0.02em]
                text-[#51464A]
                font-light
                mt-5
              "
            >
              Putri Ketiga dari
              <br />
              Bapak Edy Wahyudi
              <br />
              &amp; Ibu Indah Pancawati
            </p>

          </div>


          {/* ================= CLOSING ================= */}

          <div className="mt-14 pt-8 border-t border-[#B77A7D]/30">

            <p className="fade-up fade-delay-15 text-[12px] md:text-sm italic leading-[2] text-[#68744F]">
              Two hearts, one promise,
              <br />
              united in God's grace.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}
