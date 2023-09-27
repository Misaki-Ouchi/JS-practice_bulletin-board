import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";
import axios from "axios";

const NewTitle = () => {
  const initialValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value }); // e.targetで取ってきたname, valueをformValuesの空のプロパティと値にそれぞれ代入
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 自動更新無効化
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios
        .post("http://localhost:3000/postTitle", formValues)
        .then((res) => navigate("/successPostTitle"))
        .then((err) => console.log(err));
    }
    console.log(formValues)
  };

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "タイトルを入力してください。";
    }
    if (!values.name) {
      errors.name = "名前を入力してください。";
    }
    if (!values.message) {
      errors.message = "コメントを入力してください。";
    }
    console.log(errors);
    return errors;
  };

  return (
    <div className="newTitle">
      <div className="formContainer">
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>新規スレッド</h2>
          <div className="uniForm">
            <div className="formField">
              <label htmlFor="タイトル">タイトル</label>
              <br />
              <input
                id="title"
                type="text"
                name="title"
                onChange={(e) => handleChange(e)}
              />
              <p className="errorMsg">{formErrors.title}</p>
            </div>
            <div className="formField">
              <label htmlFor="名前">名前</label>
              <br />
              <input
                id="name"
                type="text"
                name="name"
                onChange={(e) => handleChange(e)}
              />
              <p className="errorMsg">{formErrors.name}</p>
            </div>
            <div className="formField">
              <label htmlFor="message">コメント</label>
              <br />
              <textarea
                rows="10"
                id="message"
                type="text"
                name="message"
                onChange={(e) => handleChange(e)}
              />
              <p className="errorMsg">{formErrors.message}</p>
            </div>
          </div>
          <button className="submitButton">投稿</button>
        </form>
      </div>
    </div>
  );
};

export default NewTitle;
