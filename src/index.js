import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import LogInPage from "./pages/LogInPage";
import SignUpForm from "./pages/SignUpPage";
import NewTitlePage from "./pages/NewTitlePage";
import SuccessSignUp from "./SuccessSignUp";
import SuccessPostTitle from "./SuccessPostTitle";
import "./main.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="newTitle" element={<NewTitlePage />}></Route>
        <Route path="login" element={<LogInPage />}></Route>
        <Route path="signup" element={<SignUpForm />}></Route>
        <Route path="successSignUp" element={<SuccessSignUp />}></Route>
        <Route path="successPostTitle" element={<SuccessPostTitle />}></Route>
        <Route path="success" element={<SuccessSignUp />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
