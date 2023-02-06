import logo from '../images/logo.png'
import '../App.css'
import { useLocation } from 'react-router-dom'
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaAngleDown} from 'react-icons/fa';
import { GoSearch} from 'react-icons/go';
// import {FaAngleDown} from 'react-icons/fi'

export default function Navbar() {
    const location=useLocation();

    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{background:'#2a2a2a',height:'6.5rem'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src={logo} alt=""/></a>
                    {/* <span className="mx-auto navSearch">Search</span> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2"><a className={`nav-link ${location.pathname==='/'?'active':''}`} href="/">Home</a></li>
                            <li className="nav-item mx-2"><a className={`nav-link ${location.pathname==='/about'?'active':''}`} href="/">About</a></li>
                            <li className="nav-item mx-2"><a className={`nav-link ${location.pathname==='/projects'?'active':''}`} href="/">Projects</a></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services <FaAngleDown/></a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">Interior</a></li>
                                    <li><a className="dropdown-item" href="/">Exterior</a></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2"><a className={`nav-link ${location.pathname==='/blog'?'active':''}`} href="/">Blog</a></li>
                            <li className="nav-item mx-2"><a className={`nav-link ${location.pathname==='/contact'?'active':''}`} href="/">Contact</a></li>
                            <li className="nav-item mx-2"><button className='border-0 bg-transparent fs-5 text-light'><GoSearch/></button></li>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item mx-1"><a className="nav-link" href="/" style={{fontSize:'1rem'}}><FaFacebookF/></a></li>
                            <li className="nav-item mx-1"><a className="nav-link" href="/" style={{fontSize:'1rem'}}><FaTwitter/></a></li>
                            <li className="nav-item mx-1"><a className="nav-link" href="/" style={{fontSize:'1rem'}}><FaLinkedinIn/></a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
