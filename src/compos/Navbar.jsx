import React from 'react'
import Logo from '../assests/views_logo.svg'
export default function Navbar() {
  return (
    <nav id="nav">
        <figure className="nav__logo">
            <img src={Logo} alt="" className="nav__logo--img" />
        </figure>
        <ul className="nav__link--list">
            <il className="nav__link hover-effect hover-effect--main "><a href="" className="nav__link--anchor">Home</a></il>
            <il className="nav__link hover-effect hover-effect--main "><a href="" className="nav__link--anchor">Find you movie</a></il>
            <il className="nav__btn"><a href="" className="nav__link--btn">Contact</a></il>
        </ul>
    </nav>
  )
}
