import type { Player } from "../types/player";


interface DivisionConfig {

  minOverall:number;
  maxOverall:number;
  minPotential:number;
  maxPotential:number;

}


const divisionConfig:Record<string,DivisionConfig>={


  "Primera Divisional C":{
    minOverall:50,
    maxOverall:65,
    minPotential:60,
    maxPotential:75
  },


  "Primera Amateur":{
    minOverall:58,
    maxOverall:72,
    minPotential:65,
    maxPotential:80
  },


  "Segunda División Profesional":{
    minOverall:65,
    maxOverall:78,
    minPotential:70,
    maxPotential:85
  },


  "Primera División":{
    minOverall:72,
    maxOverall:85,
    minPotential:75,
    maxPotential:92
  }


};



const nombres = [

"Mateo",
"Agustín",
"Facundo",
"Martín",
"Santiago",
"Lucas",
"Bruno",
"Tomás",
"Joaquín",
"Franco",
"Valentín",
"Federico",
"Rodrigo",
"Emiliano",
"Juan",
"Thiago",
"Ramiro",
"Maximiliano"

];



const apellidos = [

"Rodríguez",
"González",
"Pereira",
"Silva",
"Martínez",
"Fernández",
"Acosta",
"García",
"Suárez",
"Díaz",
"Torres",
"Olivera",
"Morales",
"Cabrera",
"Ramos",
"Castro",
"Viera",
"Cardozo"

];





function randomBetween(
 min:number,
 max:number
){

 return Math.floor(
  Math.random()*(max-min+1)
 )+min;

}




function randomName(){

 return (

  nombres[
   Math.floor(
    Math.random()*nombres.length
   )
  ]

  +" "+

  apellidos[
   Math.floor(
    Math.random()*apellidos.length
   )
  ]

 );

}





function calculateValue(
 overall:number,
 potential:number
){


 const base = overall * overall * 40;


 const potentialBonus =
 (potential-overall)*5000;



 return Math.round(
  base + potentialBonus
 );


}




function calculateSalary(
 overall:number,
 division:string
){


 let multiplier = 1;


 if(division==="Primera División")
  multiplier=5;


 if(division==="Segunda División Profesional")
  multiplier=3;


 if(division==="Primera Amateur")
  multiplier=1.5;



 return Math.round(
  overall * 40 * multiplier
 );


}






export function generatePlayer(
 id:number,
 club:string,
 division:string
):Player{


 const config =
 divisionConfig[division]
 ??
 divisionConfig["Primera Divisional C"];




 const overall =
 randomBetween(
  config.minOverall,
  config.maxOverall
 );



 const potential =
 Math.max(

 overall,

 randomBetween(
  config.minPotential,
  config.maxPotential
 )

 );




 return {


 id,


 name:
 randomName(),


 club,


 league:
 division,


 position:
 "MC",


 age:
 randomBetween(
  18,
  34
 ),


 height:
 randomBetween(
  170,
  195
 ),


 foot:
 Math.random()>0.5
 ?
 "DERECHO"
 :
 "IZQUIERDO",



 overall,


 potential,


 value:
 calculateValue(
  overall,
  potential
 ),



 salary:
 calculateSalary(
  overall,
  division
 ),



 morale:
 70


 };


}