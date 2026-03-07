"use client"

import { useEffect, useState } from "react"

type Testimonial = {
  name: string
  text: string
  photo: string
}

const testimonials: Testimonial[] = [
  {
    name: "Rafi & Alya",
    text: "Undangan kami jadi sangat elegan dan semua tamu kagum.",
    photo: "/review1.jpg"
  },
  {
    name: "Dimas & Putri",
    text: "Praktis sekali, langsung bisa dibagikan ke semua tamu.",
    photo: "/review2.jpg"
  },
  {
    name: "Arif & Sinta",
    text: "Desainnya sangat personal dan modern.",
    photo: "/review3.jpg"
  }
]

export default function TestimonialSlider() {

  const [index, setIndex] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((prev) => (prev + 1) % testimonials.length)

    }, 4000)

    return () => clearInterval(interval)

  }, [])

  const item = testimonials[index]

  return (

    <div className="max-w-xl mx-auto">

      <div className="border border-neutral-200 rounded-2xl p-8 text-center shadow-sm">

        <img
          src={item.photo}
          className="w-16 h-16 rounded-full mx-auto mb-4"
        />

        <p className="text-neutral-600">

          "{item.text}"

        </p>

        <p className="font-semibold mt-4">

          {item.name}

        </p>

      </div>

    </div>

  )
}