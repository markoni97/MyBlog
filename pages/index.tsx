import type { NextPage } from "next";

import classes from "../styles/pages/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={classes["home"]}>
      <h1>Popular blog posts...</h1>
      <h2>Hello</h2>
    </div>
  );
};

export default Home;
