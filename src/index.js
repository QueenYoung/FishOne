import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bulma/css/bulma.css'
import './styles/style.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();