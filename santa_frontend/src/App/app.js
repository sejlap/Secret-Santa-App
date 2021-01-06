import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Components/Home";
import AddEmployee from "../Components/AddEmployee"; 
import Header from '../Components/Header'; 


class App extends Component {
  render() {
    return (
    <BrowserRouter>
         <Header/>
          <div>
            <Route path="/" exact component={Home}/>
            <Route path="/addemployee" exact component={AddEmployee}/>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;