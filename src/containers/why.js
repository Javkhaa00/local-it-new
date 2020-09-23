import React from 'react';
import { WhyCard } from '../components/whyCard';
import Data from "../json/why.json"

const Why = () => {
    return (
        <div className="why">
            
            <span className="why--title">Why Are We Doing This?</span>
            <div className="why--wrapper">
                <div className="bubble one"></div>
                <div className="bubble two"></div>
                <div className="bubble three"></div>
                {Data.map(el => (<WhyCard text={el.text}/>))} 
            </div>
           
        </div>
    )
}

export default Why;