import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { lightBlue, orange } from '../../constants/colors';

const SIZES = {
    small: '150px',
    medium: '200px',
    large: '300px'
}

const COLORS = {
    primary: lightBlue,
    secondary: orange
}

const StyledButton = styled.button`
    width: ${props => SIZES[props.size] || SIZES.small};
    height: 50px;
    border: none;
    border-radius: 30px;
    background: ${props => COLORS[props.color] || COLORS.primary};
    color: white;
`;

const Button = ({label, size, type, color, handleAction}) => {
    return ( 
        <StyledButton type={type} size={size} onClick={() => handleAction()} color={color}>{label}</StyledButton>
    );
}
export default Button;

Button.propTypes = {
    label: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    color: PropTypes.string,
    handleAction: PropTypes.func,
};