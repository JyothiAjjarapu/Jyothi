import './css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
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
                       
                    <a href="https://www.linkedin.com/in/jyothiajjarapu/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} color="white" />
                    </a>
                    <a href="https://github.com/JyothiAjjarapu/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} color="white" />
                    </a>
                </div>    
           
            </div>
           
            <div className="footer-text">
                © 2025. Ajjarapu Jyothi. Built with ❤️ using React.
            </div>
        </>
    )
}