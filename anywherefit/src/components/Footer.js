import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faInstagramSquare, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import "./styles/footer.css"

const Footer = () => {
    return (
           <footer>
                <div id="footer">
                    <FontAwesomeIcon icon={faFacebookSquare} size='4x'/>
                    <FontAwesomeIcon icon={faTwitterSquare} size='4x'/>
                    <FontAwesomeIcon icon={faInstagramSquare} size='4x'/>
                </div>
            </footer>
    )
}



export default Footer;
