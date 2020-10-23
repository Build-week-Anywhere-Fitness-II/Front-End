import React from 'react'
import facebook from '../facebook.jpg'
import instagram from '../instagram.jpg'
import styled from 'styled-components';
import tweet from '../tweet.jpg'

const Footer = () => {
    return (
           <FooterDiv>
                <img src={facebook} alt="facebook"/>
                <img src={instagram} alt="instagram"/>
                <img src={tweet} alt="tweet"/>
            </FooterDiv> 
    )
}

const FooterDiv = styled.footer`
footer {
    height: 10vh;
    padding: 0 35%;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    background-color: #1e222e;
 }
 img {
    margin: 0;
    width:33%;
 }
 
`;


export default Footer;
