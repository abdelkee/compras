import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../Components/Cart/CartItem';
import Toast from '../Components/General/Toast';
import { getOrders } from '../Redux/Reducers/cartReducer';


function CartPage() {

    const {orders, loading} = useSelector(state => state.cart);
    const dispatch = useDispatch();


    useEffect(()=>{

        dispatch(getOrders());

    }, [ dispatch ]) //cartChanged

    return (
        <section className="w-full h-screen py-12 space-y-2 bg-indigo-200" > 
            <SummaryCard/>
           {orders.map(order => <CartItem key={order._id} info={{id: order._id, name: order.productName, price: order.productPrice, quantity: order.productQuantity}}/>)}
           {loading && <Toast/>} 
        </section>
    )
}

function SummaryCard() {

    const {count, total} = useSelector(state => state.cart);
    // position display
    // width height padding margin spacing
    // rounding shadow border ring font text-style
    // bg-color text-color border-color ring-color 
    // transform ...
    // transition ...
    // pseudo ...
    // breakPoints ...
    
    return(
        <li className="w-11/12 h-14 px-6 mb-6 m-auto font-semibold text-lg rounded-md shadow-xl bg-indigo-500 flex justify-between items-center text-white">
            <span className="flex justify-center items-center bg-white text-indigo-500 w-8 h-8 rounded-md">{count}</span>
            <span>Total : $ {total}</span>
        </li>
    )
}

export default CartPage;