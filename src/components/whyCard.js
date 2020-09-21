import React from 'react';
import Data from '../json/why.json';

export const WhyCard = () => {

    const returnCard = (el) => {
        if (!el) return null;

        return (
            <div className="why--wrapper--cards">
                <span className="desc-text">{el.text}</span>
            </div >
        );
    };

    return (
        <div className="why--wrapper">
            {Data.map(returnCard)}
        </div>
    );
};
