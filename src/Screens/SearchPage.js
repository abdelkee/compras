import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchedItem from "../Components/Search/SearchedItem";
import { motion } from 'framer-motion';
import { CancelIcon } from "../icons";
import { setBlur, setSearch } from "../Redux/Reducers/generalReducer";



function SearchPage() {

    const [word, setWord] = useState('');
    const {products} = useSelector(state => state.prods);
    const dispatch = useDispatch();

    return (
        <motion.div 
            initial={{top: -64}}
            animate={{top: 0}}
            className={`absolute left-1/2 transform -translate-x-1/2 w-full px-4 py-2 h-16 z-50`}>
                <div className="flex justify-between items-center bg-white w-full h-full rounded-md border border-gray-300 px-4 text-green-900 font-medium">
                    <input 
                        onChange={(e) => setWord(e.target.value)}                    
                        type="text" 
                        autoFocus
                        className="w-full h-full focus:outline-none "
                        placeholder="Search..."/>
                    <button
                        onClick={() => {
                            dispatch(setSearch(false));
                            dispatch(setBlur(false));

                        }}
                        ><CancelIcon/></button>    
                </div>

                <ul className="mt-8 w-full bg-white shadow-xl">
                    {
                        products && products.filter(prod => {
                            if(word.length){
                                const lowerWord = word.toLowerCase();
                                return prod.name.toLowerCase().substring(0, lowerWord.length) === lowerWord.substring(0);
                            }
                            return ''
                        }).map(filteredProd => <SearchedItem key={filteredProd._id} info={{id: filteredProd._id, name: filteredProd.name, price: filteredProd.price}}/>)
                    }
                </ul>

        </motion.div>
    )
}

export default SearchPage;
