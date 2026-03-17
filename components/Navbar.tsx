"use client"

import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import PageLoader from "./PageLoader"

export default function Navbar() {

  const router = useRouter()
  const pathname = usePathname()

  const [loading, setLoading] = useState(false)
  const [animate, setAnimate] = useState(false)

  /* restart animasi setiap route berubah */

  useEffect(() => {

    setAnimate(false)

    const t = setTimeout(() => {
      setAnimate(true)
    }, 50)

    return () => clearTimeout(t)

  }, [pathname])

  function navigate(path: string) {

    if (path === pathname) return

    setLoading(true)

    router.push(path)

    setTimeout(() => {
      setLoading(false)
    }, 600)

  }

  return (
    <>
      {loading && <PageLoader />}

      <nav className="w-full flex items-center justify-between px-10 py-6 border-b border-neutral-200 bg-white text-black">

        {/* LOGO */}

        <button
          onClick={() => navigate("/")}
          className={animate ? "bounce-up delay-1" : ""}
        >
          <Image
            src="/logonavbar.svg"
            alt="duajemari logo"
            width={120}
            height={59}
            priority
          />
        </button>

        {/* MENU */}

        <div className="flex items-center gap-8 text-sm tracking-widest">

          <button
            onClick={() => navigate("/")}
            className={`nav-link ${animate ? "bounce-up delay-2" : ""}`}
          >
            BERANDA
          </button>

          <button
            onClick={() => navigate("/porto")}
            className={`nav-link ${animate ? "bounce-up delay-3" : ""}`}
          >
            PORTOFOLIO
          </button>

          <button
            onClick={() => navigate("/product")}
            className={`nav-link ${animate ? "bounce-up delay-4" : ""}`}
          >
            PRODUK
          </button>

        </div>

      </nav>
    </>
  )
}
