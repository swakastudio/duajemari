"use client"

import { useEffect, useState } from "react"

export default function PortfolioCard({ item }: any) {

  const images = [item.image1, item.image2, item.image3].filter(Boolean)
  const [index, setIndex] = useState(0)

  // AUTO SLIDE
  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div
      onClick={() => window.open(item.linkUndangan, "_blank")}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-500"
    >

      {/* IMAGE SLIDESHOW */}
      <div className="relative w-full h-[260px] overflow-hidden">

        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="portfolio"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
              ${i === index ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}

        {/* overlay subtle */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />
      </div>

      {/* CONTENT */}
      <div className="p-4">

        <p className="text-[10px] tracking-[0.3em] text-neutral-400 mb-1">
          THE WEDDING OF
        </p>

        <h2 className="text-lg font-semibold text-neutral-800">
          {item.namaPria} & {item.namaWanita}
        </h2>

        <p className="text-xs text-neutral-500 mt-1">
          {item.date}
        </p>

        {/* DESIGN (CLICKABLE KE PRODUCT) */}
        {item.linkProduk && (
          <p
            onClick={(e) => {
              e.stopPropagation()
              window.open(item.linkProduk, "_blank")
            }}
            className="text-xs text-pink-500 mt-2 underline cursor-pointer"
          >
            {item.design}
          </p>
        )}

        {/* BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            window.open(item.linkUndangan, "_blank")
          }}
          className="mt-4 w-full py-2 rounded-full text-xs tracking-wider
          bg-[#FF4D6D] text-white hover:opacity-90 transition"
        >
          LIHAT UNDANGAN
        </button>

      </div>
    </div>
  )
}
