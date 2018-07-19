import React from 'react';

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: false,
    };
  }

  componentWillMount() {
    fetch('https://3tgl2vf85cht.statuspage.io/api/v2/status.json')
      .then(response => response.json())
      .then((status) => {
        this.setState({
          status,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const {
      status,
      page,
    } = this.state.status;

    if (!this.state.status || status.indicator === 'none') {
      return null;
    }

    const alertType = status.indicator === 'minor' ? 'warning' : 'danger';

    return (
      <div className={`alert alert-${alertType} sendgrid-status`}>
        <p><i className="sg-icon sg-icon-info-circle" /> <strong>{status.description}. <a href={page.url}>Learn More</a></strong></p>
      </div>
    );
  }
}
