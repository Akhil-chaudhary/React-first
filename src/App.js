import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import './Form.css';  
var config={
  apiKey: "AIzaSyAIl-EpAdZmjnEJAmWyUR2VaeTsD2mup_w",
  authDomain: "portfolio-1cfc2.firebaseapp.com",
  databaseURL: "https://portfolio-1cfc2.firebaseio.com",
  projectId: "portfolio-1cfc2",
  storageBucket: "portfolio-1cfc2.appspot.com",
  messagingSenderId: "345848544510",
}
class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      apiKey: "AIzaSyAIl-EpAdZmjnEJAmWyUR2VaeTsD2mup_w",
      authDomain: "portfolio-1cfc2.firebaseapp.com",
      databaseURL: "https://portfolio-1cfc2.firebaseio.com",
      projectId: "portfolio-1cfc2",
      storageBucket: "portfolio-1cfc2.appspot.com",
      messagingSenderId: "345848544510",
    }
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(e) {
  config=this.state;
  console.log(config);
  e.preventDefault();
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
      <form onSubmit={this.handleSubmit}>
        <label>
          API key:
          <input type="text" onChange={event => this.setState( {apiKey: event.target.value} )} />
        </label>
        <label>
          Auth Domain:
          <input type="text" onChange={event => this.setState( {authDomain: event.target.value} )}/>
        </label>
        <label>
          Database URL:
          <input type="text" onChange={event => this.setState( {databaseURL: event.target.value} )}/>
        </label>
        <label>
          Project ID:
          <input type="text" onChange={event => this.setState( {projectId: event.target.value} )}/>
        </label>
        <label>
          Storage Bucket:
          <input type="text" onChange={event => this.setState( {storageBucket: event.target.value} )}/>
        </label>
        <label>
          Messaging Sender ID:
          <input type="text" onChange={event => this.setState( {messagingSenderId: event.target.value} )}/>
        </label>
        <input type="submit" className="btn" value="Submit" />
      </form>
      </body>
    </div>
  );
}
}
export {config};
export default App;
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);