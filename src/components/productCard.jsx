import { Link } from "react-router-dom";

export default function ProductCard (props){

    const product = props.product;
    
    return (
        <div className="w-[300px] h-[400px] m-4 shadow-2xl cursor-pointer relative hover:[&_.buttons]:opacity-100 hover:[&_.primary-image]:opacity-0">
            <div className="w-full h-[250px]  relative">

                <img src={product.images[1]} className="w-full h-full absolute bg-white"/>
                <img src={product.images[0]} className="w-full h-full absolute bg-white primary-image hover:opacity-0 transition-opacity duration-500 object-cover"/>

            </div>
            <div className="w-full h-[100px] p-2 flex  flex-col justify-between">
                <h1 className="text-lg text-center font-bold">{product.name}</h1>

                <div className="w-full flex flex-col items-center">

                    {
                        product.lablledPrice >product.price &&
                        <h2 className="text-red-700 line-through mr-2 text-lg font-semibold"> LKR.{product.lablledPrice.toFixed(2)}</h2>
                        
                    }

                    <h2 className="text-secondary text-xl font-bold"> LKR.{product.price.toFixed(2)}</h2>

                </div>

            </div>
    
      
    

    <div className="w-full h-[150px] bottom-0 opacity-0 absolute buttons bg-white transition-opacity duration-300 flex flex-row justify-center items-center gap-4">

<Link to={"/product-overview/"+product.productID}
  className="px-5 py-2 border border-gray-800 text-gray-800 rounded-lg 
             hover:bg-gray-800 hover:text-white active:scale-95 transition-all duration-300"
>
  View Details
</Link>
        

    </div>
    </div>
    )
}