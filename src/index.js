import React from 'react';
import ReactDOM from 'react-dom/client';
import HomeContainer from './components/Home/Home.container';
import AppRouter from './components/router';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeContainer />
    <AppRouter />
  </React.StrictMode>
);