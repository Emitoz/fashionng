import { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { onAuthStateChanged } from 'firebase/auth';
import { auth, createUserProfile } from "./firebase/firebase.utils";
import { onSnapshot } from "@firebase/firestore";

import { Main } from "./Main";
import { HomePage } from "./pages/homepage";
import Shop from './pages/shop';
import Checkout from "./pages/checkout";
import { CategoryProducts } from "./pages/category-products";
import ProductDetails from "./pages/product-details";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";

import { CartProvider } from "./context/cart";
import { setCurrentUser } from "./redux/user/user.actions";

import "./assets/fonts/feather.css";
import { selectCurrentUser } from "./redux/user/user.selector";

const App = (props) => {

  const { setCurrentUser } = props;

  useEffect(() => {
    onAuthStateChanged(auth, async (userAuth) => {
        if(userAuth) {
            const userRef = await createUserProfile(userAuth);
            onSnapshot(userRef, (doc) => {
                setCurrentUser({ id: doc.id, ...doc.data() });
            });
        }
        setCurrentUser(userAuth);
    });
    return () => {};
  }, []);

  return (
    <Switch>
      <CartProvider>
        <Route exact path="/"><Main Content={HomePage}/></Route>
        <Route path="/checkout"><Main Content={Checkout}/></Route>
        <Route path="/shop"><Main Content={Shop}/></Route>
        <Route path="/categories/:category"><Main Content={CategoryProducts}/></Route>
        <Route path="/products/:product"><Main Content={ProductDetails}/></Route>
        
        <Route exact path="/login" render={() => props.currentUser ? (<Redirect to="/" />) : <Login />}/>
        <Route exact path="/register" render={() => props.currentUser ? (<Redirect to="/" />) : <Register />}/>
      </CartProvider>
    </Switch>
  );
}

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
