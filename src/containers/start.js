import React from 'react';

const Start = () => {   
    return (
        <div className="start">
            <div className="start--wrapper">
                <div className="start--wrapper--text-wrapper">
                    <span className="start--wrapper--text-wrapper--title">
                        Know what you spend, know what you get
                    </span>
                    <span className="start--wrapper--text-wrapper--desc">
                        What's your budget? Plug it in and find what your community has to offer
                    </span>
                    <div className="start--wrapper--text-wrapper--stores">
                        <img src="/assets/google-play.svg" alt="play-store" />
                        <img src="/assets/app-store.svg" alt="app-store" />
                    </div>
                </div>
                <div className="start--wrapper--phones">
                    <div className="start--wrapper--phones--iphonex">
                        <img src="/assets/iphone-x.png" alt="phone2" />
                    </div>
                    <div className="start--wrapper--phones--samsung">
                        <img src="/assets/galaxy-s8.png" alt="phone1" />
                    </div>
                    <div className="start--wrapper--phones--circle1" />
                    <div className="start--wrapper--phones--circle2" />
                    <div className="start--wrapper--phones--circle3" />
                </div>
            </div>
        </div>
    )
}

export default Start;