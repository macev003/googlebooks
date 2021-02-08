import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";


class App extends Component {
  render () {
    return (
     <Router>
      <div>
      <Nav/>
      <Jumbotron/>
      <Switch>
        <Route exact path = "./pages/Search" component={Search}/>
        <Route exact path="./pages/Search" component={Search} />
        <Route exact path="./pages/Saved" component={Saved} />
      </Switch>
     </div>
   </Router>
  );
 }
}

export default App;
