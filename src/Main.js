import { CartWrapper } from "./components/cartWrapper"
import { Footer } from "./components/footer"
import { Navbar } from "./components/navbar"
import { CartProvider } from "./context/cart"

export const Main = ({ Content }) => {
    return (
      <CartProvider>
        <Navbar />
        <Content />
        <Footer />
        <CartWrapper />
      </CartProvider>
    )
}