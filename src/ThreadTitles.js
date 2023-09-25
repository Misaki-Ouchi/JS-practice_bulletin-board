import { useContext } from "react";
import { Comments, Titles } from "./App";
import "./main.css";

function ThreadTitles() {
  const comments = useContext(Comments)
  const titles = useContext(Titles)

  return (
    <>
      {Object.values(titles).map((val, index) => {
        return <span key={index}>{val.title}(),</span>
      })}
    </>
  );
}
export default ThreadTitles;
