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

     <nav className="w-full flex items-center justify-between px-5 md:px-10 py-5 
backdrop-blur-md bg-white/70 border-b border-white/30 
text-black fixed top-0 left-0 z-50">

        {/* LOGO */}
        <button
  className="md:hidden w-8 h-8 relative flex items-center justify-center"
  onClick={() => setMenuOpen(!menuOpen)}
>

  <span className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ease-in-out
    ${menuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}
  `} />

  <span className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ease-in-out
    ${menuOpen ? "opacity-0" : "opacity-100"}
  `} />

  <span className={`absolute h-[2px] w-6 bg-black transition-all duration-300 ease-in-out
    ${menuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}
  `} />

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
          <div
  className={`absolute top-full left-0 w-full backdrop-blur-xl bg-white/80 
  border-t border-white/30 flex flex-col items-center gap-6 text-sm tracking-widest
  overflow-hidden transition-all duration-500 ease-in-out
  ${menuOpen ? "max-h-60 py-6 opacity-100" : "max-h-0 opacity-0"}
  `}
>

  <button onClick={() => navigate("/")}>BERANDA</button>
  <button onClick={() => navigate("/porto")}>PORTOFOLIO</button>
  <button onClick={() => navigate("/product")}>PRODUK</button>

</div>
        )}

      </nav>
    </>
  )
}
