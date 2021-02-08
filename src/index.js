import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

import './style/Style.scss';

if (module.hot) {
  module.hot.accept();
};

ReactDOM.render(<App />, document.getElementById('app'));