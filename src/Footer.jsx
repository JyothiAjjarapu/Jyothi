import './css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

    return (

        <>
            <div className="footer">

                <div className="quicklinks">
                    QuickLinks: {" "}
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>     

                <div className="social-icons">
                       
                    <FontAwesomeIcon icon={faLinkedin} color="white" />
                    <FontAwesomeIcon icon={faInstagram} color="white" />
                    <FontAwesomeIcon icon={faGithub} color="white" />
                </div>    
           
            </div>
           
            <div className="footer-text">
                © 2025. Ajjarapu Jyothi. Built with ❤️ using React.
            </div>
        </>
    )
}