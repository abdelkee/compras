import { AddQuantity } from "../Product/ProductItem";





function SearchedItem({info}) {



    return (

            <li 
                className="w-full h-14 flex justify-between text-indigo-900 font-semibold items-center px-4 border-b-2">
                    <span>{info.name}</span>
                    <div className="w-32"><AddQuantity info={info}/></div>
            </li>
      
    )
}

export default SearchedItem;
