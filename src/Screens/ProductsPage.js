import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../Components/Product/ProductItem';
import ProductConfirmDialog from '../Components/Product/ProductConfirmDialog';
import ProductForm from '../Components/Product/ProductForm';
import BlurBg from '../Components/General/BlurBg';
import NewProductButton from '../Components/General/NewProductButton';
import BottomBar from '../Components/General/BottomBar';
import { fetchProducts } from '../Redux/Reducers/productsReducer';
import Toast from '../Components/General/Toast';
import { Redirect } from 'react-router';
import { CancelIcon, SearchIcon } from '../icons';
import { setSearch } from '../Redux/Reducers/generalReducer';
import { motion } from 'framer-motion';



function ProductsPage() {

    const [word, setWord] = useState('');
    const {products, user, loading, isForm, confirmDialog, changed} = useSelector(state => state.prods);
    const {isBlur, isSearch} = useSelector(state => state.general);
    const dispatch = useDispatch();

    
    useEffect(()=>{
        dispatch(fetchProducts());
    }, [changed, dispatch]);

    const token = localStorage.getItem('token');
    if(!token){
        return <Redirect to="/"/>
    }

    return (
        <div className="w-full h-screen relative sm:hidden">

            <div className="w-full px-8 shadow-lg font-bold bg-green-600 flex justify-between items-center h-16 text-white text-lg fixed top-0 left-0 z-30">
                {user ? <UserName name={user === 'abdelkee' ? "Abdel" : "Belkys"} color={user === 'abdelkee' ? "bg-indigo-200" : "bg-pink-200"}/> : "..."}       
                
                <div className="flex justify-between items-center space-x-6">
                    <button onClick={() => {dispatch(setSearch(true));}}><SearchIcon/></button>
                    <NewProductButton/>
                </div>
            </div>

                {isSearch && 
                <motion.div initial={{top: -64}} animate={{top: 0}} className={`absolute left-1/2 transform -translate-x-1/2 w-full px-4 py-2 h-16 z-50`}>
                    <div className="flex justify-between items-center bg-white w-full h-full rounded-md border border-gray-300 px-4 text-green-900 font-medium">
                        <input onChange={(e) => setWord(e.target.value)} type="text" autoFocusclassName="w-full h-full focus:outline-none "placeholder="Buscar..."/>
                        <button onClick={() => {dispatch(setSearch(false)); setWord('')}}><CancelIcon/></button>    
                    </div>
                </motion.div>}

        
            <section className="px-5 pt-24 relative w-full h-screen">  
                <div className="z-30 pb-20 grid grid-cols-2 gap-6">
                    {products && products.filter(prod => {
                                const lowerWord = word.toLowerCase();
                                return prod.name.toLowerCase().substring(0, lowerWord.length) === lowerWord.substring(0);
                        }).map(prod => <ProductItem key={prod._id} info={{id: prod._id, name: prod.name, price: prod.price, image: prod.image}}/>)}
                </div>

                {loading && <Toast/>}
                {isForm && <ProductForm/>}
                {confirmDialog && <ProductConfirmDialog/>}
                {isBlur && <BlurBg/>}
            </section>
            <BottomBar isActive={'home'}/>
        </div>
    )
}

function UserName({name, color}) {
    return(
        <div className="flex justify-center items-end">
            <span className="tracking-widest font-bold">
                {name}
            </span>
            <span className={`w-2 h-2 rounded-full ml-1 mb-1 ${color}`}></span>
        </div>
    )
}

export default ProductsPage;
