import { useState } from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
   const des = product.description.substring(0, 50) + "..."
   const [show ,setShow] = useState(false)
   return (
      <div className="border p-4 rounded shadow-sm overflow-hidden">
         <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded"
         />
         <h2 className="text-lg font-bold mt-4">{product.name}</h2>
         <p className="text-gray-700 mt-2">{!show ? des : product.description}</p>
         <div className="mt-2 text-blue-300 cursor-pointer hover:text-blue-500" onClick={() => setShow(prev => !prev)}>{!show ? "Less" : "More"}</div>
         <div className="text-xl font-semibold mt-4">${product.price}</div>
         <Link to={`/products/${product.id}`} className="mt-6 block w-full bg-red-400 text-white py-2 rounded text-center hover:bg-red-500">
            View Details
         </Link>
      </div>
   );
};

export default ProductItem;
