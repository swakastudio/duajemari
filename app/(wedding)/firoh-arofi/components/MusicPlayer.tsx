"use client"

import { useEffect, useRef, useState } from "react"

export default function MusicPlayer(){

const audioRef = useRef<HTMLAudioElement>(null)

const [playing,setPlaying] = useState(true)

useEffect(()=>{

if(audioRef.current){
audioRef.current.volume = 0.7
audioRef.current.play().catch(()=>{})
}

},[])

const toggleMusic = ()=>{

if(!audioRef.current) return

if(playing){
audioRef.current.pause()
}else{
audioRef.current.play()
}

setPlaying(!playing)

}

return(

<div className="music-container">

<audio
ref={audioRef}
src="/firoh-arofi/kasih-putih-piano.mp3"
loop
/>

<label>

<input
className="play-btn"
type="checkbox"
checked={!playing}
onChange={toggleMusic}
/>

<div className="play-icon"></div>

<div className="pause-icon"></div>

</label>

</div>

)

}
