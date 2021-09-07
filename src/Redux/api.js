import axios from 'axios';

const api_products = "http://localhost:5000/products/";
const api_orders = "http://localhost:5000/orders/";


export const productsApi = {
    getProducts: () => 
                axios.get(api_products).then(res => res.data),
    createProduct: (body) => 
                axios.post(api_products, body).then(res => res.data),
    updateProduct: (id, body) => 
                axios.put(api_products+id, body).then(res => res.data),
    deleteProduct: (id) => 
                axios.delete(api_products+id).then(res => res.data)
                
};

export const ordersApi = {
    getOrders: () => 
                axios.get(api_orders).then(res => res.data),
    
    makeOrder: (body) => 
                axios.post(api_orders, body).then(res => res.data),

    deleteOrder: (id) => 
                axios.delete(api_orders+id).then(res => res.data),
};