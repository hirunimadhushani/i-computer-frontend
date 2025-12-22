import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Loaded from "../components/loaded";



export default function ProductOverview() {

    const params = useParams();
    const [product,setProduct]=useState(null);

    const [status,setStatus]=useState("loading");

    useEffect(()=>{

        if(status==="loading"){
            axios.get(import.meta.env.VITE_BACKEND_URL+"/products/"+params.productID).then((response)=>{
                setProduct(response.data);
                setStatus("success");
            }
            ).catch(()=>{
                toast.error("Product not found");
                setStatus("error");
            });
        }
       
    },[]);


    return (
       <>
       {
        status==="loading" &&  <Loaded />
       }

       {
        status==="error" && <h1 className="text-center text-2xl mt-10">Product not found</h1>
       }

       {

        status === "success" && 
<div className="w-full h-[calc(100vh-100px)] flex ">

    <div className="w-full h-full flex justify-center items-center">
        <img src={product.images[0]} alt={product.name} className="w-[400px] h-auto object-cover rounded-lg shadow-2xl"/>

    </div>
    <div className="w-1/2 h-full p-10 flex flex-col gap-6">
        <h1 className="text-4xl font-bold">{product.name}</h1>
        

    </div>
</div>


    
       }

       
       </>
    
    )  


   
}