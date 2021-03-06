import { AddIcon, CancelIcon, DeleteIcon, EditIcon, MinusIcon, MoreIcon } from "../../icons";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { confirmDialogVisibility, setForm, setIsNew, setIsOrder, setProductInfo } from "../../Redux/Reducers/productsReducer";
import { setBlur, setSearch } from "../../Redux/Reducers/generalReducer";
import { motion } from 'framer-motion';

function ProductItem({i, info}) {

    const [visible, setVisible] = useState(false);
    const [isAdded, setIsAdded] = useState(false);


    return (
        <li 
            className="relative w-44 h-64 m-auto bg-white shadow-md rounded-lg flex flex-col justify-between items-center">
            
                <div 
                    className="w-full h-36 rounded-lg">                    
                        <img className="object-cover w-full h-36 rounded-lg" src={info.image} alt="" />    
                </div>

                <div className="w-full py-2 flex flex-col justify-around items-center">
                    <span className="font-medium text-md">{info.name}</span>    
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
                
            
        </li>
    )
}


function MakeOrderButton({switchTurn}) {
    return (
        <button 
            onClick={switchTurn}
            className="w-full py-2 rounded-br-lg bg-indigo-500 text-white font-semibold text-md focus:bg-indigo-700">
                Anotar
        </button>
    )
}

export function AddQuantity({info}) {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleDispatch = () => {
        const productInfo = {
            productId: info.id,
            name: info.name,
            price: info.price * quantity,
            quantity: quantity,
        }

        dispatch(confirmDialogVisibility({productInfo, true: true}));
        dispatch(setIsOrder(true));
        dispatch(setBlur(true));
        dispatch(setSearch(false));
        document.body.style.overflow='hidden';
    }

    return (
        <div className="relative flex justify-center items-center w-full py-2 rounded-br-lg bg-pink-500 text-white font-semibold focus:bg-pink-700">                
            <motion.button 
                className="absolute left-0 top-0 h-full w-10 flex justify-center items-center bg-indigo-500 focus:bg-indigo-700"
                initial={{scale: 0.2}}
                animate={{scale: 1}}
                onClick={()=>{
                    if(quantity > 1) {
                        setQuantity(quantity-1)
                    }
                }}>
                <MinusIcon/>
            </motion.button>
            
            <button
                onClick={handleDispatch}> {quantity} 
            </button>

            <motion.button 
                className="absolute right-0 top-0 h-full w-10 rounded-br-md flex justify-center items-center bg-indigo-500 focus:bg-indigo-700"
                initial={{scale: 0.2}}
                animate={{scale: 1}}
                onClick={()=>setQuantity(quantity+1)}>
                    <AddIcon/>
            </motion.button>
        </div>
    )
}

export function EditButton({info}) {

        const dispatch = useDispatch();

        return (
            <motion.button
                initial={{opacity: 0, bottom: 0}} 
                animate={{opacity: 1, bottom: 44}}
                transition={{delay: 0.05}}
                onClick={()=> {
                    dispatch(setIsNew(false));
                    dispatch(setForm(true));
                    dispatch(setProductInfo({id: info.id, name: info.name, price: info.price, image: info.image}));
                    dispatch(setBlur(true));
                    document.body.style.overflow='hidden';
                }}
                className="option-btn bg-blue-500 focus:bg-blue-700">
                    <EditIcon/>
            </motion.button>
        )
}

export function DeleteButton({info}) {

    const dispatch = useDispatch();

    return (
        <motion.button 
            initial={{opacity: 0, bottom: 0}}
            animate={{opacity: 1, bottom: 88}}
            transition={{delay: 0.1}}
            onClick={()=>{
                
                dispatch(confirmDialogVisibility({productInfo: {productId: info.id, name: info.name}, true: true}));
                dispatch(setIsOrder(false));
                dispatch(setBlur(true));
                document.body.style.overflow='hidden';
            }}
            className="option-btn bg-red-500 focus:bg-red-700">
                <DeleteIcon/>
        </motion.button>
    )
}

export default ProductItem;
