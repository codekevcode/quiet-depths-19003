import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import Feature from './feature';
import { AttentionGrabber } from './fold';
import { Nav } from './nav';
import { Footer } from './footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
