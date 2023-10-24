import React from 'react';
import ReactDOM from 'react-dom/client';
import CricketProvider from './context/CricketProvider';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CricketProvider>
        <App />
    </CricketProvider>
    );




