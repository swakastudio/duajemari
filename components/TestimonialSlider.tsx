"use client"

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

  return (

    <div className="max-w-7xl mx-auto">

      <div className="grid md:grid-cols-3 gap-8">


        {testimonials.map((item, i) => (

          <div
            key={i}
            className="
            bg-white
            border border-[#ff4d6d]/30
            rounded-2xl
            p-8
            shadow-[0_10px_30px_rgba(255,77,109,0.15)]
            hover:shadow-[0_15px_40px_rgba(255,77,109,0.25)]
            transition
            duration-300
            text-center
            "
          >

            <img
              src={item.photo}
              className="
              w-20
              h-20
              rounded-full
              object-cover
              mx-auto
              mb-5
              border-2
              border-[#ff4d6d]
              "
            />

            <p className="text-neutral-600 text-sm leading-relaxed mb-4">

              "{item.text}"

            </p>

            <p className="font-semibold text-[#ff4d6d]">

              {item.name}

            </p>

          </div>

        ))}


      </div>

    </div>

  )

}