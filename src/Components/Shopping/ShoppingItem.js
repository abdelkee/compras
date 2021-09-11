import { useState, useEffect } from 'react';
import { DoneIcon } from '../../icons';
import { useDispatch } from 'react-redux';
import { decrementList, incrementList } from '../../Redux/Reducers/shoppingReducer';


function ShoppingItem({info}) {

    const [checked, setChecked] = useState(false);

    return (
        <div
            onClick={()=> setChecked(!checked)} 
            className="inline-flex items-center space-x-1 pr-2 rounded-full bg-white border border-gray-200 p-px shadow-md">
                {!checked
                    ? <img className="w-8 h-8 object-cover border-2 rounded-full" src={info.image}/>
                    : <span className="w-8 h-8 bg-white text-pink-500 rounded-full flex justify-center items-center"></span>
                }
                    
                <span className="px-1 text-base font-semibold text-pink-900">{info.name}</span>
        </div>
    )
}



export default ShoppingItem;
