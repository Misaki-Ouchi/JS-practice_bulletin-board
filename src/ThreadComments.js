import { useContext } from "react";
import { Comments } from "./App";
import "./main.css";

const ThreadComments = (props) => {
  const comments = useContext(Comments)

  // const submitComment = (e) => {
  //   setNewComments((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };
  // const submitComment = () => {

  // axios.post(url, );
  // }

  return (
    <>
      <ul>
        {
          Object.values(comments).map((val, index) => {
          return (
            val.title === props.title && (
              <li key={index}>
                <h3>
                  {val.comment_count} 名前：{val.user_name}：{val.post_date}
                </h3>
                <p>{val.message}</p>
              </li>
            )
          );
        })
        }
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
