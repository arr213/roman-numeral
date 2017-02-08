import React, { Component } from 'react';

export default class ToDecimal extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSwap = this.handleSwap.bind(this);
  }

  handleChange(evt) {
    let romanStr = evt.target.value;
    this.props.updateRoman(romanStr);
  }

  handleSwap (evt) {
    evt.preventDefault();
    this.props.switchInputType();
  }

  render () {
    let { roman, convertedDecimal } = this.props;
    
    return (
      <div className="text-left">
        <div className="col-md-6 numeral-container">
          <form>
            <h3>Roman Numeral:</h3>
            <button className="swap" onClick={this.handleSwap}>
              <span className="glyphicon glyphicon-retweet"></span>
            </button>
            <input name="roman" type="text" placeholder="Enter numeral" onChange={this.handleChange}></input>
          </form>
        </div>
        <div className="col-md-6 numeral-container left-border">
          <h3>Decimal:</h3>
          <p className="converted">{convertedDecimal}</p>
        </div>
        
      </div>
    )
  }
}

//<p>It may only consist of the characters I,V,X,L,C,D,or M.</p>