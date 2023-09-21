import React, { useState, useEffect } from 'react';
import "./main.css";
import Axios from "axios";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3000/api/get/comments").then((response) => {
      setList(response.data);
    });
    // 特定のステート(countなど)を入れると、それ(count)の更新時のみ実行
  }, []);

  return (
    <div className="App">
      <ul>
        {list.map((val, index) => {
          return <li key={index}>{val.title}</li>
        })}
      </ul>
    </div>
  )
}

export default App;

// import React, { useState, useEffect } from "react";
// import "./main.css";
// import Axios from "axios";

// function ThreadTitles() {
//   const [list, setList] = useState([]);
//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     Axios.get("http://localhost:3000/api/get/comments")
//       .then((response) => setList(response.data))
//       .finally(() => setLoading(false));
//   }, []);
//   return (
//     <div>
//       {console.log("render")}
//       {isLoading && <h2>Loading...</h2>}
//       <ul>
//         <li>aaa</li>
//         {list.map((val, index) => {
//           return <li key={index}>{val.title}</li>
//         })}
//       </ul>
//     </div>
//     // list,
//     // listLoading: isLoading
//   );
// }
// export default ThreadTitles;
