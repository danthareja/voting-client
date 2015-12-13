import React from 'react';

class Voting extends React.Component {
  render() {
    return (
      <div className="voting">
      {this.props.pair.map(entry => 
        <button 
          key={entry}
          onClick={() => this.props.vote(entry)}
        >
          <h1>{entry}</h1>
        </button>
      )}
      </div>
    );
  }
}

// With ES6 classes, propTypes and defaultProps are defined 
// as properties on the constructor instead of in the class body.

Voting.propTypes = {
  pair: React.PropTypes.arrayOf(React.PropTypes.string),
  vote: React.PropTypes.func.isRequired
};

Voting.defaultProps = {
  pair: []
};

export default Voting;
