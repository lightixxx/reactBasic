# React Basic


[counter](https://github.com/lightixxx/reactBasic/tree/main/counter) 와 [modal](https://github.com/lightixxx/reactBasic/tree/main/modal) 예시에선 DOM을 선택해서 원하는 이벤트가 발생할 때 속성을 바꾸어야 한다. 사용자와의 인터렉션에 따라 동적으로 UI를 그려야한다면 규칙이 복잡해지고, 관리 및 유지보수도 힘들어 질 것이다.

리액트는 Virtual DOM을 사용해 메모리에 가상으로 존재하는 DOM을 사용해서 상태가 업데이트되면, 업데이트가 필요한 곳의 UI만 Virtual DOM을 통해 렌더링한다. 그리고 나서 실제 브라우저에 보여지고 있는 DOM과 비교한 후, 차이가 있는 곳을 감지해서 이를 실제 DOM에 패치시킨다.

<br />

##### 출처
- [벨로퍼트 블로그](https://react.vlpt.us/basic/01-concept.html)