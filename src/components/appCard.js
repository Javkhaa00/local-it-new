import React from "react"

const AppCard = (props) => {
    
    return (
        <div className="appcard-container center">
            {props.img}
            <div className="center">
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