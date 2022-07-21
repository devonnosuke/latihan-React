import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Contoh from './Contoh';
import reportWebVitals from './reportWebVitals';
import Button from './Button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let nama = 'devon';

function Contoh() {
  return (
    <h1>Hallo nama saya {nama} </h1>
  );
}

const akar = ReactDOM.createRoot(document.getElementById('contoh'));
akar.render(
  <React.StrictMode>
    <Contoh />
    <Button />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
