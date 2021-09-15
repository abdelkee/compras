import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductsPage from './Screens/ProductsPage';
import ShoppingPage from './Screens/ShoppingPage';
import SettingsPage from './Screens/SettingsPage';
import CartPage from './Screens/CartPage';
import SignIn from './Screens/SignIn';
import SearchPage from './Screens/SearchPage';

function App() {
 
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
