"use client"

import { useState } from "react"

export default function FeatureCard({
  title,
  description,
  link,
}: {
  title: string
  description: string
  link: string
}) {

  const [open, setOpen] = useState(false)

  return (
    <div
      className={`border border-neutral-200 rounded-2xl p-8 transition-all duration-300 cursor-pointer
      hover:shadow-xl hover:-translate-y-1 hover:border-[#ff4d6d]`}
      onClick={() => setOpen(!open)}
    >

      <div className="flex justify-between items-start">

        <div>

          <h3 className="text-xl font-semibold mb-2">
            {title}
          </h3>

          <p className="text-neutral-500">
            {description}
          </p>

        </div>

        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>

      </div>


      {/* DROPDOWN */}

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 mt-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >

        <div className="border-t pt-6 text-sm text-neutral-500">

          <p className="mb-3">
            Lihat contoh fitur ini:
          </p>

          <a
            href={link}
            target="_blank"
            className="text-[#ff4d6d] underline"
          >
            Buka Preview
          </a>

        </div>

      </div>

    </div>
  )
}