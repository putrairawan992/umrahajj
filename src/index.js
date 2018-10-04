import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';

ReactDOM.render(<Provider store={store}><div> <App /> </div></Provider>, document.getElementById('root'));
registerServiceWorker();
