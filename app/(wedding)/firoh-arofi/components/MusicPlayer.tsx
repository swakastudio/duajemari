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

    <div className="flex flex-col items-center gap-4">

      {/* AUDIO */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source src="/firoh-arofi/kasih-putih-piano.m4a" type="audio/mp4" />
        <source src="/firoh-arofi/kasih-putih-piano.mp3" type="audio/mpeg" />
      </audio>

      {/* DISC */}
      <button
        onClick={toggleMusic}
        className={`w-24 h-24 rounded-full overflow-hidden shadow-xl transition duration-500 hover:scale-105
        ${playing ? "animate-spin-slow" : ""}
        `}
      >
        <img
          src="/music-disc.webp"
          alt="music disc"
          className="w-full h-full object-cover"
        />
      </button>

      <p className="text-sm text-neutral-500">
        {playing ? "Pause Music" : "Play Music"}
      </p>

    </div>

  )
}
