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

<div className="music-button">

<audio
ref={audioRef}
src="/firoh-arofi/kasih-putih-piano.mp3"
loop
preload="auto"
/>

<button onClick={toggleMusic} className="container">

{playing ? (
<div className="pause-icon"></div>
) : (
<div className="play-icon"></div>
)}

</button>

</div>

)

}
