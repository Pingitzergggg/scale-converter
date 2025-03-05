import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './alert.css';

const root = ReactDOM.createRoot(document.getElementById('message-02'));

let message01 = () => {
  return (
    <div style={{textAlign: "center"}} className="alert-center">
      <h3>Title</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minus corporis nostrum id ab repellendus, vero aliquam nulla error eligendi. Necessitatibus officia architecto culpa id laudantium ipsam fugit expedita a!</p>
      <a className="alert-button">Next</a>
    </div>
  );
}

function setStyleSheet(pos) { /*position of the div*/
  return (
    {
      height: "100vh",
      display: "flex",
      justifyContent: pos,
      alignItems: "flex-end"
    }
  )
}

let tutorial_level = (localStorage.getItem('tutorial') == 'true') ? 1 : 0;

function ChangeTutorial() {
  if (tutorial_level < 4) {
    tutorial_level++;
  }
}

function ShowTutorial(page) {
  // fill with stuff
}

// function getTutorialPage() {
//   if (tutorial_level == 1) {
//     return (
//       {
//         transition: '1s',
//         backgroundColor: 'rgba(219, 29, 29, 0.6)',
//         color: 'white'
//       }
//     )
//   }
// }

function Message02(pos) {
  <div className='container'>
    <div className='row' style={setStyleSheet(pos)}>
      <div className='col-md-4'>
        <div style={{textAlign: "center"}} className="alert-center">
          <h3>Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minus corporis nostrum id ab repellendus, vero aliquam nulla error eligendi. Necessitatibus officia architecto culpa id laudantium ipsam fugit expedita a!</p>
          <a className="alert-button">Next</a>
        </div>
      </div>
    </div>
  </div>
}

root.render(message02);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
