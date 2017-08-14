import React from 'react';
import ReactDOM from 'react-dom';
import ChunkAlphabetMapper from './ChunkAlphabetMapper';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChunkAlphabetMapper />, div);
});
