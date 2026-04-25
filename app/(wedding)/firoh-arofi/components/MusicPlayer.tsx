"use client"

import { useEffect, useRef, useState } from "react"

export default function MusicPlayer(){

  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing,setPlaying] = useState(true)

  useEffect(()=>{

    const audio = audioRef.current
    if(!audio) return

    audio.volume = 0.5

    audio.play().catch(()=>{
      setPlaying(false) // kalau autoplay diblok browser
    })

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
        src="/main-backsound.mp3"
        loop
        preload="auto"
      />

      {/* DISC BUTTON */}
      <button
        onClick={toggleMusic}
        className={`w-24 h-24 rounded-full overflow-hidden shadow-xl transition duration-500
        ${playing ? "animate-spin-slow" : ""}
        `}
      >

        <img
          src="/music-disc.webp"
          alt="music disc"
          className="w-full h-full object-cover"
        />

      </button>

      {/* TEXT */}
      <p className="text-sm text-neutral-500">
        {playing ? "Pause Music" : "Play Music"}
      </p>

    </div>

  )
}
