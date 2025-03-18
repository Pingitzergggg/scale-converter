import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './alert.css';

const message = document.getElementById('message');
const root = ReactDOM.createRoot(document.getElementById('message'));

let text = ["text1", "text2"];
let title = ["title1", "title2"];

let isRunnable = true; console.log(isRunnable)
let level = 0; /*(localStorage.getItem('tutorial') == 'true') ? 1 : 0*/

function setStyleSheet(pos) { /*position of the div*/
  if (level == 0) {
    return (
      {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    )
  } else {
    return (
      {
        height: "100vh",
        display: "flex",
        justifyContent: pos,
        alignItems: "flex-end"
      }
    )
  }
}

function highLighter(x) {
  const element = document.getElementsByClassName(x);
  element.style = "transition: 2s; border-radius: none; border-color: black; box-shadow: none; outline: 0 none;";
}

function increaseLevel() {
  if (level < 5) {
    level++;
  }
  if (level == 1) {
    message.style = 'display: block';
    root.render(Message("flex-start", level));
  } else if (level == 2) {
    message.style = 'display: block';
    root.render(Message("center", level));
  } else if (level == 3) {
    message.style = 'display: block';
    root.render(Message("center", level))
  } else if (level == 4) {
    message.style = 'display: block';
    root.render(Message("flex-end", level));
  } else {
    message.style = 'display: none';
    isRunnable = false; //localstorage update
    root.render(<></>);
  }
  console.log(level);
}

function Message(pos, level) {
  return (
  <div className='container'>
    <div className='row' style={setStyleSheet(pos)}>
      <div className='col-md-4'>
        <div style={{textAlign: "center"}} className="alert-center">
          <div style={{display: "flex", justifyContent: "flex-end"}}>
          <a onClick={() => {level = 5; root.render(<></>)}} className='cancel'><i class="fa-solid fa-xmark"></i></a>
          </div>
          <h3>{title[level]}</h3>
          <p>{text[level]}</p>
          <a onClick={increaseLevel} className="alert-button">Next</a>
        </div>
      </div>
    </div>
  </div>
  )
}


// if (isRunnable) {
//   root.render(Message("center", level));
// } else {
//   root.render(<></>);
// }

root.render(Message("center", level));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
