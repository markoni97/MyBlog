import { ChangeEvent, FC, FormEvent, useState } from "react";
import { LoginInterface } from "../../types";
import Button from "../ui/button/Button";

import classes from "./Login.module.scss";

const Login: FC = () => {

  const [loginData, setLoginData] = useState<LoginInterface>({username: "", password: ""})

  const usernameInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData, username: e.target.value
    });
  }

  const passwordInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData, password: e.target.value
    });
  }

  const loginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login clicked!");
  }

  return (
    <form className={classes["login"]} onSubmit={loginHandler}>
      <div className={classes["login__group"]}>
        <label className={classes["login__group__label"]}>Username</label>
        <input className={classes["login__group__input"]} onChange={usernameInputHandler} type="text"></input>
      </div>
      <div className={classes["login__group"]}>
        <label className={classes["login__group__label"]}>Password</label>
        <input className={classes["login__group__input"]} onChange={passwordInputHandler} type="password"></input>
      </div>
      <div className={classes["signup__controlls"]}>

      </div>
      <Button>Login</Button>
    </form>
  );
}

export default Login;