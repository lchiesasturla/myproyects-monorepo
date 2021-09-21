import React, { Fragment } from 'react';
import useAxios from '../hooks/useAxios'
import { Text, CustomContainer, Image, IconMUI } from '../styles/Styles';

const CryptoDetail = ({ crypto }) => {


    const [price, error, loading] = useAxios(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto.Symbol}&tsyms=USD`);

    return (
        <CustomContainer
            height='90px'
            bgcolor='#EAEAEA'
            bdradius='15px'
            shadow='1px 1px 5px 0.5px rgba(0, 0, 0, 0.2)'
            position='relative'
        >
            <CustomContainer
                display='flex'
                vcenter={true}
                hcenter={true}
                width='80px'
                height='100%'
                bgcolor='inherit'
                float='left'
            >
                <Image
                    width='50px'
                    height='50px'
                    src={`https://www.cryptocompare.com/${crypto.ImageUrl}`}
                />
            </CustomContainer>
            {!loading ?
                (
                    <Fragment>
                        <CustomContainer
                            bgcolor='inherit'
                            float='left'
                            height='100%'
                            width='60%'
                        >
                            <Text
                                fsize='24px'
                                fweight='600'
                                font='Raleway'
                                fcolor='#525252'
                                padding='0px'
                                margin='10px 0px'

                            >{crypto.FullName}</Text>
                            <Text
                                padding='0px'
                                margin='0'
                                display='inline-block'
                                float='left'
                            >
                                Price: {price.data.DISPLAY[crypto.Symbol].USD.PRICE}
                            </Text>
                        </CustomContainer>
                        <CustomContainer
                            height='100%'
                            bgcolor='inherit'
                            display='flex'
                            vcenter={true}
                            hcenter={true}
                        >
                            {
                                Number(price.data.DISPLAY[crypto.Symbol].USD.CHANGEPCTDAY) > 0 ?
                                    (
                                        <>
                                            <Text
                                                display='inline-block'
                                                margin='0px'
                                                color='linear-gradient(180deg, rgba(111, 255, 142, 0.7) 0%, rgba(75, 208, 80, 0.7) 100%);'
                                                fweight='bold'
                                                font='Roboto'
                                                fsize='24px'
                                            >
                                                {price.data.DISPLAY[crypto.Symbol].USD.CHANGEPCTDAY}%
                                            </Text>
                                            <IconMUI color='linear-gradient(180deg, rgba(111, 255, 142, 0.7) 0%, rgba(75, 208, 80, 0.7) 100%);'>
                                                trending_up
                                            </IconMUI>
                                        </>

                                    )
                                    :
                                    (
                                        <>

                                            <Text
                                                display='inline-block'
                                                margin='0px'
                                                color='linear-gradient(180deg, rgba(255, 74, 74, 0.7) 0%, rgba(255, 30, 30, 0.7) 100%);'
                                                fweight='bold'
                                                font='Roboto'
                                                fsize='24px'
                                            >
                                                {price.data.DISPLAY[crypto.Symbol].USD.CHANGEPCTDAY}%
                                            </Text>
                                            <IconMUI color='linear-gradient(180deg, rgba(255, 74, 74, 0.7) 0%, rgba(255, 30, 30, 0.7) 100%);'>
                                                trending_down
                                            </IconMUI>
                                        </>
                                    )
                            }

                        </CustomContainer>
                    </Fragment>
                )
                :
                null
            }

        </CustomContainer>
    );
}

export default CryptoDetail;