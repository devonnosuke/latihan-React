import React, {Component} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import ListView from './ListView';
import NotFound from './NotFound';
import DetailView from './DetailView';
class App extends Component {

  render(){

    return(
      <BrowserRouter>
        <div>
          <nav>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/users'>Users</Link></li>
          </nav>
        </div>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<ListView />} />
            <Route path='/user/:uya/' element={<DetailView />} />
            <Route path='/user/:uya/:babang' element={<DetailView />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    )

  }
}

export default App;
