export function normalizeClub(club:string){

 const names:{[key:string]:string}={

  "bella vista":
  "CA Bella Vista",

  "basáñez":
  "CA Basáñez",

  "fenix":
  "CA Fénix",

  "fénix":
  "CA Fénix",

  "rentistas":
  "CA Rentistas",

  "cerrito":
  "CS Cerrito",

  "river plate":
  "River Plate de Montevideo",

  "villa española":
  "Villa Española",

 };


 const clean =
 club
 .toLowerCase()
 .trim();


 return names[clean] ?? club;

}