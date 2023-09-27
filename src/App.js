import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import Header from "./Header";
import WriteNewTitle from "./WriteNewTitle";
import ThreadTitles from "./ThreadTitles";
import ThreadComments from "./ThreadComments";
import NewComments from "./NewComments";
import SideMenus from "./SideMenus";
import Footer from "./Footer";

import "./main.css";

export const Comments = createContext();
export const Titles = createContext();

// ※serverのindex.jsでcommentsを投稿日時順に並べ替える
// →同じtitleの投稿の数をtitlesに格納
const App = () => {
  const [comments, setComments] = useState([]);
  const [titles, setTitles] = useState([]);
  // 投稿データ取得
  useEffect(() => {
    const url = "http://localhost:3000/api/get/comments";
    axios
      .get(url)
      .then((res) => setComments(res.data))
      .catch((error) => console.log(error));
  }, [setComments]);
  // タイトル一覧データ取得
  useEffect(() => {
    const url = "http://localhost:3000/api/get/titles";
    axios
      .get(url)
      .then((res) => setTitles(res.data))
      .catch((error) => console.log(error));
  }, [setTitles]);

  return (
    <>

      <Header />
      <main>
        <NewComments title="ちいかわを語る" />
        <SideMenus />
        <WriteNewTitle />
        <Comments.Provider value={comments}>
        <Titles.Provider value={titles}>
          <ThreadTitles/>
          <ThreadComments title="あの件について" count="4" />
          <ThreadComments title="ちいかわを語る" count="4" />
          <ThreadComments title="おにぎりの握り方" count="4" />
        </Titles.Provider>
        </Comments.Provider>
      </main>
      <Footer />
    </>
  );
};

export default App;
