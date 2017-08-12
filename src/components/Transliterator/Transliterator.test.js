import React from 'react';
import ReactDOM from 'react-dom';
import Transliterator from './Transliterator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Transliterator />, div);
});
