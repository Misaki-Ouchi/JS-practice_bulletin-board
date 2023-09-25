import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import TopTitle from "./TopTitle";
import ThreadTitles from "./ThreadTitles";
import ThreadComments from "./ThreadComments";
// import App from './App';

// const {titles} = ThreadTitles()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TopTitle />
    {/* <App /> */}
    <a href="./newTitle.html">新規スレッドを書く</a>
    <br />
    <ThreadTitles />
    <br />
    <ThreadComments title="ちいかわを語る" />
  </React.StrictMode>
);
