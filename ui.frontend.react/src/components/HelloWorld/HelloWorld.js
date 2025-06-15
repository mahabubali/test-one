import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = () => <h2>Hello, REACT World!!</h2>;

export default HelloWorld;

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('react-hello');
  if (container) {
    ReactDOM.render(<HelloWorld />, container);
  }
});