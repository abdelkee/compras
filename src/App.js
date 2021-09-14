import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductsPage from './Screens/ProductsPage';
import ShoppingPage from './Screens/ShoppingPage';
import SettingsPage from './Screens/SettingsPage';
import CartPage from './Screens/CartPage';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import BottomBar from './Components/General/BottomBar';
import { useEffect } from 'react';
import { fetchProducts } from './Redux/Reducers/productsReducer';
import { useDispatch } from 'react-redux';
import SearchPage from './Screens/SearchPage';

function App() {

  const token = localStorage.getItem('token');
 
  return (
    <>
      <BrowserRouter>
          <div className="w-full h-screen relative sm:hidden">
            
            <Switch>
              <Route exact path="/">
                <ProductsPage/>
              </Route>

              <Route exact path="/cart">
                <CartPage/>
              </Route>

              <Route exact path="/search">
                <SearchPage/>
              </Route>

              <Route exact path="/shopping">
                <ShoppingPage/>
              </Route>

              <Route exact path="/settings">
                <SettingsPage/>
              </Route>

              <Route exact path="/signin">
                <SignIn/>
              </Route>
            </Switch>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
