import { useContext } from "react";
import ProductItem from "../../components/productItem";
import { GlobalContext } from "../../context/globalContext";

const CartPage = () => {
const {cart} =useContext(GlobalContext)
   return ( 
      <div className="container mx-auto mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1">
         {cart.length > 0 ? cart.map(product =>
          <ProductItem product={product} key={product.id} />) :<div className="text-5xl">No items in cart</div> }
      </div>

    );
}
 
export default CartPage;