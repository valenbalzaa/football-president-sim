import { useState } from "react";

import Home from "./pages/Home";
import NewGame from "./pages/NewGame";
import Dashboard from "./pages/Dashboard";

import {
  initialGameState,
  type GameState
} from "./store/gameStore";



function App() {


  const [page, setPage] = useState("home");


  const [game, setGame] = useState<GameState>(
    initialGameState
  );




  function startGame(

    mode: string,

    club: string,

    money: number,

    stadium: string = "",

    rival: string = "",

    customClub: boolean = false,

    kitId: number = 1,

    primaryColor: string = "#2563EB",

    secondaryColor: string = "#FFFFFF"

  ) {



    setGame({

      mode,

      club,

      money,

      stadium,

      rival,

      customClub,

      kitId,

      primaryColor,

      secondaryColor,

      season: 2026

    });



    setPage("dashboard");


  }







  if (page === "new") {


    return (

      <NewGame

        onStart={startGame}

      />

    );

  }







  if (page === "dashboard") {


    return (

      <Dashboard

        game={game}

      />

    );

  }








  return (

    <Home

      onNewGame={() => setPage("new")}

    />

  );


}



export default App;