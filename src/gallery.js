import React from "react"
import Posting from "./posting.js"
import { postings } from "./postings.js"

function Gallery() {
    return (
        <div class="gallery">
            {postings.map(function(posting){
                return <Posting posting={posting}></Posting>
            })}
        </div>
    )
}

export default Gallery