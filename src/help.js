import React from "react"
import ListGroup from "react-bootstrap/ListGroup"

function Help()
{
    return(
        <div>
            <ListGroup>
                <ListGroup.Item action href="#safety-tips">
                    safety tips
                </ListGroup.Item>
                <ListGroup.Item action href="#prohibited-items">
                    prohibited items
                </ListGroup.Item>
                <ListGroup.Item action href="#product-recalls">
                    product recalls
                </ListGroup.Item>
                <ListGroup.Item action href="#avoiding scams">
                    avoiding scams
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Help