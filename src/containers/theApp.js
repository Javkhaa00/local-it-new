import React from "react";
import AppCard from "../components/appCard";

const TheApp = () => {


    const array = [{
        img: "/assets/layer1.png",
        label: "Feature 1",
        text: "Save time sifting through pages when you use LocalIT- all and only small businesses finally in one place. ",
    },
    {
        img: "/assets/layer1.png",
        label: "Feature 2",
        text: "Be the first to know when 'your' favorite business have a new deal.",
    },
    {
        img: "/assets/layer1.png",
        label: "Feature 3",
        text: "Strengthen your community with your continued loyalty! "
    }
    ]

    return (
        <div className="app-container">
            <h3>The App</h3>
            <div className="app-container--card-map">
                {array.map((el, index) => (<AppCard
                    img={<img src={el.img} />}
                    text={el.text}
                    label={el.label} />))}
            </div>
        </div>
    )
}

export default TheApp