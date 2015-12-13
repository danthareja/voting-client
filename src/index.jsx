import React from 'react';
import ReactDOM from 'react-dom';
import {List} from 'immutable';
import Voting from './components/Voting';

const pair = List.of('Trainspotting', '28 Days Later');

ReactDOM.render(
  <Voting pair={pair} />,
  document.getElementById('app')
);