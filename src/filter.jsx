import React, {useState} from "react";
import { Card } from 'react-bootstrap'

// might be a class since it affects state
function FilterSelectionDropdown(){
    // single dropdown to choose gems | ascendencies | gems + ascendencies

        return(
            <Card>
                <Card.Header as="h5">
                    Filter 
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Gem/Ascendency Combination: 
                        {" "}
                        <select 
                        onChange={(e)=>setFilterChoice(e.target.value)}>
                            <option value="0">Gem</option>
                            <option value="1">Ascendency</option>
                            <option value="2">Gem &amp; Ascendency</option>
                        </select>
                    </Card.Text>
                </Card.Body>
            </Card> 
        )
}

function GemList (){
    //https://stackoverflow.com/questions/45167565/does-react-js-support-html5-datalist
    // bootstrap: https://getbootstrap.com/docs/5.3/forms/form-control/#datalists
    // custom dropdowns: https://react-bootstrap.netlify.app/docs/components/dropdowns#custom-dropdown-components

    let gemList = ["melee", "spell", "totem"]

    // on change: https://react.dev/reference/react-dom/components/input
    return (
        <>
        <label></label>
        <input type="text" 
        list="data" 
        onChange={(e)=>{}} />
        <datalist id="data">
            {gemList.map((item) =>
            <option value={item.displayValue} />
            )}
        </datalist>
  </>
    )
}

// https://react.dev/reference/react/useState#examples-objects
// might need to update on change
function AscList (){
    ascs = ["Berserker","Gladiator","Warden"]
    return (
        <>
            <input type="text" list="data" onChange={this._onChange} />
            <datalist id="data">
                {ascs.map((item, key) =>
                <option key={key} value={item.displayValue} />
                )}
            </datalist>
        </>
    )
}

//
function SubFilters (){
    // filter data based on drop
    if (filterChoice !== 1){gemBool == true}
    if (filterChoice !== 0){ascBool == true}
    return (
        <>
            {ascBool && <AscList/>} 
            {(gemBool&&ascBool) && " + "}
            {gemBool && <GemList/>}
        </>
    )
}

export default function FullFilter(){
    const [gemChoice, setGemChoice] = useState("");
    const [ascChoice, setAscChoice] = useState("");
    const [filterChoice, setFilterChoice] = useState(0);
    return (
        <>
        <FilterSelectionDropdown>
            <SubFilters></SubFilters>
        </FilterSelectionDropdown>
        </>
    )
}