import { NextPage } from "next";
import { useState } from "react";
import Login from "../../components/login/Login";
import Signup from "../../components/signup/Signup";
import Button from "../../components/ui/button/Button";

import classes from "../../styles/pages/Auth.module.scss";

const UserAuthentication: NextPage = () => {
  const [isSignup, setIsSignup] = useState<boolean>(false);

  let authText: string = "Don't have an account?";
  let btnLabel: string = "Register";

  if (isSignup) {
    authText = "Already have an account?";
    btnLabel = "Login"
  }

  const toggleLoginHandler = () => {
    setIsSignup((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={classes["auth"]}>
      {!isSignup && <Login />}
      {isSignup && <Signup />}
      <div className={classes["auth__switch"]}>
        <p className={classes["auth__switch__text"]}>{authText}</p>
        <Button onClick={toggleLoginHandler}>{btnLabel}</Button>
      </div>
    </div>
  );
};

export default UserAuthentication;
