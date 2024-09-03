import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

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
      <div className="container mx-auto mt-4 p-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-contain mt-4 mb-4 rounded"
        />
        <p className="text-gray-700 text-lg">{product.description}</p>
           <div className="text-xl font-semibold mt-4">${product.price}</div>
           <div className="flex justify-center">
              
        <button className="mt-4 px-4  bg-red-400 text-white py-2 rounded hover:bg-red-500">
          Add to Cart
        </button>
           </div>
      </div>
    )
  );
};

export default ProductDetails;
