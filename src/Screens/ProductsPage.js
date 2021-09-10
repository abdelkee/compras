import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../Redux/Reducers/productsReducer';
import ProductItem from '../Components/Product/ProductItem';
import ProductConfirmDialog from '../Components/Product/ProductConfirmDialog';
import ProductForm from '../Components/Product/ProductForm';
import Toast from '../Components/General/Toast';
import BlurBg from '../Components/General/BlurBg';
import { getOrders } from '../Redux/Reducers/cartReducer';
import NewProductButton from '../Components/General/NewProductButton';


function ProductsPage() {

    const {products, loading, changed, isFormOpen, confirmDialog} = useSelector(state => state.prods);
    const {isBlur, signedUser} = useSelector(state => state.general);
    const {cartChanged} = useSelector(state => state.cart);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(getOrders());
    }, [changed, cartChanged]);
        
    
    return (
        <>
            <div className="w-full px-4 shadow-lg font-bold bg-green-500 flex justify-around items-center h-16 text-white text-lg fixed top-0 left-0 z-30">
              {signedUser === 'abdelkee' ? <span className="py-1 px-2 bg-white text-indigo-500 rounded-md font-medium">Abdel</span> : <span className="py-1 px-2 bg-white text-pink-500 rounded-md font-medium">Belkys</span>}       
              <input 
                  onChange={(e)=>{}}
                  type="text" 
                  className="w-full mx-4 h-10 rounded-xl border border-gray-300 px-3 text-sm text-green-900 font-semibold focus:outline-none focus:ring-2 focus:ring-green-700"
                  placeholder="Search..."/>
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
        </>
    )
}

export default ProductsPage;
