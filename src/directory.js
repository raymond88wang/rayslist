import React from "react"
import { Button, ButtonGroup } from "react-bootstrap"

function Directory(props)
{
    return(
        <div class="directory">
            <ButtonGroup aria-label="Navigate pages">
                <Button variant="secondary">{"<<"}</Button>
                <Button variant="secondary">{"< prev"}</Button>
                <Button variant="secondary">1-120 / 3000</Button>
                <Button variant="secondary">{"next >"}</Button>
                <Button variant="secondary">{">>"}</Button>
            </ButtonGroup>
        </div>
    )
}

export default Directory