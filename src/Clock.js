import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }


  render() {
    return(
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;

// Wrong
//this.state.comment = 'Hello';
// Correct
//this.setState({comment: 'Hello'});


// Wrong
// this.setState({
//   counter: this.state.counter + this.props.increment,
// });

// Correct
// this.setState((prevState, props) => ({
//   counter: prevState.counter + props.increment
// }));

// Correct
// this.setState(function(prevState, props) {
//   return {
//     counter: prevState.counter + props.increment
//   };
// });