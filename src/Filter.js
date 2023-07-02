import React from "react";

function Filter(props) {
    return (
        <div >
            <select class="theDiv" value={props.filter} onChange={props.filterMovie}>
                <option value="" selected disabled hidden>Choose ganre</option>
                <option value={18}>Drama</option>
                <option value={35}>Comedy</option>
                <option value={16}>Animation</option>
            </select>
        </div>
    )
}

export default Filter;