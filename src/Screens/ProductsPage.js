import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../Redux/Reducers/productsReducer';
import ProductItem from '../Components/Product/ProductItem';
import ProductConfirmDialog from '../Components/Product/ProductConfirmDialog';
import ProductForm from '../Components/Product/ProductForm';
import Toast from '../Components/General/Toast';
import BlurBg from '../Components/General/BlurBg';
import NewProductButton from '../Components/General/NewProductButton';
import { getOrders } from '../Redux/Reducers/cartReducer';


function ProductsPage() {

    const {products, loading, changed, isFormOpen, confirmDialog} = useSelector(state => state.prods);
    const {isBlur} = useSelector(state => state.general);
    const {cartChanged} = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [inputVal, setInputVal] = useState();
        
    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(getOrders());
    }, [changed, cartChanged])
    
    
    function handleChange(e) {
        const res = products.filter(prod => {
            return prod.name.toLowerCase().includes(e.target.value);
        })
        setFilteredProducts(res);
        setInputVal(e.target.value);
    }
        
    
    return (
        <section className="p-5 relative w-full h-screen">
            <div className="z-30 w-full sticky top-24 left-5 flex justify-between items-center">
                <input 
                    onChange={(e)=>handleChange(e)}
                    type="text" 
                    className="w-full mr-4 h-10 shadow-xl rounded-xl border border-gray-300 px-3 text-sm text-green-900 font-semibold focus:outline-none focus:ring-2 focus:ring-green-700"
                    placeholder="Search..."
                    
                />
                <NewProductButton/>
            </div>
            <div className="z-30 pt-6 pb-20 grid grid-cols-2 gap-6">
                {!filteredProducts.length & !inputVal ? products.map(prod => <ProductItem key={prod._id} info={{id: prod._id, name: prod.name, price: prod.price, image: prod.image}}/>) 
                : filteredProducts.map(prod => <ProductItem key={prod._id} info={{id: prod._id, name: prod.name, price: prod.price, image: prod.image}}/>)}
            </div>
            {loading && <Toast/>}
            {isFormOpen && <ProductForm/>}
            {confirmDialog && <ProductConfirmDialog/>}
            {isBlur && <BlurBg/>}
        </section>
    )
}

export default ProductsPage;
