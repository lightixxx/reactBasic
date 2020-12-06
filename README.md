# React
화면을 만들기 위한 기능들을 모아놓은 자바스크립트 라이브러리이다.

<br />

## 장점
1. 화면을 빠르게 업데이트한다.
     - Virtual DOM
2. 렌더링 속도가 빠르다.
3. 리액트는 모든 페이지가 컴포넌트로 구성되어 있고, 하나의 컴포넌트는 또 다른 컴포넌트의 조합으로 구성될 수 있다.
      - 재사용성이 높아서 개발속도가 빨라진다.
4. 계속해서 개발이 되고있는 라이브러리이다.
5. 활발한 지식공유가 이루어지고 있다.
6. React Native로 모바일앱도 개발 가능하다.

<br />

## 단점
1. 새로운 개념과 버전에 대한 꾸준한 학습이 필요하다.

<br />

[counter](https://github.com/lightixxx/reactBasic/tree/main/counter) 와 [modal](https://github.com/lightixxx/reactBasic/tree/main/modal) 예시에선 DOM을 선택해서 원하는 이벤트가 발생할 때 속성을 바꾸어야 한다. 사용자와의 인터렉션에 따라 동적으로 UI를 그려야한다면 규칙이 복잡해지고, 관리 및 유지보수도 힘들어 질 것이다.

리액트는 Virtual DOM을 사용해 메모리에 가상으로 존재하는 DOM을 사용해서 상태가 업데이트되면, 업데이트가 필요한 곳의 UI만 Virtual DOM을 통해 렌더링한다. 그리고 나서 실제 브라우저에 보여지고 있는 DOM과 비교한 후, 차이가 있는 곳을 감지해서 이를 실제 DOM에 패치시킨다.

<br />

## 작업환경 준비
- Node.js: 자바스크립트 런타임인 Node.js는 Webpack과 Babel 같은 도구를 사용하기 위해 설치해야 한다.
- Yarn: npm과 마찬가지로 패키지 매니저 도구이다. 프로젝트에서 사용되는 라이브러리를 설치하고, 해당 라이브러리의 버전 관리를 할 때 사용한다.

<br />

## JSX의 기본 규칙
```jsx
return <div>Hello world!</div>;
```
JSX는 리액트에서 생김새를 정의할 때 사용하는 문법이다. 리액트 컴포넌트 파일에서 XML 형태로 코드를 작성하면 babel이 JSX를 JavaScript 문법으로 변환해준다.

<br />

### 태그는 꼭 닫아야 한다.
```jsx
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <div> // error!
    </div>
  );
}

export default App;
```
일반적으로 HTML에서는 `<input>`, `<br>`태그는 닫지않고 사용할 수 있지만 리액트는 무조건 닫아야 한다.

```jsx
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
      <input />
      <br />
    </div>
  );
}

export default App;
```
<br />

### 감싸져야 하는 태그

```jsx
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <Hello /> // error!
    <div>World !</div> // error!
  );
}

export default App;
```
두개 이상의 태그는 무조건 하나의 태그로 감싸야 한다.
```jsx
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <div>
      <Hello />
      <div>World !</div>
    </div>
  );
}

export default App;
```
하지만 불필요하게 `div`태그를 생성하는 것이 스타일 설정을 할 때 복잡함을 유발할 수 있고, `div`로 감싸기 애매한 태그들도 있다. 그땐, 리액트의 Fragment를 사용하면 된다.
```jsx
import React from 'react';
import Hello from './Hello';

function App() {
  return (
    <>
      <Hello />
      <div>안녕히계세요</div>
    </>
  );
}

export default App;
```
위와 같이 태그를 작성할 때 이름없이 작성하게되면, Fragment가 생성되는데, 브라우저 상에서 별도의 엘리먼트로 나타나지 않는다.

<br />

### JSX에서 자바스크립트 값 사용하기
JSX 안에 자바스크립트 변수를 보여줘야할 때에는 `{ }`로 감싸서 보여준다.
```jsx
import React from 'react';
import Hello from './Hello';

function App() {
  const name = 'lightix';
  return (
    <>
      <Hello />
      <div>{name}</div>
    </>
  );
}

export default App;
```

<br />

### style과 className
1. inline-style은 객체 형태로 작성한다.
2. `font-size`와 같이 -로 구분된 것은 camelCase로 작성한다.
3. 기본 단위는 이며, 다른 단위를 사용할 땐 문자열로 작성한다.
4. CSS 클래스를 설정할 땐, `class=` 가 아닌 `className=` 으로 작성한다.

```jsx
import React from 'react';
import Hello from './Hello';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }

  return (
    <>
      <Hello />
      <div style={style}>{name}</div>
      <div className="container"></div>
    </>
  );
}

export default App;
```

<br />

### 주석
JSX 내부의 주석은 `{/* 주석 */}` 처럼 작성하고, 열린 태그 내부에서는 `// 열린태그 내부의 주석` 로 작성할 수 있다.
```jsx
import React from 'react';
import Hello from './Hello';
import './App.css';


function App() {
  return (
    <>
      {/* 주석은 화면에 보이지 않습니다 */}
      /* 중괄호로 감싸지 않으면 화면에 보입니다 */
      <Hello 
        // 열리는 태그 내부
      />
    </>
  );
}

export default App;
```

<br />

## props를 통해 컴포넌트에게 값 전달

<br />

### props의 기본 사용법
App 컴포넌트에서 Hello 컴포넌트를 사용할 때 `name`이라는 값을 전달해주고 싶다고 가정해보자.


<br />
<br />
<br />

##### 출처
- [벨로퍼트 블로그](https://react.vlpt.us/basic/01-concept.html)
- [소플](https://edu.goorm.io/learn/lecture/12976/%EC%B2%98%EC%9D%8C-%EB%A7%8C%EB%82%9C-react-%EB%A6%AC%EC%95%A1%ED%8A%B8/info)