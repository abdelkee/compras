import { CancelIcon } from '../../icons';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBlur } from '../../Redux/Reducers/generalReducer';
import { setForm, postProduct, editProduct } from '../../Redux/Reducers/productsReducer';
import Resizer from 'react-image-file-resizer';
import { motion } from 'framer-motion';

function ProductForm() {
    
    const {isNew} = useSelector(state => state.prods);
    const {idToUpdate, name, price, image} = useSelector(state => state.prods);
    const [file, setFile] = useState(isNew ? '' : image);
    const [productName, setProductName] = useState(isNew ? '' : name);
    const [productPrice, setProductPrice] = useState(isNew ? 0 : price);


    const dispatch = useDispatch();

    const imageHandler = (e) => {
        let fileInput = false;
        if(e.target.files[0]) {
            fileInput = true;
        }
        if(fileInput) {
            try {
                Resizer.imageFileResizer(e.target.files[0],100,100,'JPEG',100,0,(uri) => {
                    setFile(uri);
                    },'base64',300,300
                );
            } catch (error) {
                alert(error);
            }
        }
    };  

    const capitalize = (string) => {
       const name = string.charAt(0).toUpperCase()+string.slice(1);
       setProductName(name);
    }

    const data = {
        id: idToUpdate,
        name: productName,
        price: productPrice,
        image: file,
    }

    const handleSubmit = () => {
        
        if(!productName) return alert('enter product name');
        if(!productPrice) return alert('enter product price');
        if(isNew) dispatch(postProduct(data));
        if(!isNew) dispatch(editProduct(data));    
        dispatch(setBlur(false))
        dispatch(setForm(false));
        document.body.style.overflow='auto';
    }

    return (
        
            <motion.div 
            
            className="pt-4 space-y-4 w-4/6 fixed left-1/2 top-full transform -translate-x-1/2 -translate-y-1/2 bg-green-700 px-1 pb-4 rounded-xl shadow-2xl flex flex-col justify-between items-center z-50"
            animate={{top: "50%"}}
                
                >
                    <button 
                        onClick={() => {
                            dispatch(setForm(false));
                            dispatch(setBlur(false));
                            document.body.style.overflow='auto';
                        }}
                        className="flex justify-center items-center rounded-full bg-pink-500 text-white w-12 h-12 absolute -top-6 left-1/2 transform -translate-x-1/2"
                        ><CancelIcon/>
                    </button>

                    <section className="relative w-44 h-64 m-auto shadow-md rounded-lg flex flex-col justify-between items-center">
                        <div
                            className="w-full h-36 rounded-lg bg-gray-200">
                            <label
                                className="h-full w-full flex flex-col justify-center items-center">          
                                    <input 
                                        onChange={(e) => imageHandler(e)}
                                        type='file' 
                                        accept="image/png, image/jpeg, image/jpg"
                                        className="hidden" />
                                    <img 
                                        className="object-cover w-full h-36 rounded-lg" 
                                        src={!file ? 'https://loadslammer.com/wp-content/uploads/2021/01/photo-placeholder-icon-17.jpg' : file} 
                                        alt={productName} />
                            </label>
                        </div>
                        <div className="w-full py-2 flex flex-col space-y-2 justify-around items-center">
                            <input 
                                onChange={(e)=> {                                   
                                    capitalize(e.target.value);
                                }}
                                className="w-full h-11 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-green-300 rounded-md px-5"
                                type="text"    
                                placeholder="Product name"
                                value={productName}
                            />

                            <input 
                                onChange={(e)=> setProductPrice(e.target.value)}
                                className="w-full h-11 bg-white border-0 focus:outline-none focus:ring-2 focus:ring-green-300 rounded-md px-5"
                                type="number"
                                placeholder="Product price"
                                value={productPrice}/>
                        </div>
            
                    </section>
                    <button
                    onClick={handleSubmit}
                    className="py-2 px-20 bg-green-500 text-white rounded-md font-semibold focus:bg-gray-300 focus:text-white"
                    >
                        {isNew ? 'Create' : 'Update'}
                </button>
            </motion.div>
           
    )  
}


export default ProductForm;
