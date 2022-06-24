import React from "react"
import Form from "react-bootstrap/Form"

function SearchBar()
{
    return(
        <div class="searchbar">
            <Form>
                <Form.Control type="text" placeholder="search"></Form.Control>
            </Form>
        </div>
    )
}

export default SearchBar