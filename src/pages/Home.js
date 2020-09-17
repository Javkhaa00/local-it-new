import React from 'react'
import Landing from '../containers/landing';
import AppContainer from "../containers/theApp"

export const Home = () => {
    return (
        <div>
            <Landing />
            <AppContainer />
        </div>
    );
};

export default Home;