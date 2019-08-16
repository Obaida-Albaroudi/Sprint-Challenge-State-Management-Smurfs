import React, { Component } from "react";
import Form from "../Functions/Form.js"
import SmurfList from "../Functions/SmurfList.js"
import "./App.css";
const App = () => {

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Form/>
        <SmurfList/>
      </div>
    );

}

export default App;
