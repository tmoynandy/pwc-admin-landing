import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import AdminLanding from './AdminLanding'
import './style.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <AdminLanding />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
