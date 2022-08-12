import { FC, FormEvent, useState } from "react";
import { SignupInterface } from "../../types";
import Button from "../ui/button/Button";

import classes from "./Signup.module.scss";

const Signup: FC = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const signupHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={signupHandler} className={classes["signup"]}>
      <div className={classes["signup__group"]}>
        <label htmlFor="fullName" className={classes["signup__group__label"]}>
          Full name
        </label>
        <input
          id="fullName"
          type="text"
          className={classes["signup__group__input"]}
        />
      </div>
      <div className={classes["signup__group"]}>
        <label htmlFor="email" className={classes["signup__group__label"]}>
          Email
        </label>
        <input
          id="email"
          type="email"
          className={classes["signup__group__input"]}
        />
      </div>
      <div className={classes["signup__group"]}>
        <label htmlFor="username" className={classes["signup__group__label"]}>
          Username
        </label>
        <input
          id="username"
          type="text"
          className={classes["signup__group__input"]}
        />
      </div>
      <div className={classes["signup__group"]}>
        <label htmlFor="password" className={classes["signup__group__label"]}>
          Password
        </label>
        <input
          id="password"
          type="password"
          className={classes["signup__group__input"]}
        />
      </div>
      <div className={classes["signup__group"]}>
        <label htmlFor="conPass" className={classes["signup__group__label"]}>
          Confirm password
        </label>
        <input
          id="conPass"
          type="password"
          className={classes["signup__group__input"]}
        />
      </div>
      <div className={classes["signup__controlls"]}>
        <Button>Register</Button>
      </div>
    </form>
  );
};

export default Signup;
