import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import { configure } from "mobx";
import {App} from './deploy/route'
import stores from './deploy/store'

configure({
  // 在某处观察到的所有状态都需要通过动作进行更改
  enforceActions: 'observed'
})

  ReactDOM.render(
    <Provider {...stores}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
