import React from 'react';
import ReactDOM from 'react-dom';
import TextChunks from './TextChunks';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TextChunks />, div);
});
