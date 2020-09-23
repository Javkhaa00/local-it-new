import React from 'react';

import LocalCard from "../components/localCard"

const LocalData = [{
    img: "/assets/back1.png",
    text: "Flat-rate pricing for each package. We're not into the fine print extra expences, neither are you."
},{
    img: "/assets/back2.png",
    text: "Immediately actionable analytics, in laymens terms, easily read on app. (change verbage but this is the gist)"
},{
    img: "/assets/back3.png",
    text: "Tired of getting ad space bought out by corporations? Us too. LocalIT is here to serve Small Businesses only."
},{
    img: "/assets/back4.png",
    text: "Upgrade relationships with already loyal customers b provideing them real-time updates on new offers/discounts."
}]

const Local = () => {

    return (
        <div className="local"> 
            <span className="local--title">Are you a Local Business?</span>
            <div>
                {LocalData.map(el => (<LocalCard data={el}/>))}
            </div>
        </div>
    );
};

export default Local;