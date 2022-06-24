import React from "react"
import { 
    Button,
    ButtonGroup,
    Form,
    ToggleButton,
    ToggleButtonGroup 
} from "react-bootstrap"
import Help from "./help"

function Sidebar()
{
    return (
        <div class="sidebar">
            <Form>
                <div>
                    <ButtonGroup aria-label="User view">
                        <Button variant="primary">all</Button>
                        <Button variant="primary">owner</Button>
                        <Button variant="primary">dealer</Button>
                    </ButtonGroup>
                </div>
                
                <div>
                    <ToggleButtonGroup aria-label="View filters" type="checkbox" vertical="true">
                        <ToggleButton   id="titles"
                                        value="titles"
                                        type="checkbox"
                                        variant="secondary">search titles only</ToggleButton>
                        <ToggleButton   id="hasImage"
                                        value="image"
                                        type="checkbox"
                                        variant="secondary">has image</ToggleButton>
                        <ToggleButton   id="postedToday"
                                        value="posted"
                                        type="checkbox"
                                        variant="secondary">posted today</ToggleButton>
                        <ToggleButton   id="bundleDupes"
                                        value="duplicates"
                                        type="checkbox"
                                        variant="secondary">bundle duplicates</ToggleButton>
                        <ToggleButton   id="includeNearbyAreas"
                                        value="areas"
                                        type="checkbox"
                                        variant="secondary">include nearby areas</ToggleButton>
                    </ToggleButtonGroup>
                </div>

                <div>
                    MILES FROM ZIP
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="number" placeholder="miles" />
                        <Form.Control type="text" placeholder="from zip" />
                    </Form.Group>
                </div>
                <div>
                    PRICE
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="number" placeholder="min" />
                        <Form.Control type="number" placeholder="max" />
                    </Form.Group>
                </div>
                <div>
                    MAKE AND MODEL
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="make / model" />
                    </Form.Group>
                </div>

                <div>
                    <ToggleButtonGroup aria-label="View filters" type="checkbox" vertical="true">
                        <ToggleButton   id="crypto"
                                        value="crypto"
                                        type="checkbox"
                                        variant="secondary">cryptocurrency ok</ToggleButton>
                        <ToggleButton   id="canDeliver"
                                        value="delivery"
                                        type="checkbox"
                                        variant="secondary">delivery available</ToggleButton>
                    </ToggleButtonGroup>
                </div>

                <div>
                    <Button variant="danger">reset</Button>
                    <Button variant="success">update search</Button>
                </div>

                <Help />
            </Form>
        </div>
    )
}

export default Sidebar