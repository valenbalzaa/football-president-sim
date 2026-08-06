import { useState } from "react";
import { clubs } from "./data/clubs";

import {
  generateSchedule
} from "./engine/scheduleEngine";

import {
  createLeagueTable
} from "./engine/leagueEngine";

import Home from "./pages/Home";
import NewGame from "./pages/NewGame";
import Dashboard from "./pages/Dashboard";
import {
  getLeagueClubs,
  addCustomClubToLeague
} from "./engine/leagueEngine";

import {
  initialGameState,
  type GameState
} from "./store/gameStore";

import {
generateSchedule
} from "./engine/scheduleEngine";


function App() {


  const [page, setPage] = useState("home");


  const [game, setGame] = useState<GameState>(
    initialGameState
  );



  function startGame(
    const leagueTeams = clubs.map(club => club.name);
    
    if (!leagueTeams.includes(club)) {
      leagueTeams.push(club);
    }
    
    const schedule = generateSchedule(leagueTeams);
    
    const table = createLeagueTable(leagueTeams);
    const schedule =
    generateSchedule(
    [
    "Tu club",
    ...clubs.map(
    club=>club.name
    )
    ]
    );
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

  // ======================
  // CLUB
  // ======================
  leagueTeams,
  
  schedule,
  
  table,
  mode,

  club,

  stadium,

  rival,

  customClub,


  // ======================
  // CAMISETA
  // ======================

  kitId,

  primaryColor,

  secondaryColor,


  // ======================
  // TEMPORADA
  // ======================

  season: 2026,

  division: "Primera Divisional C",

  divisionLevel: 3,

  matchday: 1,

  leagueTeams: customClub

  ? addCustomClubToLeague(
      club,
      "Primera Divisional C"
    )

  : getLeagueClubs(
      "Primera Divisional C"
    ),
  // ======================
  // ECONOMÍA
  // ======================

  money,

  income: 0,

  expenses: 0,



  // ======================
  // COMPETICIÓN
  // ======================

  points: 0,

  position: 16,

  wins: 0,

  draws: 0,

  losses: 0,



  // ======================
  // ESTADO DEL CLUB
  // ======================

  reputation: 10,

  fans: 300,

  morale: 70,



  // ======================
  // PLANTEL
  // ======================

  squad: [],



  // ======================
  // EVENTOS
  // ======================

  news: [
    `El club ${club} ha sido creado`
  ],

  activeEvent: null

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

        setGame={setGame}

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