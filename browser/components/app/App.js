import React, { Component } from 'react';

import ToDecimalContainer from '../ToDecimal/ToDecimalContainer';



export default class App extends Component {

  render () {
    return (
      <div>
        <div id="header" className="text-center">
          <h1>ROMAN NUMERAL TRANSLATOR</h1>
        </div>
        <div id="main" className="col-md-6 col-md-offset-3 text-center">
          <ToDecimalContainer />
        </div>
      </div>
    );
  }
}