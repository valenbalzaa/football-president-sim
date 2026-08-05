import { useState } from "react";

import Home from "./pages/Home";
import NewGame from "./pages/NewGame";
import Dashboard from "./pages/Dashboard";

import {
  initialGameState,
  type GameState
} from "./store/gameStore";


function App() {


  const [page,setPage] = useState("home");


  const [game,setGame] = useState<GameState>(
    initialGameState
  );


  function startGame(
    mode:string,
    club:string,
    money:number
  ){

    setGame({
      mode,
      club,
      money,
      season:2026
    });


    setPage("dashboard");
  }



  if(page==="new"){
    return (
      <NewGame 
        onStart={startGame}
      />
    );
  }


  if(page==="dashboard"){
    return (
      <Dashboard game={game}/>
    );
  }



  return (
    <Home 
      onNewGame={()=>setPage("new")}
    />
  );

}


export default App;