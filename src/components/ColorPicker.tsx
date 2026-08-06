type Props = {

  title: string;

  color: string;

  onChange: (color:string)=>void;

};



const colors = [

  {
    name:"Azul",
    value:"#2563EB"
  },

  {
    name:"Rojo",
    value:"#DC2626"
  },

  {
    name:"Verde",
    value:"#16A34A"
  },

  {
    name:"Amarillo",
    value:"#FACC15"
  },

  {
    name:"Negro",
    value:"#111827"
  },

  {
    name:"Blanco",
    value:"#FFFFFF"
  },

  {
    name:"Violeta",
    value:"#7C3AED"
  },

  {
    name:"Naranja",
    value:"#EA580C"
  }

];





export default function ColorPicker({

  title,

  color,

  onChange

}:Props){



  return (

    <section className="
      w-full
      mt-5
    ">


      <h3 className="
        text-lg
        font-semibold
        mb-3
      ">

        {title}

      </h3>



      <div className="
        grid
        grid-cols-4
        gap-3
      ">


        {
          colors.map((item)=>(


            <button

              key={item.value}

              onClick={()=>onChange(item.value)}

              className={`
                h-12
                rounded-xl
                border-2
                ${
                  color === item.value
                  ? "border-white scale-110"
                  : "border-transparent"
                }
              `}

              style={{
                backgroundColor:item.value
              }}

            >


            </button>


          ))
        }


      </div>



    </section>

  );

}