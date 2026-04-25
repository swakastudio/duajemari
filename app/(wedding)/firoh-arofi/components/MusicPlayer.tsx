"use client"

import { useEffect, useRef, useState } from "react"

export default function MusicPlayer(){

  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing,setPlaying] = useState(false)

  useEffect(()=>{

    const audio = audioRef.current
    if(!audio) return

    audio.volume = 0.5

  },[])

  const toggleMusic = ()=>{

    const audio = audioRef.current
    if(!audio) return

    if(playing){
      audio.pause()
    }else{
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
        className={`w-20 h-20 rounded-full overflow-hidden shadow-xl
        transition duration-500 active:scale-95
        ${playing ? "animate-spin-slow" : ""}
        `}
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
