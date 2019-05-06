import React, { Component } from 'react';
export class Data extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    increment(){
      this.setState({date: new Date()});
    }
  
    componentDidMount() {
      this.timerID = setInterval(() => this.increment(), 100);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    render() {
      return (
          <p>Время: {`${this.state.date.toLocaleTimeString()}`}</p>
      );
    }
  }