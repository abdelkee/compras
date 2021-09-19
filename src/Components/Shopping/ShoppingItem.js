import { useState } from 'react';
import { useSelector } from 'react-redux';
import { AddIcon, DoneIcon } from '../../icons';



function ShoppingItem({info}) {

    const state = localStorage.getItem(info.id);
    const [checked, setChecked] = useState(state === null ? false : JSON.parse(state));
    localStorage.setItem(info.id, checked);
    
    const {user} = useSelector(state => state.prods);

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
                return 'bg-green-400';
            case 'cleaning':
                return 'bg-yellow-400';
            case 'medicine':
                return 'bg-blue-400';
            case 'otro':
                return 'bg-gray-400';
            default:
                return
        }
    }

    return (
        <div
            onClick={()=> {
                setChecked(!checked);
            }} 
            className="relative inline-flex items-center pr-2 rounded-full bg-white border border-gray-200 p-px shadow-md">
                <span className={`absolute -top-1 right-0 w-3 h-3 rounded-full ${categoryColor()}`}></span>     
                <span className={`w-8 h-8 mr-2 text-white rounded-full flex justify-center items-center transition-all duration-300 ease-in-out ${handleCheck()}`}>{checked ? <DoneIcon/> : <AddIcon/>}</span>     
                <span className="px-1 text-base font-semibold text-pink-900">{info.itemName}</span>
        </div>
    )
}



export default ShoppingItem;
