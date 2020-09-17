import React from 'react'
import Landing from '../containers/landing';
import Header from "../containers/header";
import AppContainer from "../containers/theApp"

export const Home = () => {
    return (
        <div>
            <Header />
            <Landing />
            <AppContainer />
        </div>
    );
};

export default Home;