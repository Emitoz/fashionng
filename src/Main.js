import { useContext, useEffect } from "react"
import CartWrapper from "./components/cartWrapper"
import { Footer } from "./components/footer"
import Navbar from "./components/navbar"
import { CartContext } from "./context/cart"
import { CommonProvider } from "./context/common"

export const Main = ({ Content }) => {

  return (
    <CommonProvider>
      <Navbar />
      <Content />
      <Footer />
      <CartWrapper />
    </CommonProvider>
  )
}