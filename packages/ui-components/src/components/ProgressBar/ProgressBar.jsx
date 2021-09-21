import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { lightBlue, orange, yellow } from '../../constants/colors';

const COLORS = {
    primary: lightBlue,
    secondary: orange,
    terciary: yellow
}

const HEIGHTS = {
    small: '10px',
    medium: '15px',
    large: '20px'
}

const StyledProgress = styled.div`
    height: ${props => HEIGHTS[props.height] || HEIGHTS.small};
    width: ${props => `${props.value}%`};
    background: ${props => COLORS[props.color] || COLORS.primary};
    border-radius: 20px;
    transition: width 0.7s ease-in-out;
`;

const ProgressBar = ({percentage, height, color}) => {
    return ( 
        <StyledProgress value={percentage} height={height} color={color}></StyledProgress>
    );
}
 
export default ProgressBar;

ProgressBar.propTypes = {
    percentage: PropTypes.number,
    height: PropTypes.string,
    color: PropTypes.string
};