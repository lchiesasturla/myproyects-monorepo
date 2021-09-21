import styled from "@emotion/styled";
import Box from "./Box";

const FlexBox = styled(Box)`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
`;

export default FlexBox;