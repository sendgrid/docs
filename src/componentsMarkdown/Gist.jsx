import React from 'react';

class Gist extends React.PureComponent {
  componentDidMount() {
    this._updateIframeContent();
  }

  componentDidUpdate(prevProps, prevState) {
    this._updateIframeContent();
  }

  _defineUrl() {
    const { id, file } = this.props;

    const fileArg = file ? `?file=${file}` : '';

    return `https://gist.github.com/${id}.js${fileArg}`;
  }

  _updateIframeContent() {
    const { id, file } = this.props;

    const iframe = this.iframeNode;

    let doc = iframe.document;
    if (iframe.contentDocument) doc = iframe.contentDocument;
    else if (iframe.contentWindow) doc = iframe.contentWindow.document;

    const gistLink = this._defineUrl();
    const gistScript = `<script type="text/javascript" src="${gistLink}"></script>`;
    const styles = '<style>*{font-size:12px;}</style>';
    const elementId = file ? `gist-${id}-${file}` : `gist-${id}`;
    const resizeScript = `onload="parent.document.getElementById('${elementId}').style.height=document.body.scrollHeight + 'px'"`;
    const iframeHtml = `<html><head><base target="_parent">${styles}</head><body ${resizeScript}>${gistScript}</body></html>`;

    doc.open();
    doc.writeln(iframeHtml);
    doc.close();
  }

  render() {
    const { id, file } = this.props;

    return (
      <iframe
        ref={(n) => { this.iframeNode = n; }}
        width="100%"
        frameBorder={0}
        id={file ? `gist-${id}-${file}` : `gist-${id}`}
      />
    );
  }
}

export default Gist;
