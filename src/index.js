import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import Feature from './feature';
import { AttentionGrabber } from './fold';
import { Nav } from './nav';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Nav />, document.getElementById('menu'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Feature />, document.getElementById('feature'));
ReactDOM.render(<AttentionGrabber />, document.getElementById('top'));
registerServiceWorker();
