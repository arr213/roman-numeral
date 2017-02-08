import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {

  render () {
    return (
      <div>
        <h2>Enter a roman numeral value"</h2>
        <p>It may only consist of the characters I,V,X,L,C,D,or M.</p>
        <form>
          <label>Roman Numeral</label>
          <input></input>
        </form>
        <div>
          <span>Decimal</span>
          <span id="decimal">123</span>
        </div>
      </div>
    );
  }
}