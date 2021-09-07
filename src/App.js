import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductsPage from './Screens/ProductsPage';
import ShoppingPage from './Screens/ShoppingPage';
import SettingsPage from './Screens/SettingsPage';
import CartPage from './Screens/CartPage';
import Toast from './Components/General/Toast';
import IconButton from './Components/General/IconButton';
import { CartIcon, HomeIcon, ListIcon, SettingsIcon } from './icons';
import NewProductButton from './Components/General/NewProductButton';


function App() {

  const {loading} = useSelector(state => state.prods);
  const {count, total} = useSelector(state => state.cart);
  const {itemsCount} = useSelector(state => state.shopping);


  return (
    <BrowserRouter>
      <div className="w-full h-screen relative sm:hidden">
          <ul className="w-full shadow-lg font-bold bg-green-500 flex justify-around items-center h-20 text-white text-lg fixed top-0 left-0 z-30">
            <li>
              <span>Orders : </span> 
              <span className="bg-white text-indigo-500 rounded-md px-2">{count}</span>
            </li>
            <li>
              <span>Total : </span> 
              <span className="bg-white text-indigo-500 rounded-md px-2">{total}</span>
            </li>
            <li>
              <span>To buy List : </span> 
              <span className="bg-white text-indigo-500 rounded-md px-2">{itemsCount}</span>
            </li>
          </ul>

        {loading && <Toast/>}

        <ul className="flex justify-evenly items-center z-30 w-full h-16 text-white fixed left-1/2 bottom-4 transform -translate-x-1/2" >
          
          <IconButton path={"/"} icon={<HomeIcon/>} />
          <IconButton path={"/cart"} icon={<CartIcon/>} />
          <IconButton path={"/shopping"} icon={<ListIcon/>} />
          <IconButton path={"/settings"} icon={<SettingsIcon/>} />
        </ul>

        <Switch>
          <Route exact path="/">
            <ProductsPage/>
          </Route>

          <Route exact path="/cart">
            <CartPage/>
          </Route>

          <Route exact path="/shopping">
            <ShoppingPage/>
          </Route>

          <Route exact path="/settings">
            <SettingsPage/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
