import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import CounterPanel from './CounterPanel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	    <CounterPanel />,
	     document.getElementById('root')
	     );
registerServiceWorker();
