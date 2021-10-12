import CartWrapper from "./components/cartWrapper"
import { Footer } from "./components/footer"
import Navbar from "./components/navbar"
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