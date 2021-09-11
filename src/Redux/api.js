import axios from 'axios';

//const api = "https://akys-grocery.herokuapp.com/";
const api = "http://localhost:5000/";


export const productsApi = {
    getProducts: () => 
                 axios.get(api+'products/').then(res => res.data),
    createProduct: (body) => 
                axios.post(api+'products/', body).then(res => res.data),
    updateProduct: (id, body) => 
                axios.put(api+'products/'+id, body).then(res => res.data),
    deleteProduct: (id) => 
                axios.delete(api+'products/'+id).then(res => res.data)
                
};

export const ordersApi = {
    getOrders: () => 
                axios.get(api+'orders').then(res => res.data),
    
    makeOrder: (body) => 
                axios.post(api+'orders', body).then(res => res.data),

    deleteOrder: (id) => 
                axios.delete(api+'orders/'+id).then(res => res.data),
};

export const usersApi = {
    login: (userData) => 
        axios.post(api+'users/signin', userData).then(res => res.data)

}