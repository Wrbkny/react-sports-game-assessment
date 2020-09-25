import React from "react";
import raccoonpic from "./assets/images/raccoon.png";
import squirrelpic from "./assets/images/squirrel.png";
import bunnypic from "./assets/images/bunny.png";
import houndpic from "./assets/images/hound.png";
import Game from "./components/game/Game";

function App(props) {
  const raccoons = {
    name: "Russiaville Raccoons",
    logoSrc: raccoonpic,
  };

  const squirrels = {
    name: "Sheridan Squirrels",
    logoSrc: squirrelpic,
  };

  const bunnies = {
    name: "Burlington Bunnies",
    logoSrc: bunnypic,
  };

  const hounds = {
    name: "Hammond Hounds",
    logoSrc: houndpic,
  };

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game venue="Sheridan Arena" homeTeam={bunnies} visitingTeam={hounds} />
    </div>
  );
}

export default App;
