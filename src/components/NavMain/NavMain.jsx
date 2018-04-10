import React, { Component } from 'react'
import Link from 'gatsby-link'
import './NavMain.scss'

class NavMain extends Component {
  render() {
    return (
      <div className="container-lg">
        <nav className="nav-main ">
          <Link to="/">Logo</Link>
          <Link to="/">Support</Link>
          <Link to="/">For Developers</Link>
          <Link to="/">Glossary</Link>
          <Link to="/">Status</Link>
          <Link to="/">Log In</Link>
        </nav>
      </div>
    )
  }
}

export default NavMain
