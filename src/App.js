import React, {Component} from 'react';
import List from './List';

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      catatan: '',
      daftarCatatan: [],
    }
  
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      catatan       : '',
      daftarCatatan : [...this.state.daftarCatatan, this.state.catatan]
    });
  }
  
  handleChange = (event) => {
    this.setState({
      catatan: event.target.value
    })
  }

  kosongkanCatatan = () => {
    this.setState({
      daftarCatatan : []
    })
  } 

  render() {
    return (
      // membuat form add
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.catatan} onChange={this.handleChange} />
          <button>Tambah Catatan</button>
        </form>
          <button onClick={this.kosongkanCatatan}>Kosongkan Catatan</button>
          <List daftarCatatan={this.state.daftarCatatan} />
      </div>
    );
  };
}

export default App;
