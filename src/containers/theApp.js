import React, { useState } from "react";
import AppCard from "../components/appCard";

const TheApp = () => {
     
    const [move, setMove] = useState(0);
  
    const array = [{
        img: "/assets/layer1.png",
        label: "Feature 1",
        text: "Save time sifting through pages when you use LocalIT- all and only small businesses finally in one place. ",
    },
    {
        img: "/assets/layer2.png",
        label: "Feature 2",
        text: "Be the first to know when 'your' favorite business have a new deal.",
    },
    {
        img: "/assets/layer3.png",
        label: "Feature 3",
        text: "Strengthen your community with your continued loyalty! "
    }
    ]

    return (
        <div className="app-container">
            <h3>The App</h3>
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