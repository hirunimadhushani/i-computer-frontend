import { Link, Route, Routes } from "react-router-dom";
import { LuClipboardList } from "react-icons/lu";
import { LuBoxes } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";

export default function AdminPage(){
    return(
       <div className="w-full h-full max-h-full flex bg-accent">

        <div className="w-[300px] bg-accent h-full ">

            <div className="w-full h-[100px] flex items-center">

                <img src="/logo2.png" alt="logo" className="w-[150px] h-auto"/> 
                
                <h1 className="text-2xl ">Admin</h1>

            </div>

            <div className="w-full h-[400px] text-2xl flex flex-col">
                <Link to="/admin"className="w-full flex items-center h-[50px] gap-[10px]"> <LuClipboardList />Orders</Link>
                  <Link to="/admin/products"className="w-full flex items-center h-[50px] gap-[10px]"> <LuBoxes />Products</Link>
                   <Link to="/admin/users"className="w-full flex items-center h-[50px] gap-[10px]"> <LuUsers />Users</Link>
                    <Link to="/admin/reviews"className="w-full flex items-center h-[50px] gap-[10px]"><MdOutlineRateReview />Reviews</Link>
            </div>

        </div>

        <div className="w-[calc(100%-300px)] h-full max-h-full border-[10px] bg-primary rounded-3xl overflow-y-scroll border-accent ">

           <Routes>

           <Route path="/" element={<h1>Orders</h1>} />
           <Route path="/products" element={<h1>Products</h1>} />
            <Route path="/users" element={<h1>Users</h1>} />
         <Route path="/reviews" element={<h1>Reviews</h1>} />

           </Routes>
            

        </div>

       </div>
    )

}
