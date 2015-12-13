import React from 'react';

const propTypes = {
  pair: React.PropTypes.arrayOf(React.PropTypes.string),
  vote: React.PropTypes.func,
  hasVoted: React.PropTypes.string
};

const defaultProps = {
  pair: []
};

class Vote extends React.Component {
  isDisabled() {
    return !!this.props.hasVoted
  }

  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }

  render() {
    return (
      <div className="voting">
      {this.props.pair.map(entry => 
        <button
          key={entry}
          onClick={() => this.props.vote(entry)}
          disabled={this.isDisabled()}
        >
          <h1>{entry}</h1>
          {
            this.hasVotedFor(entry) ?
            <div className="label">Voted</div> :
            null
          }
        </button>
      )}
      </div>
    );
  }
};

// With ES6 classes, propTypes and defaultProps are defined 
// as properties on the constructor instead of in the class body.

Vote.propTypes = propTypes;
Vote.defaultProps = defaultProps;

export default Vote;
