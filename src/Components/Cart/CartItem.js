import { DeleteIcon } from '../../icons';
import { useDispatch } from 'react-redux';
import { removeOrder } from '../../Redux/Reducers/cartReducer';
import { useSelector } from 'react-redux';


function CartItem({info}) {
    
    const {user} = useSelector(state => state.prods);
    console.log(user);
    const dispatch = useDispatch();

    const deleteOrder = () => {
        if(info.user === user){
            let conf = window.confirm(`Delete ${info.name}?`);
            if(conf){
                dispatch(removeOrder(info.id))
            }
        }
    }


    return (
            <li 
                onClick={deleteOrder}
                className="relative w-11/12 h-14 m-auto rounded-md shadow-md bg-white text-green-900 font-semibold text-lg flex justify-between items-center">
            
                <span className={`mx-6 flex justify-center items-center ${info.user === 'abdelkee' ? 'bg-indigo-500' : 'bg-pink-500'} text-white w-8 h-8 rounded-md`}>
                    {info.quantity}</span>
                
                <div className="flex-1 flex justify-between pr-6 items-center">
                    <span>{info.name}</span>
                    <span className="">$ {info.price}</span>
                </div>

            </li>
    )
}

export default CartItem;
