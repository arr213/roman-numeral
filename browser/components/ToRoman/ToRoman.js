import React, { Component } from 'react';

export default class ToRoman extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSwap = this.handleSwap.bind(this);
  }

  handleChange(evt) {
    let num = evt.target.value;
    this.props.updateDecimal(num);
  }

  handleSwap (evt) {
    evt.preventDefault();
    this.props.switchInputType();
  }

  render () {
    let { decimal, convertedRoman } = this.props;
    // decimal = roman || 'Enter Number';

    return (
      <div className="text-left">
        <div className="col-md-6 numeral-container">
          <form>
            <h3>Decimal:</h3>
            <button className="swap" onClick={this.handleSwap}>
              <span className="glyphicon glyphicon-retweet"></span>
            </button>
            <input name="decimal" type="text" placeholder="Enter number" onChange={this.handleChange}></input>
          </form>
        </div>
        <div className="col-md-6 numeral-container left-border">
          <h3>Roman Numeral:</h3>
          <p className="converted">{convertedRoman}</p>
        </div>
        
      </div>
    )
  }
}