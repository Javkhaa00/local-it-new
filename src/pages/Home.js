import React from 'react'

import Header from "../containers/header";
import AppContainer from "../containers/theApp"

export const Home = () => {
    return (
        <div className="app">
            <Header />
            <AppContainer />
        </div>
       
    )
}

export default Home;