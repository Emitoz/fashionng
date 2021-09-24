import { useContext, useEffect } from "react"
import { CartWrapper } from "./components/cartWrapper"
import { Footer } from "./components/footer"
import { Navbar } from "./components/navbar"
import { CartContext } from "./context/cart"
import { CommonContext, CommonProvider } from "./context/common"

export const Main = ({ Content }) => {

  const { setCartOpen } = useContext(CartContext);
  // const { setSearchMode } = useContext(CommonContext);

  useEffect(() => {
    setCartOpen(false);
    // setSearchMode(false);
  }, []);

  return (
    <CommonProvider>
      <Navbar />
      <Content />
      <Footer />
      <CartWrapper />
    </CommonProvider>
  )
}