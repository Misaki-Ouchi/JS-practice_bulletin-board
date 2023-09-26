import NewTitle from "./NewTitle";
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";
import SuccessSignUp from "./SuccessSignUp";
import { Routes, Route, Link } from "react-router-dom";

// import {Link} from "react-router-dom"

import "./main.css";

const SideMenus = () => {

  return (
    <>
      <Routes>
        <Route path="newTitle" element={<NewTitle />}></Route>
        <Route path="login" element={<LogInForm />}></Route>
        <Route path="signup" element={<SignUpForm />}></Route>
        <Route path="success" element={<SuccessSignUp />}></Route>
      </Routes>
      <nav className="sideMenu">
        <div className="sideItems">
          <p>ようこそ {}さん</p>
          <p>
            <Link to="newTitle">新規スレッドを書く</Link>
          </p>
          <p>
            <Link to="login">ログイン</Link>
          </p>
          <p>
            <Link to="signup">新規ユーザー登録</Link>
          </p>
          <p>掲示板検索</p>
        </div>
      </nav>
    </>
  );
};

export default SideMenus;
