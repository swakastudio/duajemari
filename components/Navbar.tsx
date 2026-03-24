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
  const [menuOpen, setMenuOpen] = useState(false)

  /* animasi route */
  useEffect(() => {
    setAnimate(false)
    const t = setTimeout(() => setAnimate(true), 50)
    return () => clearTimeout(t)
  }, [pathname])

  function navigate(path: string) {
    if (path === pathname) return

    setLoading(true)
    setMenuOpen(false)

    router.push(path)

    setTimeout(() => {
      setLoading(false)
    }, 600)
  }

  return (
    <>
      {loading && <PageLoader />}

      <nav className="w-full flex items-center justify-between px-5 md:px-10 py-5 border-b border-neutral-200 bg-white text-black relative">

        {/* LOGO */}
        <button
          onClick={() => navigate("/")}
          className={animate ? "bounce-up delay-1" : ""}
        >
          <Image
            src="/logonavbar.svg"
            alt="duajemari logo"
            width={110}
            height={50}
            priority
          />
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-widest">

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

        {/* HAMBURGER (MOBILE) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-neutral-200 flex flex-col items-center py-6 gap-6 text-sm tracking-widest z-50">

            <button onClick={() => navigate("/")}>BERANDA</button>
            <button onClick={() => navigate("/porto")}>PORTOFOLIO</button>
            <button onClick={() => navigate("/product")}>PRODUK</button>

          </div>
        )}

      </nav>
    </>
  )
}
