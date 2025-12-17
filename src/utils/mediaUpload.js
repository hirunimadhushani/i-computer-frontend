import { createClient } from "@supabase/supabase-js";   

const url= "https://dquliuzedqtjgkbozbwh.supabase.co";
const key= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxdWxpdXplZHF0amdrYm96YndoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4NTEwNDQsImV4cCI6MjA4MTQyNzA0NH0.u_eWcMBVsepAyr3_pvYYOaubzqSfJD1Ynp4xkpByqzo";

const superbase= createClient (url,key);

export default function uplodeFile(file){
    return new Promise(
        (resolve , reject)=>{
            const timestamp = Date.now();
            const fileName = timestamp + "_" + file.name;
            superbase.storage.from("Images").upload(fileName,file,{
                cacheControl:"3600",
                upsert:false
            }).then(
                ()=>{
                    const publicUrl= superbase.storage.from("Images").getPublicUrl(fileName).data.publicUrl;
                    resolve(publicUrl);
                }
            ).catch(
                (error)=>{
                    reject(error);
                }
            )

        }
    )
}
