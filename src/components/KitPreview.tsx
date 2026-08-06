type Props = {
  kitId:number;
  primaryColor:string;
  secondaryColor:string;
};



export default function KitPreview({

  kitId,

  primaryColor,

  secondaryColor

}:Props){



  return (

    <svg

      width="200"

      height="240"

      viewBox="0 0 300 360"

      xmlns="http://www.w3.org/2000/svg"

    >


      <defs>

        <clipPath id="shirt">

          <path d="
          M85 25 
          L35 70 
          L65 125 
          L95 105 
          V310 
          C95 320 105 325 150 325 
          C195 325 205 320 205 310 
          V105 
          L235 125 
          L265 70 
          L215 25 
          L170 45 
          H130 
          Z"/>

        </clipPath>

      </defs>




      {/* Base */}

      <path

        d="
        M85 25 
        L35 70 
        L65 125 
        L95 105 
        V310 
        C95 320 105 325 150 325 
        C195 325 205 320 205 310 
        V105 
        L235 125 
        L265 70 
        L215 25 
        L170 45 
        H130 
        Z"

        fill={primaryColor}

      />





      <g clipPath="url(#shirt)">



        {
          kitId === 2 && (

            <>
              <rect
                x="80"
                width="45"
                height="360"
                fill={secondaryColor}
              />

              <rect
                x="175"
                width="45"
                height="360"
                fill={secondaryColor}
              />

            </>

          )
        }





        {
          kitId === 3 && (

            <path

              d="
              M0 250
              L300 50
              L300 110
              L0 310
              Z"

              fill={secondaryColor}

            />

          )
        }





        {
          kitId === 4 && (

            <rect

              x="150"

              width="150"

              height="360"

              fill={secondaryColor}

            />

          )
        }






        {
          kitId === 5 && (

            <>

              <rect
                y="100"
                width="300"
                height="40"
                fill={secondaryColor}
              />

              <rect
                y="200"
                width="300"
                height="40"
                fill={secondaryColor}
              />

            </>

          )
        }





        {
          kitId === 6 && (

            <path

              d="
              M70 20
              L220 330
              H170
              L40 80
              Z"

              fill={secondaryColor}

            />

          )
        }



      </g>






      {/* mangas */}

      <path

        d="M85 25L35 70L65 125L95 105L95 55Z"

        fill={secondaryColor}

      />


      <path

        d="M215 25L265 70L235 125L205 105L205 55Z"

        fill={secondaryColor}

      />






      {/* cuello */}

      <path

        d="
        M120 45
        C120 70 180 70 180 45
        L170 35
        C160 55 140 55 130 35
        Z"

        fill={secondaryColor}

      />



    </svg>

  );

}