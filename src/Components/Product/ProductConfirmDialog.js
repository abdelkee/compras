import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CancelIcon } from '../../icons';
import { postOrder } from '../../Redux/Reducers/cartReducer';
import { removeBgBlur } from '../../Redux/Reducers/generalReducer';
import { confirmDialogVisibility, deleteProduct, setButtonVisibility } from '../../Redux/Reducers/productsReducer';


function ProductConfirmDialog() {
    const {isOrder, productInfo} = useSelector(state => state.prods);
    const [price, setPrice] = useState(productInfo.price);
    const dispatch = useDispatch();


    function handleSubmit() {

      const body = {
          productId: productInfo.productId,
          productName: productInfo.name,
          productPrice: price,
          productQuantity: productInfo.quantity,
          purchaseDate: new Date().toUTCString(),
          user: productInfo.user
        }

      if(isOrder) dispatch(postOrder(body));
      if(!isOrder) dispatch(deleteProduct(productInfo.productId));
      dispatch(confirmDialogVisibility());
      dispatch(removeBgBlur());
      dispatch(setButtonVisibility());
      document.body.style.overflow='auto';
    }

    return (
      <div className="z-50 w-4/5 h-52 py-4 bg-white flex flex-col justify-between items-center fixed top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 shadow-lg rounded-md">
        <button 
          className="flex justify-center items-center rounded-full bg-pink-500 text-white w-12 h-12 absolute -top-6 left-1/2 transform -translate-x-1/2"
          onClick={() => {
              dispatch(confirmDialogVisibility());
              dispatch(removeBgBlur());
              dispatch(setButtonVisibility());
              document.body.style.overflow='auto';
          }}
            ><CancelIcon/></button>
        <span className="absolute h-full w-2 left-0 top-0 bg-pink-500 rounded-tl-md rounded-bl-md"></span>
        
        {isOrder 
        ? <span className="font-bold text-xl mt-4 text-indigo-900">Confirm Price</span>
        : <span className="font-bold text-xl mt-14 px-6 text-center text-red-900">Want to delete {productInfo.name} ?</span>}
        
        {isOrder && <input 
          onChange={(e) => setPrice(e.target.value)}
          className="w-2/3 h-10 bg-pink-50 px-4 rounded-md border border-pink-300 focus:outline-none focus:border-2 focus:border-pink-500" 
          type="number"
          placeholder="Custom price"
            />}
        {isOrder ? <button
          onClick={handleSubmit}
          className="bg-pink-500 px-10 py-2 rounded-md text-white font-semibold"
          >Go with $ {price}</button>

        : <button
          className="bg-red-500 px-8 py-2 rounded-md text-white font-semibold"
          onClick={handleSubmit}
        >Delete</button>}
      </div>  
    
    )
}

export default ProductConfirmDialog;
