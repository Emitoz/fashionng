import { useContext } from "react";
import { Redirect } from "react-router";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "./pages/homepage";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";
import { Checkout } from "./pages/checkout";
import { CategoryProducts } from "./pages/category-products";
import { Main } from "./Main";
import { ProductDetails } from "./pages/product-details";

import { AuthContext } from "./context/auth";
import { CartProvider } from "./context/cart";

import "./assets/fonts/feather.css";

const App = () => {

  const { currentUser } = useContext(AuthContext)

  return (
    <Switch>
      <CartProvider>
        <Route exact path="/"><Main Content={HomePage}/></Route>
        <Route path="/checkout"><Main Content={Checkout}/></Route>
        <Route path="/categories/:category"><Main Content={CategoryProducts}/></Route>
        <Route path="/products/:product"><Main Content={ProductDetails}/></Route>     
        <Route exact path="/login" render={() => currentUser ? <Redirect to="/" /> : <Login />}></Route>
        <Route exact path="/register" render={() => currentUser ? <Redirect to="/" /> : <Register />}></Route>
      </CartProvider>
    </Switch>
  );
}

export default App;
