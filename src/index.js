import React from 'react';
import ReactDOM from 'react-dom';

import './style/Style.scss';

if (module.hot) {
  module.hot.accept();
};

ReactDOM.render(<h1>React is ready</h1>, document.getElementById('app'));