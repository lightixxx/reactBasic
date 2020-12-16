import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목1, 글제목변경1] = useState('C.U.T');
  let [글제목2, 글제목변경2] = useState('LOVE');
  let [글제목3, 글제목변경3] = useState('STUDY');
  
  let posts = '새 그림';

  return (
    <div className="App">
      <nav className="black-nav">
        <h1>MoodwasH</h1>
      </nav>
      <ul>
        <li className="list">
          <a href="#">
            <h4> {글제목1} </h4>
            <p>20.12.04</p>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <h4> {글제목2} </h4>
            <p>20.12.12</p>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <h4> {글제목3} </h4>
            <p>20.12.24</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
