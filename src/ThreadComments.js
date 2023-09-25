import { useState, useEffect } from "react";
import "./main.css";
import axios from "axios";
// import useTitles from "./useTitles";

// 【React.js／Next.js】axios での取得データを戻り値として戻す方法
// https://zenn.dev/kakio/articles/ea8a096de52ac6

const url = "http://localhost:3000/api/get/" + "comments"
let aaa = []
function ThreadComments(board_id) {
  // const [comments, setComments] = useState([]);
  // useEffect(() => {
  //   axios.get(url)
  //   .then((response) => setComments(response.data))
  // }, []);
  const getComments = async () => {
    return await axios.get(url)
  }
  const getData = async () => {
    const comments = await getComments()
    // const newComments = await comments.filter(val => board_id = 1)
    let data = []
    await comments.data.forEach(val => {
      data.push({
        id: val.id,
        title: val.title,
        user_name: val.user_name,
        board_id: val.board_id
      })
    })
    console.log(data)
    return aaa = data
  }
  useEffect(() => {
    const result = getData()
    console.log(result)
    aaa = result
  }, [])
  return (
    <>
    {aaa}
  </>)
  // return (
  //   <>
  //     {/* {Object.values(comments).map((val, index) => {
  //       return <span key={index}>{val.title}(),</span>
  //     })} */}
  //     {/* <h2>
  //       No{Object.values(comments).id} {Object.values(comments).title}
  //     </h2>
  //     <h3>1 名前：{Object.values(comments)}</h3>
  //     {Object.values(comments).forEach((val) => {})} */}
  //   </>
  // );
}

export default ThreadComments;
