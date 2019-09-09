import React from 'react';
import ReactDOM from 'react-dom';
import RouterApp from './components/RouterApp';
import './styles/css/styles.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RouterApp />, document.getElementById('root'));

serviceWorker.unregister();