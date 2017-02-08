import React, { Component } from 'react';

export default class ToRoman extends Component {

  render () {
    return (
      <div>
        <h3>Enter a roman numeral value:</h3>
        <p>It may only consist of the characters I,V,X,L,C,D,or M.</p>
        <form>
          <label>Roman Numeral</label>
          <input></input>
          <button type="submit">Submit</button>
        </form>
        <div className="output">
          <h3>Decimal</h3>
          <p id="decimal">123</p>
        </div>
      </div>
    )
  }
}