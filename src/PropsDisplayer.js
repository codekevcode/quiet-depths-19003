import React from 'react';
import ReactDOM from 'react-dom';

export class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
      </div>
    );
  }
}
