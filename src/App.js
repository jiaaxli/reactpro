import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import './App.css';
import Commont from './components/commont';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            
              <Route path='/commont' component={Commont}>列表</Route>
              <Redirect to='/commont/home'></Redirect>
            
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
