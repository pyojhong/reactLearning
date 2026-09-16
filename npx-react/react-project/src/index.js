import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Coin from './Coin';
import CoinChallenge from './CoinChallange';
import Movie from './Movie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Movie />
  </React.StrictMode>
);