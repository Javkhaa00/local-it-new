import React from 'react';
import LocalCard from "../components/localCard"

const LocalData = [{
    img: "/assets/back1.png",
    text: "What makes your business different? Offer a deal that makes you stand apart from the rest. Every business is different. Show how you are to your community by offering them a deal. Bigger the deal, the more attention you get."
}, {
    img: "/assets/back2.png",
    text: "The fastest way to promote your business. Snap a picture of the deal, plug in the discount and post! Everyone in the community instantly knows. NO ONE DOES IT FASTER."
}, {
    img: "/assets/back3.png",
    text: "Every deal you post comes with feedback just to you. NOW, the ability to interact with your community means each deal will better inform you of your customers. The more you know, the more the customer gets and the more business for you in return."
}, {
    img: "/assets/back4.png",
    text: "Get feedback that means something. Customers and markets always are changing. Stay ahead with real-time analytics. Know what you customers like and want from you with in information you can use RIGHT NOW."
}]

const Local = () => {

    return (
        <div className="local">
            <div className="local--wrapper">
                <span className="local--title">Are you a Local Business?</span>
                <div className="local--map">
                    {LocalData.map(el => (<LocalCard data={el} />))}
                </div>
                <div className="local--button">
                    Learn More
                </div>
            </div>
        </div>
    );
};

export default Local;