import React from 'react';
import {auth} from './firebase'
import { BrowserRouter,Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Toaster } from 'react-hot-toast';
import * as actions from './store/action'

import Home from './routes/Home'
import About from './routes/About';
import Login from './routes/Login';
import StudentDashboard from './routes/StudentDashboard';
import './App.scss';
import ProtectedRoute from './utils/ProtectedRoute';




class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    localStorage.setItem('isAuthenticated',0)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log("AppJs auth state change",user)
      this.props.setUser({user : {
        accessToken : user?._delegate?.accessToken,
        email : user?._delegate?.email,
        emailVerified : user?._delegate?.emailVerified,
        isAnonymous: user?._delegate?.isAnonymous,
        metadata: {...user?._delegate?.metadata},
        phoneNumber: user?._delegate?.phoneNumber,
        photoUrl: user?._delegate?.photoUrl,
        uid: user?._delegate?.uid
      }});
      localStorage.setItem('isAuthenticated',1)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <ProtectedRoute path="/dashboard" component={StudentDashboard}></ProtectedRoute>
        </BrowserRouter>
        <Toaster/>
      </div>
    )
  } 
}

const mapDispatchWithProps = (dispatch) => {
  return {
    setUser : payload => dispatch(actions.setUser(payload))
  }
}

export default connect(null,mapDispatchWithProps)(App);
