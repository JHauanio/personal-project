import React, { Component } from 'react';
import { render } from 'react-dom'
import MainHolder from './MainHolder.jsx'

class App extends Component {
    constructor(props) {
        super(props);
    this.state = {

    }
    }


    render() {
        return (
              <div>
                  <MainHolder /> 
              </div>
        )
    }
}

export default App;