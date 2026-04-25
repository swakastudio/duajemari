"use client"

import { useEffect, useRef, useState } from "react"

export default function MusicPlayer(){

  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {

    const audio = audioRef.current
    if (!audio) return

    // volume awal
    audio.volume = 0

    const shouldPlay = localStorage.getItem("playMusic")

    if (shouldPlay === "true") {

      audio.play()
        .then(() => {
          setPlaying(true)

          // 🎹 fade in biar smooth
          let vol = 0
          const fade = setInterval(() => {
            if (vol < 0.5) {
              vol += 0.05
              audio.volume = vol
            } else {
              clearInterval(fade)
            }
          }, 100)

        })
        .catch(() => {
          // fallback kalau masih ditolak browser
          console.log("Autoplay ditolak browser")
        })

    }

  }, [])

  const toggleMusic = () => {

    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
    } else {
      audio.play()
    }

    setPlaying(!playing)
  }

  return(

    <div className="fixed left-4 bottom-4 z-50 flex flex-col items-center gap-2">

      {/* AUDIO */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/firoh-arofi/kasih-putih-piano.m4a" type="audio/mp4" />
        <source src="/firoh-arofi/kasih-putih-piano.mp3" type="audio/mpeg" />
      </audio>

      {/* DISC BUTTON */}
      <button
        onClick={toggleMusic}
        className="w-7 h-7 rounded-full overflow-hidden shadow-xl
        transition duration-500 active:scale-70"
        style={{
          animation: playing ? "spinSlow 8s linear infinite" : "none"
        }}
      >
        <img
          src="/firoh-arofi/music-disc.webp"
          alt="music disc"
          className="w-full h-full object-cover"
        />
      </button>

      {/* TEXT */}
      <p className="text-[10px] text-neutral-400">
        {playing ? "Pause Music" : "Play Music"}
      </p>

    </div>

  )
}
