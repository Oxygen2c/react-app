import React, {Component} from 'react';

export class Message extends Component {
  constructor(props) {
    super(props)
    // debugger;
  }
  render() {
    return (
      <div className="messege">
        <h1>Сообщение: {this.props.message}</h1>
      </div>
      );
  }
}
