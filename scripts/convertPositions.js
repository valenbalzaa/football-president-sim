import fs from "fs";


// LEER JUGADORES
const players = JSON.parse(
  fs.readFileSync(
    "./src/database/players.json",
    "utf8"
  )
);



// CONVERSIÓN DE POSICIONES SOCCERWIKI -> ESPAÑOL

function convertPosition(position) {

  if (!position) return "MC";


  const pos = position.toUpperCase();



  // PORTERO
  if (
    pos.includes("PO") ||
    pos.includes("GK")
  ) {
    return "POR";
  }



  // DELANTEROS

  if (pos.includes("A(")) {

    if (pos.includes("(I"))
      return "EI";

    if (pos.includes("(D"))
      return "ED";

    return "DC";
  }



  // MEDIAPUNTA

  if (pos.includes("MO")) {

    return "MP";

  }




  // MEDIOS DERECHA / IZQUIERDA

  if (pos.includes("MD")) {

    if (pos.includes("(D"))
      return "MD";

    if (pos.includes("(I"))
      return "MI";

    return "MC";

  }





  // DEFENSAS

  if (
    pos.startsWith("D") ||
    pos.includes("D,")
  ) {


    if (pos.includes("(D"))
      return "LD";


    if (pos.includes("(I"))
      return "LI";


    return "DFC";

  }





  // MEDIOS CENTRALES

  if (pos.includes("M")) {

    return "MC";

  }



  return "MC";

}





// CONVERTIR TODOS

const cleanedPlayers = players.map(player => ({

  ...player,

  position: convertPosition(
    player.position
  )

}));





// GUARDAR

fs.writeFileSync(
  "./src/database/players_clean.json",
  JSON.stringify(
    cleanedPlayers,
    null,
    2
  )
);



console.log(
  "LISTO:",
  cleanedPlayers.length,
  "jugadores convertidos"
);