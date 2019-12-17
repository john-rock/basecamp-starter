import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "./image"
import logo from "../images/logo.png"
import NavBar from "./navbar"

const Header = ({ data }) => (
  <header>
    <div className="site-logo">
      
      <Link to="/">
      <div style={{ maxWidth: '30px', marginRight: '5px' }}>
      <img src={logo} alt="Logo" />
      </div>
        <div>{"<Basecamp />"}</div>
      </Link>
    </div>
    <NavBar />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
