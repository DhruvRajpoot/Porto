import logo from '../images/logo.png'
import '../App.css'
import { NavLink ,Link} from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaAngleDown } from 'react-icons/fa';
import { AiOutlineMenuUnfold,AiOutlineClose } from 'react-icons/ai'
import { GoSearch } from 'react-icons/go';
import { useState } from 'react';

function Navbar() {
    const [display, setDisplay] = useState('none')
    const handleclick = () => {
        if (display === 'none') {
            setDisplay('flex')
        }
        else{setDisplay('none')}
    }
    
    return (
        < nav className="navbar navbar-expand-md fixed-top" style={{ background: '#2a2a2a', padding: '1rem .5rem calc(1rem + 1vw) calc(.5rem + .5vw)' }}>
            <div className="container-fluid">
                <Link to='/'><img src={logo} alt="" style={{width:"calc(4rem + 4vw)"}}/></Link>
                <span className="fs-4 ms-auto navFirstSearch text-light"><GoSearch /></span>
                <button className="navbar-toggler shadow-none fs-1 text-light" type="button" style={{ zIndex: '200' }} onClick={handleclick}>
                    {display==='none'?<AiOutlineMenuUnfold />:<AiOutlineClose/>}
                </button>
                <div className={`collapseNavbar ${window.screen.width<768?`d-${display}`:''}`}>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 pt-2 ps-2 text-center">
                        <li className="nav-item"><NavLink className="nav-link" to="/" onClick={handleclick}>Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/about" onClick={handleclick}>About</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/project" onClick={handleclick}>Projects</NavLink></li>
                        <li className="nav-item dropdown">
                            <NavLink className={`nav-link dropdown-toggle`} to="/service" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services <FaAngleDown /></NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li className="dropdown-item text-center"><Link to="/">Interior</Link></li>
                                <li className="dropdown-item text-center"><Link to="/">Exterior</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item"><NavLink className="nav-link" to="/blog" onClick={handleclick}>Blog</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/contact" onClick={handleclick}>Contact</NavLink></li>
                        <li className="nav-item navSecondSearch d-flex align-items-center justify-content-center"><button className='border-0 bg-transparent text-light'><GoSearch /></button></li>
                    </ul>
                    <div className="d-flex mb-2 mb-lg-0 justify-content-center mt-1" style={{fontSize:'1rem'}}>
                        <a className="nav-link" href="/"><FaFacebookF /></a>
                        <a className="nav-link" href="/"><FaTwitter /></a>
                        <a className="nav-link" href="/"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </nav >
    )
};

export default Navbar;