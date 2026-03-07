"use client"

import { useEffect, useRef, useState } from "react"

export default function Reveal({
  children,
  delay = 0
}:{
  children: React.ReactNode
  delay?: number
}) {

  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setTimeout(() => {
            setShow(true)
          }, delay)

        }

      },

      { threshold: 0.2 }

    )

    if (ref.current) observer.observe(ref.current)

  }, [])

  return (

    <div
      ref={ref}
      className={`transition-all duration-700 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >

      {children}

    </div>

  )
}