import React, {Component} from 'react';

export class Message extends Component {
  constructor(props) {
    super(props)
    // debugger;
  }
  render() {
    const {message} = this.props;
    return (
      <div className="messege">
        <h1>{`${message}`}</h1>
      </div>
      );
  }
}
