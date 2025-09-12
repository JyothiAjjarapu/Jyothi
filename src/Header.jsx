import './css/Header.css';

export default function Header() {

    return(
        <>
           <header>

                <h1 className = "icon-circle" >AJ</h1>

                <div className = "sections">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

           </header>
        </>
    )
}