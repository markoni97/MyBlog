import { FC, Fragment, ReactNode } from "react";
import Navigation from "../nav/Navigation";

interface LayoutInterface {
  children: ReactNode;
}

const Layout: FC<LayoutInterface> = (props) => {
  return (
    <Fragment>
      <Navigation />
      <main className="mt-5 full-height">{props.children}</main>
    </Fragment>
  );
};

export default Layout;
