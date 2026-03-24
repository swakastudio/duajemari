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

      <div
        className={`music-btn ${playing ? "active" : ""}`}
        onClick={toggleMusic}
      >
        <div className="music-bg"></div>

        <div className="music-icon">
          <div className="music-part music-left"></div>
          <div className="music-part music-right"></div>
        </div>
      </div>

      <p className="text-xs text-neutral-400">
        {playing ? "Pause Music" : "Play Music"}
      </p>

    </div>
  )
}
