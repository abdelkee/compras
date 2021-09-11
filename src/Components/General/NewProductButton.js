import { NewProdIcon } from '../../icons';
import { setFormVisibility, setButtonVisibility, setIsNewToTrue } from '../../Redux/Reducers/productsReducer';
import { makeBgBlur } from '../../Redux/Reducers/generalReducer';
import { useDispatch, useSelector } from 'react-redux';

function NewProductButton() {

    const dispatch = useDispatch();
    const {isButtonVisible} = useSelector(state => state.prods);

    return (
        
        <button 
            className="bg-white p-3 rounded-full text-green-700"
            disabled={!isButtonVisible && true}
            onClick={()=> {
                dispatch(setIsNewToTrue());
                dispatch(setFormVisibility());
                dispatch(makeBgBlur());
                dispatch(setButtonVisibility());
                document.body.style.overflow='hidden';
            }}
        ><NewProdIcon/></button>
        
    )
}

export default NewProductButton;
