import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {

  render () {
    return (
      <div>
        {
          this.props.puppies.map(puppy => {
            return (
              <ul key={puppy.id} className="list-unstyled">
                <li>
                  <Link to={"/puppies/" + puppy.id}> { puppy.name }</Link>
                </li>
              </ul>
            )
          })
        }
      </div>
    );
  }
}