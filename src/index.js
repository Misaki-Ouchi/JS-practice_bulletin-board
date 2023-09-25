import React from 'react';
import ReactDOM from 'react-dom/client';
import "./main.css";
import TopTitle from './TopTitle';
import ThreadTitles from './ThreadTitles';
import ThreadComments from './ThreadComments';
// import App from './App';

// const {titles} = ThreadTitles()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopTitle />
    {/* <App /> */}
    <button href="/">新規スレッドを書く</button><br/>
    <ThreadTitles /><br/>
    <ThreadComments />
  </React.StrictMode>
);
