import React from 'react';
import { CustomContainer, Input, IconMUI } from '../styles/Styles'

const Search = () => {
    return (
        <CustomContainer
            width='100%'
            height='150px'
            display='flex'
            vcenter={true}
            hcenter={true}
        >
            <CustomContainer
                position='relative'
            >
                <Input
                    placeholder='Search your cripto'
                />
                <IconMUI
                    position='absolute'
                    color='#818181'
                    left='10px'
                    padding='10px 0px 0px 0px'
                >search</IconMUI>
            </CustomContainer>
        </CustomContainer>
    );
}

export default Search;