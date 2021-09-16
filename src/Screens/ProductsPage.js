import { useEffect } from 'react';
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



function ProductsPage() {

    const {products, user, loading, isFormOpen, confirmDialog, changed} = useSelector(state => state.prods);
    const {isBlur} = useSelector(state => state.general);
    const dispatch = useDispatch();

    
    
    useEffect(()=>{
        dispatch(fetchProducts());
        // axios.get(api+'products', {headers: {Authorization: token}}).then(res => {
        //     setProducts(res.data.products);
        //     setUser(res.data.user);
        // });
    }, [changed, dispatch]);

    const token = localStorage.getItem('token');
    if(!token){
        return <Redirect to="/"/>
    }

    return (
        <div className="w-full h-screen relative sm:hidden">

            <div className="w-full px-8 shadow-lg font-bold bg-green-500 flex justify-between items-center h-16 text-white text-lg fixed top-0 left-0 z-30">
                {user ? <UserName name={user === 'abdelkee' ? "Abdel" : "Belkys"} color={user === 'abdelkee' ? "bg-indigo-200" : "bg-pink-200"}/> : "no user"}       
                
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
