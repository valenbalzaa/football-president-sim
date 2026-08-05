import { useState } from "react";

type Props = {
  onStart: (
    mode:string,
    club:string,
    money:number
  )=>void;
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

import { clubs } from "../data/clubs";

export default function NewGame({onStart}:Props) {

  const [selectedMode, setSelectedMode] = useState("");
  const [selectedClub, setSelectedClub] = useState("");

  return (
    <main className="
      min-h-screen 
      bg-zinc-950 
      text-white 
      px-5 
      py-8
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

          {modes.map((mode)=>(
            <button
              key={mode.id}
              onClick={()=>setSelectedMode(mode.id)}
              className={`
                w-full
                text-left
                p-5
                rounded-2xl
                border
                transition
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

              <p className="text-zinc-400 text-sm mt-2">
                {mode.description}
              </p>

            </button>
          ))}

        </div>

      </section>



      <section>

        <h2 className="text-xl font-semibold mb-4">
          Elegí tu club
        </h2>


        <div className="space-y-3">

            {clubs.map((club)=>(
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
                    selectedClub === club.name
                    ? "border-blue-500 bg-blue-500/20"
                    : "border-zinc-700 bg-zinc-900"
                }
                `}
            >

                <h3 className="font-bold text-lg">
                {club.name}
                </h3>

                <p className="text-zinc-400 text-sm">
                {club.city}
                </p>

                <p className="text-green-400 text-sm mt-2">
                Reputación: {club.reputation}/100
                </p>

            </button>
            ))}

        </div>

      </section>



      <button

        disabled={!selectedMode || !selectedClub}

        onClick={()=>{

        const clubData = clubs.find(
        c=>c.name===selectedClub
        );

        onStart(
        selectedMode,
        selectedClub,
        clubData?.budget || 0
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