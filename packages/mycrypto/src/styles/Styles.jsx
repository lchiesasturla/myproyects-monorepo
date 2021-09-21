import styled from '@emotion/styled';
import { Container } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/core/Icon';

export const Header = styled(AppBar)`
    background-color: white !important;
    align-items: center;
`;

export const CustomContainer = styled.div`
    display: ${props => props.display};
    width: ${props => props.width};
    height: ${props => props.height};
    ${props => !props.bgcolor ? 'background: linear-gradient(180deg, #6B5FFF 0%, #8075FF 100%)' : `background-color:${props.bgcolor}`};
    align-items: ${props => props.vcenter ? 'center' : 'unset'};
    justify-content: ${props => props.hcenter ? 'center' : 'unset'};
    position: ${props => props.position};
    border-radius: ${props => props.bdradius};
    box-shadow: ${props => props.shadow};
    margin: ${props => props.margin};
    word-wrap: break-word;
    flex-flow: wrap;
    float: ${props => props.float};
`;

export const Image = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    padding: ${props => props.padding ? props.padding : 0};
`;

export const Input = styled.input`
    width: 500px;
    height: 45px;
    border: none;
    border-radius: 5px;
    font-size: 22px;
    padding: 0 50px;
    outline: none;
    color: #818181;
`;

export const IconMUI = styled(Icon)`
    color: ${props => props.color};
    font-size: 15px;
    position: ${props => props.position};
    left: ${props => props.position === 'absolute' ? props.left : '0px'};
    top: ${props => props.position === 'absolute' ? props.top : '0px'};
    bottom: ${props => props.position === 'absolute' ? props.bottom : '0px'};
    right: ${props => props.position === 'absolute' ? props.right : '0px'};
    padding: ${props => props.padding};
    background: ${props => props.color};
    background-clip: ${props => props.color ? 'text' : 'unset'};
    -webkit-text-fill-color: ${props => props.color ? 'transparent' : 'unset'};
`;

export const Text = styled.p`
    color: ${props => props.fcolor};
    background: ${props => props.color};
    background-clip: ${props => props.color ? 'text' : 'unset'};
    -webkit-text-fill-color: ${props => props.color ? 'transparent' : 'unset'};
    font-size: ${props => props.fsize};
    font-family: ${props => props.font}, sans-serif;
    font-weight: ${props => props.fweight};
    text-align: ${props => props.hcenter ? 'center' : 'unset'};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    line-height: ${props => props.lineheight};
    filter: ${props => `blur(${props.blur})`};
    display: ${props => props.display};
    float: ${props => props.float};
`;

export const Decorator = styled.div`
    position: absolute;
    background: ${props => props.background};
    width: 100%;
    height: 15px;
    bottom: ${props => props.bottom};
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    border-radius: 0px 0px 15px 15px;
`;

export const ContainerMUI = styled(Container)`
    @media(min-width: 960px){
        max-width: 1160px !important;
    }
`