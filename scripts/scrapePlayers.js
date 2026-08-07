import puppeteer from "puppeteer";
import fs from "fs";



const leagues = [

  {
    name:"Primera Divisional C",
    id:209
  },

  {
    name:"Segunda Division",
    id:176
  }

];








async function scrapeLeague(page, league){



console.log(
`\nBuscando jugadores de ${league.name}...`
);




let players=[];

let offset=0;






while(true){



const url =

`https://es.soccerwiki.org/search/player?leagueid=${league.id}&offset=${offset}`;




console.log(
"Página:",
offset / 15 + 1
);





await page.goto(

url,

{

waitUntil:"networkidle2"

}

);






await new Promise(

resolve=>setTimeout(resolve,2500)

);








const data = await page.evaluate(()=>{



const rows =

[...document.querySelectorAll("table tr")];





const players = rows

.slice(1)

.map(row=>{


const cells =

row.innerText

.split("\t")

.map(

x=>x.trim()

)

.filter(Boolean);






if(cells.length < 7)

return null;






return {



name:

cells[0],



club:

cells[1],



position:

cells[2],



height:

Number(cells[3]),



foot:

cells[4],



age:

Number(cells[5]),



overall:

Number(cells[6])



};





})

.filter(Boolean);






return players;



});







console.log(

`${data.length} jugadores encontrados`

);






if(data.length === 0){

break;

}







players.push(

...data

);






offset += 15;






if(offset > 1000){

break;

}




}








console.log(

`Total ${league.name}: ${players.length}`

);




return players;


}












async function main(){





const browser = await puppeteer.launch({

headless:true,


args:[

"--no-sandbox",

"--disable-setuid-sandbox"

]


});






const page = await browser.newPage();






let database=[];

let id=1;








for(const league of leagues){



const players =

await scrapeLeague(

page,

league

);








players.forEach(player=>{



database.push({


id:id++,


name:

player.name,


club:

player.club,


league:

league.name,


position:

player.position,


age:

player.age,


height:

player.height,


foot:

player.foot,


overall:

player.overall,



potential:

Math.min(

99,

player.overall +

Math.floor(

Math.random()*10

)

),



value:

player.overall * 2000,



salary:

player.overall * 30,



morale:

75,



fitness:

100



});



});



}






await browser.close();









fs.writeFileSync(

"src/database/players.json",

JSON.stringify(

database,

null,

2

)

);







console.log(

"\n✅ players.json generado correctamente"

);



console.log(

`Total jugadores: ${database.length}`

);





}





main();