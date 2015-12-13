import React from 'react';
import PureComponent from 'react-pure-render/component';

const propTypes = {
  winner: React.PropTypes.string
};

class Winner extends PureComponent {
  render() {
    return (
      <div className="winner">
        Winner is {this.props.winner}!
      </div>
    );
  }
};

// With ES6 classes, propTypes and defaultProps are defined 
// as properties on the constructor instead of in the class body.

Winner.propTypes = propTypes;

export default Winner;