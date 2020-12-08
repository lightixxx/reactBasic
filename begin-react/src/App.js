import React from 'react';
import Hello from './Hello';
import './App.css';

function App() {
  const name = 'Lightix';
  const style = {
    backgroundColor: 'black',
    color: '#0066ff',
    fontSize: 24,
    padding: '1rem 2rem'
  }
  
  return (
    <>
      {/* 주석 작성법1 */}
      <Hello
        //주석 작성법2 
      />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
