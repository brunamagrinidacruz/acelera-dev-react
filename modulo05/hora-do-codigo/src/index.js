import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* 
* O ReactDOM impota um componente, que será o componente raiz <App>, na página HTML.
* Note que só temos um arquivo .html, e o conteúdo dele apenas é renderizado com telas diferentes (SPA)
* Este conteúdo é colocado dentro do .html em public/index.html dentro do elemento com id "root"
*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
