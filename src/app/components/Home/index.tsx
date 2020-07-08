import * as React from "react";

import "./index.scss";

const Home = (): JSX.Element => {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1 className="Home-title">Welcome to React with Typescript</h1>
        <img src={"/assets/images/logo.svg"} className="Home-logo"/>
      </header>
    </div>
  );
};

export default Home;
