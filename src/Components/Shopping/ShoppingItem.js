import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddIcon, DoneIcon } from '../../icons';
import { removeItem } from '../../Redux/Reducers/shoppingReducer';



function ShoppingItem({info}) {

    const state = localStorage.getItem(info.id);
    const [checked, setChecked] = useState(state === null ? false : JSON.parse(state));
    localStorage.setItem(info.id, checked);
    
    const {user} = useSelector(state => state.prods);
    const dispatch = useDispatch();

    const handleCheck = () => {
        if(checked) {
            if(user === 'abdelkee') {
                return 'bg-indigo-500';
            }else return 'bg-pink-500';           
        } else return 'bg-gray-300'
    }

    const categoryColor = () => {
        switch(info.itemCategory) {
            case 'food':
                return 'border-b-2 border-green-400';
            case 'cleaning':
                return 'border-b-2 border-yellow-400';
            case 'medicine':
                return 'border-b-2 border-blue-400';
            case 'otro':
                return 'border-b-2 border-gray-400';
            default:
                return
        }
    }

    return (
        <div
            
            className={`relative inline-flex items-center py-1 px-1 rounded-full bg-white ${categoryColor()} p-px shadow-md`}>
                <span
                    onClick={()=> {
                        setChecked(!checked);
                    }} 
                    className={`w-7 h-7 mr-2 text-white rounded-full flex justify-center items-center transition-all duration-300 ease-in-out ${handleCheck()}`}>{checked ? <DoneIcon/> : <AddIcon/>}</span>     
                <span className="px-1 text-base font-semibold text-pink-900">{info.itemName}</span>
                <button
                    onClick={() => dispatch(removeItem(info.id))} 
                    className="w-4 h-4 grid place-content-center"><span className="text-red-600 text-lg transform rotate-45">+</span></button>                
        </div>
    )
}



export default ShoppingItem;
