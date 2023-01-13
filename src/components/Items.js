import React from "react";

function Items(props) {
    console.log(props.items);
    return (
        <div>
            {props.items.map((item, index) => <li key={index}>{item}</li>)}
        </div>
    )
}

export default Items;