import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//           hello yasu!!!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    //this.Counter = this.Counter.bind(this);
    this.state = {
      count: 10
    };
  }

  render() {
    return (
      <li style={{ backgroundColor: this.props.color }}>
        {this.state.count}
      </li>

    );
  }
}

// function Counter(props){
// }
//コンポーネントの描画
// ReactDOM.render(
//   <App myProp="マイプロップ" />,
//   document.getElementById('app')
// );

// export default App;
