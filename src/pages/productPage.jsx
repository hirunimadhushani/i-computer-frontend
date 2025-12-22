import { useState, useEffect } from "react";
import axios from "axios";
import Loaded from "../components/loaded";
import ProductCard from "../components/productCard";


export default function ProductPage() {

  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
        setLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // ✅ important

  return (
    <div className="w-full h-[calc(100vh-100px)]">
      {!loaded ? (
        <Loaded />
      ) : (
        <div className="w-full flex justify-center p-4 flex-row flex-wrap">

            {
                products.map((items) => {

                    return(
                       <ProductCard key={items.productID} product={items}/>
                    )

                })
            }

          
         
           
        </div>
      )}
    </div>
  );
}
