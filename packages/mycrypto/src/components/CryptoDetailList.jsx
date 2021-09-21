import React, { Fragment, useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import CryptoDetail from '../components/CryptoDetail';
import { Text, ContainerMUI } from '../styles/Styles';
import useAxios from '../hooks/useAxios'


const CryptoDetailList = () => {
    const [cryptoList, error, loading] = useAxios(`https://min-api.cryptocompare.com/data/all/coinlist`);
    const cryptocodes = ['BTC', 'XRP', 'ETH'];
    const [cryptoInfoList, setCryptoInfoList] = useState([]);
    useEffect(() => {
        if (Object.keys(cryptoList).length > 0) {
            const infoList = cryptocodes.map(elem => cryptoList.data.Data[elem]);
            console.log(infoList);
            setCryptoInfoList(infoList);
        }
    }, [cryptoList]);

    return (
        <Fragment>
            <Text
                font='Raleway'
                fweight='500'
                fcolor='#757575'
                fsize='18px'
                hcenter={true}
            >My cryptos</Text>
            <ContainerMUI maxWidth="md">
                <Grid container spacing={6}>
                    {cryptoInfoList.map(elem => (
                        <Grid key={elem.id} item xs={6}>
                            <CryptoDetail crypto={elem} />
                        </Grid>
                    ))}
                </Grid>
            </ContainerMUI>
        </Fragment>

    );
}

export default CryptoDetailList;