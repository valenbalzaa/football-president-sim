import { useState } from "react";

import Home from "./pages/Home";
import NewGame from "./pages/NewGame";
import Dashboard from "./pages/Dashboard";


import {
  generateLeagueSchedule
} from "./engine/leagueEngine";


import {
  clubs,
  type Club
} from "./data/clubs";


import {
  initialGameState,
  type GameState
} from "./store/gameStore";







function App(){



  const [page,setPage] = useState("home");



  const [game,setGame] = useState<GameState>(
    initialGameState
  );









  function startGame(

    mode:string,

    club:string,

    money:number,

    stadium:string = "",

    rival:string = "",

    customClub:boolean = false,

    kitId:number = 1,

    primaryColor:string = "#2563EB",

    secondaryColor:string = "#FFFFFF"


  ){







    const leagueTeams:Club[] = customClub


    ? [

        ...clubs,


        {


          id:999,


          name:club,


          shortName:

            club

            .substring(0,3)

            .toUpperCase(),



          division:"Primera Divisional C",


          city:"Montevideo",


          stadium,


          reputation:10,


          strength:50,


          budget:money,


          fans:300,


          youthLevel:50,


          facilities:50,


          finances:50,


          objective:"Salvarse"


        }


      ]


    : clubs;









    const schedule =

      generateLeagueSchedule(

        leagueTeams

      );









    setGame({


      recentResults: [],
      mode,


      club,


      stadium,


      rival,


      customClub,




      kitId,


      primaryColor,


      secondaryColor,






      season:2026,


      division:"Primera Divisional C",


      divisionLevel:3,




      leagueTeams,



      schedule,



      matchday:1,








      money,


      income:0,


      expenses:0,




      ticketPrice:150,


      attendance:0,


      matchIncome:0,


      matchExpenses:0,








      points:0,


      position:16,


      wins:0,


      draws:0,


      losses:0,








      reputation:10,


      fans:300,


      morale:70,








      squad:[],








      news:[

        `El club ${club} ha sido creado`

      ],








      matchChanges:null,








      activeEvent:null,








      lastMatch:null



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

      <Dashboard


        game={game}


        setGame={setGame}


      />

    );


  }












  return (



    <Home


      onNewGame={

        ()=>setPage("new")

      }


    />



  );



}





export default App;