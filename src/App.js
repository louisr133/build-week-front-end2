import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import Login from './components/Login'
import './css/App.css';
import PrivateRoute from './components/PrivateRoute'
import {NavLink} from 'react-router-dom';
import Tech from './components/Tech'
import Home from './components/Home'

class App extends Component {
  componentDidMount(){
    localStorage.removeItem('token');
  }

  render() {
    return (
      <div className="App">
        <nav className='appNav'>
          <NavLink activeClassName='active' exact to='/'>Home</NavLink>
          <NavLink activeClassName='active' to='/login'>Login</NavLink>
          <NavLink activeClassName='active' to='/technology/listing'>Our Tech</NavLink>
        </nav>
        
          <Route exact path='/' component={Home} />
          <Route path ='/login' component={Login} />
          <PrivateRoute path='/technology' component={Tech} />
        
    
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return({
    ...state,

  })
}

export default connect(mapStateToProps, {})(App);
