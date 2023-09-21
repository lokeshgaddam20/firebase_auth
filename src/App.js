import React,{useState} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {loggedIn ? <Redirect to="/" /> : <Login setLoggedIn={setLoggedIn} />}
        </Route>
        <Route path="/register">
          {loggedIn ? <Redirect to="/" /> : <Register setLoggedIn={setLoggedIn} />}
        </Route>
        <Route path="/">
          {loggedIn ? <Home /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}