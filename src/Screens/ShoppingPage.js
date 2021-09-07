import { useSelector } from 'react-redux';
import ShoppingItem from '../Components/Shopping/ShoppingItem';
import { v4 } from "uuid";



function ShoppingPage() {

    const {products} = useSelector(state => state.prods);

    return (
        <ul className="bg-pink-200 w-full h-screen py-4 space-x-2 space-y-2">
            <ListSummary/>
            {products.map(prod => {
                return (
                    <>
                        {localStorage.getItem(prod._id) == null ? localStorage.setItem(prod._id, false) : ''}
                        <ShoppingItem key={prod._id} info={{id: prod._id, name: prod.name, image: prod.image}}/>
                    </>
                )
            } )}
                                
        </ul>
    )
}

function ListSummary() {
    
    return(
        <li className="w-11/12 h-14 px-6 mb-6 m-auto font-semibold text-lg rounded-md shadow-xl bg-pink-700 flex justify-center items-center text-white">
            <span className="flex justify-center items-center bg-white text-pink-700 w-8 h-8 rounded-md mr-4">
                {localStorage.getItem('itemsCount')}
            </span>
            <span>No item in the shopping list'</span>
        </li>
    )
}


export default ShoppingPage;