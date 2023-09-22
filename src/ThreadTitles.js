import React, { useState, useEffect } from "react";
import "./main.css";
import Axios from "axios";

// 関数内はレンダリング用、外に固定データ・ロジック

function ThreadTitles() {
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/api/get/titles")
      .then((response) => setList(response.data))
  }, []);

  return (
      <>
        {list.map((val, index) => {
          return <span key={index}>{val.title}(),</span>
        })}
      </>
  );
}
export default ThreadTitles;
