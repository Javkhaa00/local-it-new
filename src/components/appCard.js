import React from "react"

const AppCard = (props) => {
    
    return (
        <div className="appcard-container">
            {props.img}
            <div>
                <span>
                    {props.label}
                </span>
                <span>
                {props.text}
                </span>
            </div>
            
        </div>
    )
}

export default AppCard