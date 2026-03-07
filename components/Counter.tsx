"use client"

import { useEffect, useState } from "react"

type Props = {
  value: number
}

export default function Counter({ value }: Props) {

  const [count, setCount] = useState(0)

  useEffect(() => {

    let start = 0

    const interval = setInterval(() => {

      start += Math.ceil(value / 50)

      if (start >= value) {
        start = value
        clearInterval(interval)
      }

      setCount(start)

    }, 30)

    return () => clearInterval(interval)

  }, [value])

  return (
    <span>{count}</span>
  )
}