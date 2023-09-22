import { useState, useEffect } from "react";
import Axios from "axios";

const useTitles = () => {
  const [titleList, setTitleList] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3000/api/get/titles")
      .then((response) => setTitleList(response.data))
  }, []);

  return titleList
}
export default useTitles;
