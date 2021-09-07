import { AddIcon, CancelIcon, DeleteIcon, EditIcon, MinusIcon, MoreIcon } from "../../icons";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { confirmDialogVisibility, setButtonVisibility, setFormVisibility, setIsNewToFalse, setIsOrderToFalse, setIsOrderToTrue, setProductInfo } from "../../Redux/Reducers/productsReducer";
import { makeBgBlur } from "../../Redux/Reducers/generalReducer";


function ProductItem({info}) {

    const [visible, setVisible] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    return (
        <section className="relative w-44 h-64 m-auto bg-white shadow-md rounded-lg flex flex-col justify-between items-center">
            
            <div 
                className="w-full h-36 rounded-lg">                    
                    <img className="object-cover w-full h-36 rounded-lg" src={info.image} alt="" />    
            </div>

            <div className="w-full py-2 flex flex-col justify-around items-center">
                <span className="font-medium text-lg">{info.name}</span>    
                <span>$ {info.price}</span>    
            </div>

            <div className="rounded-b-lg w-full flex justify-between items-center">
                
                <button 
                    onClick={() => {
                        setVisible(!visible);
                    }}
                    className="px-3 py-2 bg-pink-500 text-white mr-1 rounded-bl-lg focus:bg-pink-700">
                        {!visible ? <MoreIcon/> : <CancelIcon/>}
                </button>
                
                {!isAdded && <MakeOrderButton switchTurn={()=>setIsAdded(!isAdded)}/>}
                {isAdded && <AddQuantity info={info}/>}
            </div>

            {visible && <EditButton info={info}/>}
            {visible && <DeleteButton info={info}/>}
                
            
        </section>
    )
}


function MakeOrderButton({switchTurn}) {
    return (
        <button 
            onClick={switchTurn}
            className="w-full py-2 rounded-br-lg bg-indigo-500 text-white font-semibold text-md focus:bg-indigo-700">
                Order
        </button>
    )
}

function AddQuantity({info}) {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (
        <div className="relative flex justify-center items-center w-full py-2 rounded-br-lg bg-pink-500 text-white font-semibold focus:bg-pink-700">                
            <button 
                onClick={()=>{
                    if(quantity > 1) {
                        setQuantity(quantity-1)
                    }
                }}
                className="absolute left-0 top-0 h-full w-10 flex justify-center items-center bg-indigo-500 focus:bg-indigo-700"><MinusIcon/></button>
            
            <button
                onClick={()=>{
                    const productInfo = {
                        productId: info.id,
                        name: info.name,
                        price: info.price * quantity,
                        quantity: quantity
                    }

                    dispatch(confirmDialogVisibility(productInfo));
                    dispatch(setIsOrderToTrue());
                    dispatch(setButtonVisibility());
                    dispatch(makeBgBlur());
                    document.body.style.overflow='hidden';
                }}> {quantity} 
            </button>

            <button 
                onClick={()=>setQuantity(quantity+1)}
                className="absolute right-0 top-0 h-full w-10 flex justify-center items-center bg-indigo-500 focus:bg-indigo-700"><AddIcon/></button>
        </div>
    )
}

function EditButton({info}) {

        const dispatch = useDispatch();

        return (
            <button 
                onClick={()=> {
                    dispatch(setIsNewToFalse());
                    dispatch(setFormVisibility());
                    dispatch(setProductInfo({id: info.id, name: info.name, price: info.price, image: info.image}));
                    dispatch(setButtonVisibility());
                    dispatch(makeBgBlur());
                    document.body.style.overflow='hidden';
                }}
                className="option-btn bottom-11 bg-blue-500 focus:bg-blue-700">
                    <EditIcon/>
            </button>
        )
}

function DeleteButton({info}) {

    const dispatch = useDispatch();

    return (
        <button 
            onClick={()=>{
                
                dispatch(confirmDialogVisibility({productId: info.id, name: info.name}));
                dispatch(setIsOrderToFalse());
                dispatch(setButtonVisibility());
                dispatch(makeBgBlur());
                document.body.style.overflow='hidden';
            }}
            className="option-btn bottom-22 bg-red-500 focus:bg-red-700">
                <DeleteIcon/>
        </button>
    )
}

export default ProductItem;
