import React from 'react';
import {FaRegStar} from "react-icons/fa"

export const WhyCard = (props) => {

    return (
        <div className="why-card">
            <FaRegStar/>
            <span>
                {props.text}
            </span>
       </div>
   )
};

export default WhyCard