"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
  value: number
}

export default function Counter({ value }: Props) {

  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState(false)

  /* detect scroll */

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.7 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()

  }, [])


  /* animate count */

  useEffect(() => {

    if (!visible) return

    const duration = 5000
    const start = 0
    const end = value
    const startTime = performance.now()

    const animate = (time: number) => {

      const progress = Math.min((time - startTime) / duration, 1)

      const current = Math.floor(progress * (end - start) + start)

      setCount(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }

    }

    requestAnimationFrame(animate)

  }, [visible, value])


  return (
    <span ref={ref}>
      {count}
    </span>
  )

}