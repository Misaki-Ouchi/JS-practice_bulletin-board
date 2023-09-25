import { useState, useEffect } from "react";
import ReactDom from "react-dom";
import "./main.css";
import axios from "axios";
// import useTitles from "./useTitles";

const url = "http://localhost:3000/api/get/" + "comments";

function ThreadComments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => setComments(response.data));
  }, []);

  return (
    <ul>
      {Object.values(comments).map((val, index) => {
        return val.board_id === 1 && (
          <li key={index}>
            <h3>
              {val.id} 名前：{val.user_name}：{val.post_date}
            </h3>
            <p>{val.message}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default ThreadComments;
