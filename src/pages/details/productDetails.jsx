import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/globalContext";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { cart,changeCart } = useContext(GlobalContext)
  async function fetchProduct() {
    setLoading(true);
    setErr(null);
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      if (response.data) {
        setProduct(response.data);
      }
    } catch (e) {
      setErr(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [id]); // Add id as a dependency

  if (loading) return <div className="text-5xl">Loading ...</div>;
  if (err) return <div className="text-5xl">Error! {err}</div>;

  return (
    product && (
      <div className="container mx-auto mt-4 p-4 border  border-red-400 rounded-lg">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-contain mt-4 mb-4 rounded"
        />
        <p className="text-gray-700 text-lg">{product.description}</p>
           <div className="text-3xl font-semibold mt-4 text-center">${product.price}</div>
           <div className="flex justify-center">
              
        <button onClick={()=>changeCart(product)}  className="mt-4 px-4  bg-red-400 text-white py-2 rounded hover:bg-red-500">
          {cart.findIndex(item=> item.id ===product.id)!== -1 ?"Remove from cart" : "Add to cart" }
        </button>
           </div>
      </div>
    )
  );
};

export default ProductDetails;
