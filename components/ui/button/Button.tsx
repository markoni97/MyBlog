import Link from "next/link";
import { FC } from "react";
import { ButtonInterface } from "../../../types";

import classes from "./Button.module.scss";

const Button: FC<ButtonInterface> = (props) => {

  const btnClickHandler = () => {
    if(props.onClick){
      props.onClick();
    }
  }

  if(props.href) {
    return (
      <Link href={props.href}><a className={classes["link"]}>{props.children}</a></Link>
    );
  }

  return (
    <button className={classes["btn"]} onClick={btnClickHandler}>{props.children}</button>
  );
  
}

export default Button;