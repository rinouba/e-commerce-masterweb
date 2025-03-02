import React from 'react';
import ReactDOM from 'react-dom/client'; // Use ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './app/store'; // Import store and persistor
import Router from './Router/Router'; // Import your Router component

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app
root.render(
  <Provider store={store}>
      <Router />
  </Provider>
);