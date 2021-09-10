import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductsPage from './Screens/ProductsPage';
import ShoppingPage from './Screens/ShoppingPage';
import SettingsPage from './Screens/SettingsPage';
import CartPage from './Screens/CartPage';
import IconButton from './Components/General/IconButton';
import { CartIcon, HomeIcon, ListIcon, SettingsIcon } from './icons';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';

function App() {

  const {isValid} = useSelector(state => state.general);
  

  return (
    <>
      {!isValid ? <div className="w-full h-screen relative sm:hidden">
        <SignIn/>
      </div>
      : <BrowserRouter>
        <div className="w-full h-screen relative sm:hidden">

          <ul className="bg-blue-100 border-t border-blue-200 flex justify-evenly items-center z-30 w-full h-16 text-white fixed left-0 bottom-0" >
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
      </BrowserRouter>}
    </>
  );
}

export default App;
