import React from "react"
import Button from "react-bootstrap/Button"

function Posting (props) {
    return (
        <Button variant="light" class="posting">
            <span>
                {props.posting.price}
            </span>
            <img src={props.posting.imageURL} alt={props.posting.description}></img>
            <a href>{props.posting.title}</a>
        </Button>
    )
}

export default Posting