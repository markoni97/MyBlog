import Link from "next/link";
import { FC } from "react";
import Button from "../ui/button/Button";
import NavigationItem from "./navigation-item/NavigationItem";
import classes from "./Navigation.module.scss";

const Navigation: FC = () => {

  return (
    <nav className={classes["nav"]}>
      <div className={classes["nav__logo"]}>
        <Link href={`/`}><a>MyBLOG</a></Link>
      </div>
      <div className={classes["nav__main"]}>
        <ul className={classes["nav__main__links"]}>
          <NavigationItem label="HOME" href={`/`}/>
          <NavigationItem label="EXPLORE" href={`/`}/>
          <NavigationItem label="MY POSTS" href={`/`}/>
          <NavigationItem label="PROFILE" href={`/`}/>
        </ul>
        <div className={classes["nav__main__auth"]}>
          <Button href={`/auth`}>Login</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;