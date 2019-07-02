import React, { Component } from 'react';
import './App.css';
import User from './components/user'

class App extends Component {

    state = {
      user: {}
    }

    getUser = () => {
      const name = this.refs.name.value
      //alert(name);
      fetch(`http://api.github.com/users/${name}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          user: {
            name: data.name, 
            html_url: data.html_url
          }
        })
      });
  
    }

  render() {
    const { user } = this.state

    return (
      <div className="App">
        <input type="text" placeholder="Digite seu usuario" ref="name" />
        <button onClick={this.getUser}>buscar</button>
        <User user={user}/>
      </div>
    )
  }
}

export default App;
