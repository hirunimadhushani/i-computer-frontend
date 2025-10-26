import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="w-full h-[100px] bg-accent flex items-center px-8">
            <img src="/logo2.png" alt="logo" className="w-[150px] h-auto"/>

            <div className="w-full h-full flex text-xl font-bold justify-center items-center  gap-[30px]"> 
               <Link to="/">Home</Link>
               <Link to="/products">Products</Link>
               <Link to="/about">About</Link>
               <Link to="/contact">Contact</Link>
                
                 

            </div>
           

          
        </header>
    )
}