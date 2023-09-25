import React, { useState, useEffect, createContext } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import TopTitle from "./TopTitle";
import ThreadTitles from "./ThreadTitles";
import ThreadComments from "./ThreadComments";
import "./main.css";

export const Comments = createContext();
export const Titles = createContext();

function App() {
  // 投稿データ取得
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = "http://localhost:3000/api/get/comments";
    axios
      .get(url)
      .then((res) => setComments(res.data))
      .catch((error) => console.log(error));
  }, [setComments]);
  // タイトル一覧データ取得
  const [titles, setTitles] = useState([]);
  useEffect(() => {
    const url = "http://localhost:3000/api/get/titles";
    axios
      .get(url)
      .then((res) => setTitles(res.data))
      .catch((error) => console.log(error));
  }, [setTitles]);

  return (
    <>
      <TopTitle />
      <a href="./newTitle.html">新規スレッドを書く</a>
      <br />
      <Comments.Provider value={comments}>
      <Titles.Provider value={titles, comments}>
        <ThreadTitles/>
      </Titles.Provider>
        <br />
        <ThreadComments title="ちいかわを語る" count="4" />
      </Comments.Provider>
    </>
  );
}

export default App;
