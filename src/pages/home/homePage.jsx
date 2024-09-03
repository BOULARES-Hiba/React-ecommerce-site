import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "../../components/productItem";

const HomePage = () => {
   const [products, setProducts] = useState([]);
   const [err, setErr] = useState(null);
   const [loading, setLoading] = useState(false);

   async function fetchProducts() {
      setLoading(true);
      setErr(null);
      try {
         const response = await axios.get("https://fakestoreapi.com/products");
         if (response.data && response.data.length > 0) {
            setProducts(response.data);
            console.log(products)
         }
      } catch (e) {
         setErr(e.message);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      fetchProducts();
   }, []);

   if (loading) return <div className="text-5xl">Loading ...</div>;
   if (err) return <div className="text-5xl">Error! {err}</div>;

   return (
      <section className="container mx-auto mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1">
         {products && products.length > 0 && products.map(item => (
           <ProductItem key={item.id} product={item}/>
         ))}
      </section>
   );
};

export default HomePage;
