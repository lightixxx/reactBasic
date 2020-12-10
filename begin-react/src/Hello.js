// 리액트를 불러오기
import React from 'react';

function Hello({color, name, isSpecial}) {
  return (
    <div style={{
      color,
    }}>
      {isSpecial && <b>*</b>}
      Hello {name}
    </div>
  );
}


Hello.defaultProps = {
  name: 'noName'
}

export default Hello;