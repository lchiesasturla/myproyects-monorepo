import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import TopData from '../components/TopData';
import { ContainerMUI } from '../styles/Styles';

const TopDataList = () => {

    const [data, setData] = useState([
        { id: 1, title: 'YOUR BEST COIN', subtitle: 'ADA', data: '60,23%', color: `linear-gradient(180deg, rgba(111, 255, 142, 0.7) 0%, rgba(75, 208, 80, 0.7) 100%);` },
        { id: 2, title: 'YOUR WORST COIN', subtitle: 'XRP', data: '23,13%', color: `linear-gradient(180deg, rgba(255, 74, 74, 0.7) 0%, rgba(255, 30, 30, 0.7) 100%);` },
        { id: 3, title: 'YOUR CRYPTOS', data: '8800', color: `linear-gradient(180deg, rgba(90, 176, 255, 0.7) 0%, rgba(26, 145, 254, 0.7) 100%);` },
        { id: 4, title: 'MOST EXPENSIVE', data: '60,3%', color: `linear-gradient(180deg, rgba(254, 204, 26, 0.7) 0%, rgba(232, 226, 79, 0.7) 100%);` },
    ]);

    return (
        <ContainerMUI maxWidth="md">
            <Grid container spacing={6}>
                {data.map(elem => (
                    <Grid key={elem.id} item xs={12} md={6} lg={3}>
                        <TopData
                            title={elem.title}
                            subtitle={elem.subtitle}
                            color={elem.color}
                            data={elem.data}
                        />
                    </Grid>
                ))}
            </Grid>
        </ContainerMUI>
    );
}

export default TopDataList;