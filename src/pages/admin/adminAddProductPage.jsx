import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillProduct } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import uplodeFile from "../../utils/mediaUpload";




export default function AdminAddProductPage(){

    const[productID, setProductID] = useState("");
    const[ name, setName] = useState("");
    const[altNames , setAltNames] = useState("");
    const[description, setDescription] = useState("");
    const[price, setPrice] = useState(0);
    const[lablledPrice, setLablledPrice] = useState("");
   const[files, setFiles]= useState([]);
    const[category, setCategory] = useState("");
     const[brand, setBrand] = useState("");
    const[model, setModel] = useState("");
    const[stock, setStock] = useState(0);
    const[isAvailable, setIsAvailable] = useState(false);
    const navigate = useNavigate();

    async function addProduct(){

        

        const token = localStorage.getItem("token");
        if(token=== null){
            toast.error("You must be logged in as admin to add products");
            navigate("/admin/login");
            return;
        }

        console.log(files);

        const imagePromises = [];

for (let i = 0; i < files.length; i++) {
  const uploadPromise = uplodeFile(files[i]);
  imagePromises.push(uploadPromise);
}

const images = await Promise.all(imagePromises).catch((err)=>{
    toast.error("Error uploading images. Please try again.");
    console.error("Error uploading images:", err);
    return;
});


       if(productID=="" ||name=="" || description=="" || category=="" || brand=="" || model==""){
            toast.error("Please fill in all required fields.");
            return;
        }
        try{

           const altNamesInArray = altNames.split(",")
            

            await axios.post(import.meta.env.VITE_BACKEND_URL + "/products/", {
                productID : productID,
                name: name,
                altNames: altNamesInArray,
                description: description,
                price: price,
                lablledPrice: lablledPrice,
                images: images,
                category: category,
                brand: brand,
                model: model,
                stock: stock,
                isAvailable: isAvailable,
           }, {
                headers :{
                    Authorization : "Bearer "+token
                }
            });

            toast.success("Product added successfully!");
            navigate("/admin/products");

            
        }catch(error){
            toast.error("Error adding product. Please try again.");
            console.error("Error adding product:", error);
            console.log(err);
        }
    }



    return(
        <div className="w-full h-full flex justify-center p-[50px] items-start overflow-y-scroll">

            <div className="w-[800px]  bg-blue-400 rounded-2xl p-[40px] shadow-2xl">
                <h1 className="text-2xl font-bold text-black mb-[20px] flex items-center gap-2"><AiFillProduct /> Add New Product </h1>
               <div className="w-full bg-white p-[10px] flex flex-row flex-wrap justify-between rounded-xl shadow-2xl">

                <div className="my-[10px] w-[40%]"> 

                       <label>Product ID</label>

                    <input type="text" value={productID} onChange={(e) => setProductID(e.target.value)} className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-black border border-black shadow-2xl p-[20px]"/>

                     <p className="text-sm text-gray-500 w-full text-right"> Provide unique product ID </p>
                </div>

                <div className="my-[10px] w-[40%]"> 

                       <label>Name</label>

                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-black border border-black shadow-2xl p-[20px]"/>
                </div>



                 <div className="my-[10px] w-full"> 

                       <label>Alternative Names</label>

                    <input type="text" value={altNames} onChange={(e) => setAltNames(e.target.value)} className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-black border border-black shadow-2xl p-[20px]"/>

                    <p className="text-sm text-gray-500 w-full text-right">Separate alternative names with commas</p>
                </div>

                <div className="my-[10px] w-full"> 

                       <label>Description</label>

                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full h-[100px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-black border border-black shadow-2xl p-[20px] py-[10px]"/>
                </div>

                <div className="my-[10px] w-[40%]"> 

                       <label>Price</label>

                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-black border border-black shadow-2xl p-[20px]"/>
                </div>


                <div className="my-[10px] w-[40%]"> 

                       <label>Labeled Price</label>

                    <input type="text" value={lablledPrice} onChange={(e) => setLablledPrice(e.target.value)} className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-black border border-black shadow-2xl p-[20px]"/>
                </div>

                <div className="my-[10px] w-full">
						<label>Images</label>
						<input
							type="file"
                            multiple={true}
							
							onChange={(e) => {
								setFiles(e.target.files);
							}} className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-black border border-black shadow-2xl p-[20px]"/>
                </div>


                <div className="my-[10px] flex flex-col w-[30%]">
						<label>Category</label>
						<select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-black border border-black shadow-2xl px-[20px]">
							<option value="CPU">CPU</option>
							<option value="Graphic Cards">Graphic Cards</option>
                            <option value="Motherboards">Motherboards</option>
                            <option value="Power Supplies">Power Supplies</option>
                            <option value="RAM">RAM</option>
                            <option value="Storage Devices">Storage Devices</option>
                            <option value="Cooling Solutions">Cooling Solutions</option>
                            <option value="Computer Cases">Computer Cases</option>
                            <option value="Mouse and Keyboards">Mouse and Keyboards</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Monitors">Monitors</option>
                            <option value="Computers">Computers</option>
                            <option value="Laptops">Laptops</option>
                            <option value="Cables">Cables</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                
                
                <div className="my-[10px] w-[30%]"> 

                       <label>Brand</label>

                    <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-black border border-black shadow-2xl p-[20px]"/>
                </div>


                
                <div className="my-[10px] w-[30%]"> 

                       <label>Model</label>

                    <input type="text" value={model} onChange={(e) => setModel(e.target.value)} className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-black border border-black shadow-2xl p-[20px]"/>
                </div>

                
                <div className="my-[10px] w-[40%]"> 

                       <label>Stock</label>

                    <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-black border border-black shadow-2xl p-[20px]"/>
                </div>

                <div className="my-[10px] w-[40%]"> 

                       <label>Available</label>

                       <select value={isAvailable} onChange={(e) => setIsAvailable(e.target.value)} className="w-full h-[40px] rounded-2xl focus:outline-none focus:ring-2 focus:ring-black border border-black shadow-2xl px-[20px]">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                       </select>

                        <Link to="/admin/products" className="w-[49%] h-[50px] bg-red-500 text-white font-bold  rounded-2xl flex justify-center items-center hover:bg-red-700 border-[2px] mt-[20px]">
                        Cancel
                    </Link>
                      <button onClick={addProduct}className="w-[49%] h-[50px] bg-blue-500 text-white font-bold  rounded-2xl flex justify-center items-center hover:bg-blue-700 border-[2px]  mt-[20px]">
                        Add Product
                      </button>

                 
                </div>          


               </div>

            </div>

            


          

        </div>
    )
}