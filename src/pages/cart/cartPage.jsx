import { useContext } from "react";
import ProductItem from "../../components/productItem";
import { GlobalContext } from "../../context/globalContext";

const CartPage = () => {
  const { cart } = useContext(GlobalContext);

  // Calculate the total price
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="container mx-auto mt-4 p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1">
        {cart.length > 0 ? (
          cart.map(product => <ProductItem product={product} key={product.id} />)
        ) : (
          <div className="text-5xl">No items in cart</div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="mt-4 p-4 border-t border-gray-300">
          <h2 className="text-2xl font-bold">Payment Summary</h2>
          <div className="text-lg mt-2">
            <p>Total Items: {cart.length}</p>
            <p className="text-xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</p>
     
            <button className="mt-4  bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
