"use client"

import WeddingCover from "./components/WeddingCover"
import WeddingLoader from "./components/WeddingLoader"

export default function Page(){

const guest = "Tamu Undangan"

return(

<main className="min-h-screen">

<WeddingLoader/>

<WeddingCover guest={guest}/>

</main>

)

}
