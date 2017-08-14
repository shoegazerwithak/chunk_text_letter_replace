import React from 'react';
import ReactDOM from 'react-dom';
import AlphabetPicker from './AlphabetPicker';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AlphabetPicker />, div);
});
