import React, {useState} from 'react';
import logo from '../assets/images/logo.svg'; 
import {Link} from 'gatsby'; 
import {FiAlignJustify} from 'react-icons/fi'

const Navbar = () => {
  const [show, setShow] = useState(false); 
  
  const handleToggle = () => {
    setShow(!show)
  }
  
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes logo" />
          </Link>
          <button className="nav-btn" onClick={handleToggle}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={`nav-links ${show && "show-links"}`}>
          <Link to="/" className="nav-link" activeClassName="active-link">
            Home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            recipes
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            about
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={() => setShow(false)}
          >
            tags
          </Link>
          <div className="nav-link contact-link">
            <Link
              to="/contact"
              className="btn"
              activeClassName="active-link"
              onClick={() => setShow(false)}
            >
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
