import React, { Component } from 'react';

export default class ToDecimal extends Component {

  render () {
    let { roman, convertedDecimal } = this.props;
    
    return (
      <div>
        <h3>Enter a roman numeral value:</h3>
        <p>It may only consist of the characters I,V,X,L,C,D,or M.</p>
        <form>
          <label>Roman Numeral:</label>
          <input></input>
          <button type="submit">Submit</button>
        </form>
        <div className="output">
          <span className="decimal-label">Decimal:</span>
          <span id="decimal">{convertedDecimal}</span>
        </div>
      </div>
    )
  }
}