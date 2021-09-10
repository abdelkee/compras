import { DeleteIcon } from '../../icons';
import { useDispatch } from 'react-redux';
import { removeOrder } from '../../Redux/Reducers/cartReducer';
import { useSelector } from 'react-redux';

function CartItem({info}) {
    const {signedUser} = useSelector(state => state.general);
    const dispatch = useDispatch();

    return (
        <li className="relative w-11/12 h-14 m-auto rounded-md shadow-md bg-white text-green-900 font-semibold text-lg flex justify-start items-center">
        
            <span className=
                            { info.user === 'abdelkee' ? "ml-6 flex justify-center items-center bg-indigo-500 text-white w-8 h-8 rounded-md"
                              : "ml-6 flex justify-center items-center bg-pink-500 text-white w-8 h-8 rounded-md"}>
                {info.quantity}</span>
            
            <div className="flex items-start justify-center ml-6">
                <span className="mr-4">{info.name}</span>
                <span>$ {info.price}</span>
            </div>

            {info.user === signedUser && <button 
                onClick={()=> {
                    dispatch(removeOrder(info.id))
                }}
                className="w-9 h-9 rounded-full flex justify-center items-center text-red-500 absolute right-4">
                    <DeleteIcon/>
            </button>}

        </li>
    )
}

export default CartItem;
