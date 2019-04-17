import React from 'react';
import Cookies from 'js-cookie';

export const AuthCtx = React.createContext(false);

function withUser(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: false,
      };
    }

    componentDidMount() {
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

        return response.json();
      }).then((user) => {
        this.setState({ user });
        this.sendSurvicateAtts();
      });
    }

    sendSurvicateAtts() {
      if (typeof window._svc === 'undefined') {
        return;
      }

      window._svc.traits = {
        userID: this.state.user.userid,
      };
    }

    render() {
      return (
        <AuthCtx.Provider value={this.state} >
          <WrappedComponent {...this.props} />
        </AuthCtx.Provider>
      );
    }
  };
}

export default withUser;
