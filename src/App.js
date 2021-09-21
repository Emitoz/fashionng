import { HomePage } from "./pages/homepage";
import "./assets/fonts/feather.css";
import { Route, Switch } from "react-router-dom";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";
import { Checkout } from "./pages/checkout";
import { CategoryProducts } from "./pages/category-products";
import { Main } from "./Main";
import { AuthProvider } from "./context/auth";
import { CartProvider } from "./context/cart";


function App() {
  return (
    <Switch>
      <AuthProvider>
        <CartProvider>
          <Route exact path="/"><Main Content={HomePage}/></Route>
          <Route path="/checkout"><Main Content={Checkout}/></Route>
          <Route path="/categories/:category"><Main Content={CategoryProducts}/></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/register"><Register /></Route>
        </CartProvider>
      </AuthProvider>
    </Switch>
  );
}

export default App;
