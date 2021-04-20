import React from 'react'
import {Route, Redirect}from'react-router-dom';

//render a Route component
//take in all of the same props as  a regular Route comp
// check to see if the user is authenticated
    // if they are, reender the component that was passed in
    // in not, redirect user to "/login"
//rest operator 
function PrivateRoute({component: Component, ...rest }) {
  return <Route {...rest} render={()=>{
      if(window.localStorage.getItem('token')){
          console.log("i'm here")
          return <Component />
      } else {
          console.log("in the else")
          return <Redirect to="/login"/>;
      }
  }}/>;
  
}
export default PrivateRoute