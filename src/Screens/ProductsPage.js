import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../Redux/Reducers/productsReducer';
import ProductItem from '../Components/Product/ProductItem';
import ProductConfirmDialog from '../Components/Product/ProductConfirmDialog';
import ProductForm from '../Components/Product/ProductForm';
import Toast from '../Components/General/Toast';
import BlurBg from '../Components/General/BlurBg';
import { getOrders } from '../Redux/Reducers/cartReducer';
import NewProductButton from '../Components/General/NewProductButton';
import { Redirect } from 'react-router-dom';
import BottomBar from '../Components/General/BottomBar';




function ProductsPage() {
    
    const {products, user, loading, isFormOpen, confirmDialog} = useSelector(state => state.prods);
    const {isBlur} = useSelector(state => state.general);
    //const {cartChanged} = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const token = localStorage.getItem('token');
    
    const fetchOrders = useCallback(() => {
        dispatch(getOrders());
    }, [dispatch])

    const fetchProds = useCallback(() => {
        dispatch(fetchProducts());
    }, [dispatch]);


    useEffect(() => {
        fetchProds();
    }, [products, fetchProds]);

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders])

    if(!token) {
        return <Redirect to="/signin"/>
    }
    
    return (
        <div className="w-full h-screen relative sm:hidden">

            <div className="w-full px-8 shadow-lg font-bold bg-green-500 flex justify-between items-center h-16 text-white text-lg fixed top-0 left-0 z-30">
                {user === 'abdelkee' ? <UserName name={"Abdel"} color={"bg-indigo-200"}/> : <UserName name={"Belkys"} color={"bg-pink-500"}/>}       
                
                <NewProductButton/>
            </div>
        
            <section className="px-5 pt-24 relative w-full h-screen">
                
                <div className="z-30 pb-20 grid grid-cols-2 gap-6">
                    {products && products.map(prod => <ProductItem key={prod._id} info={{id: prod._id, name: prod.name, price: prod.price, image: prod.image}}/>)}
                </div>
                {loading && <Toast/>}
                {isFormOpen && <ProductForm/>}
                {confirmDialog && <ProductConfirmDialog/>}
                {isBlur && <BlurBg/>}
            </section>
            <BottomBar/>
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
