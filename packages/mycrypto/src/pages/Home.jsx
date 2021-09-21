
import React, { Fragment } from 'react';
import CryptoDetailList from '../components/CryptoDetailList';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import TopDataList from '../components/TopDataList';
import { CustomContainer } from '../styles/Styles';

const Home = () => {

    return (
        <Fragment>
            <header>
                <Navbar />
                <Search />
            </header>
            <main>
                <CustomContainer
                    bgcolor='inherit'
                    margin='50px 0px'
                >
                    <TopDataList />
                </CustomContainer>
                <CustomContainer
                    bgcolor='inherit'
                >
                    <CryptoDetailList />
                </CustomContainer>
            </main>
        </Fragment>
    );
}

export default Home;