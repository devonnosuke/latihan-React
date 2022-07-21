import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// function Clicker() {
//   function handleClick(e) {
//     alert('berhasil klik');
//     e.preventDefault();
//   }

//   return (
//     <a href="#" onClick={handleClick}>Klik</a>
//   )
// }

class Toggle extends Component {
  
  constructor(props) {
    super(props)
    this.state = 
    {
      toggleStatus : true
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state=>({
      toggleStatus: !state.toggleStatus
    }))
  }

  render(){
    return(
      <button onClick={this.handleClick}>
        {this.state.toggleStatus ? 'ON':'OFF'}
      </button>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Toggle />
        <Toggle />
        <Toggle />
        <Toggle />
      </header>
    </div>
  );
}

export default App;
