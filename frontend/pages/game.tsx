import React from "react";

import dynamic from "next/dynamic";
import Scene from "../components/SceneModeComponents/Scene";

const Scoreboard = dynamic(
  () => import("../components/Scoreboard/Scoreboard"),
  {
    ssr: false,
  }
);

type Props = {};

const Game = (props: Props) => {
  return (
    <>
      <Scoreboard />
      <Scene/>
    </>
  );
};

export default Game;
