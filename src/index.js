import React from 'react';
import ReactDOM from 'react-dom';
import 'purecss/build/pure-min.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
