import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import myContext from './context/MyContext';

import { App } from 'components/App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

  <BrowserRouter>
    <myContext.Provider value={{ name: 'Anton', b: 2 }}>
      <App />
    </myContext.Provider>
  </BrowserRouter>

  // </React.StrictMode>
);
