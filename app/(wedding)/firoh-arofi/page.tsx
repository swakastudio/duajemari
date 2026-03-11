"use client"

import WeddingCover from "./components/WeddingCover"
import WeddingLoader from "./components/WeddingLoader"

export default function Page(){

const guest = "Tamu Undangan"

return(

<>

{/* LOADER */}

<WeddingLoader/>

{/* COVER */}

<WeddingCover guest={guest}/>

</>

)

}
