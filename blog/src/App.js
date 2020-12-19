/* eslint-disable */

import React, { useState } from 'react';
// import image1 from './images/2.jpg';
// import logo from './logo.svg';
import './App.css';

function App() {

  let [title, setTitle] = useState(['W.I.P', 'LOVE', 'STUDY']);
  let [likeBtn, setLikeBtn] = useState([0, 0, 0]);
  
  let [modal, setModal] = useState(false);
  let [toggleBtn, setToggleBtn] = useState('열기');

  let posts = '새 그림';

  function changeTitle() {
    const newTitle = [...title];
    newTitle[0] = '그.냥.연.습';
    setTitle(newTitle);
  }

  function likeBtnCounter(num) {
    const newLikeCount = [...likeBtn];
    newLikeCount[num] += 1;
    setLikeBtn(newLikeCount);
  }

  function changeSequence() {
    const newTitle = [...title];
    newTitle.sort();
    setTitle(newTitle);
  }

  function showModal() {
    modal !== true ? setModal(true) : setModal(false)
  }

  function changeToggleBtn() {
    modal === true
    ? setToggleBtn('열기')
    : setToggleBtn('닫기');
  }

  return (
    <div className="App">
      
      <nav className="black-nav">
        <h1>MoodwasH</h1>
        <button onClick={ changeTitle }>버튼</button>
      </nav>
      <ul>
      {
        title.map((data, i) => {
          return (
            <li className="list">
              <a href="#">
                <div>
                  <h4> { data } </h4>
                  <div className="likeBtnWrapper">
                    <button onClick={ () => {likeBtnCounter(i)} }>💙</button>
                    <span>{ likeBtn[i] }</span>
                  </div>
                  <p>21.01.21</p>
                </div>
              </a>
            </li>
          )
        })
      }
        {/* <li className="list">
          <a href="#">
            <div>
              <h4> { title[0] } <span onClick={ ()=> setLikeBtn(likeBtn+1) }>💙</span> {likeBtn} </h4>
              <p>20.12.04</p>
            </div>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <div>
              <h4> { title[1] } </h4>
              <p>20.12.24</p>
            </div>
          </a>
        </li>
        <li className="list">
          <a href="#">
            <div>
              <h4> { title[2] } </h4>
              <p>21.01.21</p>
            </div>
          </a>
        </li> */}
      </ul>

      

      <button onClick={ () => {setModal(!modal); changeToggleBtn()} }>{toggleBtn}</button>

      {
        modal === true
        ? <Modal title = { title } />
        : null
      }

    </div>
  );
}

function Modal(props) {
  return(
      <div className="modal">
        <h2>{ props.title[0] }</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
