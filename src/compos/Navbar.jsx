import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assests/views_logo.svg'
export default function Navbar() {
  return (
    <nav id="nav">
        <figure className="nav__logo">
            <img src={Logo} alt="" className="nav__logo--img" />
        </figure>
        <ul className="nav__link--list">
            <li className="nav__link hover-effect hover-effect--main "><Link to="/" className="nav__link--anchor">Home</Link></li>
            <li className="nav__link hover-effect hover-effect--main "><Link to="/movies" className="nav__link--anchor">Find you movie</Link></li>
            <li className="nav__btn"><button onClink={() => alert("not available")} className="nav__link--btn">Contact</button></li>
        </ul>
    </nav>
  )
}
