import React, { useState, useEffect } from "react";
import "./main.css";
import axios from "axios";

// 関数内はレンダリング用、外に固定データ・ロジック

function ThreadTitles() {
  const [titleList, setTitleList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/get/titles")
      .then((response) => setTitleList(response.data))
  }, []);

  return (
    <>
      {Object.values(titleList).map((val, index) => {
        return <span key={index}>{val.title}(),</span>
      })}
    </>
  );
}
export default ThreadTitles;
