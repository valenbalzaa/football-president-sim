import KitPreview from "./KitPreview";
import { kits } from "../data/kits";


type Props = {

  selectedKit:number;

  onSelect:(id:number)=>void;

  primaryColor:string;

  secondaryColor:string;

};



export default function KitSelector({

  selectedKit,

  onSelect,

  primaryColor,

  secondaryColor

}:Props){



  const kit = kits.find(
    k => k.id === selectedKit
  ) || kits[0];





  function changeKit(id:number){

    onSelect(id);

  }





  return (

    <section className="
      flex
      flex-col
      items-center
      gap-4
    ">



      <h2 className="
        text-xl
        font-bold
      ">

        Elegí la camiseta

      </h2>





      <KitPreview

        kitId={kit.id}

        primaryColor={primaryColor}

        secondaryColor={secondaryColor}

      />





      <p className="
        font-semibold
      ">

        {kit.name}

      </p>





      <div className="
        flex
        gap-3
        flex-wrap
        justify-center
      ">



        {kits.map((item)=>(


          <button

            key={item.id}

            onClick={()=>changeKit(item.id)}

            className={`
              px-4
              py-2
              rounded-xl
              border

              ${
                selectedKit === item.id
                ? "border-green-500 bg-green-500/20"
                : "border-zinc-700"
              }

            `}

          >

            {item.name}

          </button>


        ))}



      </div>



    </section>

  );

}