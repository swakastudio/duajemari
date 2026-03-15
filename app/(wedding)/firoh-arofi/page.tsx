"use client"

import WeddingCover from "./components/WeddingCover"
import WeddingLoader from "./components/WeddingLoader"
import MusicPlayer from "./components/MusicPlayer"

export default function Page(){

const guest = "Tamu Undangan"

return(

<main className="min-h-screen">

<MusicPlayer/>
<WeddingLoader/>

<WeddingCover guest={guest}/>

</main>

)

}
