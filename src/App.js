import React from 'react';
import Home from "./Home";
import "./index.css";  
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import {Switch,Route, Redirect} from "react-router-dom";
import Navbar from "./Navbar";

const  App = () =>
{
  return(
    <>
    <Navbar />
    <Switch>
      <Route exact path = "/" component={Home} />
      <Route   exact path = "/about" component ={About} />
      <Route   exact path = "/service" component ={Service} />
      <Route  exact path = "/contact" component ={Contact} />
      <Route  exact path = "/about" component ={About} />
        <Redirect to path = "/"></Redirect>
    </Switch>
    </>
  )
};

export default App;