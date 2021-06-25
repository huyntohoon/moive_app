import React from "react"; // 리액트의 하위 문서
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/About" component={About} />
    </HashRouter>
  );
}

export default App;
/* 왜 HashRouter를 사용할까??
          HashRouter를 이용하면 다양한 component를
          한 페이지에 쓸지, 안 쓸지, 쉽게 접근이 가능하다.
          예를 들어 component => A,B,C,D,E가 있을 경우
          A,B만 쓰고 싶을 수 있고, A,C 또는 C,D,E를 쓰고 싶을 수 있다.
          그렇다면 A,B,C,D,E를 모두 렌더링 한 후에 선택하는 것보다
          선택적으로 사용할 수 있다면 속도를 더 줄일 수 있다.
          그래서 HashRouter를 사용하는 것이다.
          사용하고자 하는 component만 url 내에 표시를 해서
          렌더링 하고자 하는 component만 선택적으로 가져올 수 있도록 할 수 있다.
          */
