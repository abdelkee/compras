import { AddQuantity } from "../Product/ProductItem";





function SearchedItem({info}) {



    return (

            <li 
                className="w-full h-14 flex justify-start text-indigo-900 font-semibold items-center px-2 border-b-2">
                    <img className="w-10 h-10 rounded-2xl object-cover" src={info.image} alt={info.name} />
                    <span className="flex-1 mx-4">{info.name}</span>
                    <div className="w-32"><AddQuantity info={info}/></div>
            </li>
      
    )
}

export default SearchedItem;
