import './css/footer.css';
export default function Header() {


    return(
        <>
           <div className = "header">

                <h1 className = "icon-circle" >AJ</h1>

                <div className = "sections">
                    <a href="#home" className='section'>Home</a>
                    <a href="#about" className='section'>About</a>
                    <a href="#contact" className='section'>Contact</a>
                    <a href="#blog" className='section'>Blog</a>
                    <a href="#projects" className='section'>Projects</a>
                </div>

           </div>
        </>
    )
}