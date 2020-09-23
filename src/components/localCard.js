import React from "react"

const LocalCard = (props) => {
    
    return (
        <div className="local-card">
            <img src={props.data.img} />
            <span>
                {props.data.text}
            </span>
        </div>
    );
}

export default LocalCard