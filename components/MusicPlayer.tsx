"use client"

import { useRef, useState } from "react"

export default function MusicPlayer() {

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  const toggleMusic = () => {

    if (!audioRef.current) return

    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setPlaying(!playing)
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-4">

      {/* AUDIO */}
      <audio ref={audioRef} src="/main-backsound.mp3" loop />

      {/* BUTTON */}
      <button
        onClick={toggleMusic}
        className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500
        ${playing ? "bg-[#FF4D6D] scale-105 shadow-xl" : "bg-[#FF4D6D]/80"}
        `}
      >

        {/* ICON */}
        <div className="relative w-6 h-6">

          {/* LEFT BAR */}
          <span className={`absolute left-0 top-0 w-[6px] h-full bg-white rounded transition-all duration-300
            ${playing ? "translate-x-0" : "translate-x-2 rotate-45 w-[4px] h-[18px] top-[2px]"}
          `} />

          {/* RIGHT BAR */}
          <span className={`absolute right-0 top-0 w-[6px] h-full bg-white rounded transition-all duration-300
            ${playing ? "translate-x-0" : "-translate-x-2 -rotate-45 w-[4px] h-[18px] top-[2px]"}
          `} />

        </div>

      </button>

      {/* LABEL */}
      <p className="text-xs text-neutral-400 tracking-wide">
        {playing ? "Pause Music" : "Play Music"}
      </p>

    </div>
  )
}
