import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from'./components/PrivateRoute';
import Login from "./components/login";
import Friend from"./components/friend";
import axios from "axios";

function App() {
  const logout = () => {
    window.localStorage.removeItem("token");

  };

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link onClick={logout} to="/login">Logout</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          {/* history (navigating), match (access params), location (url info) */}
          <PrivateRoute exact path="/protected" component={Friend} />
          <Route path="/login" component={Login} />
          <Route render={(props) => <Login {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
