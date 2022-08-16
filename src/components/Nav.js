import React from "react";
import piggy from "../assets/porco.png";

const Nav = () => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">The County Fair Hog Fans Club</span>
    </div>
  );
};

export default Nav;