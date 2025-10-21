import { useState } from "react";

export default function Test() {

  const [count , setCount ] = useState(0)
  const [statuse , setStatuse ] = useState("🌞")


   
    return(
        <div className="w-full h-full flex flex-col justify-center items-center">
           <div className="w-[400px] h-[300px] shadow-2xl flex justify-around items-center">

            <button className="w-[100px] h-[50px] bg-red-400"onClick={()=>{
               setCount(count - 1)

            } }>
                Decrement
            </button>

            <h1 className="w-[100px] h-[50px] text[30px] text-center ">
                 {count}
            </h1>


              <button className="w-[100px] h-[50px] bg-blue-400 " onClick={()=>{
                  setCount(count + 1)

            } }>
                Increment 
            </button>


           </div>



       
           <div className="w-[400px] h-[300px] shadow-2xl flex flex-col justify-around items-center">

            <span className=" h-[30px] text-2xl font-bold">
                {statuse} 
            </span>

            <div className="w-full h-[50px] flex justify-center">

                <button className="w-[100px] h-full bg-red-400"onClick={()=>{
                  setStatuse("🌑")

            } }>Off 

                </button>

                 <button className="w-[100px] h-full bg-green-400" onClick={()=>{
                  setStatuse("🌞")

            } }>On

                </button>

            </div>

        </div>

        </div>

        



        
    )
}

