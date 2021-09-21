import React from 'react';
import { CustomContainer, Decorator, Text } from '../styles/Styles';

const TopData = ({ title, subtitle, data, color }) => {
    //TODO: Agregar imagen de la moneda
    return (
        <CustomContainer
            bgcolor='#EAEAEA'
            height='200px'
            bdradius='15px'
            shadow='1px 1px 5px 0.5px rgba(0, 0, 0, 0.2)'
            hcenter={true}
            position='relative'
        >
            <Text
                fcolor="#525252"
                fsize="16px"
                font='Raleway'
                hcenter={true}
                padding={subtitle ? '10px 0px 5px 0px' : '10px 0px 21px 0px'}
                margin='0'
            >{title}</Text>
            <Text
                fcolor="#525252"
                fsize="14px"
                font='Raleway'
                hcenter={true}
                margin='0'
            >{subtitle ? `(${subtitle})` : null} </Text>
            <Text
                color={color}
                fsize="40px"
                font='Roboto'
                hcenter={true}
                fweight="500"
            >{data}</Text>
            <Decorator
                bottom='0px'
                background={color}
            ></Decorator>
        </CustomContainer>
    );
}


export default TopData;