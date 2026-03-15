"use client"

import { useParams } from "next/navigation"
import WeddingLoader from "../components/WeddingLoader"
import WeddingCover from "../components/WeddingCover"

export default function Page(){

const params = useParams()

const guest =
decodeURIComponent(String(params.guest)).replaceAll("-", " ")

return(

<>

{/* LOADER */}

<MusicPlayer/>
<WeddingLoader/>
  

{/* COVER */}

<WeddingCover guest={guest} />

</>

)

}
