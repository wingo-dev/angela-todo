import React from "react";

function Items(props) {
    console.log(props.done);
    return (
        <div
            onClick={() => {
                props.onDelete(props.id);
            }}
            onDoubleClick={() => {
                props.onDone(props.id);
            }}
        >
            <li style={{ textDecoration: props.done.map(d => d === props.id) ? "line-through" : "" }}>{props.text}</li>
        </div >
    )
}

export default Items;