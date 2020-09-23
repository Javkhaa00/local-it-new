import React from 'react';
import Data from '../json/whoweare.json';

const WhoWeAre = () => {

    const returnCard = (el) => {

        if (!el) return null;

        return (
            <div className="whoweare--wrapper--cards">
                <img style={{ marginTop: "-40%" }} src={el.imgUrl} alt="profile-pic" />
                <span className="whoweare--wrapper--cards--title">{el.name}</span>
                <span className="whoweare--wrapper--cards--position">
                    {el.position}
                </span>
                <span className="whoweare--wrapper--cards--desc">{el.text}</span>
            </div>
        );
    };

    return (
        <div className="whoweare">
            <span className="whoweare--title">Who We Are</span>
            <div className="whoweare--wrapper">
                {Data.map(returnCard)}
            </div>
        </div>
    )
}

export default WhoWeAre;