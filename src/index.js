import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react'
import {App} from './deploy/route'
import stores from './deploy/store'


  ReactDOM.render(
    <Provider {...stores}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  