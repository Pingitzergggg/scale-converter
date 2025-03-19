import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './alert.css';
import './coffee.css';

const message = document.getElementById('message');
const root = ReactDOM.createRoot(document.getElementById('message'));

let text = ["step1", "step2", "step3", "step4", "step5"];
let title = ["title1", "title2", "title3", "title4", "title5"];

let isRunnable = true; console.log(isRunnable); /* localstorage */
let level = 0;

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
  const allInputs = document.getElementsByTagName("input");
  const elements = document.getElementsByClassName(x);
  allInputs.style = "transition: 2s; border-color: black; box-shadow: none; outline: 0 none;"; 
  elements.style = "transition: 2s; border-color: rgba(211, 29, 29, 0.6); box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(211, 29, 29, 0.6); outline: 0 none;";
}

function increaseLevel() {
  if (level < 5) {
    level++;
  }
  if (level == 1) {
    // message.style = 'display: block';
    root.render(Message("flex-start", level));
  } else if (level == 2) {
    // message.style = 'display: block';
    root.render(Message("center", level));
  } else if (level == 3) {
    // message.style = 'display: block';
    root.render(Message("center", level))
  } else if (level == 4) {
    // message.style = 'display: block';
    root.render(Message("flex-end", level));
  } else {
    message.style = 'display: none';
    isRunnable = false; //localstorage update
    root.render(<></>);
  }
  console.log(level);
}

function Message(pos, lvl) {
  return (
  <div className='container'>
    <div className='row' style={setStyleSheet(pos)}>
      <div className='col-md-4'>
        <div style={{textAlign: "center"}} className="alert-center">
          <div style={{display: "flex", justifyContent: "flex-end"}}>
          <a onClick={() => {level = 5; increaseLevel()}} className='cancel'><i class="fa-solid fa-xmark"></i></a>
          </div>
          <h3>{title[lvl]}</h3>
          <p>{text[lvl]}</p>
          <a onClick={() => {increaseLevel()}} className="alert-button">Next</a>
        </div>
      </div>
    </div>
  </div>
  )
}

function infoPanel() {
  return (
  <div className='container'>
    <div className='row' style={setStyleSheet("center")}>
      <div className='col-md-4'>
        <div style={{textAlign: "center"}} className="alert-center">
          <div style={{display: "flex", justifyContent: "flex-end"}}>
          <a onClick={() => {level = 5; increaseLevel()}} className='cancel'><i class="fa-solid fa-xmark"></i></a>
          </div>
          <h3>Technologies Used</h3>
          <p>
            <ul>
              <li>HTML5 & CSS3</li>
              <li>JSX</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Fontawesome</li>
            </ul>
            Note: This site is <strong>open source</strong>. Meaning that the code of the page is freely availbe on my <a href='https://github.com/Pingitzergggg'>Github</a>
          </p>
          <a onClick={() => {level = 5; increaseLevel()}} className="alert-button">Close</a>
        </div>
      </div>
    </div>
  </div>
  )
}

function giveMeCoffee() {
  return (
    <div className='container'>
      <div className='row' style={setStyleSheet("center")}>
        <div className='col-md-6'>
          <div style={{textAlign: "left"}} className="alert-center">
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <a onClick={() => {level = 5; increaseLevel()}} className='cancel'><i class="fa-solid fa-xmark"></i></a>
            </div>
            <div className='coffee-div'>
              <div>
                <h3>Like the Site?<br/>Buy Me a Coffee!</h3>
                <p>If you like my programs please support my work with a subtle donation!<br/>
                   Your help is much appreciated!</p>
                <a onClick={() => {increaseLevel()}} className="alert-button">Sure!</a>
              </div>
              <div><svg><path></path></svg></div>
            </div>
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

root.render(giveMeCoffee());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
