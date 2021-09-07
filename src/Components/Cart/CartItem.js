import { DeleteIcon } from '../../icons';
import { useDispatch } from 'react-redux';
import { removeOrder } from '../../Redux/Reducers/cartReducer';

function CartItem({info}) {
    const dispatch = useDispatch();

    return (
        <li className="relative w-11/12 h-20 m-auto rounded-md shadow-md bg-white text-green-900 font-semibold text-lg flex justify-start items-center">
        
            <span className="ml-6 flex justify-center items-center bg-indigo-500 text-white w-8 h-8 rounded-md">
                {info.quantity}</span>
            
            <div className="flex flex-col items-start justify-center ml-6">
                <span className="">{info.name}</span>
                <span>$ {info.price}</span>
            </div>

            <button 
                onClick={()=> {
                    dispatch(removeOrder(info.id))
                }}
                className="w-9 h-9 rounded-full flex justify-center items-center text-red-500 absolute right-4">
                    <DeleteIcon/>
            </button>

        </li>
    )
}

export default CartItem;
