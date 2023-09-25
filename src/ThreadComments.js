import { useState, useEffect } from "react";
import ReactDom from "react-dom";
import "./main.css";
import axios from "axios";
// import useTitles from "./useTitles";

const url = "http://localhost:3000/api/get/comments";

function ThreadComments(props) {

  const [comments, setComments] = useState([]);
  const [newComments, setNewComments] = useState({
    title: "ちいかわを語る",
    user_name: "",
    message: "",
    post_time: "",
  });

  useEffect(() => {
    axios.get(url).then((response) => setComments(response.data));
  }, []);

  const submitComment = (e) => {
    setNewComments((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  // const submitComment = () => {

  // axios.post(url, );
  // }

  return (
    <>
      <ul>
        {Object.values(comments).map((val, index) => {
          return (
            val.title === "ちいかわを語る" && (
              <li key={index}>
                <h3>
                  {val.comment_count} 名前：{val.user_name}：{val.post_date}
                </h3>
                <p>{val.message}</p>
              </li>
            )
          );
        })}
      </ul>
      名前：
      <input type="text" name="user_name" />
      email：
      <input type="text" name="title" />
      <br />
      <textarea name="message" cols="80" rows="10"></textarea>
      <button onClick="submitComment">書き込む</button>
    </>
  );
}

export default ThreadComments;
