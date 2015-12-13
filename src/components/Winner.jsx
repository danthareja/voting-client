import React from 'react';

const propTypes = {
  winner: React.PropTypes.string
};

class Winner extends React.Component {
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