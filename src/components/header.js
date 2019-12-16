import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

import Image from "./image"

const Header = ({ data }) => (
  <header className="large-container">
    <div className="site-logo">
      <Link to="/">
        <div style={{ maxWidth: `30px`, marginRight: `6px`, flex: `1` }}>
          <Image file="logo.png" />
        </div>
        <div>{"<Basecamp />"}</div>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
