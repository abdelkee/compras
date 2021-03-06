import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Components/Cart/CartItem";
import Toast from "../Components/General/Toast";
import { getOrders, removeAllOrders } from "../Redux/Reducers/cartReducer";
import BottomBar from "../Components/General/BottomBar";
import { Redirect } from "react-router";

function CartPage() {
  const { orders, loading, cartChanged } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, [cartChanged, dispatch]);

  const token = localStorage.getItem("token");
  if (!token) {
    return <Redirect to="/" />;
  }

  const handlePayment = () => {
    if (window.confirm("Se va a borrar todo")) {
      dispatch(removeAllOrders());
    }
  };

  return (
    <div className="w-full h-screen relative sm:hidden">
      <SummaryCard />
      <div className="w-full grid px-4 mt-24">
        <button
          onClick={handlePayment}
          className="place-self-end px-6 py-2 bg-green-500 text-white shadow-md rounded-md font-semibold"
        >
          Pagar
        </button>
      </div>
      <div className="mt-4 w-full pb-20 space-y-2">
        {orders &&
          orders.map((order, i) => (
            <CartItem
              key={order._id}
              i={i}
              info={{
                id: order._id,
                name: order.productName,
                price: order.productPrice,
                quantity: order.productQuantity,
                note: order.note,
                user: order.user,
              }}
            />
          ))}
      </div>
      {loading && <Toast />}
      <BottomBar isActive={"cart"} />
    </div>
  );
}

function SummaryCard() {
  const { count, total } = useSelector((state) => state.cart);
  // position display
  // width height padding margin spacing
  // rounding shadow border ring font text-style
  // bg-color text-color border-color ring-color
  // transform ...
  // pseudo ...
  // breakPoints ...

  return (
    <li className="w-full h-16 fixed top-0 left-0 pr-6 pl-10 font-bold text-xl rounded-b-md shadow-xl bg-green-600 flex justify-between items-center text-white z-30">
      <span className="flex justify-center items-center bg-white text-green-600 w-9 h-9 rounded-md">
        {count}
      </span>
      <span>Total : $ {total}</span>
    </li>
  );
}

export default CartPage;
