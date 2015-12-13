import React from 'react';
import {List} from 'immutable';
import PureComponent from 'react-pure-render/component';
import Winner from './Winner';
import Vote from './Vote';

const propTypes = {
  pair: React.PropTypes.instanceOf(List),
  vote: React.PropTypes.func,
  winner: React.PropTypes.string,
  hasVoted: React.PropTypes.string
};

const defaultProps = {
  pair: List()
};

class Voting extends PureComponent {
  render() {
    return (
      <div> {
        this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />
      } </div>
    );
  }
}

// With ES6 classes, propTypes and defaultProps are defined 
// as properties on the constructor instead of in the class body.

Voting.propTypes = propTypes;
Voting.defaultProps = defaultProps;

export default Voting;
