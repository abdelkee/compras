import { AddIcon } from '../../icons';
import { setForm, setIsNew } from '../../Redux/Reducers/productsReducer';
import { setBlur } from '../../Redux/Reducers/generalReducer';
import { useDispatch } from 'react-redux';

function NewProductButton() {

    const dispatch = useDispatch();

    return (
        
        <button 
            className="text-white"
            onClick={()=> {
                dispatch(setIsNew(true));
                dispatch(setForm(true));
                dispatch(setBlur(true));
                document.body.style.overflow='hidden';
            }}
        ><AddIcon/></button>
        
    )
}

export default NewProductButton;
