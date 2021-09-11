import { useSelector } from "react-redux";
import ShoppingItem from "../Components/Shopping/ShoppingItem";

function ShoppingPage() {

    const {products} = useSelector(state => state.prods);

    return (
        <>
            <section className="w-full h-16 fixed top-0 left-0 pr-6 pl-10 font-bold text-xl rounded-b-md shadow-xl bg-pink-600 flex justify-between items-center text-white z-30">

            </section> 
            <section className="pt-24 px-2 w-full h-screen space-y-2" >
                 {products.map(prod => <ShoppingItem info={{id: prod._id, name: prod.name, image: prod.image}}/>)}

            </section> 
        </>
    )
}

export default ShoppingPage;
