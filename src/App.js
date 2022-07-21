import React, {Component} from 'react';

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => this.setState({ items:data, isLoading: false }))
  }

  render(){
    const items = this.state.items

    if (this.state.isLoading) {
      return <h1>Sedang Memuat...</h1>;
    }

    return(
      <div>
        <ul>
          { items.map( 
            (item, index) => 
            <li key={index}> {item.company.catchPhrase} </li> 
          )}
        </ul>
      </div>
    )
  }
}

export default App;
