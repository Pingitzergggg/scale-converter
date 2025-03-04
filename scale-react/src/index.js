import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './alert.css';

const root = ReactDOM.createRoot(document.getElementById('message-01'));

root.render(
    <div style={{textAlign: "center"}} className="alert-center">
      <h3>Title</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minus corporis nostrum id ab repellendus, vero aliquam nulla error eligendi. Necessitatibus officia architecto culpa id laudantium ipsam fugit expedita a!</p>
      <a className="alert-button">Next</a>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
