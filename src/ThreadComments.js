import { useContext } from "react";
import { Comments } from "./App";
import "./main.css";

const ThreadComments = (props) => {
  const comments = useContext(Comments);

  return (
    <div className="thread">
      <h2>{props.title}</h2>
      <ul>
        {Object.values(comments).map((val, index) => {
          return (
            index === 1 &&
            val.title === props.title && (
              <li key={index}>
                <h3>
                  {val.comment_count} 名前：{val.name}：{val.post_date}
                </h3>
                <p>{val.message}</p>
              </li>
            )
          );
        })}
        {Object.values(comments).map((val, index) => {
          return (
            index !== 1 &&
            index >= Object.values(comments).length - props.count &&
            val.title === props.title && (
              <li key={index}>
                <h3>
                  {val.comment_count} 名前：{val.name}：{val.post_date}
                </h3>
                <p>{val.message}</p>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default ThreadComments;
