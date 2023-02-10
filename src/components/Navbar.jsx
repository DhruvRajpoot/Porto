import logo from '../images/logo.png'
import '../App.css'
import { NavLink,Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaAngleDown } from 'react-icons/fa';
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { GoSearch } from 'react-icons/go';

function Navbar() {
    return (
        < nav className="navbar navbar-expand-lg" style={{ background: '#2a2a2a', padding: '1rem .5rem 2vw 1rem' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                <span className="fs-4 ms-auto navFirstSearch text-light"><GoSearch /></span>
                <button className="navbar-toggler shadow-none fs-1 text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <AiOutlineMenuUnfold />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 pt-2 text-center">
                        <li className="nav-item mx-2"><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li className="nav-item mx-2"><NavLink className="nav-link" to="/about">About</NavLink></li>
                        <li className="nav-item mx-2"><NavLink className="nav-link" to="/project">Projects</NavLink></li>
                        <li className="nav-item mx-2 dropdown">
                            <NavLink className={`nav-link dropdown-toggle `} to="/service" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services <FaAngleDown /></NavLink>
                            <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Interior</a></li>
                                <li><a className="dropdown-item" href="/">Exterior</a></li>
                            </ul>
                        </li>
                        <li className="nav-item mx-2"><NavLink className="nav-link" to="/blog">Blog</NavLink></li>
                        <li className="nav-item mx-2"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                        <li className="nav-item mx-2 navSecondSearch"><button className='border-0 bg-transparent fs-5 text-light'><GoSearch /></button></li>
                    </ul>
                    <div className="d-flex mb-2 mb-lg-0 justify-content-center">
                        <a className="nav-link" href="/" style={{ fontSize: '1rem' }}><FaFacebookF /></a>
                        <a className="nav-link" href="/" style={{ fontSize: '1rem' }}><FaTwitter /></a>
                        <a className="nav-link" href="/" style={{ fontSize: '1rem' }}><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
        </nav >
    )
};

export default Navbar;