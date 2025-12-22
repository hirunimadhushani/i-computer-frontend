import axios from "axios";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loaded from "../../components/loaded";
import ProductDeleteButton from "../../components/productDeleteButton";
import { useNavigate } from "react-router-dom";


export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
const[loaded,setLoaded]= useState(false);
const navigate = useNavigate();

  useEffect(() => {
    if(!loaded){

      axios
      .get(import.meta.env.VITE_BACKEND_URL + "/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
        setLoaded(true);
      });

    }
    
  }, [loaded]);

  return (
    <div className="w-full min-h-screen p-10 flex justify-center bg-primary">

      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">

        <div className="p-6 border-b border-gray-200 bg-secondary text-white rounded-t-2xl">
          <h2 className="text-2xl font-semibold tracking-wide">Products List</h2>
        </div>

        <div className="overflow-x-auto">
         {loaded ?<table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 text-secondary">
              <tr>
                <th className="p-4 text-sm font-semibold">Image</th>
                <th className="p-4 text-sm font-semibold">Product ID</th>
                <th className="p-4 text-sm font-semibold">Name</th>
                <th className="p-4 text-sm font-semibold">Price</th>
                <th className="p-4 text-sm font-semibold">Label Price</th>
                <th className="p-4 text-sm font-semibold">Category</th>
                <th className="p-4 text-sm font-semibold">Brand</th>
                <th className="p-4 text-sm font-semibold">Model</th>
                <th className="p-4 text-sm font-semibold">Stock</th>
                <th className="p-4 text-sm font-semibold">Availability</th>
                <th className="p-4 text-sm font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody className="text-sm">
              {products.map((items, index) => (
                <tr
                  key={items.productID}
                  className="hover:bg-primary transition-all duration-300 border-b border-gray-100"
                >
                  <td className="p-4">
                    <img
                      src={items.images[0]}
                      className="w-[40px] h-[40px] rounded-md object-cover shadow-sm"
                    />
                  </td>

                  <td className="p-4">{items.productID}</td>
                  <td className="p-4 font-medium text-secondary">
                    {items.name}
                  </td>
                  <td className="p-4 text-accent font-semibold">
                    {items.price}
                  </td>
                  <td className="p-4">{items.lablledPrice}</td>
                  <td className="p-4">{items.category}</td>
                  <td className="p-4">{items.brand}</td>
                  <td className="p-4">{items.model}</td>
                  <td className="p-4">{items.stock}</td>

                  <td
                    className={`p-4 font-semibold ${
                      items.isAvailable
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {items.isAvailable ? "Available" : "Out of Stock"}
                  </td>

                  <td className="p-4 inline-flex gap-2 items-center">
                    {/* <Link to="/admin/update-product"className="bg-gray-500 w-[80px] h-[40px] flex justify-center items-center text-white px-2 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition">
                    Edit</Link> */}

                    <button onClick={()=>{
                      navigate('/admin/update-product',{state:items});
                    }} className="bg-gray-500 w-[80px] h-[40px] flex justify-center items-center text-white px-2 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition">
                    Edit</button>



                    <ProductDeleteButton productID ={items.productID} reload={()=>{setLoaded(false)}}/>
                   
                  </td>
                </tr>
              ))}
            </tbody>

          </table>:<Loaded/>}



        </div>
      </div>

      <Link
        to="/admin/add-product"
        className="fixed right-6 bottom-6 w-[60px] h-[60px] flex justify-center items-center
        text-6xl rounded-full bg-accent text-white shadow-xl hover:scale-110 transition-all"
      >
        <BiPlus />
      </Link>

    </div>
  );
}
