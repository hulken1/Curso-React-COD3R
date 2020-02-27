import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/main/App';
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
