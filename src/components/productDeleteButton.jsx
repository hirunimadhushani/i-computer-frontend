import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";

export default function ProductDeleteButton(props){

    const productID = props.productID;
    const reload = props.reload;
    const[isMessageopen,setIsMessageOpen]= useState(false);
    const[isDeleting,setIsDeleting]= useState(false);

     async function handleDelete(){
        setIsDeleting(true);

         const token =localStorage.getItem("token");

        axios
        .delete(
          import.meta.env.VITE_BACKEND_URL+"/products/" + productID,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
       .then(() => {
  toast.success("Product Deleted Successfully");
  setIsDeleting(false); // ✅ correct
  setIsMessageOpen(false);
  reload();
})
.catch(()=>{
          toast.error("Failed to delete the product");
          setIsDeleting(false);
        });
      
                      
    }



    return(
        <>
       <button onClick={()=>{setIsMessageOpen(true)}} className="bg-red-600 w-[100px] flex justify-center items-center text-white  pg-2 rounded-lg curser-pointer hover:bg-red-700 ">Delete
     </button>
    {isMessageopen&&<div className="w-[100vw] h-screen fixed top-0 left-0 bg-black/20 flex justify-center items-center">

    <div className="w-[600px] h-[300px] bg-primary rounded-2xl relative flex flex-col justify-center items-center p-10 shadow-xl">

        <button onClick={()=>{ setIsMessageOpen(false)}} className="w-[40px] h-[40px] bg-red-600 rounded-full text-white text-xl font-bold cursor-pointer hover:bg-red-800 absolute right-[-32px] top-[-32px]">
            X
        </button>

        <h1 className="text-2xl mb-6 text-center">Are you sure you want to delete product {productID}?</h1>
        <div className="w-full flex justify-center gap-10"> 

        <button
        disabled={isDeleting}
        
        onClick={handleDelete} className="bg-red-600 w-[100px] h-[50px] flex justify-center items-center text-white  pg-2 rounded-lg curser-pointer hover:bg-red-700 mr-4"> Delete</button>

        <button onClick={()=>{ setIsMessageOpen(false)}} className="bg-gray-600 w-[100px] h-[50px] flex justify-center items-center text-white  pg-2 rounded-lg curser-pointer hover:bg-gray-700 "> Cancel</button>
        </div>

    </div>
    </div>}
     </>
    );
}



