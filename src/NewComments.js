import { useContext } from "react";
import { useState } from "react";
import "./main.css";
import { Comments } from "./App";

const NewComments = (props) => {
  const comments = useContext(Comments);
  const title = props.title
  console.log(title)
  // const submitComment = (e) => {
  //   setNewComments((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };
  // const submitComment = () => {

  // axios.post(url, );
  // }

  return (
    <div className="formContainer">
      <form action="">
        <label htmlFor="名前">名前：</label>
        <input id="name" type="text" name="name" />
        <label htmlFor="email">email：</label>
        <input id="email" type="text" name="email" />
        <label htmlFor="タイトル">タイトル</label>
        <input id="title" type="text" name="title" />
        <br />
        <textarea id="message" name="message" cols="80" rows="10"></textarea>
        <button onClick="submitComment">書き込む</button>
      </form>
    </div>
  );
};

export default NewComments;
