import React, { useState } from "react";
import AppCard from "../components/appCard";

const TheApp = () => {
     
    const [move, setMove] = useState(0);
  
    const array = [{
        img: "/assets/layer1.png",
        label: "Feature 1",
        text: "EVERYTHING LOCAL. Like the dollar menu bur for EVERYTHING. Plug in your budget and find things to do around you RIGHT NOW!",
    },
    {
        img: "/assets/layer2.png",
        label: "Feature 2",
        text: "Be the first to know when 'your' favorite business have a new deal and give feedback to them. Businesses cna then change the deals to what you want.",
    },
    {
        img: "/assets/layer3.png",
        label: "Feature 3",
        text: "Your ultimate directory to everything local. Happy hours, things to do, things to see. Be local wherever you go, because now you can."
    }
    ]

    return (
        <div className="app-container">
            <span className="app-container--title">The App</span>
            <div className="app-container--card-map">
                <div className="overflow" style={{transform:`translateX(${move*341.15}px)`}}>
                {array.map((el, index) => (<AppCard
                    img={<img src={el.img} />}
                    text={el.text}
                    label={el.label} />))}
                
                </div>
                
            </div>
        <div className="app-container--button">
                <div className="button"
                    onClick={() => {setMove(move+1);
                    
                    }}
                >
                    
            </div>
                <div className="button"
                 onClick={() => {setMove(move-1);
              
                }}>
                    
            </div>
        </div>
           
        </div>
    )
}

export default TheApp