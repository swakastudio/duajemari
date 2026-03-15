"use client"

import { useEffect, useRef, useState } from "react"

export default function MusicPlayer(){

const audioRef = useRef<HTMLAudioElement>(null)

const [playing,setPlaying] = useState(true)

useEffect(()=>{

const audio = audioRef.current
if(!audio) return

audio.volume = 0.6

audio.play().catch(()=>{})

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

<div className="music-container">

<audio
ref={audioRef}
src="/firoh-arofi/kasih-putih-piano.mp3"
loop
preload="auto"
/>

<div className="container">

<label>

<input
type="checkbox"
className="play-btn"
checked={playing}
onChange={toggleMusic}
/>

<div className="play-icon"></div>
<div className="pause-icon"></div>

</label>

</div>

</div>

)

}
