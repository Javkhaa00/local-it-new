import React from 'react';
import { WhyCard } from '../components/whyCard';

const Why = () => {
    return (
        <div className="why">
            <span className="why--title">Why Are We Doing This?</span>
            <div className="why--wrapper">
                <WhyCard />
            </div>
        </div>
    )
}

export default Why;