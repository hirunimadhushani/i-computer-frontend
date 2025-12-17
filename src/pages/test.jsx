import { cache, useState } from "react";
import { createClient } from "@supabase/supabase-js";   
import uplodeFile from "../utils/mediaUpload";

const url= "https://dquliuzedqtjgkbozbwh.supabase.co";
const key= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxdWxpdXplZHF0amdrYm96YndoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NTEwNDQsImV4cCI6MjA4MTQyNzA0NH0.u_eWcMBVsepAyr3_pvYYOaubzqSfJD1Ynp4xkpByqzo";

const superbase= createClient (url,key);



export default function Test() {


    const [file,setFile]= useState(null);

  async function handleUpload(){
       const url = await uplodeFile(file)
       console.log(url);
    }

  
    return(
        <div className="w-full h-full flex justify-center items-center">

            <input type="file" onChange={(e)=>{

             setFile(e.target.files[0]);
            }} />
          
          <button onClick={handleUpload} className="bg-red-600 p-2 text-white rounded-2xl">Upload</button>

        </div>

        
    );
}