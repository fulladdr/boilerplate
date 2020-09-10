import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_action/user_action";
import { withRouter } from "react-router-dom";
function RegisterPage(props) {
  const dispatch = useDispatch();

  //state 만들기
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  //아래 함수를 선언해주지 않으면 이메일, 패스워드를 입력할 수 없음..
  //state에서 불러와서 똑같이 입력하는 방식.
  //그런데 onChange 속성이 무엇이길래..?
  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onConfirmPassWordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  const onPassWordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    //서버에 보낼 값을 state에 가지고 있는 상태.

    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인이 같아야 합니다.");
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
    };
    //dispatch를 이용해 action을 날린다.
    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        props.history.push("/login");
      } else {
        alert("Failed to sign up");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />

        <label>Name</label>
        <input type="text" value={Name} onChange={onNameHandler} />

        <label>Password</label>
        <input type="password" value={Password} onChange={onPassWordHandler} />

        <label>Comfirm Password</label>
        <input
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPassWordHandler}
        />
        <br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default withRouter(RegisterPage);
