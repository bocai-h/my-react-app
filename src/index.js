import React from 'react';
import ReactDOM from 'react-dom';
import store from './stores/Store.js';
import Provider from './Provider.js';
import CounterPanel from './views/CounterPanel';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	    <Provider store = { store }>
	      <CounterPanel />
	    </Provider>,
	     document.getElementById('root')
	     );
registerServiceWorker();
