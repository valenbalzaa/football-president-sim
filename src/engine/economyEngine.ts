import type { GameState } from "../store/gameStore";
import type { Club } from "../data/clubs";



export function calculateMatchEconomy(

  game: GameState,

  opponent: Club,

  isHome: boolean

){



  let attendance = 0;

  let income = 0;

  let expenses = 0;





  // ======================
  // PARTIDO DE LOCAL
  // ======================


  if(isHome){





    // Público base según socios

    const baseAttendance =

      game.fans * 0.45;







    // ======================
    // RACHA
    // ======================


    let streakMultiplier = 1;


    const results =

      game.recentResults ?? [];




    const wins =

      results.filter(

        r => r === "V"

      ).length;



    const losses =

      results.filter(

        r => r === "D"

      ).length;






    if(wins >= 5){

      streakMultiplier = 1.35;

    }

    else if(wins >= 4){

      streakMultiplier = 1.20;

    }

    else if(wins >= 3){

      streakMultiplier = 1.10;

    }






    if(losses >= 5){

      streakMultiplier = 0.65;

    }

    else if(losses >= 3){

      streakMultiplier = 0.85;

    }









    // ======================
    // POSICIÓN TABLA
    // ======================


    let positionMultiplier = 1;



    if(game.position <= 3){

      positionMultiplier = 1.20;

    }

    else if(game.position <= 8){

      positionMultiplier = 1.10;

    }

    else if(game.position >= 14){

      positionMultiplier = 0.85;

    }









    // ======================
    // REPUTACIÓN
    // ======================


    const reputationBonus =

      1 +

      (game.reputation / 120);









    // ======================
    // PRECIO ENTRADA
    // ======================


    let priceMultiplier = 1;



    if(game.ticketPrice <= 100){

      priceMultiplier = 1.25;

    }

    else if(game.ticketPrice >= 300){

      priceMultiplier = 0.75;

    }









    attendance = Math.floor(


      baseAttendance *

      streakMultiplier *

      positionMultiplier *

      reputationBonus *

      priceMultiplier


    );









    // mínimo de público

    attendance = Math.max(

      50,

      attendance

    );









    // ======================
    // CAPACIDAD ESTADIO
    // ======================


    const stadiumCapacity =

      500 +

      (game.reputation * 100);





    if(attendance > stadiumCapacity){

      attendance = stadiumCapacity;

    }









    // ======================
    // INGRESOS ENTRADAS
    // ======================


    income =

      attendance *

      game.ticketPrice;









    // ======================
    // GASTOS LOCAL
    // ======================


    // árbitro + seguridad + mantenimiento

    expenses =

      5000 +

      (attendance * 8);






  }









  // ======================
  // PARTIDO VISITANTE
  // ======================


  else{



    attendance = 0;





    // premio/reparto visitante

    income = 5000;





    // transporte + comida + logística

    expenses = 12000;



  }









  return {


    attendance,


    income,


    expenses,


    balance:

      income -

      expenses


  };


}