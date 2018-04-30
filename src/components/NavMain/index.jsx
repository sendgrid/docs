import React, { Component } from 'react';
import Link from 'gatsby-link';
import './NavMain.scss';

class NavMain extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    const menuState = this.state.showMenu ? 'in' : '';

    return (
      <div className="nav-wrap">
        <div className="nav-secondary">
          <div className="container-lg">
            <a href="/">Log In</a>
          </div>
        </div>

        <div className="nav-main-wrap">
          <div className="container-lg">
            <nav className="nav-main">
              <Link className="nav-main__logo" to="/">
                Logo
              </Link>

              <button
                className={`nav-main__toggle js-menu-toggle ${menuState}`}
                onClick={this.toggleMenu}
              >
                <span className="nav-main__menu" />
              </button>

              <div className={`nav-main__mobile ${menuState}`}>
                <div className="nav-item">
                  <Link className="nav-main__plain" to="/">
                    Support
                  </Link>
                </div>

                <div className="nav-item">
                  <Link className="nav-main__plain" to="/for-developers/">
                    For Developers
                  </Link>
                </div>

                <div className="nav-item">
                  <Link className="nav-main__plain" to="/">
                    Glossary
                  </Link>
                </div>

                <div className="nav-item">
                  <Link className="nav-main__plain" to="/">
                    Status
                  </Link>
                </div>

                <div className="nav-item nav-item--btn">
                  <Link className="btn nav-main__login" to="/">
                    Sign Up
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default NavMain;
