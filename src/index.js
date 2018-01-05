import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import 'bulma/css/bulma.css'
import './styles/style.css'
import registerServiceWorker from './registerServiceWorker';
import Birthday from './Birthday';

ReactDOM.render(<Birthday />, document.getElementById('root'));
registerServiceWorker();
