import './css/Header.css';
import { useState } from "react";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const handleLinkClick = () => {
    setIsOpen(false); // auto close menu on link click
  };
    return(
        <>
           <header>

                <h1 className = "icon-circle" >AJ</h1>

                 {/* Hamburger Icon */}
                <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`sections ${isOpen ? "open" : ""}`}>
                    <a href="#home" onClick={handleLinkClick}>Home</a>
                    <a href="#about" onClick={handleLinkClick}>About</a>
                    <a href="#projects" onClick={handleLinkClick}>Projects</a>                    
                    <a href="#Education" onClick={handleLinkClick}>Education</a>
                    <a href="#experience" onClick={handleLinkClick}>Experience</a>
                    <a href="#contact" onClick={handleLinkClick}>Contact</a>
                </div>

           </header>
        </>
    )
}