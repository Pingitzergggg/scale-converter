import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './alert.css';
import './coffee.css';
import mug from './mug-hot-solid.svg';

const highLighterCssSource = "border-color: rgba(211, 29, 29, 0.6);box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(211, 29, 29, 0.6);outline: 0 none;";

const message = document.getElementById('message');
const coffee = document.getElementById('coffee');
const root = ReactDOM.createRoot(document.getElementById('message'));
const root2 = ReactDOM.createRoot(document.getElementById('coffee'));

let text = ["Scale Converter is a free, open-source website made with the goal of simplifying music production for everyone! Provide your scale tonics and a degree or note progression of your choice and let the site handle the rest!", "At the highlighted section you need to provide the first note(tonic) of your scale. You can modify it's location by changing the corresponding mode(default is Ionian)", "After this you need to do the same thing with the new mode that you want your progression to be modified. It works on the same logic as the first section.", "Here you need to provide your progression(only provide the notes, not the chords!). If you want to give the progression by it's degree, you can do that as well by switching to degree mode. For that, just click on the arrow button to the left.", "The result section provides all the neccesary information you need. The chord progression in both scale as well as all the compatible sus chords to use(note: every sus4 compatible notes are also compatible with sus2)"];
let title = ["Help", "Original Tonic", "New Tonic", "The Progression", "Result Section"];

// let isRunnable = true; //console.log(isRunnable); /* localstorage */
let localValue = localStorage.getItem("popup");
let level = 0;

function setStyleSheet(pos) { /*position of the div*/ /*UPDATE: This used to move the position of the tutorial div, on second tought it looks ugly so I took out*/
  if (level == 0 || window.innerWidth < 1200) {
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
        justifyContent: "center",
        alignItems: "center"
      }
    )
  }
}

function highLighter(x) {
  //console.log("lvl index is: " + x);
  const elements = document.getElementsByClassName("highlightable");
  if (x > 0 && x < 4) {
    if (x-1 != 0) {
      elements[x-2].style = "border: none; box-shadow: none";
    }
    elements[x-1].style = highLighterCssSource;
  } else if (x == 4) {
    elements[x-2].style = "border: none; box-shadow: none";
    elements[x-1].style = highLighterCssSource;
    elements[x].style = highLighterCssSource;
    elements[x+1].style = highLighterCssSource;
  }
}

function clearHighLighter() {
  const elements = document.getElementsByClassName("highlightable");
  for(let i = 0; i < elements.length; i++) {
    elements[i].style = "border: none; box-shadow: none";
  }
}

message.style = "display: inline-block";
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
    clearHighLighter();
    localStorage.setItem("popup", "null");
    message.style = 'display: none';
    localValue = localStorage.getItem("popup"); //localstorage update
    root.render(<></>);
  }
}

function cancelCoffee() {
  coffee.style = "display: none";
  root2.render(<></>);
}

function timer(x) {
  window.setTimeout(function () {
    coffee.style = "display: inline-block";
    root2.render(giveMeCoffee());
  }, x);
}

function Message(pos, lvl) {
  highLighter(lvl);
  return (
  <div className='container'>
    <div className='row' style={setStyleSheet(pos)}>
      <div className='col-md-4'>
        <div style={{textAlign: "center"}} className="alert-center">
          <div style={{display: "flex", justifyContent: "flex-end"}}>
          <a onClick={() => {level = 5; increaseLevel(); clearHighLighter()}} className='cancel'><i className="fa-solid fa-xmark"></i></a>
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
      <div className='col-lg-4'>
        <div style={{textAlign: "center"}} className="alert-center info-center">
          <div style={{display: "flex", justifyContent: "flex-end"}}>
            <a onClick={() => {level = 5; increaseLevel()}} className='cancel'><i className="fa-solid fa-xmark"></i></a>
          </div>
          <h3>Technologies Used</h3>
          <ul>
            <li>HTML5 & CSS3</li>
            <li>JSX</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Fontawesome</li>
          </ul>
          <p>
            Note: This site is <strong>open source</strong>. Meaning that the code of the page is freely availbe on my <a href='https://github.com/Pingitzergggg/scale-converter'>Github</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

function giveMeCoffee() {
  return (
    <div className='container'>
      <div className='row row-alert' style={setStyleSheet("center")}>
        <div className='col-md-6'>
          <div style={{textAlign: "left"}} className="alert-center coffee-center">
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <a onClick={() => {cancelCoffee(); timer(600000)}} className='cancel'><i className="fa-solid fa-xmark"></i></a>
            </div>
            <div className='coffee-div'>
              <div>
                <h3>Like the Site?<br/>Buy Me a Coffee!<br/><i className="fa-solid fa-mug-hot coffee-mini"></i></h3>
                <p>If you like my programs please support my work with a subtle donation!<br/>
                   Your help is much appreciated!</p>
                <a onClick={() => {cancelCoffee(); timer(600000)}} target='_blank' href='https://paypal.me/Pingitzergggg' className="coffee-button">Sure!</a>
              </div>
              <div className='coffee-img'><img src={mug} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

cancelCoffee();
timer(600000);
//console.log("react script ran!");
// root2.render(giveMeCoffee());
//console.log("localStorage: "+localValue);
if (localValue === null || localValue == "null") {
  level= 5;
  increaseLevel();
} else {
  if (localValue == "message") {
    root.render(Message("center", 0));
  } else if (localValue == "infopanel") {
    root.render(infoPanel());
  }
}



// root.render(giveMeCoffee()) //this isnt working for some reason - also check focus() with kadam

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(//console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
