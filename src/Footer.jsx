import './css/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

    return (

        <>
            <div className="footer">

                <div className="quicklinks">
                    Social Links {" "}
                  <FontAwesomeIcon icon={faLinkedin} color="white" />
                  <FontAwesomeIcon icon={faInstagram} color="white" />
                </div> 

                <div className="quicklinks">
                    Quick Links <br />
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>         
           
            </div>
           
            <div className="footer-text">
                © 2025. Ajjarapu Jyothi. Built with ❤️ using React.
            </div>
        </>
    )
}