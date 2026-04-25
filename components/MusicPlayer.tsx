"use client"

import { useRef, useState } from "react"

export default function MusicPlayer() {

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  const toggleMusic = async () => {
    if (!audioRef.current) return

    try {
      if (playing) {
        audioRef.current.pause()
      } else {
        await audioRef.current.play()
      }
      setPlaying(!playing)
    } catch (err) {
      console.log("Autoplay blocked:", err)
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-6">

      {/* AUDIO */}
      <audio
        ref={audioRef}
        src="/main-backsound.mp3"
        loop
        preload="auto"
      />

      {/* DISC BUTTON */}
      <button
        onClick={toggleMusic}
        className="w-20 h-20 rounded-full overflow-hidden shadow-[0_10px_30px_rgba(255,77,109,0.4)]
        transition-all duration-300 active:scale-95 hover:scale-105"
        style={{
          animation: playing ? "spinSlow 8s linear infinite" : "none"
        }}
      >
        <img
          src="/music-disc.webp"
          alt="music disc"
          className="w-full h-full object-cover"
        />
      </button>

      {/* TEXT */}
      <p className="text-xs text-neutral-400">
        {playing ? "Jeda Musik" : "Mainkan Musik"}
      </p>

    </div>
  )
}
