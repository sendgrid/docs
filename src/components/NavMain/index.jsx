import React, { Component } from 'react';
import Link from 'gatsby-link';
import Cookies from 'js-cookie';
import './NavMain.scss';

class NavMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      user: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentWillMount() {
    const token = Cookies.get('mako_auth_token');

    if (!token) return;

    fetch('https://api.sendgrid.com/v3/user/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Authorization: `token ${token}`,
      },
    }).then((response) => {
      if (!response.ok) {
        return false;
      }

      response.json().then(user => this.setState({ user }));
    });
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    const {
      showMenu,
      user,
    } = this.state;

    const menuState = showMenu ? 'in' : '';

    return (
      <div className="nav-wrap">
        <div className="nav-secondary">
          <div className="container-lg">
            {user ? (
              <div className="nav-secondary__account">
                <div className="nav-secondary__name">{user.first_name} {user.last_name}</div>
                <div className="nav-secondary__account-links">
                  <a href="/">Dashboard</a>
                  <a href="/">Sign Out</a>
                </div>
              </div>
            ) : (
              <a href="https://app.sendgrid.com/">Log In</a>
            )}
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
