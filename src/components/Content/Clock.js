import React, {Component} from 'react';
      
const INTERVAL = 100;

export class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
  }

  increment(){
    this.setState({value: this.state.value + 1});
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.increment(), 1000/INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  render() {
    const value = this.state.value
    const timer = <p>Таймер:</p>
    return (
      <div>
          {timer}
        <p>
            <span>{Math.round(value/INTERVAL/60/60)} : </span>
            <span>{Math.round(value/INTERVAL/60)} : </span>
            <span>{Math.round(value/INTERVAL)} . </span>
            <span>{value % INTERVAL}</span>
          </p>
      </div>
    );
  }
}