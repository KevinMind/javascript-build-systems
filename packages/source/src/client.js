import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.hydrate(<App />, document.getElementById('root'));

if (typeof module !== 'undefined' && module.hot) {
  module.hot.accept();
}
