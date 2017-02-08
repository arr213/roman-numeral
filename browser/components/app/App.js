import React, { Component } from 'react';

import ToDecimalContainer from '../ToDecimal/ToDecimalContainer';
import ToRomanContainer from '../ToRoman/ToRomanContainer';

export default class App extends Component {

  render () {
    const inputType = this.props.inputType;

    return (
      <div>
        <div id="header" className="text-center">
          <h1>ROMAN NUMERAL TRANSLATOR</h1>
        </div>
        <div id="main" className="col-md-8 col-md-offset-2 text-center">
          { inputType === 'roman' ?
              <ToDecimalContainer />
              : <ToRomanContainer />
          }
        </div>
      </div>
    );
  }
}