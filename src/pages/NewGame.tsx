import { useState } from "react";

import { clubs } from "../data/clubs";

import KitSelector from "../components/KitSelector";
import ColorPicker from "../components/ColorPicker";
import {
 generateInitialSquad
} from "../engine/playerEngine";


type Props = {
  onStart: (
    mode: string,
    club: string,
    money: number,
    stadium?: string,
    rival?: string,
    customClub?: boolean,
    kitId?: number,
    primaryColor?: string,
    secondaryColor?: string,
    squad?: any[]
  ) => void;
};



const modes = [
  {
    id: "president",
    title: "Presidente",
    description: "Tomá todas las decisiones del club."
  },
  {
    id: "director",
    title: "Presidente + Director Deportivo",
    description: "Compartí responsabilidades deportivas."
  }
];



export default function NewGame({ onStart }: Props) {


  const [selectedMode,setSelectedMode] = useState("");

  const [clubType,setClubType] = useState("");

  const [selectedClub,setSelectedClub] = useState("");

  const [clubName,setClubName] = useState("");

  const [stadium,setStadium] = useState("");

  const [rival,setRival] = useState("");

  const [selectedKit,setSelectedKit] = useState(1);

  const [primaryColor,setPrimaryColor] = useState("#2563EB");

  const [secondaryColor,setSecondaryColor] = useState("#FFFFFF");




  return (

    <main className="
      min-h-screen
      bg-zinc-950
      text-white
      px-5
      py-8
      pb-24
    ">


      <h1 className="
        text-3xl
        font-bold
        mb-8
      ">
        Nueva Partida
      </h1>





      <section className="mb-8">

        <h2 className="text-xl font-semibold mb-4">
          Elegí tu modo
        </h2>


        <div className="space-y-4">

          {
            modes.map((mode)=>(

              <button

                key={mode.id}

                onClick={()=>setSelectedMode(mode.id)}

                className={`
                  w-full
                  p-5
                  rounded-2xl
                  border
                  text-left

                  ${
                    selectedMode === mode.id
                    ? "border-green-500 bg-green-500/20"
                    : "border-zinc-700 bg-zinc-900"
                  }

                `}

              >

                <h3 className="font-bold text-lg">
                  {mode.title}
                </h3>


                <p className="text-zinc-400 mt-2">
                  {mode.description}
                </p>


              </button>

            ))
          }

        </div>

      </section>







      <section className="mb-8">


        <h2 className="text-xl font-semibold mb-4">
          ¿Cómo querés empezar?
        </h2>



        <div className="space-y-4">



          <button

            onClick={()=>setClubType("existing")}

            className={`
              w-full
              p-5
              rounded-2xl
              border
              text-left

              ${
                clubType==="existing"
                ?"border-blue-500 bg-blue-500/20"
                :"border-zinc-700 bg-zinc-900"
              }

            `}

          >

            <h3 className="font-bold text-lg">
              ⚽ Elegir club existente
            </h3>

          </button>





          <button

            onClick={()=>setClubType("custom")}

            className={`
              w-full
              p-5
              rounded-2xl
              border
              text-left

              ${
                clubType==="custom"
                ?"border-purple-500 bg-purple-500/20"
                :"border-zinc-700 bg-zinc-900"
              }

            `}

          >

            <h3 className="font-bold text-lg">
              🏗️ Crear tu propio club
            </h3>


          </button>


        </div>

      </section>








      {
        clubType==="existing" && (

          <section className="mb-8">

            <h2 className="text-xl font-semibold mb-4">
              Elegí tu club
            </h2>


            <div className="space-y-3">


              {
                clubs.map((club)=>(


                  <button

                    key={club.id}

                    onClick={()=>setSelectedClub(club.name)}

                    className={`
                      w-full
                      p-4
                      rounded-xl
                      border
                      text-left

                      ${
                        selectedClub===club.name
                        ?"border-blue-500 bg-blue-500/20"
                        :"border-zinc-700 bg-zinc-900"
                      }

                    `}

                  >

                    <h3 className="font-bold">
                      {club.name}
                    </h3>


                    <p className="text-zinc-400">
                      {club.city}
                    </p>


                  </button>


                ))
              }


            </div>

          </section>

        )
      }










      {
        clubType==="custom" && (

          <section className="mb-8">


            <h2 className="text-xl font-semibold mb-4">
              Crear club
            </h2>




            <input

              placeholder="Nombre del club"

              value={clubName}

              onChange={(e)=>setClubName(e.target.value)}

              className="
                w-full
                bg-zinc-900
                border
                border-zinc-700
                rounded-xl
                p-4
                mb-3
              "

            />




            <input

              placeholder="Nombre del estadio"

              value={stadium}

              onChange={(e)=>setStadium(e.target.value)}

              className="
                w-full
                bg-zinc-900
                border
                border-zinc-700
                rounded-xl
                p-4
                mb-3
              "

            />





            <select

              value={rival}

              onChange={(e)=>setRival(e.target.value)}

              className="
                w-full
                bg-zinc-900
                border
                border-zinc-700
                rounded-xl
                p-4
              "

            >

              <option value="">
                Elegí clásico rival
              </option>


              {
                clubs.map((club)=>(

                  <option
                    key={club.id}
                    value={club.name}
                  >
                    {club.name}
                  </option>

                ))
              }


            </select>





            <div className="mt-8">


              <KitSelector

                selectedKit={selectedKit}

                onSelect={setSelectedKit}

                primaryColor={primaryColor}

                secondaryColor={secondaryColor}

              />



              <ColorPicker

                title="Color principal"

                color={primaryColor}

                onChange={setPrimaryColor}

              />




              <ColorPicker

                title="Color secundario"

                color={secondaryColor}

                onChange={setSecondaryColor}

              />


            </div>


          </section>

        )
      }









      <button

        disabled={

          !selectedMode ||

          !clubType ||

          (
            clubType==="existing" &&
            !selectedClub
          )

          ||

          (
            clubType==="custom" &&
            (
              !clubName ||
              !stadium ||
              !rival
            )
          )

        }



        onClick={()=>{


          if(clubType==="custom"){


            onStart(

              selectedMode,

              clubName,

              50000,

              stadium,

              rival,

              true,

              selectedKit,

              primaryColor,

              secondaryColor,

              generateInitialSquad(
                "Primera Divisional C"
              )

            );


            return;

          }




          const clubData = clubs.find(
            c=>c.name===selectedClub
          );



          onStart(

            selectedMode,

            selectedClub,

            clubData?.budget || 0,

            clubData?.stadium || "",

            "",

            false,

            undefined,

            undefined,

            undefined,

            generateInitialSquad(

              clubData?.division ||

              "Primera Divisional C"

            )

          );


        }}


        className="
          fixed
          bottom-5
          left-5
          right-5
          bg-green-600
          disabled:bg-zinc-700
          py-4
          rounded-2xl
          font-bold
          text-lg
        "

      >

        Continuar

      </button>



    </main>

  );

}