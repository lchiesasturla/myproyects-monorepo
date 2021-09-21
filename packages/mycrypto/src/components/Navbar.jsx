import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { Header, Text, Image } from '../styles/Styles';
import Logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <Header position="static">
            <Toolbar variant="dense">
                <Image
                    width='35px'
                    height='28px'
                    src={Logo}
                    padding='0px 10px 0px 0px'
                />

                <Text
                    color={`linear-gradient(231.33deg, #00A3FF 35.1%, #8075FF 75.48%)`}
                    font='Raleway'
                    fsize='18px'
                    fweight={700}
                    lineheight='23px'
                >
                    mycrypto
                </Text>
            </Toolbar>
        </Header>
    );
}

export default Navbar;