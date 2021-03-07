import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counters: [
        {id: 'A', count: 0, color: 'tomato'},
        {id: 'B', count: 0, color: 'skyblue'},
        {id: 'C', count: 0, color: 'limegreen'}
      ],
      total: 0
    };
  }

  countUp = (counter) => {
    this.setState(prevState => {
        console.log(prevState);
      const counters = prevState.counters.map(counter => {
        return {id: counter.id, count: counter.count, color: counter.color};
      });
      const pos = counters.map(counter => {
        return counter.id;
      }).indexOf(counter.id);
      counters[pos].count++;
      return {
        counters: counters,
        total: prevState.total + 1
      };
    })
  }

  reset = () => {
    this.setState({
      counters: [
        {id: 'A', count: 0, color: 'tomato'},
        {id: 'B', count: 0, color: 'skyblue'},
        {id: 'C', count: 0, color: 'limegreen'}
      ],
      total: 0
    });
  }

  render() {
    return (
      <div className="Container">
        <CounterList
          counters={this.state.counters}
          countUp={this.countUp}
          reset={this.reset}
        />
        <div>TOTAL INVENTORY: {this.state.total}</div>
      </div>
    );
  }
}

function CounterList(props){
  const counters = props.counters.map(counter => {
    return(
      <Counter
        counter={counter}
        key={counter.id}
        countUp={props.countUp}
      />
    );
  });
  return(
    <div>
      <ul>
        {counters}
      </ul>
      <button onClick={() => props.reset()}>
        reset
      </button>
    </div>
  );
}

function Counter(props) {
  return (
    <li
      style={{ backgroundColor: props.counter.color }}
      onClick={() => props.countUp(props.counter)}
    >
      {props.counter.id}:{props.counter.count}
    </li>
  );
}
