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
    <div className="flex flex-col items-center gap-4 mt-6">

      <audio ref={audioRef} src="/main-backsound.mp3" loop />

      <button
        onClick={toggleMusic}
        className="w-20 h-20 rounded-full bg-[#FF4D6D] flex items-center justify-center
        shadow-[0_10px_30px_rgba(255,77,109,0.4)]
        transition-all duration-300 active:scale-95"
      >

        {/* ICON */}
        <div className="relative w-6 h-6">

          {/* PLAY */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300
            ${playing ? "opacity-0 scale-0" : "opacity-100 scale-100"}
            `}
          >
            <div className="w-0 h-0 
              border-t-[10px] border-t-transparent
              border-b-[10px] border-b-transparent
              border-l-[16px] border-l-white
              ml-1"
            />
          </div>

          {/* PAUSE */}
          <div
            className={`absolute inset-0 flex items-center justify-center gap-1 transition-all duration-300
            ${playing ? "opacity-100 scale-100" : "opacity-0 scale-0"}
            `}
          >
            <div className="w-[4px] h-[18px] bg-white rounded"></div>
            <div className="w-[4px] h-[18px] bg-white rounded"></div>
          </div>

        </div>

      </button>

      <p className="text-xs text-neutral-400">
        {playing ? "Jeda Musik" : "Mainkan Musik"}
      </p>

    </div>
  )
}
