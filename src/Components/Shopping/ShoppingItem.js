import { useState, useEffect } from 'react';
import { DoneIcon } from '../../icons';
import { useDispatch } from 'react-redux';
import { decrementList, incrementList } from '../../Redux/Reducers/shoppingReducer';


function ShoppingItem({info}) {
    let initialState = JSON.parse(localStorage.getItem(info.id));
    const [added, setAdded] = useState(initialState);

    useEffect(() => {
        localStorage.setItem(info.id, added);
    }, [added])

    function switchToAdded() {
        setAdded(!added);
    }
    
    return (
        <>
            {!added ? <DefaultState info={info} switchFun={switchToAdded}/> : <ItemAddedToList info={info} switchFun={switchToAdded}/>}
        </>
    )
}


function DefaultState({info, switchFun}) {

    const dispatch = useDispatch();

    function increment() {
        const res = localStorage.getItem('itemsCount');
        let count = JSON.parse(res);
        count = count + 1;
        localStorage.setItem('itemsCount', count);
        dispatch(incrementList(count));
    }

    return (
        <li 
            onClick={()=> {
                switchFun();
                increment();
            }}
            className="inline-flex items-center space-x-1 pr-2 rounded-full bg-white border border-gray-200 p-px shadow-md">
            <img className="w-8 h-8 object-cover border-2 rounded-full" src={info.image}/>
            <span className="px-1 text-base font-semibold">{info.name}</span>
        </li>
    )
}


function ItemAddedToList({info, switchFun}) {

    const dispatch = useDispatch();

    function decrement() {
        const res = localStorage.getItem('itemsCount');
        let count = JSON.parse(res);
        count = count - 1;
        localStorage.setItem('itemsCount', count);
        dispatch(decrementList(count));
    }

    return (
        <li 
            onClick={()=> {
                switchFun();
                decrement();
            }}
            className="inline-flex items-center space-x-1 pr-2 rounded-full bg-pink-500 border text-pink-100 border-gray-200 p-px">
            <span className="px-1 w-8 h-8 py-1 flex justify-center items-center text-base font-semibold"><DoneIcon/></span>
            <span className="px-1 text-base font-semibold">{info.name}</span>
        </li>
    )
}


export default ShoppingItem;
