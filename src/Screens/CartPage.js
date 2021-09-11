import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../Components/Cart/CartItem';
import Toast from '../Components/General/Toast';
import { getOrders } from '../Redux/Reducers/cartReducer';
import SwipeToDelete from 'react-swipe-to-delete-component';

function CartPage() {

    const {orders, loading, cartChanged} = useSelector(state => state.cart);
    const dispatch = useDispatch();


    useEffect(()=>{

        dispatch(getOrders());

    }, [ cartChanged ]) 

    return (
        <>
            <SummaryCard/>
            <section className="pt-24 w-full h-screen space-y-2" > 
                {orders.map(order => <CartItem key={order._id} info={{id: order._id, name: order.productName, price: order.productPrice, quantity: order.productQuantity, user: order.user}}/>)}
            </section>
                {loading && <Toast/>}
        </>
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
    
    return (
        <li className="w-full h-16 fixed top-0 left-0 pr-6 pl-10 font-bold text-xl rounded-b-md shadow-xl bg-indigo-600 flex justify-between items-center text-white z-30">
            <span className="flex justify-center items-center bg-white text-indigo-600 w-9 h-9 rounded-md">{count}</span>
            <span>Total : $ {total}</span>
        </li>
    )
}

export default CartPage;