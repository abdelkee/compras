import { useSelector } from "react-redux";
import ShoppingItem from "../Components/Shopping/ShoppingItem";
import { useState } from "react";
import { AddIcon, DoneIcon } from "../icons";
import {v4} from 'uuid';
import { addItem } from "../Redux/Reducers/shoppingReducer";
import { useDispatch } from "react-redux";
import BottomBar from "../Components/General/BottomBar";
import { Redirect } from "react-router";
import { motion } from "framer-motion";


function ShoppingPage() {


    const {itemsToBuy} = useSelector(state => state.shopping);
    const [show, setShow] = useState(false);

    const [itemData, setItemData] = useState({id: '', itemName: '', itemCategory: ''});
    const dispatch = useDispatch();

    const token = localStorage.getItem('token');
    if(!token){
        return <Redirect to="/"/>
    }

    const submit = () => {
        if(!itemData.itemName || !itemData.itemCategory) return alert('Fill in all fields');
        dispatch(addItem(itemData));
        setShow(!show);
    }

    const handleRadioChange =(e) => {
       const  {name, value} = e.target;
       setItemData({...itemData, [name]: value})
    }

    return (
        <div className="w-full h-screen relative sm:hidden">
            <section 
                className="w-full h-16 fixed top-0 left-0 pl-6 pr-4 rounded-b-md shadow-xl bg-green-600 flex justify-between items-center z-30">
                    <button onClick={()=>setShow(!show)} className={`text-white transform transition-transform duration-300 ease-out ${show && 'rotate-45'}`}><AddIcon/></button>
                    {show && <motion.div 
                                className="flex flex-col justify-between items-center w-full h-32 py-3 px-5 mt-36 ml-4 bg-white shadow-xl rounded-b-xl rounded-t-sm"
                                initial={{scaleY: 0.1}}
                                animate={{scaleY: 1}}
                                >
                                    <input 
                                        className="rounded-md bg-indigo-50 px-4 py-1 w-full border border-green-300 focus:outline-none focus:border-green-400"
                                        type="text" 
                                        autoFocus
                                        placeholder="Nombre..." 
                                        onChange={(e) => setItemData({...itemData, id: v4(), itemName: e.target.value})}
                                        />
                                    <div className="w-full flex justify-between items-center">
                                        <div className="grid grid-cols-4 w-4/5 font-semibold divide-x">
                                            
                                            <div className="flex flex-col items-center">
                                                <input
                                                    onChange={handleRadioChange}
                                                    name="itemCategory" 
                                                    value="food"
                                                    type="radio" />
                                                <label>Fd</label>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <input 
                                                    onChange={handleRadioChange}
                                                    name="itemCategory" 
                                                    value="cleaning"
                                                    type="radio" />
                                                <label>Cln</label>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <input 
                                                    onChange={handleRadioChange}
                                                    name="itemCategory" 
                                                    value="medicine"
                                                    type="radio" />
                                                <label>Med</label>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                <input 
                                                    onChange={handleRadioChange}
                                                    name="itemCategory" 
                                                    value="otro"
                                                    type="radio" />
                                                <label>Otro</label>
                                            </div>
                                        
                                        </div>
                                        <button 
                                            onClick={submit}
                                            className="rounded-full bg-indigo-800 flex justify-center items-center text-white w-8 h-8">
                                            <DoneIcon/>
                                        </button>
                                    </div>
                    </motion.div>}
            </section> 
            <section className="pt-24 px-2 w-full h-screen space-y-4 space-x-1" >
                 {itemsToBuy && itemsToBuy.map(item => <ShoppingItem key={item.id} info={{id: item.id, itemName: item.itemName, itemCategory: item.itemCategory}}/>)}

            </section> 
            <BottomBar isActive={'list'}/>

        </div>
    )
}



export default ShoppingPage;
