import styled from '@emotion/styled';

const Box = styled.div`
    width: ${props => props.width?.xl};
    max-width: ${props => props.maxWidth?.xl};
    height: ${props => props.height?.xl};
    max-height: ${props => props.maxHeight?.xl};
    display: ${props => props.display};
    position: ${props => props.position};
    margin-left: ${props => props.marginLeft?.xl};
    margin-right: ${props => props.marginRight?.xl};
    margin-top: ${props => props.marginTop?.xl};
    margin-bottom: ${props => props.marginBottom?.xl};
    padding-left: ${props => props.paddingLeft?.xl};
    padding-right: ${props => props.paddingRight?.xl};
    padding-top: ${props => props.paddingTop?.xl};
    padding-bottom: ${props => props.paddingBottom?.xl};
    border-radius: ${props => props.borderRadius};
    background-color: ${props => props.backgroundColor};
    box-shadow: ${props => props.shadow};
    z-index: ${props => props.zIndex};
    float: ${props => props.float};

    @media(max-width: 1200px){
        width: ${props => props.width?.lg};
        height: ${props => props.height?.lg};
        margin-left: ${props => props.marginLeft?.lg};
        margin-right: ${props => props.marginRight?.lg};
        margin-top: ${props => props.marginTop?.lg};
        margin-bottom: ${props => props.marginBottom?.lg};
        padding-left: ${props => props.paddingLeft?.lg};
        padding-right: ${props => props.paddingRight?.lg};
        padding-top: ${props => props.paddingTop?.lg};
        padding-bottom: ${props => props.paddingBottom?.lg};
    }

    @media(max-width: 992px){
        width: ${props => props.width?.md};
        height: ${props => props.height?.md};
        margin-left: ${props => props.marginLeft?.md};
        margin-right: ${props => props.marginRight?.md};
        margin-top: ${props => props.marginTop?.md};
        margin-bottom: ${props => props.marginBottom?.md};
        padding-left: ${props => props.paddingLeft?.md};
        padding-right: ${props => props.paddingRight?.md};
        padding-top: ${props => props.paddingTop?.md};
        padding-bottom: ${props => props.paddingBottom?.md};
    }

    @media(max-width: 768px){
        width: ${props => props.width?.sm};
        height: ${props => props.height?.sm};
        margin-left: ${props => props.marginLeft?.sm};
        margin-right: ${props => props.marginRight?.sm};
        margin-top: ${props => props.marginTop?.sm};
        margin-bottom: ${props => props.marginBottom?.sm};
        padding-left: ${props => props.paddingLeft?.sm};
        padding-right: ${props => props.paddingRight?.sm};
        padding-top: ${props => props.paddingTop?.sm};
        padding-bottom: ${props => props.paddingBottom?.sm};
    }

    @media(max-width: 596px){
        width: ${props => props.width?.xs};
        height: ${props => props.height?.xs};
        margin-left: ${props => props.marginLeft?.xs};
        margin-right: ${props => props.marginRight?.xs};
        margin-top: ${props => props.marginTop?.xs};
        margin-bottom: ${props => props.marginBottom?.xs};
        padding-left: ${props => props.paddingLeft?.xs};
        padding-right: ${props => props.paddingRight?.xs};
        padding-top: ${props => props.paddingTop?.xs};
        padding-bottom: ${props => props.paddingBottom?.xs};
    }
`;

export default Box;