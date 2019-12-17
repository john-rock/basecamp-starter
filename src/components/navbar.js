import { Link } from "gatsby"
import React from "react"

const NavBar = () => (
  <div className="nav">
    <div className="nav-sub" role="menuitem">
      <Link to={`/about-us/`}>About Us</Link>
    </div>
    <div className="nav-sub" role="menuitem">
      <Link to={`/contact/`}>Contact</Link>
    </div>
  </div>
)

export default NavBar
