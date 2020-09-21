import React from 'react'
import AppContainer from "../containers/theApp"
import Start from '../containers/start';
import WhoWeAre from '../containers/whoweare';
import Why from '../containers/why';
import Local from '../containers/local';
import Contact from '../containers/contact';
import Footer from '../containers/footer';

export const Home = () => {
    return (
        <div className="app center">
            <Start />
            <AppContainer />
            <WhoWeAre />
            <Why />
            <Local />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;