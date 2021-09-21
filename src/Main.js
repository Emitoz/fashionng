import { useContext, useEffect } from "react"
import { CartWrapper } from "./components/cartWrapper"
import { Footer } from "./components/footer"
import { Navbar } from "./components/navbar"
import { CartContext } from "./context/cart"

export const Main = ({ Content }) => {

  const { setCartOpen } = useContext(CartContext);

  useEffect(() => {
    setCartOpen(false);
  }, []);

  return (
    <>
      <Navbar />
      <Content />
      <Footer />
      <CartWrapper />
    </>
  )
}