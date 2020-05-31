import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import './Form.css';  
import {config} from './App'
import firebase from './Config';

firebase.initializeApp(config);
class Result extends Component{
constructor(){
  super()
  this.state={
    message:{},
    main:''
  }
  this.database=firebase.database().ref().child('Messages');
}
componentDidMount(){
  this.database.on('value',(snapshot)=>{
    this.setState({
      message:snapshot.val()
    })
    this.setState({
      main:JSON.stringify(this.state.message)
    })
    console.log(this.state.main);
    document.getElementById("demo").innerHTML =this.state.main;
  });
}
render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
      <div className="form">
        <h1>The data is:</h1>
        <p id="demo"></p>
      </div>
      </body>
    </div>
  );
}
}

ReactDOM.render(
  <Result/>,
  document.getElementById('root')
);
 export default Result;