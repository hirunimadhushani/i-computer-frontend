import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
   const navigate = useNavigate()


   async function login(){
        console.log("login buttoon clicked");
        console.log("Email:", email);
        console.log("Password:", password);


        try{
         const res =await axios.post( import.meta.env.VITE_BACKEND_URL + "/users/login",{
            email: email,
            password: password,
        })

        console.log(res)

        localStorage.setItem("token", res.data.token);

        

     if(res.data.role == "admin"){

                // window.location.href = "/admin";
                      navigate("/admin")
               

            }else{

                // window.location.href = "/";

                      navigate("/")
        

            }

        // alert("Login successful!");

        toast.success("Login successful! welcome back.");




        }catch(err){

            // alert("Login failed. Please check your credentials and try again.");
            toast.error("Login failed. Please check your credentials and try again.");

            console.log("Error occurred during login:");
            console.log(err);
        }


        

    }





    return(
        <div className="w-full h-screen bg-[url('/bg4.jpg')] bg-center bg-cover bg-no-repeat flex "> 

        <div className="w-[50%] h-full flex justify-center items-center flex-col p-[50px]">

            <img src="logo2.png" alt="Logo" className="w-[200px] h-[200px] mb-[20px] object-cover" />

            <h1 className="text-[50px] text-accent text-shadow-2xs text-shadow-secondary font-bold text-center">Smart Tech. Smart Choice.</h1>
          <p className="text-[30px] text-black font-semibold italic text-center">Bringing the best computer solutions to Sri Lanka.</p>

        </div>

        <div className="w-[50%] h-full flex justify-center items-center">

            <div className="w-[450px] h-[600px] backdrop-blur-lg shadow-2xl rounded-2xl flex flex-col justify-center items-center">
                
                <h1 className="text-[40px] font-bold mb-[20px] text-accent text-shadow-black text-shadow-2xs">Login</h1>
                
               <input onChange={(e)=>{
                setEmail(e.target.value)
              
                 
               }}
               type="email" placeholder="Your Email" className="w-[80%] h-[50px] mb-[20px] rounded-lg border-2 border-accent px-[15px] text-[20px] focus:outline-none focus:ring-2 focus:ring-accent" />

                <input onChange={(e)=>{
                setPassword(e.target.value)
              
                 
               }}
                
                type="password" placeholder="Your Password" className="w-[80%] h-[50px]  rounded-lg border-2 border-accent px-[15px] text-[20px] focus:outline-none focus:ring-2 focus:ring-accent" />

                   <p className="text-white not-italic  text-right mb-[20px]">Forget your password? <Link to="/register"className="text-black italic">Reset it here</Link></p>

                <button onClick={login} className="w-[80%] h-[50px] bg-accent text-white text-[20px] font-bold rounded-lg border-2 border-accent hover:bg-transparent hover:text-accent">Login</button>

                <p className="text-white not-italic">Don't have an account? <Link to="/register"className="text-black italic">Login here</Link></p>



            </div>

        </div>

        </div>
    )
}