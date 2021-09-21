import styled from "@emotion/styled";
import Box from "./Box";

const AbsoluteBox = styled(Box)`
    position: absolute;
    top: ${props => props.top?.xl};
    right: ${props => props.right?.xl};
    bottom: ${props => props.bottom?.xl};
    left: ${props => props.left?.xl};

    @media(max-width: 1200px){
        top: ${props => props.top?.lg};
        right: ${props => props.right?.lg};
        bottom: ${props => props.bottom?.lg};
        left: ${props => props.left?.lg};
    }

    @media(max-width: 992px){
        top: ${props => props.top?.md};
        right: ${props => props.right?.md};
        bottom: ${props => props.bottom?.md};
        left: ${props => props.left?.md};
    }

    @media(max-width: 768px){
        top: ${props => props.top?.sm};
        right: ${props => props.right?.sm};
        bottom: ${props => props.bottom?.sm};
        left: ${props => props.left?.sm};
    }

    @media(max-width: 596px){
        top: ${props => props.top?.xs};
        right: ${props => props.right?.xs};
        bottom: ${props => props.bottom?.xs};
        left: ${props => props.left?.xs};
    }
`;

export default AbsoluteBox;